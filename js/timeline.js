/* =============================================================================
   THE FUTURIST — branching pathway timeline (swimlane edition)
   Each direction the technology could take is its own labelled lane. Nodes are
   placed by year along a shared axis; switching the global scenario tweens every
   node's x-position so the reader watches the future slide earlier or later.
   ============================================================================= */
(function () {
  "use strict";

  var KIND = {
    breakthrough: { color: "#d99826", label: "Breakthrough" },
    invention:    { color: "#4f6bf0", label: "Invention" },
    scaleup:      { color: "#15a866", label: "Scale-up" },
    deployment:   { color: "#db4f86", label: "Deployment" },
    policy:       { color: "#7a52e8", label: "Policy" }
  };

  // viewBox geometry (scales to container width)
  var W = 1320;
  var GUTTER = 196, X_LEFT = GUTTER + 16, X_RIGHT = W - 28;
  var YEAR_MIN = 2015, YEAR_MAX = 2060, TICK_STEP = 5;
  var TOP_PAD = 26, LANE_H = 122, AXIS_H = 46, TRACK_OFF = 80;
  var LABEL_ROW_H = 19, MIN_GAP = 50;

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function xOfYear(y) {
    var c = clamp(y, YEAR_MIN, YEAR_MAX);
    return X_LEFT + (c - YEAR_MIN) / (YEAR_MAX - YEAR_MIN) * (X_RIGHT - X_LEFT);
  }
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function svgEl(tag, attrs) {
    var e = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function trim(s, n) { return s.length > n ? s.slice(0, n - 1) + "…" : s; }
  function estWidth(s) { return Math.min(s.length, 26) * 5.2; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }
  function wrap2(s, perLine) {
    var words = s.split(" "), lines = ["", ""], i = 0;
    for (var w = 0; w < words.length; w++) {
      var cand = (lines[i] ? lines[i] + " " : "") + words[w];
      if (cand.length > perLine && lines[i]) { i++; if (i > 1) { lines[1] += "…"; break; } lines[i] = words[w]; }
      else lines[i] = cand;
    }
    return lines.filter(function (l) { return l; });
  }

  function mount(container, tech, scenario, accent) {
    container.innerHTML = "";

    var wrap = document.createElement("div");
    wrap.className = "timeline-wrap";

    // toolbar / kind legend
    var bar = document.createElement("div");
    bar.className = "timeline-toolbar";
    var legend = document.createElement("div");
    legend.className = "timeline-legend";
    Object.keys(KIND).forEach(function (k) {
      var s = document.createElement("span");
      s.innerHTML = '<i class="tl-kind-dot" style="background:' + KIND[k].color + '"></i>' + KIND[k].label;
      legend.appendChild(s);
    });
    var hint = document.createElement("span");
    hint.innerHTML = '<i class="tl-kind-dot" style="background:transparent;border-color:' + accent + ';box-shadow:0 0 0 2px ' + accent + ' inset"></i>already real';
    legend.appendChild(hint);
    bar.appendChild(legend);
    wrap.appendChild(bar);

    // ---- lane + node model ---------------------------------------------------
    var lanes = [];
    lanes.push({ kind: "trunk", name: "Main line", sub: "the consensus path", color: accent, nodes: tech.timeline.milestones.map(mapNode) });
    (tech.timeline.branches || []).forEach(function (b, i) {
      lanes.push({
        kind: "branch", name: b.name, sub: Math.round(b.probability * 100) + "% this direction",
        color: branchColor(i), from: b.fromMilestone, nodes: b.milestones.map(mapNode)
      });
    });
    function mapNode(m) {
      return { id: m.id, title: m.title, kind: m.kind, years: m.years, done: !!m.done, detail: m.detail,
               color: (KIND[m.kind] || {}).color || accent };
    }

    var laneCount = lanes.length;
    var H = TOP_PAD + laneCount * LANE_H + AXIS_H;
    var axisY = TOP_PAD + laneCount * LANE_H + 6;
    lanes.forEach(function (lane, i) { lane.trackY = TOP_PAD + i * LANE_H + TRACK_OFF; });

    var allNodes = [];
    lanes.forEach(function (lane) { lane.nodes.forEach(function (n) { n.lane = lane; allNodes.push(n); }); });
    var nodeById = {}; allNodes.forEach(function (n) { nodeById[n.id] = n; });

    var svg = svgEl("svg", { id: "timeline-svg", viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet" });
    wrap.appendChild(svg);
    var pop = document.createElement("div");
    pop.className = "tl-pop";
    wrap.appendChild(pop);
    container.appendChild(wrap);

    // current / target x. Nodes are placed by year, then a per-lane spacing pass
    // pushes clustered milestones apart (pre-axis anchors, dense decades) so no
    // two nodes collide and labels can tile cleanly into rows.
    function computeTargets(scn) {
      var t = {};
      lanes.forEach(function (lane) {
        var arr = lane.nodes.map(function (n) { return { id: n.id, x: xOfYear(n.years[scn]) }; })
          .sort(function (a, b) { return a.x - b.x; });
        for (var i = 1; i < arr.length; i++) if (arr[i].x - arr[i - 1].x < MIN_GAP) arr[i].x = arr[i - 1].x + MIN_GAP;
        var overflow = arr.length ? arr[arr.length - 1].x - X_RIGHT : 0;
        if (overflow > 0) for (var j = 0; j < arr.length; j++) arr[j].x -= overflow;
        arr.forEach(function (a) { t[a.id] = Math.max(X_LEFT, a.x); });
      });
      return t;
    }
    var curX = {}, tgtX = computeTargets(scenario);
    allNodes.forEach(function (n) { curX[n.id] = tgtX[n.id]; });

    // ---- static: lane bands + gutter labels + axis ---------------------------
    var bandLayer = svgEl("g", {});
    lanes.forEach(function (lane, i) {
      var top = TOP_PAD + i * LANE_H + 4;
      if (lane.kind === "branch") {
        bandLayer.appendChild(svgEl("rect", { x: GUTTER, y: top, width: X_RIGHT - GUTTER + 14, height: LANE_H - 8,
          rx: 10, fill: lane.color, "fill-opacity": 0.045, stroke: lane.color, "stroke-opacity": 0.16 }));
      }
      // gutter divider
      // lane label
      var lx = 14, ly = lane.trackY;
      if (lane.kind === "trunk") {
        var t1 = svgEl("text", { x: lx, y: ly - 2, class: "tl-lane-name", fill: "var(--ink-0)" }); t1.textContent = "Main line";
        var t2 = svgEl("text", { x: lx, y: ly + 16, class: "tl-lane-sub", fill: "var(--ink-3)" }); t2.textContent = lane.sub;
        bandLayer.appendChild(t1); bandLayer.appendChild(t2);
      } else {
        var nameLines = wrap2(lane.name, 24);
        var startY = ly - (nameLines.length > 1 ? 8 : 0);
        nameLines.forEach(function (ln, k) {
          var t = svgEl("text", { x: lx, y: startY + k * 15, class: "tl-lane-name", fill: lane.color });
          t.textContent = ln; bandLayer.appendChild(t);
        });
        var sub = svgEl("text", { x: lx, y: startY + nameLines.length * 15 + 2, class: "tl-lane-sub", fill: "var(--ink-3)" });
        sub.textContent = lane.sub; bandLayer.appendChild(sub);
      }
    });
    // vertical gutter separator
    bandLayer.appendChild(svgEl("line", { x1: GUTTER, y1: TOP_PAD, x2: GUTTER, y2: axisY, stroke: "var(--line-soft)", "stroke-width": 1 }));
    svg.appendChild(bandLayer);

    var axis = svgEl("g", {});
    axis.appendChild(svgEl("line", { x1: X_LEFT - 6, y1: axisY, x2: X_RIGHT + 6, y2: axisY, class: "tl-axis-line" }));
    for (var y = YEAR_MIN; y <= YEAR_MAX; y += TICK_STEP) {
      var xx = xOfYear(y);
      axis.appendChild(svgEl("line", { x1: xx, y1: axisY, x2: xx, y2: axisY + 5, class: "tl-axis-tick" }));
      var tt = svgEl("text", { x: xx, y: axisY + 19, "text-anchor": "middle", class: "tl-axis-text" });
      tt.textContent = (y === YEAR_MAX ? "2060+" : y);
      axis.appendChild(tt);
    }
    var tx = xOfYear(2026);
    axis.appendChild(svgEl("line", { x1: tx, y1: TOP_PAD, x2: tx, y2: axisY, stroke: "rgba(143,179,255,.22)", "stroke-width": 1, "stroke-dasharray": "2 5" }));
    var todayT = svgEl("text", { x: tx, y: TOP_PAD - 6, "text-anchor": "middle", class: "tl-axis-text", fill: "var(--accent)" });
    todayT.textContent = "today"; axis.appendChild(todayT);
    svg.appendChild(axis);

    // dynamic layers
    var linkLayer = svgEl("g", {});
    var nodeLayer = svgEl("g", {});
    svg.appendChild(linkLayer);
    svg.appendChild(nodeLayer);

    // ---- node elements (built once; only x changes) --------------------------
    var nodeEls = {};
    allNodes.forEach(function (n) {
      var trackY = n.lane.trackY;
      var g = svgEl("g", { class: "tl-node", transform: "translate(" + curX[n.id] + "," + trackY + ")" });
      g.appendChild(svgEl("circle", { class: "tl-node-hit", r: 10, fill: "transparent" }));
      g.appendChild(svgEl("circle", { r: 13, fill: n.color, opacity: .12 }));
      g.appendChild(svgEl("circle", { r: 6, fill: n.color, stroke: "#ffffff", "stroke-width": 2 }));
      if (n.done) g.appendChild(svgEl("circle", { class: "tl-done-ring", r: 11, stroke: accent }));
      var lbl = svgEl("text", { class: "tl-node-label", x: 0, y: -18, "text-anchor": "middle" });
      lbl.textContent = trim(n.title, 26);
      var yr = svgEl("text", { class: "tl-node-year", x: 0, y: 22, "text-anchor": "middle" });
      yr.textContent = n.years[scenario];
      g.appendChild(lbl); g.appendChild(yr);
      g._lbl = lbl; g._yr = yr;
      g.addEventListener("mouseenter", function () { showPop(n); });
      g.addEventListener("mouseleave", function () { hidePop(); });
      g.addEventListener("click", function (e) { e.stopPropagation(); pinPop(n); });
      nodeLayer.appendChild(g);
      nodeEls[n.id] = g;
    });

    // ---- label de-collision (per lane, into stacked rows) --------------------
    function layoutLabels() {
      lanes.forEach(function (lane) {
        var sorted = lane.nodes.slice().sort(function (a, b) { return curX[a.id] - curX[b.id]; });
        var rowRight = [];
        sorted.forEach(function (n) {
          var w = estWidth(trim(n.title, 26)), x = curX[n.id], left = x - w / 2, r = 0;
          while (true) {
            if (rowRight[r] == null || left > rowRight[r] + 8) { rowRight[r] = x + w / 2; break; }
            r++;
            if (r > 3) { var best = 0; for (var k = 1; k <= 3; k++) if ((rowRight[k] || 0) < (rowRight[best] || 0)) best = k; rowRight[best] = x + w / 2; r = best; break; }
          }
          nodeEls[n.id]._lbl.setAttribute("y", -18 - r * LABEL_ROW_H);
        });
      });
    }
    layoutLabels();

    function redrawLinks() {
      linkLayer.innerHTML = "";
      lanes.forEach(function (lane) {
        if (!lane.nodes.length) return;
        var sorted = lane.nodes.slice().sort(function (a, b) { return curX[a.id] - curX[b.id]; });
        var d = "M" + curX[sorted[0].id] + "," + lane.trackY;
        for (var i = 1; i < sorted.length; i++) d += " L" + curX[sorted[i].id] + "," + lane.trackY;
        linkLayer.appendChild(svgEl("path", { class: lane.kind === "trunk" ? "tl-trunk" : "tl-branch-path", d: d, stroke: lane.kind === "trunk" ? "var(--line)" : lane.color }));
        // fork connector from trunk milestone down to this branch's first node
        if (lane.kind === "branch" && lane.from != null && nodeById[lane.from]) {
          var fromX = curX[lane.from], fromY = nodeById[lane.from].lane.trackY;
          var first = sorted[0], fx = curX[first.id], fy = lane.trackY;
          var midY = (fromY + fy) / 2;
          linkLayer.appendChild(svgEl("path", { class: "tl-fork", stroke: lane.color,
            d: "M" + fromX + "," + fromY + " C" + fromX + "," + midY + " " + fx + "," + midY + " " + fx + "," + fy }));
        }
      });
    }
    function redrawNodes() {
      allNodes.forEach(function (n) { nodeEls[n.id].setAttribute("transform", "translate(" + curX[n.id] + "," + n.lane.trackY + ")"); });
    }
    redrawLinks(); redrawNodes();

    // ---- popover -------------------------------------------------------------
    var pinned = null;
    function popHTML(n) {
      var k = KIND[n.kind] || { color: accent, label: n.kind };
      return '<div class="pk" style="color:' + k.color + '">' + k.label + ' &middot; ' + esc(n.lane.name) + '</div>' +
             '<div class="pt">' + esc(n.title) + '</div>' +
             '<div class="py">believers ' + n.years.optimistic + ' &middot; consensus ' + n.years.consensus + ' &middot; skeptics ' + n.years.skeptical + (n.done ? ' &middot; already real' : '') + '</div>' +
             (n.detail ? '<div class="pd">' + esc(n.detail) + '</div>' : '');
    }
    function positionPop(n) {
      var el = nodeEls[n.id], r = el.getBoundingClientRect(), wr = wrap.getBoundingClientRect();
      var left = clamp(r.left - wr.left + r.width / 2 - 150, 8, wrap.clientWidth - 308);
      var top = r.top - wr.top + r.height + 10;
      if (top + 160 > wrap.clientHeight) top = r.top - wr.top - 170;
      pop.style.left = left + "px"; pop.style.top = Math.max(8, top) + "px";
    }
    function showPop(n) { if (pinned) return; pop.innerHTML = popHTML(n); positionPop(n); pop.classList.add("show"); }
    function hidePop() { if (pinned) return; pop.classList.remove("show"); }
    function pinPop(n) {
      if (pinned === n.id) { pinned = null; pop.classList.remove("show"); return; }
      pinned = n.id; pop.innerHTML = popHTML(n); positionPop(n); pop.classList.add("show");
    }
    svg.addEventListener("click", function () { pinned = null; pop.classList.remove("show"); });

    // ---- scenario tween ------------------------------------------------------
    var raf = null;
    function setScenario(next) {
      tgtX = computeTargets(next);
      allNodes.forEach(function (n) { nodeEls[n.id]._yr.textContent = n.years[next]; });
      var start = {}; allNodes.forEach(function (n) { start[n.id] = curX[n.id]; });
      var t0 = performance.now(), dur = 680;
      if (raf) cancelAnimationFrame(raf);
      function frame(now) {
        var k = clamp((now - t0) / dur, 0, 1), e = ease(k);
        allNodes.forEach(function (n) { curX[n.id] = start[n.id] + (tgtX[n.id] - start[n.id]) * e; });
        redrawLinks(); redrawNodes();
        if (k < 1) raf = requestAnimationFrame(frame); else layoutLabels();
      }
      raf = requestAnimationFrame(frame);
    }

    return { setScenario: setScenario, el: wrap };
  }

  function branchColor(i) {
    var palette = ["#15a866", "#e8862f", "#db4f86", "#7a52e8", "#4f6bf0"];
    return palette[i % palette.length];
  }

  window.Timeline = { mount: mount };
})();
