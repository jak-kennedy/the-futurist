/* =============================================================================
   THE FUTURIST — application controller
   State, persistence, left-rail (filter/sort/star/rank), hash routing,
   scenario wiring, and the atmospheric starfield.
   ============================================================================= */
(function () {
  "use strict";

  var DOMAINS = window.FUTURIST_DOMAINS;
  var LS = "futurist.v1.";
  function load(key, fallback) {
    try { var v = localStorage.getItem(LS + key); return v == null ? fallback : JSON.parse(v); }
    catch (e) { return fallback; }
  }
  function save(key, val) { try { localStorage.setItem(LS + key, JSON.stringify(val)); } catch (e) {} }

  // ---- state ----------------------------------------------------------------
  var techs = (window.FUTURIST_DATA || []).map(function (t) {
    return Object.assign({}, t, { domainColor: (DOMAINS[t.domain] || {}).color || "#8fb3ff" });
  });
  var byId = {}; techs.forEach(function (t) { byId[t.id] = t; });

  var state = {
    scenario: load("scenario", "consensus"),
    sort: load("sort", "probability"),
    stars: load("stars", []),
    ranking: load("ranking", techs.map(function (t) { return t.id; })),
    filters: load("filters", { q: "", domains: Object.keys(DOMAINS), prob: "all", status: "all" }),
    selectedId: null
  };
  // reconcile ranking with current data (handles added/removed techs)
  state.ranking = state.ranking.filter(function (id) { return byId[id]; });
  techs.forEach(function (t) { if (state.ranking.indexOf(t.id) < 0) state.ranking.push(t.id); });

  var detailHandle = null; // { timeline }

  // ---- helpers --------------------------------------------------------------
  function isStarred(id) { return state.stars.indexOf(id) >= 0; }
  function probBand(v) { return v >= 0.6 ? "high" : v >= 0.3 ? "mid" : "low"; }

  var CONV_RANK = { High: 3, Medium: 2, Low: 1 };
  function convInfo(id) {
    var v = window.FUTURIST_INVEST && window.FUTURIST_INVEST[id];
    if (!v || !v.conviction) return null;
    var longs = 0, shorts = 0;
    (v.marketMap || []).forEach(function (seg) {
      (seg.companies || []).forEach(function (c) {
        if (c.stance === "long") longs++; else if (c.stance === "short") shorts++;
      });
    });
    shorts += (v.atRisk || []).length;
    return { rating: v.conviction.rating, longs: longs, shorts: shorts, rank: CONV_RANK[v.conviction.rating] || 0 };
  }
  function convSub(id) {
    var info = convInfo(id);
    if (!info) return "";
    return '<span class="row-conv conv-' + info.rating.toLowerCase() + '" title="' + info.rating + ' conviction">' +
      '<i class="conv-dot"></i>' + info.longs + 'L' + (info.shorts ? ' ' + info.shorts + 'S' : "") + '</span>';
  }

  function filtered() {
    var f = state.filters, q = (f.q || "").toLowerCase();
    var list = techs.filter(function (t) {
      if (f.domains.indexOf(t.domain) < 0) return false;
      if (f.prob !== "all" && probBand(t.probability.value) !== f.prob) return false;
      if (f.status !== "all" && t.status !== f.status) return false;
      if (q) {
        var hay = (t.name + " " + t.shortName + " " + t.tagline + " " + t.whyItMatters).toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
    var s = state.sort, scen = state.scenario;
    if (s === "ranking") {
      list.sort(function (a, b) { return state.ranking.indexOf(a.id) - state.ranking.indexOf(b.id); });
    } else if (s === "starred") {
      list.sort(function (a, b) {
        var sa = isStarred(a.id) ? 0 : 1, sb = isStarred(b.id) ? 0 : 1;
        return sa - sb || b.probability.value - a.probability.value;
      });
    } else if (s === "consequence") {
      list.sort(function (a, b) { return b.consequence - a.consequence || b.probability.value - a.probability.value; });
    } else if (s === "arrival") {
      list.sort(function (a, b) { return a.arrival[scen] - b.arrival[scen]; });
    } else if (s === "conviction") {
      list.sort(function (a, b) {
        var ca = (convInfo(a.id) || {}).rank || 0, cb = (convInfo(b.id) || {}).rank || 0;
        return cb - ca || b.probability.value - a.probability.value;
      });
    } else {
      list.sort(function (a, b) { return b.probability.value - a.probability.value; });
    }
    return list;
  }

  // ---- rail render ----------------------------------------------------------
  var el = {
    list: document.getElementById("tech-list"),
    count: document.getElementById("result-count"),
    starred: document.getElementById("starred-count"),
    search: document.getElementById("search"),
    sort: document.getElementById("sort"),
    domainFilters: document.getElementById("domain-filters"),
    probFilters: document.getElementById("prob-filters"),
    statusFilters: document.getElementById("status-filters"),
    reset: document.getElementById("reset-filters"),
    stage: document.getElementById("stage")
  };

  function renderDomainChips() {
    el.domainFilters.innerHTML = Object.keys(DOMAINS).map(function (k) {
      var on = state.filters.domains.indexOf(k) >= 0;
      return '<button class="chip domain-chip ' + (on ? "is-active" : "") + '" data-domain="' + k + '" ' +
        'style="--dc:' + DOMAINS[k].color + '">' +
        '<span class="dot"></span>' + DOMAINS[k].label + '</button>';
    }).join("");
    Array.prototype.forEach.call(el.domainFilters.children, function (btn) {
      btn.addEventListener("click", function () {
        var k = btn.getAttribute("data-domain");
        var i = state.filters.domains.indexOf(k);
        if (i >= 0) { if (state.filters.domains.length > 1) state.filters.domains.splice(i, 1); }
        else state.filters.domains.push(k);
        save("filters", state.filters); renderDomainChips(); renderList();
      });
    });
  }

  function renderList() {
    var list = filtered();
    var scen = state.scenario;
    el.list.innerHTML = "";
    list.forEach(function (t) {
      var li = document.createElement("li");
      li.className = "tech-row" + (t.id === state.selectedId ? " is-selected" : "");
      li.style.setProperty("--row-accent", t.domainColor);
      li.setAttribute("data-id", t.id);
      li.setAttribute("draggable", state.sort === "ranking" ? "true" : "false");
      li.innerHTML =
        '<div class="row-glyph">' + t.glyph + '</div>' +
        '<div class="row-main">' +
          '<div class="row-name">' + t.name + '</div>' +
          '<div class="row-sub"><span class="row-domain">' + DOMAINS[t.domain].label + '</span>' +
            '<span class="row-year">~' + t.arrival[scen] + '</span>' + convSub(t.id) + '</div>' +
          '<div class="prob-bar"><i style="width:' + Math.round(t.probability.value * 100) + '%"></i></div>' +
        '</div>' +
        '<div class="row-right">' +
          '<span class="row-prob">' + Math.round(t.probability.value * 100) + '%</span>' +
          '<button class="star-btn ' + (isStarred(t.id) ? "is-starred" : "") + '" title="Star">' + (isStarred(t.id) ? "★" : "☆") + '</button>' +
        '</div>';
      li.addEventListener("click", function (e) {
        if (e.target.closest(".star-btn")) return;
        go(t.id);
      });
      li.querySelector(".star-btn").addEventListener("click", function (e) { e.stopPropagation(); toggleStar(t.id); });
      if (state.sort === "ranking") wireDrag(li);
      el.list.appendChild(li);
    });
    el.count.textContent = list.length + " of " + techs.length;
    el.starred.textContent = state.stars.length + " starred";
  }

  // ---- drag-to-rank ---------------------------------------------------------
  var dragId = null;
  function wireDrag(li) {
    li.addEventListener("dragstart", function () { dragId = li.getAttribute("data-id"); li.classList.add("dragging"); });
    li.addEventListener("dragend", function () { li.classList.remove("dragging"); clearDragOver(); });
    li.addEventListener("dragover", function (e) { e.preventDefault(); li.classList.add("drag-over"); });
    li.addEventListener("dragleave", function () { li.classList.remove("drag-over"); });
    li.addEventListener("drop", function (e) {
      e.preventDefault(); li.classList.remove("drag-over");
      var targetId = li.getAttribute("data-id");
      if (!dragId || dragId === targetId) return;
      var r = state.ranking.slice();
      r.splice(r.indexOf(dragId), 1);
      r.splice(r.indexOf(targetId), 0, dragId);
      state.ranking = r; save("ranking", r); renderList();
    });
  }
  function clearDragOver() { Array.prototype.forEach.call(el.list.children, function (c) { c.classList.remove("drag-over"); }); }

  // ---- actions --------------------------------------------------------------
  function toggleStar(id) {
    var i = state.stars.indexOf(id);
    if (i >= 0) state.stars.splice(i, 1); else state.stars.push(id);
    save("stars", state.stars);
    renderList();
    // update detail star if open
    if (state.selectedId === id) {
      var btn = el.stage.querySelector(".detail-star");
      if (btn) { btn.classList.toggle("is-starred", isStarred(id)); btn.textContent = isStarred(id) ? "★" : "☆"; }
    }
  }

  var api = {
    scenario: state.scenario,
    isStarred: isStarred,
    onSelect: function (id) { go(id); },
    onStar: toggleStar,
    onBack: function () { go(null); },
    onScenario: function (s) { setScenario(s); }
  };

  // ---- routing --------------------------------------------------------------
  var listScroll = 0; // remember where the list/map was when opening a detail (mobile)
  function go(id) { location.hash = id ? "/tech/" + id : "/"; }
  function route() {
    var h = location.hash.replace(/^#/, "");
    var m = h.match(/^\/tech\/(.+)$/);
    var id = m && byId[m[1]] ? m[1] : null;
    var wasList = !state.selectedId;
    state.selectedId = id;
    save("selected", id);
    api.scenario = state.scenario;
    if (id) {
      if (wasList) listScroll = window.scrollY; // stash list position before leaving it
      detailHandle = window.Views.renderDetail(el.stage, byId[id], api);
      document.body.classList.add("detail-open");
      window.scrollTo(0, 0); // open the detail from its top (mobile full-screen view)
    } else {
      detailHandle = null;
      window.Views.renderOverview(el.stage, filtered(), api);
      document.body.classList.remove("detail-open");
      if (!wasList) { var y = listScroll; requestAnimationFrame(function () { window.scrollTo(0, y); }); }
    }
    renderList();
  }
  window.addEventListener("hashchange", route);

  // ---- scenario switch ------------------------------------------------------
  function setScenario(s) {
    state.scenario = s; api.scenario = s; save("scenario", s);
    Array.prototype.forEach.call(document.querySelectorAll(".scenario-btn"), function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-scenario") === s);
    });
    // update detail in place (preserve feynman + animate timeline)
    if (state.selectedId && detailHandle) {
      if (detailHandle.timeline) detailHandle.timeline.setScenario(s);
      // update hero arrival highlight
      Array.prototype.forEach.call(el.stage.querySelectorAll(".dm-arr"), function (a) {
        a.classList.toggle("is-active", a.getAttribute("data-scen") === s);
      });
    } else if (!state.selectedId) {
      window.Views.renderOverview(el.stage, filtered(), api);
    }
    renderList();
  }

  // ---- wire static controls -------------------------------------------------
  function wireControls() {
    // the scenario switch now lives inside each detail's pathway section;
    // views.js wires its buttons to api.onScenario on render.
    el.search.value = state.filters.q || "";
    el.search.addEventListener("input", function () {
      state.filters.q = el.search.value; save("filters", state.filters);
      renderList(); if (!state.selectedId) window.Views.renderOverview(el.stage, filtered(), api);
    });

    el.sort.value = state.sort;
    el.sort.addEventListener("change", function () { state.sort = el.sort.value; save("sort", state.sort); renderList(); });

    wireChipGroup(el.probFilters, "band", function (v) { state.filters.prob = v; afterFilter(); });
    wireChipGroup(el.statusFilters, "status", function (v) { state.filters.status = v; afterFilter(); });

    el.reset.addEventListener("click", function () {
      state.filters = { q: "", domains: Object.keys(DOMAINS), prob: "all", status: "all" };
      save("filters", state.filters);
      el.search.value = "";
      renderDomainChips();
      resetChipGroup(el.probFilters, "all"); resetChipGroup(el.statusFilters, "all");
      afterFilter();
    });
  }
  function afterFilter() {
    renderList();
    if (!state.selectedId) window.Views.renderOverview(el.stage, filtered(), api);
  }
  function wireChipGroup(container, attr, cb) {
    Array.prototype.forEach.call(container.children, function (btn) {
      btn.addEventListener("click", function () {
        Array.prototype.forEach.call(container.children, function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        cb(btn.getAttribute("data-" + attr));
        save("filters", state.filters);
      });
    });
  }
  function resetChipGroup(container, val) {
    Array.prototype.forEach.call(container.children, function (b) {
      b.classList.toggle("is-active", (b.getAttribute("data-band") || b.getAttribute("data-status")) === val);
    });
  }

  // ---- starfield ------------------------------------------------------------
  function starfield() {
    var c = document.getElementById("starfield");
    if (!c) return;
    var ctx = c.getContext("2d"), stars = [], DPR = Math.min(2, window.devicePixelRatio || 1);
    function resize() {
      c.width = innerWidth * DPR; c.height = innerHeight * DPR;
      c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
      var n = Math.round(innerWidth * innerHeight / 7000);
      stars = [];
      for (var i = 0; i < n; i++) stars.push({
        x: Math.random() * c.width, y: Math.random() * c.height,
        r: (Math.random() * 1.1 + 0.3) * DPR, b: Math.random(), s: Math.random() * 0.012 + 0.003,
        h: Math.random() < 0.12
      });
    }
    function draw() {
      ctx.clearRect(0, 0, c.width, c.height);
      for (var i = 0; i < stars.length; i++) {
        var st = stars[i];
        st.b += st.s; var a = 0.25 + Math.abs(Math.sin(st.b)) * 0.6;
        ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, 6.2832);
        ctx.fillStyle = st.h ? "rgba(180,200,255," + a + ")" : "rgba(230,235,245," + a + ")";
        ctx.fill();
      }
    }
    // setInterval (not rAF) so the page reports frame-idle; pause when hidden
    resize(); draw();
    var timer = setInterval(function () { if (!document.hidden) draw(); }, 40);
    var rt; addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { resize(); draw(); }, 200); });
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) { clearInterval(timer); }
  }

  // ---- boot -----------------------------------------------------------------
  function boot() {
    if (!techs.length) {
      el.stage.innerHTML = '<div class="empty"><div class="e-glyph">✷</div><p>No technology data loaded. Check that the data/*.js files loaded without error.</p></div>';
      return;
    }
    starfield();
    renderDomainChips();
    wireControls();
    resetChipGroup(el.probFilters, state.filters.prob);
    resetChipGroup(el.statusFilters, state.filters.status);
    if (!location.hash) {
      var last = load("selected", null);
      location.hash = last && byId[last] ? "/tech/" + last : "/";
    }
    route();
  }
  boot();
})();
