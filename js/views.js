/* =============================================================================
   THE FUTURIST — view renderers (overview map + technology detail)
   Pure render functions. State + wiring live in app.js, passed via `api`.
   ============================================================================= */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function pct(v) { return Math.round(v * 100) + "%"; }
  var SCEN_LABEL = { optimistic: "Believers", consensus: "Consensus", skeptical: "Skeptics" };
  var STATUS_LABEL = { speculative: "Speculative", lab: "In the lab", pilot: "Piloting", scaling: "Scaling" };
  var mapMode = "quad"; // "quad" (default) | "scatter" — desktop map presentation

  /* ========================== OVERVIEW ("THE MAP") ========================== */
  function renderOverview(stage, techs, api) {
    var scen = api.scenario;
    var avgProb = techs.reduce(function (s, t) { return s + t.probability.value; }, 0) / techs.length;
    var nearTerm = techs.filter(function (t) { return t.arrival[scen] <= 2040; }).length;
    var highConv = techs.filter(function (t) { return t.probability.value >= 0.6 && t.consequence >= 8; }).length;

    var html = '<div class="overview fade-up">' +
      '<div class="ov-head">' +
        '<div class="ov-eyebrow">The Map &middot; ' + techs.length + ' technologies &middot; horizon 2056</div>' +
        '<h1 class="ov-title">What the next thirty years are <em>actually</em> made of.</h1>' +
        '<p class="ov-lede">' + techs.length + ' technologies that could remake daily life by 2056, each plotted by how likely it is to arrive against how much it would change if it did. Start anywhere. Every one is taught from the kitchen table up, then traced backward from its future to the work happening today. The clock above re-times everything to whoever you trust: believers, the consensus, or the skeptics.</p>' +
      '</div>' +
      '<div class="ov-stats">' +
        statCard(techs.length, "technologies tracked") +
        statCard(pct(avgProb), "mean probability by 2056") +
        statCard(nearTerm, "arriving by 2040 (" + SCEN_LABEL[scen].toLowerCase() + " clock)") +
        statCard(highConv, "high-conviction & high-consequence") +
      '</div>' +
      '<div class="ov-plot-wrap' + (mapMode === "scatter" ? " showing-scatter" : "") + '">' +
        '<div class="ov-plot-head">' +
          '<div class="ov-plot-headings">' +
            '<h3>Probability × Consequence</h3>' +
            '<p>How likely each technology is to arrive by 2056, against how much it would reshape life.</p>' +
          '</div>' +
          '<div class="ov-map-toggle" role="tablist" aria-label="Map view">' +
            '<button class="ov-mt-btn" data-mode="quad">Quadrants</button>' +
            '<button class="ov-mt-btn" data-mode="scatter">Scatter</button>' +
          '</div>' +
        '</div>' +
        '<div class="ov-quad-view">' + quadrantHTML(techs, api) + '</div>' +
        '<div class="ov-scatter-view">' + scatterSVG(techs, api) +
          '<div class="ov-legend">' + legendHTML() + '</div>' +
        '</div>' +
      '</div>' +
      '<p class="ov-hint">Tap any technology to open it &middot; use the left rail to filter, sort, and rank &middot; the scenario switch up top bends every timeline.</p>' +
    '</div>';
    stage.innerHTML = html;

    // wire scatter dots + quadrant chips → open detail
    Array.prototype.forEach.call(stage.querySelectorAll(".scatter-dot, .ov-chip"), function (d) {
      d.addEventListener("click", function () { api.onSelect(d.getAttribute("data-id")); });
    });
    // wire the quadrant/scatter toggle
    Array.prototype.forEach.call(stage.querySelectorAll(".ov-mt-btn"), function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-mode") === mapMode);
      btn.addEventListener("click", function () {
        mapMode = btn.getAttribute("data-mode");
        renderOverview(stage, techs, api);
      });
    });
  }

  // Group the technologies into four probability×consequence quadrants (thresholds
  // mirror the app's own bands: probability >= 60%, consequence >= 8). Reads as a
  // story rather than a chart, and stacks cleanly on a phone.
  function quadrantHTML(techs, api) {
    var Q = {
      reshapers: { title: "Near-certain reshapers", sub: "high odds · high impact", cls: "q-reshapers", items: [] },
      shots:     { title: "High-stakes long shots", sub: "lower odds · high impact", cls: "q-shots", items: [] },
      contained: { title: "Likely, more contained", sub: "high odds · mid impact", cls: "q-contained", items: [] },
      tail:      { title: "The long tail",          sub: "lower odds · lower impact", cls: "q-tail", items: [] }
    };
    techs.forEach(function (t) {
      var hp = t.probability.value >= 0.6, hc = t.consequence >= 8;
      var k = hp && hc ? "reshapers" : (!hp && hc ? "shots" : (hp && !hc ? "contained" : "tail"));
      Q[k].items.push(t);
    });
    function card(key) {
      var q = Q[key];
      q.items.sort(function (a, b) {
        return (b.probability.value * b.consequence) - (a.probability.value * a.consequence);
      });
      var chips = q.items.map(function (t) {
        return '<button class="ov-chip" data-id="' + t.id + '">' +
          '<i class="dot" style="background:' + t.domainColor + '"></i>' +
          '<span class="ov-chip-name">' + esc(t.shortName) + (api.isStarred(t.id) ? " ★" : "") + '</span>' +
          '<span class="ov-chip-nums">' + Math.round(t.probability.value * 100) + '·' + t.consequence + '</span>' +
          '</button>';
      }).join("");
      return '<div class="ov-quad ' + q.cls + '">' +
        '<div class="ov-quad-head">' +
          '<span class="ov-quad-title">' + q.title + '</span>' +
          '<span class="ov-quad-sub">' + q.sub + '</span>' +
          '<span class="ov-quad-count">' + q.items.length + '</span>' +
        '</div>' +
        '<div class="ov-quad-chips">' + (chips || '<span class="ov-quad-empty">none in view</span>') + '</div>' +
      '</div>';
    }
    // DOM order = mobile priority (reshapers first); CSS grid-area re-positions
    // them into the spatial 2×2 on desktop.
    return '<div class="ov-quad-grid">' +
      card("reshapers") + card("shots") + card("contained") + card("tail") +
    '</div>';
  }

  function statCard(num, label) {
    return '<div class="stat-card"><div class="stat-num">' + num + '</div><div class="stat-label">' + label + '</div></div>';
  }
  function legendHTML() {
    var d = window.FUTURIST_DOMAINS;
    return Object.keys(d).map(function (k) {
      return '<span><i class="dot" style="background:' + d[k].color + '"></i>' + d[k].label + '</span>';
    }).join("");
  }

  function scatterSVG(techs, api) {
    var W = 1080, H = 584, PAD_L = 64, PAD_R = 48, PAD_T = 46, PAD_B = 58;
    var x = function (p) { return PAD_L + p * (W - PAD_L - PAD_R); };
    var y = function (c) { return H - PAD_B - ((c - 1) / 9) * (H - PAD_T - PAD_B); };

    var s = '<svg id="scatter" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet">';
    // grid
    for (var gx = 0; gx <= 1.0001; gx += 0.25) {
      s += '<line class="scatter-grid" x1="' + x(gx) + '" y1="' + PAD_T + '" x2="' + x(gx) + '" y2="' + (H - PAD_B) + '"/>';
      s += '<text class="scatter-axis-label" x="' + x(gx) + '" y="' + (H - PAD_B + 22) + '" text-anchor="middle">' + Math.round(gx * 100) + '%</text>';
    }
    for (var gy = 2; gy <= 10; gy += 2) {
      s += '<line class="scatter-grid" x1="' + PAD_L + '" y1="' + y(gy) + '" x2="' + (W - PAD_R) + '" y2="' + y(gy) + '"/>';
      s += '<text class="scatter-axis-label" x="' + (PAD_L - 14) + '" y="' + (y(gy) + 3.5) + '" text-anchor="end">' + gy + '</text>';
    }
    // baseline axis
    s += '<line class="scatter-axis" x1="' + PAD_L + '" y1="' + (H - PAD_B) + '" x2="' + (W - PAD_R) + '" y2="' + (H - PAD_B) + '"/>';
    // axis captions (y-caption anchored at the top so it never runs off-canvas)
    s += '<text class="scatter-quad" x="' + (W - PAD_R) + '" y="' + (H - PAD_B + 42) + '" text-anchor="end">more likely →</text>';
    s += '<text class="scatter-quad" x="' + (PAD_L - 40) + '" y="' + PAD_T + '" text-anchor="end" transform="rotate(-90 ' + (PAD_L - 40) + ' ' + PAD_T + ')">more consequential →</text>';
    // quadrant hint (top-right = the prizes)
    s += '<text class="scatter-quad" x="' + (W - PAD_R - 6) + '" y="' + (PAD_T + 16) + '" text-anchor="end" opacity=".5">the near-certain reshapers</text>';

    /* ---- dots with collision-aware label placement ----
       Each label tries slots around its dot (N, S, E, W, diagonals, then a
       further N/S) and takes the first that hits neither the canvas edges,
       another dot, nor an already-placed label. Deterministic: dots are
       processed top-to-bottom, left-to-right. */
    var LBL_H = 14;
    function labelW(t) { return t.length * 6.3 + 6; }

    var pts = techs.map(function (t) {
      var r = 7 + t.consequence * 0.7;
      return { t: t, cx: x(t.probability.value), cy: y(t.consequence), r: r,
               text: t.shortName + (api.isStarred(t.id) ? " ★" : "") };
    });

    var boxes = [];
    function collides(b) {
      if (b.x0 < 6 || b.x1 > W - 6 || b.y0 < 6 || b.y1 > H - PAD_B + 12) return true;
      for (var i = 0; i < boxes.length; i++) {
        var o = boxes[i];
        if (b.x0 < o.x1 && b.x1 > o.x0 && b.y0 < o.y1 && b.y1 > o.y0) return true;
      }
      return false;
    }
    // reserve the quadrant caption and every dot before placing any label
    boxes.push({ x0: W - PAD_R - 250, y0: PAD_T + 2, x1: W - PAD_R, y1: PAD_T + 20 });
    pts.forEach(function (p) {
      boxes.push({ x0: p.cx - p.r - 3, y0: p.cy - p.r - 3, x1: p.cx + p.r + 3, y1: p.cy + p.r + 3 });
    });

    function boxFor(c, w) {
      var b = c.a === "middle" ? { x0: c.tx - w / 2, x1: c.tx + w / 2 }
            : c.a === "start"  ? { x0: c.tx, x1: c.tx + w }
            : { x0: c.tx - w, x1: c.tx };
      b.y0 = c.ty - (LBL_H - 3); b.y1 = c.ty + 3;
      return b;
    }
    function place(p) {
      var w = labelW(p.text), r = p.r;
      var cands = [
        { tx: p.cx, ty: p.cy - r - 9,   a: "middle" },
        { tx: p.cx, ty: p.cy + r + 18,  a: "middle" },
        { tx: p.cx + r + 11, ty: p.cy + 4, a: "start" },
        { tx: p.cx - r - 11, ty: p.cy + 4, a: "end" },
        { tx: p.cx + r + 8,  ty: p.cy - r - 4,  a: "start" },
        { tx: p.cx - r - 8,  ty: p.cy - r - 4,  a: "end" },
        { tx: p.cx + r + 8,  ty: p.cy + r + 13, a: "start" },
        { tx: p.cx - r - 8,  ty: p.cy + r + 13, a: "end" },
        { tx: p.cx, ty: p.cy - r - 24, a: "middle" },
        { tx: p.cx, ty: p.cy + r + 33, a: "middle" }
      ];
      for (var i = 0; i < cands.length; i++) {
        var b = boxFor(cands[i], w);
        if (!collides(b)) { boxes.push(b); return cands[i]; }
      }
      boxes.push(boxFor(cands[0], w)); // fallback: above, accept the overlap
      return cands[0];
    }

    var placed = {};
    pts.slice().sort(function (a, b) { return a.cy - b.cy || a.cx - b.cx; })
       .forEach(function (p) { placed[p.t.id] = place(p); });

    pts.forEach(function (p) {
      var col = p.t.domainColor;
      var L = placed[p.t.id];
      s += '<g class="scatter-dot" data-id="' + p.t.id + '">';
      s += '<circle class="halo" cx="' + p.cx + '" cy="' + p.cy + '" r="' + (p.r + 9) + '" fill="' + col + '" opacity="0.10"/>';
      s += '<circle cx="' + p.cx + '" cy="' + p.cy + '" r="' + p.r + '" fill="' + col + '" opacity="0.92"/>';
      s += '<text class="scatter-label" x="' + L.tx + '" y="' + L.ty + '" text-anchor="' + L.a + '">' + esc(p.text) + '</text>';
      s += '</g>';
    });
    s += '</svg>';
    return s;
  }

  // normalize to exactly one trailing sentence-period (source strings vary)
  function endDot(s) { s = String(s).trim(); return /[.!?]$/.test(s) ? s : s + "."; }

  /* ============================== DETAIL ==================================== */
  function renderDetail(stage, tech, api) {
    var accent = tech.domainColor;
    var dom = window.FUTURIST_DOMAINS[tech.domain];
    stage.style.setProperty("--d-accent", accent);

    var scen = api.scenario;
    var html = '<div class="detail">';
    var secIdx = 0;
    function nn() { var s = secIdx < 10 ? "0" + secIdx : "" + secIdx; secIdx++; return s; }

    /* hero */
    html += '<div class="detail-hero" style="--d-accent:' + accent + '">' +
      '<button class="detail-back">← All technologies</button>' +
      '<div class="detail-hero-top">' +
        '<div class="detail-glyph">' + tech.glyph + '</div>' +
        '<div class="detail-headings">' +
          '<div class="detail-domain">' + dom.label + ' &middot; ' + (STATUS_LABEL[tech.status] || tech.status) + '</div>' +
          '<h1 class="detail-name">' + esc(tech.name) + '</h1>' +
          '<p class="detail-tagline">' + esc(tech.tagline) + '</p>' +
        '</div>' +
        '<button class="star-btn detail-star ' + (api.isStarred(tech.id) ? "is-starred" : "") + '" title="Star">' + (api.isStarred(tech.id) ? "★" : "☆") + '</button>' +
      '</div>' +
      heroMeta(tech, scen) +
    '</div>';

    /* why it matters */
    html += '<div class="section" style="--d-accent:' + accent + '">' +
      sectionTag(nn(), "Why it matters") +
      '<p class="ladder-text" style="margin-top:6px">' + esc(tech.whyItMatters) + '</p>' +
    '</div>';

    /* learn — feynman */
    html += '<div class="section" style="--d-accent:' + accent + '" id="sec-learn">' +
      sectionTag(nn(), "Learn it") +
      '<h2>From the kitchen table to the frontier</h2>' +
      '<p class="section-lede">Four rungs, each a little harder. Climb only as far as you want.</p>' +
      feynmanHTML(tech) +
    '</div>';

    /* pathway — timeline */
    html += '<div class="section" style="--d-accent:' + accent + '">' +
      sectionTag(nn(), "The pathway") +
      '<div class="pathway-head">' +
        '<div class="pathway-head-text">' +
          '<h2>How it could unfold</h2>' +
          '<p class="section-lede">The main line runs left to right toward 2056. Where experts disagree about <em>direction</em>, the line forks. Hover or tap any node. Switch whose clock you trust and watch the future slide.</p>' +
        '</div>' +
        scenarioSwitchHTML(scen) +
      '</div>' +
      '<div id="timeline-mount"></div>' +
    '</div>';

    /* backcast */
    html += '<div class="section" style="--d-accent:' + accent + '">' +
      sectionTag(nn(), "Back to today") +
      '<h2>Trace it to the present</h2>' +
      '<p class="section-lede">A future is only real if you can walk it backward to work happening now: what exists, what it depends on, what could choke it, and what to watch next.</p>' +
      backcastHTML(tech) +
    '</div>';

    /* supply chain (renders only if chain data is loaded for this tech) */
    html += supplyChainHTML(tech, accent, nn);

    /* the investable map (renders only if invest data is loaded for this tech) */
    html += investHTML(tech, accent, nn);

    /* people */
    html += '<div class="section" style="--d-accent:' + accent + '">' +
      sectionTag(nn(), "Who to follow") +
      '<h2>The people moving it</h2>' +
      '<div class="people-grid stagger">' + tech.people.map(personHTML).join("") + '</div>' +
    '</div>';

    /* reading */
    html += '<div class="section" style="--d-accent:' + accent + '; border-bottom:0">' +
      sectionTag(nn(), "Go deeper") +
      '<h2>If you read five things</h2>' +
      '<div class="reading-list">' + tech.reading.map(readingHTML).join("") + '</div>' +
    '</div>';

    html += '</div>';
    stage.innerHTML = html;
    stage.scrollTop = 0;

    // mount timeline
    var tlInstance = window.Timeline.mount(stage.querySelector("#timeline-mount"), tech, scen, accent);

    // dial animation
    animateDial(stage, tech.probability.value);

    // wire back + star
    stage.querySelector(".detail-back").addEventListener("click", api.onBack);
    stage.querySelector(".detail-star").addEventListener("click", function () { api.onStar(tech.id); });

    // scenario switch (now lives in the pathway section)
    Array.prototype.forEach.call(stage.querySelectorAll(".scenario-btn"), function (b) {
      b.addEventListener("click", function () { api.onScenario(b.getAttribute("data-scenario")); });
    });

    // feynman ladder
    wireFeynman(stage, tech);

    // investable map (filters + cross-links)
    wireInvest(stage);

    return { timeline: tlInstance };
  }

  function heroMeta(tech, scen) {
    var p = tech.probability;
    var dialR = 30, circ = 2 * Math.PI * dialR;
    var dialCol = '<div class="dm-col">' +
      '<div class="dm-label">Probability by 2056</div>' +
      '<div class="prob-dial">' +
        '<svg class="dial-svg" viewBox="0 0 72 72">' +
          '<circle class="dial-track" cx="36" cy="36" r="' + dialR + '"/>' +
          '<circle class="dial-fill" cx="36" cy="36" r="' + dialR + '" transform="rotate(-90 36 36)" ' +
            'stroke-dasharray="' + circ + '" stroke-dashoffset="' + circ + '" data-target="' + (circ * (1 - p.value)) + '"/>' +
          '<text class="dial-pct" x="36" y="41" text-anchor="middle">' + pct(p.value) + '</text>' +
        '</svg>' +
        '<div class="dial-range">range<br>' + pct(p.range[0]) + '–' + pct(p.range[1]) + '</div>' +
      '</div>' +
    '</div>';

    var dots = "";
    for (var i = 1; i <= 10; i++) dots += '<i class="' + (i <= tech.consequence ? "on" : "") + '"></i>';
    var conseqCol = '<div class="dm-col">' +
      '<div class="dm-label">Consequence</div>' +
      '<div class="dm-value">' + tech.consequence + ' <span class="dm-unit">/ 10</span></div>' +
      '<div class="conseq-meter">' + dots + '</div>' +
    '</div>';

    var arr = ["optimistic", "consensus", "skeptical"].map(function (k) {
      return '<div class="dm-arr ' + (k === scen ? "is-active" : "") + '" data-scen="' + k + '">' +
        '<div class="yr">' + tech.arrival[k] + '</div><div class="lb">' + SCEN_LABEL[k] + '</div></div>';
    }).join("");
    var arrCol = '<div class="dm-col"><div class="dm-label">Arrival year</div><div class="dm-arrivals">' + arr + '</div></div>';

    // investor columns (fill the right side of the band when invest data exists)
    var v = window.FUTURIST_INVEST && window.FUTURIST_INVEST[tech.id];
    var convCol = "", mktCol = "", viewLine = "";
    if (v && v.conviction) {
      convCol = '<div class="dm-col dm-sep"><div class="dm-label">Conviction</div>' +
        '<div class="dm-conv ' + (CONV[v.conviction.rating] || "") + '">' + esc(v.conviction.rating) + '</div></div>';
      var tam = pickTam(v.sCurve, 2040);
      mktCol = '<div class="dm-col"><div class="dm-label">Market by 2040</div>' +
        '<div class="dm-value">' + esc(tam) + '</div></div>';
      viewLine = '<p class="hero-view"><b>Our view — we hold ' + pct(v.conviction.ourProbability) + '.</b> ' + esc(v.conviction.street) + '</p>';
    }

    return '<div class="detail-meta">' + dialCol + conseqCol + arrCol + convCol + mktCol + '</div>' +
      '<p class="prob-caption"><b>' + esc(endDot(p.definition)) + '</b> Range ' + pct(p.range[0]) + '–' + pct(p.range[1]) + '. ' + esc(endDot(p.basis)) + '</p>' +
      viewLine;
  }

  function animateDial(stage, value) {
    var fill = stage.querySelector(".dial-fill");
    if (!fill) return;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { fill.setAttribute("stroke-dashoffset", fill.getAttribute("data-target")); });
    });
  }

  function sectionTag(num, ttl) {
    return '<div class="section-tag"><span class="num">' + num + '</span><span class="ttl">' + ttl + '</span></div>';
  }

  function scenarioSwitchHTML(scen) {
    var opts = [["optimistic", "Believers"], ["consensus", "Consensus"], ["skeptical", "Skeptics"]];
    return '<div class="scenario-switch" role="tablist" aria-label="Timing scenario">' +
      '<span class="scenario-label">Whose timeline?</span>' +
      opts.map(function (o) {
        return '<button class="scenario-btn ' + (o[0] === scen ? "is-active" : "") + '" data-scenario="' + o[0] + '" role="tab">' + o[1] + '</button>';
      }).join("") +
    '</div>';
  }

  function feynmanHTML(tech) {
    var steps = tech.feynman.map(function (f, i) {
      return '<button class="ladder-step ' + (i === 0 ? "is-active" : "") + '" data-rung="' + i + '">' +
        '<div class="ls-num">0' + (i + 1) + '</div><div class="ls-label">' + esc(f.label) + '</div></button>';
    }).join("");
    var f0 = tech.feynman[0];
    var prog = tech.feynman.map(function (_, i) { return '<i class="' + (i === 0 ? "on" : "") + '"></i>'; }).join("");
    return '<div class="ladder-steps">' + steps + '</div>' +
      '<div class="ladder-body">' +
        '<div class="ladder-rung-label" data-rung-label>Rung 01 &middot; ' + esc(f0.label) + '</div>' +
        '<p class="ladder-text" data-rung-body>' + esc(f0.body) + '</p>' +
        '<div class="ladder-progress">' + prog + '</div>' +
      '</div>';
  }

  function wireFeynman(stage, tech) {
    var steps = stage.querySelectorAll(".ladder-step");
    var bodyEl = stage.querySelector("[data-rung-body]");
    var labelEl = stage.querySelector("[data-rung-label]");
    var prog = stage.querySelectorAll(".ladder-progress i");
    Array.prototype.forEach.call(steps, function (btn) {
      btn.addEventListener("click", function () {
        var i = +btn.getAttribute("data-rung");
        Array.prototype.forEach.call(steps, function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var f = tech.feynman[i];
        labelEl.textContent = "Rung 0" + (i + 1) + " · " + f.label;
        bodyEl.style.opacity = 0;
        setTimeout(function () { bodyEl.textContent = f.body; bodyEl.style.transition = "opacity .35s"; bodyEl.style.opacity = 1; }, 120);
        Array.prototype.forEach.call(prog, function (p, idx) { p.className = idx <= i ? "on" : ""; });
      });
    });
  }

  function backcastHTML(tech) {
    var b = tech.backcast;
    function liPlain(arr) { return arr.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join(""); }
    function liDep(arr) {
      return arr.map(function (d) {
        return '<li><span class="bc-name">' + esc(d.name) + '</span> — <span class="bc-why">' + esc(d.why) + '</span>' +
          (d.state ? '<span class="bc-players">now: ' + esc(d.state) + '</span>' : "") + '</li>';
      }).join("");
    }
    function liChain(arr) {
      return arr.map(function (c) {
        return '<li><span class="bc-name">' + esc(c.item) + '</span>' + (c.chokepoint ? '<span class="bc-choke">chokepoint</span>' : "") +
          ' — <span class="bc-why">' + esc(c.why) + '</span>' +
          (c.players ? '<span class="bc-players">' + esc(c.players) + '</span>' : "") + '</li>';
      }).join("");
    }
    return '<div class="backcast-grid">' +
      '<div class="bc-card"><h4>What exists today</h4><ul class="bc-list">' + liPlain(b.today) + '</ul></div>' +
      '<div class="bc-card"><h4>What it depends on</h4><ul class="bc-list">' + liDep(b.dependencies) + '</ul></div>' +
      '<div class="bc-card"><h4>Supply chain</h4><ul class="bc-list">' + liChain(b.supplyChain) + '</ul></div>' +
      '<div class="bc-card"><h4>Watch next (24 months)</h4><ul class="bc-list">' + liPlain(b.leadingIndicators) + '</ul></div>' +
    '</div>';
  }

  /* ---- supply chain ------------------------------------------------------- */
  var CONC = {
    "single-source": { label: "single source", cls: "sc-conc-single" },
    "concentrated":  { label: "concentrated",  cls: "sc-conc-conc" },
    "diversified":   { label: "diversified",   cls: "sc-conc-div" }
  };
  var TIER_NUM = ["01", "02", "03", "04"];

  function supplyChainHTML(tech, accent, nn) {
    var c = window.FUTURIST_CHAINS && window.FUTURIST_CHAINS[tech.id];
    if (!c) return "";

    var bands = (c.tiers || []).map(function (tier, i) {
      var links = (tier.links || []).map(function (l) {
        var conc = CONC[l.concentration] || { label: l.concentration || "", cls: "" };
        return '<div class="sc-link' + (l.chokepoint ? " is-choke" : "") + '">' +
          '<div class="sc-link-top">' +
            '<span class="sc-item">' + esc(l.item) + '</span>' +
            (l.chokepoint ? '<span class="sc-choke-flag">chokepoint</span>' : "") +
          '</div>' +
          (l.role ? '<div class="sc-role">' + esc(l.role) + '</div>' : "") +
          (l.players ? '<div class="sc-players">' + esc(l.players) + '</div>' : "") +
          '<div class="sc-meta">' +
            '<span class="sc-conc ' + conc.cls + '">' + esc(conc.label) + '</span>' +
            (l.geography ? '<span class="sc-geo">' + esc(l.geography) + '</span>' : "") +
          '</div>' +
          (l.risk ? '<div class="sc-risk">' + esc(l.risk) + (l.fix ? ' <span class="sc-fix">Workaround: ' + esc(l.fix) + '</span>' : "") + '</div>' : "") +
        '</div>';
      }).join("");
      return '<div class="sc-band">' +
        '<div class="sc-band-head"><span class="sc-tier-num">' + TIER_NUM[i] + '</span><span class="sc-tier-name">' + esc(tier.name) + '</span></div>' +
        '<div class="sc-band-links">' + links + '</div>' +
      '</div>' +
      (i < c.tiers.length - 1 ? '<div class="sc-flow-arrow" aria-hidden="true">↓</div>' : "");
    }).join("");

    var chokes = (c.topChokepoints || []).map(function (ch, i) {
      return '<li><span class="sc-choke-rank">' + (i + 1) + '</span>' +
        '<div class="sc-choke-body"><b>' + esc(ch.item) + '</b><p>' + esc(ch.why) + '</p></div></li>';
    }).join("");

    return '<div class="section sc-section" id="sec-supply" style="--d-accent:' + accent + '">' +
      sectionTag(nn(), "Supply chain") +
      '<h2>What it takes to build, upstream to downstream</h2>' +
      (c.overview ? '<p class="section-lede sc-overview">' + esc(c.overview) + '</p>' : "") +
      '<div class="sc-flow">' + bands + '</div>' +
      '<div class="sc-bottom">' +
        '<div class="sc-chokes">' +
          '<h4>The three binding chokepoints</h4>' +
          '<ol class="sc-choke-list">' + chokes + '</ol>' +
        '</div>' +
        (c.geopolitics ? '<div class="sc-geo-card"><h4>Geopolitics</h4><p>' + esc(c.geopolitics) + '</p></div>' : "") +
      '</div>' +
    '</div>';
  }

  /* ---- the investable map ------------------------------------------------- */
  var CONV = { "High": "conv-high", "Medium": "conv-med", "Low": "conv-low" };
  var STANCE_LABEL = { long: "Long", short: "Short", watch: "Watch" };
  var EXP_LABEL = { "pure-play": "pure-play", "core": "core", "adjacent": "adjacent", "enabler": "picks & shovels" };
  var CAP_LABEL = { mega: "mega cap", large: "large cap", mid: "mid cap", small: "small cap", private: "private" };
  var HORIZON_LABEL = { near: "near-term", mid: "mid-term", long: "long-term" };

  // compact investor strip injected into the hero
  function heroInvestStrip(tech) {
    var v = window.FUTURIST_INVEST && window.FUTURIST_INVEST[tech.id];
    if (!v) return "";
    var c = v.conviction || {};
    var tam2040 = pickTam(v.sCurve, 2040);
    return '<div class="hero-invest">' +
      '<div class="hi-chip ' + (CONV[c.rating] || "") + '">' +
        '<span class="hi-chip-k">Conviction</span><span class="hi-chip-v">' + esc(c.rating || "") + '</span></div>' +
      '<div class="hi-block"><span class="hi-k">Our view vs Street</span>' +
        '<span class="hi-v">We hold <b>' + pct(c.ourProbability) + '</b>. ' + esc(c.street || "") + '</span></div>' +
      (tam2040 ? '<div class="hi-block"><span class="hi-k">Market by 2040</span><span class="hi-v hi-tam">' + esc(tam2040) + '</span></div>' : "") +
    '</div>';
  }
  function money(v, unit) {
    unit = unit || "";
    if (v === 0) return "pre-revenue";
    return unit.charAt(0) === "$" ? "$" + v + unit.slice(1) : v + unit;
  }
  function pickTam(sc, year) {
    if (!sc || !sc.points) return "";
    var best = null;
    sc.points.forEach(function (p) { if (p.year <= year && (!best || p.year > best.year)) best = p; });
    best = best || sc.points[sc.points.length - 1];
    return best ? money(best.value, best.unit) : "";
  }

  function investHTML(tech, accent, nn) {
    var v = window.FUTURIST_INVEST && window.FUTURIST_INVEST[tech.id];
    if (!v) return "";
    var c = v.conviction || {};

    // segments + company cards
    var segs = (v.marketMap || []).map(function (seg) {
      var cos = (seg.companies || []).map(function (co) {
        var stance = co.stance || "watch";
        return '<div class="inv-co stance-' + stance + '" data-stance="' + stance + '" data-exposure="' + (co.exposure || "") + '">' +
          '<div class="inv-co-top">' +
            '<span class="inv-co-name">' + esc(co.name) + '</span>' +
            '<span class="inv-co-ticker">' + esc(co.ticker || "") + '</span>' +
          '</div>' +
          '<div class="inv-co-tags">' +
            '<span class="inv-stance st-' + stance + '">' + (STANCE_LABEL[stance] || stance) + '</span>' +
            '<span class="inv-tag">' + (EXP_LABEL[co.exposure] || co.exposure || "") + '</span>' +
            '<span class="inv-tag">' + (CAP_LABEL[co.cap] || co.cap || "") + '</span>' +
            (co.horizon ? '<span class="inv-tag dim">' + (HORIZON_LABEL[co.horizon] || co.horizon) + '</span>' : "") +
            (co.purity ? '<span class="inv-tag dim">' + esc(co.purity) + ' purity</span>' : "") +
          '</div>' +
          (co.note ? '<div class="inv-co-note">' + esc(co.note) + '</div>' : "") +
        '</div>';
      }).join("");
      return '<div class="inv-seg">' +
        '<div class="inv-seg-head">' +
          '<span class="inv-seg-name">' + esc(seg.segment) + '</span>' +
          (seg.chainNode ? '<button class="inv-seg-link" data-scroll="#sec-supply" title="See it in the supply chain">' + esc(seg.chainNode) + ' ↗</button>' : "") +
        '</div>' +
        '<div class="inv-co-grid">' + cos + '</div>' +
      '</div>';
    }).join("");

    var atRisk = (v.atRisk && v.atRisk.length)
      ? '<div class="inv-atrisk"><h4>Structurally at risk (the other side of the trade)</h4>' +
        v.atRisk.map(function (r) {
          return '<div class="inv-risk-row"><span class="inv-co-name">' + esc(r.name) + '</span>' +
            (r.ticker ? '<span class="inv-co-ticker">' + esc(r.ticker) + '</span>' : "") +
            '<p>' + esc(r.note) + '</p></div>';
        }).join("") + '</div>'
      : "";

    return '<div class="section invest-section" id="sec-invest" style="--d-accent:' + accent + '">' +
      sectionTag(nn(), "The investable map") +
      '<h2>How you would get exposure, over thirty years</h2>' +
      '<p class="section-lede">' + esc(v.thesis) + '</p>' +

      '<div class="inv-primer">' +
        '<div class="inv-primer-tag">Start here if the tickers are new to you</div>' +
        '<p>' + esc(v.howToThink) + '</p>' +
        '<button class="inv-link" data-scroll="#sec-learn">← Not sure what this technology is? Start with “Learn it”</button>' +
      '</div>' +

      '<div class="inv-top">' +
        convictionCard(c) +
        tamCard(v.sCurve, accent) +
      '</div>' +

      '<div class="inv-map-head">' +
        '<h3>The map of who builds it, and who is exposed</h3>' +
        '<div class="inv-filters">' +
          '<button class="inv-filter is-active" data-filter="all">All</button>' +
          '<button class="inv-filter" data-filter="long">Longs</button>' +
          '<button class="inv-filter" data-filter="enabler">Picks &amp; shovels</button>' +
          '<button class="inv-filter" data-filter="short">Shorts</button>' +
        '</div>' +
      '</div>' +
      '<div class="inv-segments">' + segs + '</div>' +
      atRisk +
      (v.lastReviewed ? '<div class="inv-provenance">Curated research, last reviewed ' + esc(v.lastReviewed) + '. Tickers and figures are point-in-time; verify before acting.</div>' : "") +
    '</div>';
  }

  function convictionCard(c) {
    return '<div class="inv-card conv-card">' +
      '<div class="inv-card-h">Our conviction</div>' +
      '<div class="conv-rating ' + (CONV[c.rating] || "") + '">' + esc(c.rating || "") + '</div>' +
      '<div class="conv-line"><span class="conv-k">Our probability</span><span class="conv-v">' + pct(c.ourProbability) + ' by 2056</span></div>' +
      '<div class="conv-line"><span class="conv-k">The Street</span><span class="conv-v">' + esc(c.street || "") + '</span></div>' +
      '<div class="conv-line"><span class="conv-k">Our edge</span><span class="conv-v">' + esc(c.edge || "") + '</span></div>' +
      '<div class="conv-line"><span class="conv-k">Horizon</span><span class="conv-v">' + esc(c.horizon || "") + '</span></div>' +
    '</div>';
  }

  function tamCard(sc, accent) {
    if (!sc || !sc.points || !sc.points.length) return '<div class="inv-card"></div>';
    var pts = sc.points.slice().sort(function (a, b) { return a.year - b.year; });
    var first = pts[0], last = pts[pts.length - 1];
    var stageLabel = { nascent: "Nascent", inflection: "At the inflection", scaling: "Scaling" }[sc.stage] || sc.stage;
    return '<div class="inv-card tam-card">' +
      '<div class="inv-card-h">Market size (TAM), the S-curve to 2056</div>' +
      tamSVG(pts, accent) +
      '<div class="tam-foot">' +
        '<span class="tam-stage">' + esc(stageLabel) + '</span>' +
        '<span class="tam-range">' + money(first.value, first.unit) + ' (' + first.year + ') → ' + money(last.value, last.unit) + ' (' + last.year + ')</span>' +
      '</div>' +
    '</div>';
  }

  function tamSVG(pts, accent) {
    var W = 360, H = 130, padL = 10, padR = 10, padT = 16, padB = 24;
    var xs = pts.map(function (p) { return p.year; }), vs = pts.map(function (p) { return p.value; });
    var xmin = Math.min.apply(null, xs), xmax = Math.max.apply(null, xs);
    var vmax = Math.max.apply(null, vs) || 1;
    function X(y) { return padL + (y - xmin) / ((xmax - xmin) || 1) * (W - padL - padR); }
    function Y(v) { return H - padB - (v / vmax) * (H - padT - padB); }
    var line = "M" + pts.map(function (p) { return X(p.year) + "," + Y(p.value); }).join(" L");
    var area = line + " L" + X(xmax) + "," + (H - padB) + " L" + X(xmin) + "," + (H - padB) + " Z";
    var dots = pts.map(function (p) {
      return '<circle cx="' + X(p.year) + '" cy="' + Y(p.value) + '" r="3.5" fill="' + accent + '"/>' +
        '<text class="tam-yr" x="' + X(p.year) + '" y="' + (H - padB + 15) + '" text-anchor="middle">' + p.year + '</text>';
    }).join("");
    return '<svg class="tam-svg" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' +
      '<defs><linearGradient id="tamg" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="' + accent + '" stop-opacity="0.32"/>' +
        '<stop offset="100%" stop-color="' + accent + '" stop-opacity="0"/></linearGradient></defs>' +
      '<path d="' + area + '" fill="url(#tamg)"/>' +
      '<path d="' + line + '" fill="none" stroke="' + accent + '" stroke-width="2"/>' +
      dots +
    '</svg>';
  }

  function wireInvest(stage) {
    var sec = stage.querySelector(".invest-section");
    if (!sec) return;
    var btns = sec.querySelectorAll(".inv-filter");
    var cards = sec.querySelectorAll(".inv-co");
    Array.prototype.forEach.call(btns, function (b) {
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(btns, function (x) { x.classList.remove("is-active"); });
        b.classList.add("is-active");
        var f = b.getAttribute("data-filter");
        Array.prototype.forEach.call(cards, function (c) {
          var show = f === "all" || c.getAttribute("data-stance") === f || c.getAttribute("data-exposure") === f;
          c.style.display = show ? "" : "none";
        });
        Array.prototype.forEach.call(sec.querySelectorAll(".inv-seg"), function (seg) {
          var any = Array.prototype.some.call(seg.querySelectorAll(".inv-co"), function (c) { return c.style.display !== "none"; });
          seg.style.display = any ? "" : "none";
        });
      });
    });
    Array.prototype.forEach.call(sec.querySelectorAll("[data-scroll]"), function (a) {
      a.addEventListener("click", function () {
        var t = stage.querySelector(a.getAttribute("data-scroll"));
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function personHTML(p) {
    return '<div class="person">' +
      '<div class="pn">' + esc(p.name) + '</div>' +
      '<div class="pr">' + esc(p.role) + '</div>' +
      '<div class="po">' + esc(p.org) + '</div>' +
      '<div class="pnote">' + esc(p.note) + '</div>' +
    '</div>';
  }

  function readingHTML(r) {
    return '<div class="read-item">' +
      '<span class="read-type">' + esc(r.type) + '</span>' +
      '<div class="read-main">' +
        '<div class="rt"><em>' + esc(r.title) + '</em></div>' +
        '<div class="ra">' + esc(r.author) + (r.year ? " · " + r.year : "") + '</div>' +
        (r.note ? '<div class="rnote">' + esc(r.note) + '</div>' : "") +
      '</div>' +
    '</div>';
  }

  window.Views = { renderOverview: renderOverview, renderDetail: renderDetail };
})();
