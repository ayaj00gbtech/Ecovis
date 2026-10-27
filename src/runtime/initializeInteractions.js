import { CASES, NEWSIMG, CASEPOOL, FILTERS, REGIONS, MEDIA } from '../data/credentials.js';
import { L4, STATUS, GOV_M, DEP, MAT, GOV_DEMO, INV_D, PHASES, INV_DEMO, QD_CH, QD_OFF, GRC_Q, GRC_C, GRC_R } from '../data/diagnostics.js';
import { GOALS, TIMES } from '../data/booking.js';
import { CT_TOPICS, CT_MAP } from '../data/contact.js';
import { PRODUCTS } from '../data/products.js';
import { PARTNERS } from '../data/partners.js';
import { createLifecycle } from './lifecycle.js';

/**
 * Fidelity adapter for the reference's existing interactions.
 * Native React owns page/layout markup; this effect owns dynamic islands.
 * Global listeners, timers and animation frames are disposed on unmount.
 */
export function initializeInteractions(root) {
  if (!root) return;
  const lifecycle = createLifecycle();
  const { setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame } = lifecycle;

  var pages = ["home","itoi","institutionalise","investable","scale","studio-ai","products","journey","leadership","partner","quick-diagnostic","grc-diagnostic","investability-report","publications","case-studies","media"];
  var curPage = "home";
  var navMap = {home:"home",itoi:"what",institutionalise:"what",investable:"what",scale:"what","studio-ai":"studio",products:"studio",journey:"about",leadership:"about",partner:"about","quick-diagnostic":"what","grc-diagnostic":"what","investability-report":"what",publications:"cred","case-studies":"cred",media:"cred"};
  var head = document.getElementById("head");
  var nav = document.getElementById("nav");
  var burger = document.getElementById("burger");
  var dds = Array.prototype.map.call(document.querySelectorAll(".dd"), function(d){ return {btn:d.querySelector("button.drop"), panel:d.querySelector(".dd-panel"), root:d}; });
  function closeDDs(except){ dds.forEach(function(d){ if (d !== except) { d.panel.hidden = true; d.btn.setAttribute("aria-expanded","false"); } }); }
  dds.forEach(function(d){
    d.btn.addEventListener("click", function(e){ e.stopPropagation(); closeDDs(d); d.panel.hidden = !d.panel.hidden; d.btn.setAttribute("aria-expanded", String(!d.panel.hidden)); });
  });
  lifecycle.listen(document, "click", function(e){ dds.forEach(function(d){ if (!d.root.contains(e.target)) { d.panel.hidden = true; d.btn.setAttribute("aria-expanded","false"); } }); });

  function show(id, anchor){
    if (pages.indexOf(id) < 0) id = "home";
    curPage = id;
    document.querySelectorAll(".page").forEach(function(p){ p.hidden = p.dataset.page !== id; });
    var photoTop = (id === "home" || id === "studio-ai");
    if (id === "products" && typeof prEnter === "function") setTimeout(prEnter, 300);
    head.classList.toggle("over", photoTop);
    document.querySelectorAll("[data-nav]").forEach(function(a){ a.classList.toggle("active", a.dataset.nav === navMap[id] && id !== "home"); });
    closeDDs(null);
    var qov = document.getElementById("quiz"); if (qov) qov.hidden = true;
    nav.classList.remove("open"); burger.setAttribute("aria-expanded","false");
    if (anchor) { var el = document.getElementById(anchor); if (el) { el.scrollIntoView(); return; } }
    window.scrollTo(0,0);
  }
  function route(){
    var h = (location.hash || "#home").slice(1);
    if (h === "contact") { if (document.querySelectorAll(".page:not([hidden])").length === 0) show("home"); openContact(); return; }
    if (h === "quiz" || h === "quick") { show("quick-diagnostic"); return; }
    if (h.indexOf("partner-") === 0) { show("partner"); renderPartner(h.slice(8)); return; }
    var A = {"book":"scale","philosophy":"itoi","journey-slider":"itoi","team":"home","inv-quiz":"investability-report","inv-report":"investability-report","grc-result":"grc-diagnostic","diagnostic":"grc-diagnostic","era-1":"journey","era-2":"journey","era-3":"journey","era-4":"journey"};
    if (A[h]) { show(A[h], h); return; }
    if (h === "home-pillars") { show("home","home-pillars"); return; }
    show(h);
  }
  lifecycle.listen(window, "hashchange", route);
  lifecycle.listen(document, "click", function(e){ var a = e.target.closest && e.target.closest('a[href^="#"]'); if (a && a.getAttribute("href") === location.hash) { e.preventDefault(); route(); } });

  /* case studies */
  
  
  
  var caseList = document.getElementById("caseList"), caseFilters = document.getElementById("caseFilters");
  
  var curF = "All";
  function el(tag, cls, text){ var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function renderCases(){
    caseList.innerHTML = "";
    CASES.filter(function(c){ return curF === "All" || c.f === curF; }).forEach(function(c, i){
      var card = el("article","ccard"); card.style.animationDelay = (i * 0.04) + "s";
      var im = el("img","cimg"); im.src = NEWSIMG[CASEPOOL[CASES.indexOf(c) % CASEPOOL.length]]; im.alt = ""; im.loading = "lazy"; card.appendChild(im);
      var hd = el("div","hd"), mt = el("div","mt");
      mt.appendChild(el("span","tg",c.f)); mt.appendChild(el("span","fm",c.firm));
      hd.appendChild(mt); hd.appendChild(el("h3",null,c.t));
      var bd = el("div","bd");
      [["Problem",c.c],["Solution",c.s]].forEach(function(x){ var d = el("div"); d.appendChild(el("h4",null,x[0])); d.appendChild(el("p",null,x[1])); bd.appendChild(d); });
      var rs = el("div","rs"); rs.appendChild(el("h4",null,"Result")); rs.appendChild(el("p",null,c.r));
      card.appendChild(hd); card.appendChild(bd); card.appendChild(rs);
      caseList.appendChild(card);
    });
  }
  function makeFilters(box, list, counter, onPick, initial){
    list.forEach(function(f){
      var b = el("button"); b.type = "button"; b.dataset.f = f; b.setAttribute("aria-pressed", String(f === initial));
      b.appendChild(document.createTextNode(f)); b.appendChild(el("span","n", String(counter(f))));
      b.addEventListener("click", function(){ box.querySelectorAll("button").forEach(function(x){ x.setAttribute("aria-pressed", String(x.dataset.f === f)); }); onPick(f); });
      box.appendChild(b);
    });
  }
  makeFilters(caseFilters, FILTERS, function(f){ return f === "All" ? CASES.length : CASES.filter(function(c){ return c.f === f; }).length; }, function(f){ curF = f; renderCases(); }, "All");
  renderCases();

  /* media presence: verified web references only */
  
  
  var mediaList = document.getElementById("mediaList"), mFil = "South Asia";
  function renderMedia(){
    mediaList.innerHTML = ""; var i = 0;
    MEDIA.filter(function(m){ return m.r === mFil; }).forEach(function(m){
      var a = el("a","mcard2"); a.href = m.u; a.target = "_blank"; a.rel = "noopener"; a.style.animationDelay = (i++ * 0.05) + "s";
      if (m.img && NEWSIMG[m.img]) { var im = el("img","nimg"); im.src = NEWSIMG[m.img]; im.alt = ""; im.loading = "lazy"; a.appendChild(im); }
      else { var ph = el("div","nimg ph"); ph.appendChild(el("span",null,m.k)); ph.appendChild(el("b",null,m.src)); a.appendChild(ph); }
      var bd = el("div","nb");
      var top = el("div","top"); top.appendChild(el("span","k " + m.k, m.k)); top.appendChild(el("span",null,m.c + " · " + m.when)); bd.appendChild(top);
      bd.appendChild(el("h3",null,m.t)); bd.appendChild(el("p",null,m.p));
      if (m.who) { var w = el("div","who"); m.who.forEach(function(p){ w.appendChild(el("span",null,p)); }); bd.appendChild(w); }
      var src = el("div","src"); src.appendChild(el("span",null,m.src)); src.appendChild(el("span",null,"Read ↗")); bd.appendChild(src);
      a.appendChild(bd); mediaList.appendChild(a);
    });
  }
  makeFilters(document.getElementById("mediaFilters"), REGIONS, function(f){ return MEDIA.filter(function(m){ return m.r === f; }).length; }, function(f){ mFil = f; renderMedia(); }, "South Asia");
  renderMedia();


  burger.addEventListener("click", function(){ var o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", String(o)); });

  /* ================= shared helpers ================= */
  var ARR = '<span class="arr"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12L12 4M6 4h6v6"/></svg></span>';
  
  
  function btnLink(href, label){ var a = el("a","btn"); a.href = href; a.innerHTML = '<span></span>' + ARR; a.firstChild.textContent = label; return a; }
  function today(){ return new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}); }
  function gauge(val, label){
    var g = el("div","gauge"), C = 2 * Math.PI * 70;
    g.innerHTML = '<svg viewBox="0 0 170 170" aria-hidden="true"><circle cx="85" cy="85" r="70" fill="none" stroke="#3A4046" stroke-width="12"/><circle cx="85" cy="85" r="70" fill="none" stroke="#CD1432" stroke-width="12" stroke-dasharray="' + C + '" stroke-dashoffset="' + C + '" style="transition:stroke-dashoffset 1.2s cubic-bezier(.2,.8,.2,1)"/></svg><div class="c"><b></b><span></span></div>';
    g.querySelector("b").textContent = val; g.querySelector(".c span").innerHTML = label;
    setTimeout(function(){ g.querySelectorAll("circle")[1].style.strokeDashoffset = String(C * (1 - val / 100)); }, 80);
    return g;
  }
  function animateBars(root){ setTimeout(function(){ root.querySelectorAll("[data-w]").forEach(function(i){ i.style.width = i.dataset.w; }); }, 80); }
  function sec(title, lead){ var s = el("div","rep-sec"); s.appendChild(el("h3",null,title)); if (lead) s.appendChild(el("p","lead",lead)); return s; }
  function aiSection(promptFn, label){
    var s = sec("A partner’s reading of your answers"); s.hidden = true;
    var box = el("div","ai-box"), out = el("div","out"), note = el("div","note","Written by Claude from your answers and scores. Review it before you rely on it.");
    var b = el("button","btn2",label || "Write the reading with AI"); b.type = "button"; b.style.alignSelf = "flex-start";
    box.appendChild(out); box.appendChild(b); box.appendChild(note); s.appendChild(box);
    if (window.claude && window.claude.use) window.claude.use("sample").then(function(sample){
      if (!sample) return; s.hidden = false;
      b.addEventListener("click", function(){
        b.disabled = true; out.textContent = "Thinking…"; note.textContent = "Written by Claude from your answers and scores. Review it before you rely on it.";
        sample(promptFn(), {onText:function(o){ out.textContent = o.text; }}).then(function(res){
          out.textContent = res.text; b.textContent = "Rewrite"; b.disabled = false;
          if (res.truncated) note.textContent = "The reading was cut short. Try rewriting it.";
        }).catch(function(e){
          b.disabled = false; out.textContent = "";
          if (e && e.code === "not_granted") { s.hidden = true; return; }
          note.textContent = e && e.code === "rate_limited" ? "Too many requests just now. Please try again in a minute." : "The reading could not be written this time. Please try again.";
        });
      });
    }).catch(function(){});
    return s;
  }
  function actionsSection(rep, slug, retakeHref, retakeLabel){
    var s = el("div","rep-sec"), act = el("div","rep-actions");
    act.appendChild(btnLink("#book","Book a session to walk through this report"));
    var dl = el("button","btn2","Download report (.html)"); dl.type = "button"; dl.hidden = true;
    var rt = el("a","link",retakeLabel); rt.href = retakeHref;
    act.appendChild(dl); act.appendChild(rt); s.appendChild(act);
    var f = el("p","rep-foot","Generated automatically from your answers and indicative only. A partner-led review will test these findings against your documents and data."); f.style.marginTop = "18px"; s.appendChild(f);
    if (window.claude && window.claude.use) window.claude.use("downloads").then(function(dls){
      if (!dls) return; dl.hidden = false;
      dl.addEventListener("click", function(){
        var clone = rep.cloneNode(true);
        clone.querySelectorAll(".rep-actions, .ai-box button").forEach(function(n){ n.remove(); });
        clone.querySelectorAll(".ai-box").forEach(function(bx){ if (!bx.querySelector(".out").textContent.trim()) bx.parentNode.remove(); });
        var html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ECOVIS RKCA report</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Adamina&family=Inter:wght@400;500;600&display=swap"><style>' + document.querySelector("style").textContent + ' body{background:#F7F7F7;padding:32px 16px}.report{max-width:1100px;margin:0 auto;animation:none}[hidden]{display:block!important}</style></head><body>' + clone.outerHTML + '</body></html>';
        dl.disabled = true;
        dls.save({filename: slug + ".html", data: html}).catch(function(){}).then(function(){ dl.disabled = false; });
      });
    }).catch(function(){});
    return s;
  }
  function slugify(s){ return String(s || "report").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"") || "report"; }

  /* ================= typeform engine ================= */
  function TF(root, cfg){
    root.innerHTML = '<div class="tf-bar"><i></i></div><div class="tf-stage" aria-live="polite"></div><div class="tf-nav"><span class="tf-c"></span><div><button type="button" class="tf-b" aria-label="Previous question">↑</button><button type="button" class="tf-n" aria-label="Next question">↓</button></div></div>';
    var stage = root.querySelector(".tf-stage"), prog = root.querySelector(".tf-bar i"), cnt = root.querySelector(".tf-c");
    var back = root.querySelector(".tf-b"), next = root.querySelector(".tf-n");
    var Q = cfg.qs, ans = {}, cur = -1, busy = false;
    function render(dir){
      stage.innerHTML = "";
      back.disabled = cur < 0 || cur >= Q.length; next.disabled = cur < 0 || cur >= Q.length;
      prog.style.width = Math.max(0, Math.min(1, cur / Q.length)) * 100 + "%";
      var box = el("div","tf-q" + (dir < 0 ? " back" : ""));
      if (cur < 0) {
        box.classList.add("tf-welcome");
        box.appendChild(el("div","num",cfg.welcome.eb));
        box.appendChild(el("h3",null,cfg.welcome.title));
        var ul = el("ul"); cfg.welcome.bullets.forEach(function(t){ ul.appendChild(el("li",null,t)); }); box.appendChild(ul);
        var ok = el("div","tf-ok"), b = el("button",null,cfg.welcome.cta); b.type = "button"; b.addEventListener("click", function(){ go(1); });
        ok.appendChild(b);
        if (cfg.demo) { var d = el("button","ghost","See a sample report"); d.type = "button"; d.addEventListener("click", function(){ cfg.onDone(cfg.demo, true); }); ok.appendChild(d); }
        box.appendChild(ok); cnt.textContent = cfg.welcome.time; stage.appendChild(box); return;
      }
      var q = Q[cur];
      cnt.textContent = "Question " + (cur + 1) + " of " + Q.length;
      var num = el("div","num"); num.appendChild(el("span",null,(cur + 1) + " →")); if (q.tag) num.appendChild(el("em",null,q.tag)); box.appendChild(num);
      box.appendChild(el("h3",null,q.q));
      if (q.hint) box.appendChild(el("div","hint",q.hint));
      var err = el("div","tf-err");
      if (q.opts) {
        var opts = el("div","tf-opts" + (q.opts.length > 4 ? " grid" : ""));
        q.opts.forEach(function(o, i){
          var b = el("button","tf-opt"); b.type = "button"; b.appendChild(el("span","k",L4[i])); b.appendChild(el("span",null,o));
          var val = q.type === "score" ? i : o;
          if (ans[q.id] === val) b.classList.add("sel");
          b.addEventListener("click", function(){ if (busy) return; busy = true; ans[q.id] = val; opts.querySelectorAll(".tf-opt").forEach(function(x){ x.classList.remove("sel"); }); b.classList.add("sel"); setTimeout(function(){ busy = false; go(1); }, 360); });
          opts.appendChild(b);
        });
        box.appendChild(opts); box.appendChild(err); stage.appendChild(box);
        (opts.querySelector(".sel") || opts.querySelector("button")).focus({preventScroll:true});
      } else {
        var inp = q.type === "long" ? el("textarea","tf-in") : el("input","tf-in");
        if (q.type === "long") inp.rows = 3; else inp.type = "text";
        inp.placeholder = q.ph || "Type your answer here"; inp.value = ans[q.id] || ""; inp.setAttribute("aria-label", q.q);
        inp.addEventListener("keydown", function(e){ if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); go(1); } });
        box.appendChild(inp);
        var ok2 = el("div","tf-ok"), b2 = el("button",null, cur === Q.length - 1 ? cfg.finish : "OK ✓"); b2.type = "button"; b2.addEventListener("click", function(){ go(1); });
        ok2.appendChild(b2);
        if (!q.req && q.type === "long") { var sk = el("button","ghost","Skip"); sk.type = "button"; sk.addEventListener("click", function(){ inp.value = ""; go(1); }); ok2.appendChild(sk); }
        ok2.appendChild(el("span",null, q.type === "long" ? "Enter ↵ to continue · Shift + Enter for a new line" : "press Enter ↵"));
        box.appendChild(ok2); box.appendChild(err); stage.appendChild(box);
        inp.focus({preventScroll:true});
      }
    }
    function go(d){
      if (d > 0 && cur >= 0 && cur < Q.length) {
        var q = Q[cur], e = stage.querySelector(".tf-err");
        if (q.opts && ans[q.id] === undefined) { e.textContent = "Choose an option to continue."; return; }
        if (!q.opts) { var inp = stage.querySelector(".tf-in"), v = inp.value.trim(); if (q.req && !v) { e.textContent = "Please fill this in to continue."; inp.focus(); return; } ans[q.id] = v; }
      }
      cur = Math.max(-1, cur + d);
      if (cur >= Q.length) return finish();
      render(d);
    }
    function finish(){
      prog.style.width = "100%"; back.disabled = true; next.disabled = true; cnt.textContent = "Generating your report"; stage.innerHTML = "";
      var box = el("div","tf-q"); box.appendChild(el("div","num","Report engine"));
      box.appendChild(el("h3",null,"Thank you" + (ans.company ? ", " + ans.company : "") + ". Building your report…"));
      var gen = el("div","gen"); var rows = cfg.steps.map(function(s){ var d = el("div"); d.appendChild(el("i")); d.appendChild(el("span",null,s)); gen.appendChild(d); return d; });
      box.appendChild(gen); stage.appendChild(box);
      var k = 0;
      (function tick(){
        if (k > 0) { rows[k-1].classList.remove("on"); rows[k-1].classList.add("done"); }
        if (k < rows.length) { rows[k].classList.add("on"); k++; setTimeout(tick, 600); return; }
        var data = {}; Object.keys(ans).forEach(function(x){ data[x] = ans[x]; });
        cnt.textContent = "Report ready";
        var ok = el("div","tf-ok"); ok.appendChild(btnLink("#" + cfg.reportId, "Open my report"));
        var again = el("button","ghost","Start again"); again.type = "button"; again.addEventListener("click", function(){ ans = {}; cur = -1; render(1); }); ok.appendChild(again);
        box.appendChild(ok);
        cfg.onDone(data, false);
      })();
    }
    back.addEventListener("click", function(){ go(-1); });
    next.addEventListener("click", function(){ go(1); });
    root.addEventListener("keydown", function(e){
      if (cur < 0 || cur >= Q.length || !Q[cur].opts || e.metaKey || e.ctrlKey || e.altKey) return;
      var i = L4.indexOf(String(e.key).toUpperCase()), bs = stage.querySelectorAll(".tf-opt");
      if (i >= 0 && i < bs.length) { e.preventDefault(); bs[i].click(); }
    });
    render(1);
  }
  function showReport(sectionId, outId){
    var s = document.getElementById(sectionId); s.hidden = false;
    setTimeout(function(){ s.scrollIntoView({behavior:"smooth"}); }, 50);
    return document.getElementById(outId);
  }

  /* ================= GOVERNANCE: subjective quiz + governability report ================= */
  
  
  
  function scan(text){
    var hits = [];
    [[DEP,"dep"],[MAT,"mat"]].forEach(function(pair){ pair[0].forEach(function(re){ re.lastIndex = 0; var m; while ((m = re.exec(text))) { if (!m[0]) { re.lastIndex++; continue; } hits.push({s:m.index, e:m.index + m[0].length, t:pair[1], w:m[0]}); } }); });
    hits.sort(function(a, b){ return a.s - b.s || b.e - a.e; });
    var clean = [], end = -1; hits.forEach(function(h){ if (h.s >= end) { clean.push(h); end = h.e; } });
    return clean;
  }
  function highlight(node, text, hits){
    var pos = 0;
    hits.forEach(function(h){ node.appendChild(document.createTextNode(text.slice(pos, h.s))); var m = el("mark", h.t === "dep" ? "mark-dep" : "mark-mat", text.slice(h.s, h.e)); node.appendChild(m); pos = h.e; });
    node.appendChild(document.createTextNode(text.slice(pos)));
  }
  function govAnalyse(a){
    var totalDep = 0;
    var ms = GOV_M.map(function(m){
      var t = (a[m.id] || "").trim();
      if (!t) return {m:m, t:"", lv:1, none:true, hits:[], dep:0, mat:0};
      var hits = scan(t), dep = hits.filter(function(h){ return h.t === "dep"; }).length, mat = hits.filter(function(h){ return h.t === "mat"; }).length;
      totalDep += dep;
      var lv = 1 + Math.min(2, mat) - Math.min(2, dep);
      if (m.id === "reporting") { var ds = (t.match(/\d+(?=\s*(working )?days?)/gi) || []).map(Number), dmax = ds.length ? Math.max.apply(null, ds) : null; if (dmax !== null) { if (dmax <= 10) lv++; else if (dmax > 15) lv -= 2; } if (/real[- ]?time|live|daily/i.test(t)) lv++; if (/month(s)? later|quarter|year[- ]end|annual/i.test(t)) lv -= 1; }
      if (t.length < 25) lv = Math.min(lv, 1);
      lv = Math.max(0, Math.min(3, lv));
      return {m:m, t:t, lv:lv, none:false, hits:hits, dep:dep, mat:mat, short:t.length < 25};
    });
    var idx = Math.round(ms.reduce(function(s, x){ return s + x.lv; }, 0) / (ms.length * 3) * 100);
    var depLevel = totalDep >= 8 ? 2 : totalDep >= 4 ? 1 : 0;
    var gaps = ms.filter(function(x){ return x.lv < 3; }).map(function(x, i){ return x; }).sort(function(x, y){ return x.lv - y.lv || GOV_M.indexOf(x.m) - GOV_M.indexOf(y.m); }).slice(0, 3);
    gaps.sort(function(x, y){ return GOV_M.indexOf(x.m) - GOV_M.indexOf(y.m); });
    return {a:a, ms:ms, idx:idx, totalDep:totalDep, depLevel:depLevel, gaps:gaps};
  }
  function govVerdict(r){
    if (r.idx >= 80) return "Governance already works without the founder. You are ready to focus on investability and scale.";
    if (r.idx >= 55) return "The foundations are there. Tighten the weakest mandates and the business will run without you in the room.";
    if (r.idx >= 30) return "Too much still runs through people rather than systems. A few targeted mandates will change that quickly.";
    return "The business runs on the founder. This is the most valuable place to start your journey from i to I.";
  }
  function govReport(a){
    var r = govAnalyse(a), out = showReport("gov-report","govOut"); out.innerHTML = "";
    var rep = el("article","report");
    var top = el("div","rep-top"), tl = el("div");
    tl.appendChild(el("div","eb","Governability Report"));
    tl.appendChild(el("div","co",a.company || "Your business"));
    tl.appendChild(el("div","sub","Governance, Risk and Compliance · Generated " + today()));
    tl.appendChild(el("div","verdict",govVerdict(r)));
    var side = el("div","side"); side.appendChild(gauge(r.idx, "governability<br>out of 100"));
    var dep = el("div","dep"); dep.appendChild(el("b",null,"Founder dependency: " + ["Low","Moderate","High"][r.depLevel]));
    dep.appendChild(document.createTextNode(r.totalDep + " dependency signals in your answers"));
    var mt = el("div","meter"); for (var i = 0; i < 3; i++) mt.appendChild(el("i", i <= r.depLevel ? "on" : "")); dep.appendChild(mt);
    side.appendChild(dep); top.appendChild(tl); top.appendChild(side); rep.appendChild(top);
    var s1 = sec("How we read your answers","Each answer is read for two kinds of signal. Highlighted words are what the engine picked up.");
    var lg = el("div","legend"); lg.innerHTML = '<span><i style="background:#FBD5DC"></i>Depends on people or the founder</span><span><i style="background:#DCE7EE"></i>Works through systems, limits or owners</span>'; s1.appendChild(lg);
    var grid = el("div","mand");
    r.ms.forEach(function(x){
      var c = el("div","mcard"), h = el("div","h"), hl = el("div");
      hl.appendChild(el("b",null,x.m.n)); hl.appendChild(el("small",null,"Mechanism: " + x.m.m)); h.appendChild(hl);
      h.appendChild(el("span","chipst l" + x.lv, x.none ? "Not answered" : STATUS[x.lv])); c.appendChild(h);
      var an = el("div","ans" + (x.none ? " none" : ""));
      if (x.none) an.textContent = "No answer given. We have assumed this is still developing."; else { an.appendChild(document.createTextNode("“")); highlight(an, x.t, x.hits); an.appendChild(document.createTextNode("”")); }
      c.appendChild(an);
      if (!x.none) { var ev = el("div","ev"); ev.appendChild(el("span","d",x.dep + " dependency")); ev.appendChild(el("span","m",x.mat + " system")); if (x.short) ev.appendChild(el("span","d","Short answer")); c.appendChild(ev); }
      c.appendChild(el("p",null,x.m.f[x.lv]));
      grid.appendChild(c);
    });
    s1.appendChild(grid); rep.appendChild(s1);
    var s2 = sec("Your governance roadmap", r.gaps.length ? "Your three weakest mandates, in the order they should be fixed." : null);
    if (r.gaps.length) {
      var rd = el("div","road"), labels = ["Days 1 to 30","Days 31 to 60","Days 61 to 90"];
      r.gaps.forEach(function(x, i){ var d = el("div"); d.appendChild(el("span","d",labels[i])); d.appendChild(el("span","m",x.m.n)); d.appendChild(el("p",null,x.m.act)); d.appendChild(el("span","pr","Mechanism: " + x.m.m)); rd.appendChild(d); });
      s2.appendChild(rd);
    } else s2.appendChild(el("p","lead","No gaps worth flagging. The next offering is Investability."));
    rep.appendChild(s2);
    if (a.fix) { var s3 = sec("The one thing you would fix first"); var vq = el("div","vq"); vq.appendChild(el("blockquote",null,"“" + a.fix + "”")); s3.appendChild(vq); rep.appendChild(s3); }
    rep.appendChild(aiSection(function(){
      return "You are a governance partner at ECOVIS RKCA, an advisory firm in India. A founder answered open questions about how their business is governed. Read the answers and write a short partner's reading.\n\nCompany: " + (a.company || "not given") + "\nGovernability score from a keyword engine: " + r.idx + " of 100. Founder dependency: " + ["low","moderate","high"][r.depLevel] + ".\n\n" +
        r.ms.map(function(x){ return x.m.n + " (" + x.m.q + "):\n" + (x.t || "No answer."); }).join("\n\n") + (a.fix ? "\n\nWhat they would fix first:\n" + a.fix : "") +
        "\n\nWrite 150 to 200 words in plain British English, addressed to the founder as 'you', in two short paragraphs with no headings, bullets or markdown. Point to specific things they wrote that show founder dependency or working systems. Say which mandate to start with and why. Do not invent facts, do not promise outcomes. If you mention the philosophy, write 'i to I' exactly in that case.";
    }, "Write the partner’s reading with AI"));
    rep.appendChild(actionsSection(rep, slugify(a.company) + "-governability-report", "#diagnostic", "Retake the governance diagnostic"));
    out.appendChild(rep);
  }
  

  /* ================= INVESTABILITY: MCQ quiz + investability report ================= */
  
  
  function invAnalyse(a){
    var ds = INV_D.map(function(d){ return {d:d, lv:typeof a[d.id] === "number" ? a[d.id] : 0}; });
    var idx = Math.round(ds.reduce(function(s, x){ return s + x.lv; }, 0) / (ds.length * 3) * 100);
    var ph = {}; ["f","i","r"].forEach(function(p){ var xs = ds.filter(function(x){ return x.d.ph === p; }); ph[p] = Math.round(xs.reduce(function(s, x){ return s + x.lv; }, 0) / (xs.length * 3) * 100); });
    var entry = ["f","i","r"].filter(function(p){ return ph[p] < 70; })[0] || "r";
    var flags = ds.filter(function(x){ return x.lv <= 1; }).sort(function(x, y){ return x.lv - y.lv; }).slice(0, 4);
    var verdict = idx >= 75 ? "Investor-ready" : idx >= 45 ? "Investable, with work" : "Not yet investable";
    return {a:a, ds:ds, idx:idx, ph:ph, entry:entry, flags:flags, verdict:verdict};
  }
  function invReport(a){
    var r = invAnalyse(a), out = showReport("inv-report","invOut"); out.innerHTML = "";
    var rep = el("article","report");
    var top = el("div","rep-top"), tl = el("div");
    tl.appendChild(el("div","eb","Investability Report"));
    tl.appendChild(el("div","co",a.company || "Your business"));
    tl.appendChild(el("div","sub","Investability · Generated " + today()));
    tl.appendChild(el("div","verdict",r.verdict + ". " + (r.entry === "f" ? "Start by building the basics: capital follows trust, and trust follows clarity." : r.entry === "i" ? "The basics hold. Work on the challenges next." : "You can take a credible case to capital now.")));
    top.appendChild(tl); top.appendChild(gauge(r.idx, "investability<br>out of 100")); rep.appendChild(top);
    var s1 = sec("What an investor would ask you first", r.flags.length ? "Your weakest answers become an investor’s first questions. Have an answer ready before the first meeting." : null);
    if (r.flags.length) { var fl = el("div","flags"); r.flags.forEach(function(x){ var i = el("div","flag-i"); i.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#CD1432" stroke-width="1.6" aria-hidden="true"><circle cx="10" cy="10" r="8.5"/><path d="M10 5.5v5.5M10 13.5v.6"/></svg>'; var b = el("div"); b.appendChild(el("div","q","“" + x.d.ask + "”")); b.appendChild(el("div","w",x.d.f[x.lv])); i.appendChild(b); fl.appendChild(i); }); s1.appendChild(fl); }
    else s1.appendChild(el("p","lead","No red flags. Your answers hold up to an investor’s first questions."));
    rep.appendChild(s1);
    var s2 = sec("Where you enter our offering","Choose one offering or all three stages. Your entry point is the first stage that is not yet solid.");
    var tr = el("div","ph-track");
    ["f","i","r"].forEach(function(p){
      var c = el("div","ph-c" + (p === r.entry ? " entry" : ""));
      if (p === r.entry) c.appendChild(el("span","flag","Start here"));
      c.appendChild(el("div","nm",PHASES[p])); c.appendChild(el("div","pc",r.ph[p] + "%"));
      var t = el("div","tr"), ti = el("i"); ti.style.width = "0"; ti.dataset.w = r.ph[p] + "%"; t.appendChild(ti); c.appendChild(t);
      var ul = el("ul"); r.ds.filter(function(x){ return x.d.ph === p; }).forEach(function(x){ ul.appendChild(el("li", x.lv <= 1 ? "w" : "", x.d.n + ": " + STATUS[x.lv])); }); c.appendChild(ul);
      tr.appendChild(c);
    });
    s2.appendChild(tr); rep.appendChild(s2);
    var s3 = sec("All ten answers, scored","Each dimension mapped to the offering that addresses it.");
    var tb = el("div","dims");
    r.ds.forEach(function(x){ var row = el("div","dim"); var dn = el("div","dn"); dn.appendChild(el("b",null,x.d.n)); dn.appendChild(el("span",null,x.d.o)); row.appendChild(dn); var dots = el("div","dots"); for (var k = 0; k < 3; k++) dots.appendChild(el("i", k < x.lv ? "f" : "")); row.appendChild(dots); row.appendChild(el("span","chipst l" + x.lv, STATUS[x.lv])); row.appendChild(el("p",null,x.d.f[x.lv])); tb.appendChild(row); });
    s3.appendChild(tb); rep.appendChild(s3);
    rep.appendChild(aiSection(function(){
      return "You are a partner at ECOVIS RKCA, an advisory firm in India, writing the summary of an investability diagnostic for a founder.\nCompany: " + (a.company || "not given") + "\nInvestability score: " + r.idx + " of 100 (" + r.verdict + "). Entry stage: " + PHASES[r.entry] + ".\n" +
        r.ds.map(function(x){ return "- " + x.d.n + ": " + STATUS[x.lv] + ". " + x.d.f[x.lv]; }).join("\n") +
        "\n\nWrite 130 to 170 words in plain British English to the founder as 'you', two short paragraphs, no headings, bullets or markdown. Explain how an investor would see the business today and the first two things to fix. Do not invent facts or promise outcomes.";
    }, "Write the investor’s view with AI"));
    rep.appendChild(actionsSection(rep, slugify(a.company) + "-investability-report", "#inv-quiz", "Retake the investability diagnostic"));
    out.appendChild(rep); animateBars(rep);
  }
  

  TF(document.getElementById("itf"), {
    welcome:{eb:"Investability Diagnostic", title:"Would capital say yes to your business today?", bullets:["10 multiple-choice questions","Tap an answer, or press A to D","An instant investability report"], cta:"Start", time:"About 4 minutes"},
    qs:[{id:"company", type:"text", q:"First, what is your company called?", ph:"Company name", req:true}].concat(INV_D.map(function(d){ return {id:d.id, type:"score", q:d.q, opts:d.opts, tag:PHASES[d.ph]}; })),
    steps:["Scoring ten investor questions","Placing you on the three stages","Listing what an investor would ask","Writing your investability report"],
    finish:"Generate my report", reportId:"inv-report", demo:INV_DEMO, onDone:function(d){ invReport(d); }
  });

  /* ================= QUICK DIAGNOSTIC: pick your top three challenges ================= */
  
  
  function mountQD(root){
    var picked = [];
    function draw(){
      root.innerHTML = "";
      var head = el("div","qd-head");
      head.appendChild(el("div","qd-eb","Quick diagnostic"));
      head.appendChild(el("h2",null,"What is holding your business back?"));
      head.appendChild(el("p",null,"Pick the three that sound most like you. It takes thirty seconds."));
      root.appendChild(head);
      var grid = el("div","qd-grid");
      QD_CH.forEach(function(c){
        var on = picked.indexOf(c.id) >= 0;
        var b = el("button","qd-c" + (on ? " on" : "")); b.type = "button"; b.setAttribute("aria-pressed", String(on));
        var tick = el("span","qd-t"); tick.innerHTML = on ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>' : "";
        b.appendChild(tick); b.appendChild(el("span",null,c.t));
        if (!on && picked.length >= 3) b.disabled = true;
        b.addEventListener("click", function(){ if (on) picked.splice(picked.indexOf(c.id), 1); else if (picked.length < 3) picked.push(c.id); draw(); });
        grid.appendChild(b);
      });
      root.appendChild(grid);
      var bar = el("div","qd-bar");
      bar.appendChild(el("span","qd-cnt", picked.length + " of 3 picked"));
      var go = el("button","btn"); go.type = "button"; go.innerHTML = '<span>See where to start</span>' + ARR; go.disabled = picked.length < 3;
      go.addEventListener("click", result);
      bar.appendChild(go); root.appendChild(bar);
    }
    function result(){
      var cnt = {g:0,i:0,s:0}; picked.forEach(function(id){ cnt[QD_CH.filter(function(c){ return c.id === id; })[0].o]++; });
      var top = ["g","i","s"].sort(function(a, b){ return cnt[b] - cnt[a]; })[0];
      var O = QD_OFF[top];
      root.innerHTML = "";
      var r = el("div","qd-res");
      r.appendChild(el("div","qd-eb","Your quick diagnostic"));
      var h = el("h2"); h.appendChild(document.createTextNode("Start with ")); h.appendChild(el("span","qd-off",O.n)); h.appendChild(document.createTextNode(".")); r.appendChild(h);
      r.appendChild(el("p","qd-why",O.why));
      var ul = el("div","qd-list");
      picked.forEach(function(id){ var c = QD_CH.filter(function(x){ return x.id === id; })[0]; var row = el("div","qd-row"); var q = el("div","qd-q","“" + c.t + "”"); var a = el("div","qd-a"); a.appendChild(el("b",null,QD_OFF[c.o].n + ": ")); a.appendChild(document.createTextNode(c.help)); row.appendChild(q); row.appendChild(a); ul.appendChild(row); });
      r.appendChild(ul);
      var act = el("div","rep-actions"); act.appendChild(btnLink(O.act[0], O.act[1]));
      var ex = el("a","link",O.cta); ex.href = O.href; act.appendChild(ex);
      var again = el("button","linkbtn","Pick again"); again.type = "button"; again.addEventListener("click", function(){ picked = []; draw(); }); act.appendChild(again);
      r.appendChild(act);
      root.appendChild(r);
    }
    draw();
  }
  document.querySelectorAll("[data-qd]").forEach(mountQD);

  /* ================= SCALE: calendly-style booking ================= */
  var EXPERTS = {
    pankaj:{n:"Pankaj Bhargava", r:"Strategy & Performance", img:document.querySelector('img[alt="Pankaj Bhargava"]')},
    dheeraj:{n:"Dheeraj Rathi", r:"Finance & Capital", img:document.querySelector('img[alt="Dheeraj Rathi"]')},
    deepa:{n:"Deepa Rathi", r:"Professional Services", img:document.querySelector('img[alt="Deepa Rathi"]')},
    sanjeev:{n:"Sanjeev Bindal", r:"Professional Services", img:document.querySelector('img[alt="Sanjeev Bindal"]')}
  };
  
  var bk = document.getElementById("bk"), B = {goal:null, x:null, date:null, time:null, month:null};
  
  function seeded(d, i){ var n = d.getFullYear() * 400 + d.getMonth() * 32 + d.getDate() + i * 7; return ((n * 9301 + 49297) % 233280) / 233280; }
  function avail(d){ var t = new Date(); t.setHours(0,0,0,0); var max = new Date(t); max.setDate(max.getDate() + 45); var w = d.getDay(); return d > t && d <= max && w !== 0 && w !== 6 && seeded(d, 0) > 0.18; }
  function fmtDate(d){ return d.toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long"}); }
  function bkSide(){
    var s = el("div","bk-side"), x = EXPERTS[B.x || "dheeraj"];
    if (B.x) { var ex = el("div","bk-exp"); if (x.img) { var im = el("img"); im.src = x.img.src; im.alt = ""; ex.appendChild(im); } var t = el("div"); t.appendChild(el("b",null,x.n)); t.appendChild(el("span",null,x.r + " · Partner")); ex.appendChild(t); s.appendChild(ex); }
    s.appendChild(el("h3",null, B.goal ? B.goal.t : "Growth strategy session"));
    var meta = el("div","bk-meta");
    meta.innerHTML = '<div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>45 minutes</div><div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" stroke-width="1.8"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/></svg>Video call, or at our Mumbai office</div><div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" stroke-width="1.8"><path d="M5 12l4 4L19 6"/></svg>No preparation needed</div>';
    if (B.date && B.time) { var d = el("div"); d.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CD1432" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>'; d.appendChild(document.createTextNode(fmtDate(B.date) + ", " + B.time + " IST")); d.style.color = "var(--ink)"; d.style.fontWeight = "600"; meta.appendChild(d); }
    s.appendChild(meta);
    var g = el("div","bk-get"); g.appendChild(el("b",null,"You will leave with"));
    var ul = el("ul"); [B.goal ? B.goal.get : "Where your next phase of growth will come from","Your next three moves, on one page","A clear view of what to stop doing"].forEach(function(t){ ul.appendChild(el("li",null,t)); }); g.appendChild(ul); s.appendChild(g);
    return s;
  }
  function steps(n){ var s = el("div","bk-steps"); ["Goal","Time","Confirm"].forEach(function(t, i){ s.appendChild(el("span", i < n ? "ok" : i === n ? "on" : "", (i + 1) + ". " + t)); }); return s; }
  function bkRender(view){
    bk.innerHTML = ""; bk.appendChild(bkSide());
    var m = el("div","bk-main");
    if (view === "goal") {
      m.appendChild(steps(0)); m.appendChild(el("h4",null,"What do you want to walk away with?"));
      var gs = el("div","goals");
      GOALS.forEach(function(g){ var b = el("button","goal"); b.type = "button"; b.innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' + g.ic + '</svg>'; b.appendChild(el("b",null,g.t)); b.appendChild(el("span",null,g.s)); b.addEventListener("click", function(){ B.goal = g; B.x = g.x; B.date = null; B.time = null; bkRender("time"); }); gs.appendChild(b); });
      m.appendChild(gs);
    } else if (view === "time") {
      m.appendChild(steps(1));
      var hd = el("div"); hd.style.cssText = "display:flex;justify-content:space-between;align-items:baseline;gap:12px;flex-wrap:wrap";
      hd.appendChild(el("h4",null,"Select a date and time"));
      var sw = el("span","bk-note"); sw.appendChild(document.createTextNode("With ")); var sel = el("select"); sel.style.cssText = "font:inherit;font-size:13px;padding:4px 6px;border:1px solid var(--line)";
      Object.keys(EXPERTS).forEach(function(k){ var o = el("option",null,EXPERTS[k].n); o.value = k; if (k === B.x) o.selected = true; sel.appendChild(o); });
      sel.addEventListener("change", function(){ B.x = sel.value; B.time = null; bkRender("time"); }); sw.appendChild(sel); hd.appendChild(sw); m.appendChild(hd);
      var now = new Date(); if (!B.month) B.month = new Date(now.getFullYear(), now.getMonth(), 1);
      var wrap = el("div","cal-wrap"), left = el("div"), ch = el("div","cal-h");
      var pv = el("button",null,"‹"), nx = el("button",null,"›"); pv.type = nx.type = "button"; pv.setAttribute("aria-label","Previous month"); nx.setAttribute("aria-label","Next month");
      pv.disabled = B.month.getFullYear() === now.getFullYear() && B.month.getMonth() === now.getMonth();
      var lim = new Date(now); lim.setDate(lim.getDate() + 45); nx.disabled = B.month.getFullYear() * 12 + B.month.getMonth() >= lim.getFullYear() * 12 + lim.getMonth();
      pv.addEventListener("click", function(){ B.month = new Date(B.month.getFullYear(), B.month.getMonth() - 1, 1); bkRender("time"); });
      nx.addEventListener("click", function(){ B.month = new Date(B.month.getFullYear(), B.month.getMonth() + 1, 1); bkRender("time"); });
      ch.appendChild(pv); ch.appendChild(el("b",null,B.month.toLocaleDateString("en-GB",{month:"long",year:"numeric"}))); ch.appendChild(nx); left.appendChild(ch);
      var cal = el("div","cal"); ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].forEach(function(d){ cal.appendChild(el("span","dw",d)); });
      var first = (B.month.getDay() + 6) % 7; for (var i = 0; i < first; i++) cal.appendChild(el("span"));
      var dim = new Date(B.month.getFullYear(), B.month.getMonth() + 1, 0).getDate();
      for (var dd = 1; dd <= dim; dd++) (function(dd){
        var d = new Date(B.month.getFullYear(), B.month.getMonth(), dd), b = el("button",null,String(dd)); b.type = "button";
        if (d.toDateString() === now.toDateString()) b.classList.add("today");
        if (avail(d)) { b.classList.add("av"); b.setAttribute("aria-label", fmtDate(d)); b.addEventListener("click", function(){ B.date = d; B.time = null; bkRender("time"); }); } else b.disabled = true;
        if (B.date && d.toDateString() === B.date.toDateString()) b.classList.add("sel");
        cal.appendChild(b);
      })(dd);
      left.appendChild(cal); wrap.appendChild(left);
      var right = el("div","slots");
      if (!B.date) { var nd = null, t = new Date(now); for (var k = 0; k < 50 && !nd; k++) { t.setDate(t.getDate() + 1); if (avail(t)) nd = new Date(t); } right.appendChild(el("div","bk-note","Pick a highlighted date. The next available is " + (nd ? fmtDate(nd) : "soon") + ".")); }
      else {
        right.appendChild(el("div","d",fmtDate(B.date)));
        TIMES.forEach(function(tm, i){
          var row = el("div","slot"), b = el("button",null,tm); b.type = "button";
          var taken = seeded(B.date, i + 1 + Object.keys(EXPERTS).indexOf(B.x)) < 0.3;
          if (taken) { b.className = "taken"; b.disabled = true; b.setAttribute("aria-label", tm + ", taken"); }
          else if (B.time === tm) { b.className = "cf"; b.textContent = tm; var nb = el("button","cf","Next"); nb.type = "button"; nb.style.background = "var(--red)"; nb.style.borderColor = "var(--red)"; nb.addEventListener("click", function(){ bkRender("confirm"); }); row.appendChild(b); row.appendChild(nb); right.appendChild(row); return; }
          else b.addEventListener("click", function(){ B.time = tm; bkRender("time"); });
          row.appendChild(b); right.appendChild(row);
        });
        right.appendChild(el("div","bk-note","Times in India Standard Time"));
      }
      wrap.appendChild(right); m.appendChild(wrap);
      var bkb = el("button","linkbtn","← Change goal"); bkb.type = "button"; bkb.addEventListener("click", function(){ bkRender("goal"); }); m.appendChild(bkb);
    } else if (view === "confirm") {
      m.appendChild(steps(2)); m.appendChild(el("h4",null,"Three details and you are booked"));
      var f = el("form","bk-form"); f.setAttribute("novalidate","");
      [["Your name","name","text","name"],["Work email","email","email","email"],["Company","company","text","organization"]].forEach(function(x){ var l = el("label",null,x[0]); var i = el("input"); i.name = x[1]; i.type = x[2]; i.autocomplete = x[3]; i.required = true; l.appendChild(i); f.appendChild(l); });
      var err = el("div","tf-err"); err.style.color = "var(--red)";
      var row = el("div","row"); row.style.gridColumn = "1/-1";
      var sb = el("button","btn"); sb.type = "submit"; sb.innerHTML = '<span>Confirm booking</span>' + ARR; row.appendChild(sb);
      var bb = el("button","linkbtn","← Change time"); bb.type = "button"; bb.addEventListener("click", function(){ bkRender("time"); }); row.appendChild(bb);
      f.appendChild(row); f.appendChild(err); err.style.gridColumn = "1/-1";
      f.addEventListener("submit", function(e){ e.preventDefault(); var v = {}; var ok = true; f.querySelectorAll("input").forEach(function(i){ v[i.name] = i.value.trim(); if (!v[i.name]) ok = false; }); if (!ok) { err.textContent = "Please fill in all three."; return; } if (!/^\S+@\S+\.\S+$/.test(v.email)) { err.textContent = "Please check the email address."; return; } B.who = v; bkRender("done"); });
      m.appendChild(f);
      m.appendChild(el("div","bk-note","We use these details only to send the calendar invitation."));
      setTimeout(function(){ var i = f.querySelector("input"); if (i) i.focus({preventScroll:true}); }, 50);
    } else if (view === "done") {
      var dn = el("div","bk-done");
      var tk = el("div","tick"); tk.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4"><path d="M5 12l5 5L20 7"/></svg>'; dn.appendChild(tk);
      dn.appendChild(el("h4",null,"Your slot is held, " + B.who.name.split(" ")[0] + "."));
      dn.appendChild(el("div","bk-sum",fmtDate(B.date) + " at " + B.time + " IST · 45 minutes with " + EXPERTS[B.x].n + " · " + B.goal.t));
      dn.appendChild(el("p",null,"The partner confirms by email to " + B.who.email + " within one working day, with a calendar invitation. Two days before, you get a one-page pre-read so the 45 minutes go straight to your next moves."));
      var row = el("div","rep-actions");
      var p = B.time.split(":"), st = new Date(B.date.getFullYear(), B.date.getMonth(), B.date.getDate(), +p[0], +p[1]), en = new Date(st.getTime() + 45 * 60000);
      function z(n){ return String(n).padStart(2,"0"); }
      function fm(d){ return d.getFullYear() + z(d.getMonth() + 1) + z(d.getDate()) + "T" + z(d.getHours()) + z(d.getMinutes()) + "00"; }
      var gc = el("a","btn2","Add to Google Calendar"); gc.target = "_blank"; gc.rel = "noopener"; gc.style.textDecoration = "none";
      gc.href = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("ECOVIS RKCA growth session with " + EXPERTS[B.x].n) + "&dates=" + fm(st) + "/" + fm(en) + "&ctz=Asia/Kolkata&details=" + encodeURIComponent(B.goal.t);
      row.appendChild(gc);
      var again = el("button","linkbtn","Book another session"); again.type = "button"; again.addEventListener("click", function(){ B = {goal:null,x:null,date:null,time:null,month:null}; bkRender("goal"); }); row.appendChild(again);
      dn.appendChild(row);
      dn.appendChild(el("div","bk-note","Website concept: connect this to Calendly or Cal.com to send real invitations."));
      m.appendChild(dn);
    }
    bk.appendChild(m);
  }
  bkRender("goal");

  /* i to I Journey slider */
  (function(){
    var ST = ["Startup","Establishment","Growth","Scale"];
    var LC = {
      focus:["Survival","Establishing the business","Reaching one level of scale","Scaling up in new ways"],
      ch:["The right offer, the first customers","Repeatable, profitable sales","Growing while staying profitable","New businesses and new markets"],
      bb:["The founder’s time, effort and ideas","A team beyond the founder; cash flow","A planned approach to growth; funding","Innovation; built to outlast the founders"],
      pf:["Playing “the CEO” too early","The founder still drives everything","Assuming the past will repeat","Trapped by old systems"]
    };
    document.querySelectorAll("[data-itoi-journey]").forEach(function(section){
      var r = section.querySelector("[data-ph-range]"); if (!r) return;
      var gi = section.querySelector(".ph7-glyph .g-sm"), gI = section.querySelector(".ph7-glyph .g-lg");
      var sn = section.querySelector("[data-ph-stage]"), sc = section.querySelector("[data-ph-stage-number]");
      var rows = section.querySelectorAll(".ph7-row .tx"), cur = -1;
      function setStage(s){
        if (s === cur) return; cur = s;
        sn.textContent = ST[s]; sc.textContent = "Stage " + (s + 1) + " of 4";
        rows.forEach(function(x){ x.classList.add("fade"); setTimeout(function(){ x.textContent = LC[x.dataset.k][s]; x.classList.remove("fade"); }, 180); });
      }
      function upd(){
        var t = r.value / 100;
        r.style.setProperty("--p", r.value + "%");
        gi.style.opacity = String(Math.max(0, 1 - t * 2.8)); gi.style.transform = "scale(" + (1 + t * 0.9) + ")";
        gI.style.opacity = String(Math.min(1, Math.max(0, (t - 0.36) * 3))); gI.style.transform = "scale(" + (0.5 + t * 0.5) + ")";
        setStage(Math.min(3, Math.floor(t * 4)));
      }
      r.addEventListener("input", upd);
      section.querySelectorAll(".ph7-slider .end").forEach(function(b){ b.addEventListener("click", function(){
        var target = +b.dataset.v, start = +r.value, t0 = null;
        function step(ts){ if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / 900), e = 1 - Math.pow(1 - k, 3); r.value = String(Math.round(start + (target - start) * e)); upd(); if (k < 1) requestAnimationFrame(step); }
        requestAnimationFrame(step);
      }); });
      rows.forEach(function(x){ x.textContent = LC[x.dataset.k][0]; });
      upd();
      if (section.hasAttribute("data-scroll-driven") && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        var scrollFrame = null;
        function syncToScroll(){
          scrollFrame = null;
          if (section.closest(".page").hidden) return;
          var rect = section.getBoundingClientRect();
          var distance = Math.max(1, section.offsetHeight - window.innerHeight);
          var progress = Math.max(0, Math.min(1, -rect.top / distance));
          var nextValue = Math.round(progress * 100);
          if (+r.value !== nextValue) { r.value = String(nextValue); upd(); }
        }
        function queueScrollSync(){
          if (scrollFrame !== null) return;
          scrollFrame = requestAnimationFrame(syncToScroll);
        }
        lifecycle.listen(window, "scroll", queueScrollSync, {passive:true});
        lifecycle.listen(window, "resize", queueScrollSync);
        queueScrollSync();
      }
    });
  })();
  /* ================= v10: contact drawer ("Want to scale?") ================= */
  var ctOv = document.getElementById("ct"), ctBody = document.getElementById("ctBody");
  
  
  var ctLastFocus = null;
  function openContact(topic){
    ctLastFocus = document.activeElement;
    var picked = topic ? [CT_MAP[topic] || topic] : [];
    ctBody.innerHTML = "";
    ctBody.appendChild(el("div","ct-k","Let’s talk"));
    var h = el("h2",null,"Tell us who you are. We’ll take it from there."); h.id = "ctTitle"; ctBody.appendChild(h);
    ctBody.appendChild(el("p","ct-lead","Three details, thirty seconds. A partner reads every message and replies personally."));
    var f = el("form","ct-f"); f.setAttribute("novalidate","");
    function field(lbl, name, type, ac, req){ var l = el("label",null,lbl + (req ? "" : " (optional)")); var i = el("input"); i.name = name; i.type = type; i.autocomplete = ac; l.appendChild(i); return l; }
    var two = el("div","two"); two.appendChild(field("Your name","name","text","name",true)); two.appendChild(field("Company","company","text","organization",true)); f.appendChild(two);
    var two2 = el("div","two"); two2.appendChild(field("Work email","email","email","email",true)); two2.appendChild(field("Phone","phone","tel","tel",false)); f.appendChild(two2);
    f.appendChild(el("label",null,"Where do you need help first? (pick any)"));
    var chips = el("div","ct-chips");
    CT_TOPICS.forEach(function(t){ var b = el("button",null,t); b.type = "button"; b.setAttribute("aria-pressed", String(picked.indexOf(t) >= 0)); b.addEventListener("click", function(){ var i = picked.indexOf(t); if (i >= 0) picked.splice(i, 1); else picked.push(t); b.setAttribute("aria-pressed", String(i < 0)); }); chips.appendChild(b); });
    f.lastChild.after(chips);
    var ml = el("label",null,"Anything we should know? (optional)"); var ta = el("textarea"); ta.name = "msg"; ta.rows = 2; ml.appendChild(ta); f.appendChild(ml);
    var err = el("div","ct-err"); f.appendChild(err);
    var sb = el("button","btn"); sb.type = "submit"; sb.innerHTML = '<span>Get in touch</span>' + ARR; sb.style.alignSelf = "flex-start"; f.appendChild(sb);
    f.addEventListener("submit", function(e){
      e.preventDefault();
      var v = {}; f.querySelectorAll("input,textarea").forEach(function(i){ v[i.name] = i.value.trim(); });
      if (!v.name || !v.company || !v.email) { err.textContent = "Please add your name, company and work email."; return; }
      if (!/^\S+@\S+\.\S+$/.test(v.email)) { err.textContent = "Please check the email address."; return; }
      ctBody.innerHTML = "";
      var d = el("div","ct-done");
      var tk = el("div","tick"); tk.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4"><path d="M5 12l5 5L20 7"/></svg>'; d.appendChild(tk);
      var h2 = el("h2",null,"Thank you, " + v.name.split(" ")[0] + "."); h2.id = "ctTitle"; d.appendChild(h2);
      d.appendChild(el("p","ct-lead","A partner will reply to " + v.email + (picked.length ? " about " + picked.join(", ").toLowerCase() : "") + "."));
      var c = el("button","link w as-btn","Close"); c.type = "button"; c.addEventListener("click", closeContact); d.appendChild(c);
      d.appendChild(el("p","ct-note","Placeholder: this form is not connected yet. We will link it to our inbox before launch."));
      ctBody.appendChild(d);
    });
    ctBody.appendChild(f);
    var alt = el("p","ct-alt"); alt.appendChild(document.createTextNode("Prefer email? ")); var a = el("a",null,"info@ecovisrkca.com"); a.href = "mailto:info@ecovisrkca.com" + (topic ? "?subject=" + encodeURIComponent("About " + topic) : ""); alt.appendChild(a); ctBody.appendChild(alt);
    ctBody.appendChild(el("p","ct-note","Placeholder: this form is not connected yet. We will link it to our inbox before launch."));
    ctOv.hidden = false;
    setTimeout(function(){ var i = f.querySelector("input"); if (i) i.focus(); }, 60);
  }
  function closeContact(){ ctOv.hidden = true; if (location.hash === "#contact") history.replaceState(null, "", "#" + (curPage || "home")); if (ctLastFocus && ctLastFocus.focus) ctLastFocus.focus(); }
  document.getElementById("ctClose").addEventListener("click", closeContact);
  ctOv.addEventListener("click", function(e){ if (e.target === ctOv) closeContact(); });

  /* notify-me modal (placeholder) */
  var ntOv = document.getElementById("nt"), ntBody = document.getElementById("ntBody");
  function openNotify(title){
    ntBody.innerHTML = "";
    ntBody.appendChild(el("div","ct-k","Notify me"));
    var h = el("h2",null,title); h.id = "ntTitle"; h.style.fontSize = "clamp(24px,2.6vw,30px)"; ntBody.appendChild(h);
    ntBody.appendChild(el("p","ct-lead","Leave your email and we’ll write to you the day it is out."));
    var f = el("form","ct-f"); f.setAttribute("novalidate","");
    var l = el("label",null,"Email"); var i = el("input"); i.type = "email"; i.autocomplete = "email"; l.appendChild(i); f.appendChild(l);
    var err = el("div","ct-err"); f.appendChild(err);
    var sb = el("button","btn"); sb.type = "submit"; sb.innerHTML = '<span>Notify me</span>' + ARR; sb.style.alignSelf = "flex-start"; f.appendChild(sb);
    f.addEventListener("submit", function(e){ e.preventDefault(); if (!/^\S+@\S+\.\S+$/.test(i.value.trim())) { err.textContent = "Please check the email address."; return; } ntBody.innerHTML = ""; var d = el("div","ct-done"); var tk = el("div","tick"); tk.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4"><path d="M5 12l5 5L20 7"/></svg>'; d.appendChild(tk); d.appendChild(el("h2",null,"You’re on the list.")); d.appendChild(el("p","ct-note","Placeholder: this is not connected to a mailing list yet. We will work on this later.")); ntBody.appendChild(d); });
    ntBody.appendChild(f);
    ntBody.appendChild(el("p","ct-note","Placeholder: this is not connected to a mailing list yet. We will work on this later."));
    ntOv.hidden = false; setTimeout(function(){ i.focus(); }, 60);
  }
  document.getElementById("ntClose").addEventListener("click", function(){ ntOv.hidden = true; });
  ntOv.addEventListener("click", function(e){ if (e.target === ntOv) ntOv.hidden = true; });
  lifecycle.listen(document, "keydown", function(e){ if (e.key === "Escape") { if (!ctOv.hidden) closeContact(); if (!ntOv.hidden) ntOv.hidden = true; } });
  lifecycle.listen(document, "click", function(e){
    var c = e.target.closest && e.target.closest("[data-contact]");
    if (c) { e.preventDefault(); openContact(c.getAttribute("data-topic")); return; }
    var n = e.target.closest && e.target.closest("[data-notify]");
    if (n) { e.preventDefault(); openNotify(n.getAttribute("data-notify")); }
  });

  /* ================= v10: Governance, Risk and Compliance diagnostic ================= */
  
  
  
  function grcResult(a){
    var cs = {}; Object.keys(GRC_C).forEach(function(k){ var qs = GRC_Q.filter(function(q){ return q.c === k; }); cs[k] = Math.round(qs.reduce(function(s, q){ return s + (typeof a[q.id] === "number" ? 2 - a[q.id] : 0); }, 0) / (qs.length * 2) * 100); });
    var all = Math.round(Object.keys(cs).reduce(function(s, k){ return s + cs[k]; }, 0) / 5);
    var weakest = Object.keys(cs).sort(function(x, y){ return cs[x] - cs[y]; })[0];
    var key = all >= 75 ? "ok" : (weakest === "perf" ? "people" : weakest);
    var R = GRC_R[key];
    var s = document.getElementById("grc-result"); s.hidden = false; var out = document.getElementById("grcOut"); out.innerHTML = "";
    var rep = el("article","report");
    var top = el("div","rep-top"), tl = el("div");
    tl.appendChild(el("span","gr-type","Your result: " + R.t));
    tl.appendChild(el("div","co",R.h));
    tl.appendChild(el("div","verdict",R.p));
    top.appendChild(tl); top.appendChild(gauge(all, "control score<br>out of 100")); rep.appendChild(top);
    var s1 = sec("Where you stand","Scored from your answers, area by area. The darkest bar is where to start.");
    var bars = el("div","gr-bars");
    Object.keys(GRC_C).forEach(function(k){ var b = el("div","gr-b" + (k === weakest && key !== "ok" ? " weak" : "")); var t = el("div","t"), i = el("i"); i.style.height = "0"; i.dataset.h = cs[k] + "%"; t.appendChild(i); b.appendChild(t); b.appendChild(el("b",null,GRC_C[k])); b.appendChild(el("span",null,cs[k] + "%")); bars.appendChild(b); });
    s1.appendChild(bars); rep.appendChild(s1);
    var s2 = sec("Your first three moves"); var ul = el("ol","gr-moves"); R.m.forEach(function(m){ ul.appendChild(el("li",null,m)); }); s2.appendChild(ul); rep.appendChild(s2);
    var s3 = el("div","rep-sec"), act = el("div","rep-actions");
    var c = el("button","btn as-btn"); c.type = "button"; c.setAttribute("data-contact",""); c.setAttribute("data-topic","Governance, Risk and Compliance"); c.innerHTML = '<span>Talk to a partner about this</span>' + ARR; act.appendChild(c);
    var g = el("a","link",R.go[1]); g.href = R.go[0]; act.appendChild(g);
    var rt = el("a","link","Retake"); rt.href = "#grc-diagnostic"; act.appendChild(rt);
    s3.appendChild(act); s3.appendChild(el("p","rep-foot","Indicative only, based on your own answers.")); s3.lastChild.style.marginTop = "16px";
    rep.appendChild(s3); out.appendChild(rep);
    setTimeout(function(){ rep.querySelectorAll("[data-h]").forEach(function(i){ i.style.height = i.dataset.h; }); s.scrollIntoView({behavior:"smooth"}); }, 80);
  }
  TF(document.getElementById("gtf2"), {
    welcome:{eb:"Governance diagnostic", title:"How much control do you really have over your business?", bullets:["14 quick questions","Yes, Partly or Not yet","One of five results, with your first three moves"], cta:"Start", time:"About 3 minutes"},
    qs:GRC_Q.map(function(q){ return {id:q.id, type:"score", q:q.q, opts:["Yes","Partly","Not yet"], tag:GRC_C[q.c]}; }),
    steps:["Scoring five areas of your business","Finding where control is weakest","Choosing your result","Writing your first three moves"],
    finish:"See my result", reportId:"grc-result", onDone:function(d){ grcResult(d); }
  });

  /* ================= v10: products stage ================= */
  
  var prCur = 0, prRot = 0, prTimer = null;
  var prPlate = document.getElementById("prPlate"), prDots = document.getElementById("prDots");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function typeInto(node, text, speed, done){
    clearTimeout(node._t); node.textContent = "";
    if (reduce) { node.textContent = text; if (done) done(); return; }
    var i = 0; (function step(){ node.textContent = text.slice(0, ++i); if (i < text.length) node._t = setTimeout(step, speed); else if (done) done(); })();
  }
  var STEP = 360 / PRODUCTS.length;
  PRODUCTS.forEach(function(p, i){
    var t = el("button","p2-tile"); t.type = "button"; t.style.setProperty("--a", (i * STEP) + "deg");
    var inner = el("span","p2-in"); inner.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' + p.ic + '</svg>'; inner.appendChild(el("span",null,p.n));
    t.appendChild(inner); t.setAttribute("aria-label", p.n);
    t.addEventListener("click", function(){ prShow(i, true); }); prPlate.appendChild(t);
    prDots.appendChild(el("i"));
  });
  function prLayout(){
    prPlate.style.setProperty("--r", (-prRot * STEP) + "deg");
    prPlate.querySelectorAll(".p2-tile").forEach(function(t, i){ t.classList.toggle("on", i === prCur); });
    prDots.querySelectorAll("i").forEach(function(d, i){ d.classList.toggle("on", i === prCur); });
  }
  function prShow(i, user){
    var n = PRODUCTS.length, to = (i + n) % n, delta = (to - prCur + n) % n; if (delta > n / 2) delta -= n;
    prRot += delta; prCur = to; prLayout();
    var ix = document.getElementById("prIdx"); ix.textContent = "0" + (prCur + 1) + " / 0" + n; ix.appendChild(el("span","pr-kind",PRODUCTS[prCur].k.toUpperCase()));
    typeInto(document.getElementById("prName"), PRODUCTS[prCur].n, 40);
    var dsc = document.getElementById("prDesc"); dsc.style.opacity = 0; setTimeout(function(){ dsc.textContent = PRODUCTS[prCur].d; dsc.style.transition = "opacity .6s"; dsc.style.opacity = 1; }, reduce ? 0 : 300);
    if (user) { clearInterval(prTimer); prTimer = null; }
  }
  document.getElementById("prPrev").addEventListener("click", function(){ prShow(prCur - 1, true); });
  document.getElementById("prNext").addEventListener("click", function(){ prShow(prCur + 1, true); });
  function prEnter(){
    clearInterval(prTimer); prTimer = null;
    typeInto(document.getElementById("prType"), "Products and services you can run a business on.", 34);
    prShow(prCur);
    if (!reduce) prTimer = setInterval(function(){ if (curPage === "products") prShow(prCur + 1); }, 5200);
  }


  /* ================= v13: inline "Tell us who you are" ================= */
  document.querySelectorAll(".cc-form").forEach(function(box){
    var f = el("form","ccf"); f.setAttribute("novalidate","");
    function inp(ph, name, type, ac){ var i = el("input"); i.name = name; i.type = type; i.placeholder = ph; i.autocomplete = ac; i.setAttribute("aria-label", ph); return i; }
    f.appendChild(inp("Your name","name","text","name"));
    f.appendChild(inp("Work email","email","email","email"));
    f.appendChild(inp("Company","company","text","organization"));
    var sel = el("select"); sel.name = "need"; sel.setAttribute("aria-label","Where do you need help first?");
    var o0 = el("option",null,"Where do you need help first?"); o0.value = ""; sel.appendChild(o0);
    CT_TOPICS.forEach(function(t){ var o = el("option",null,t); o.value = t; sel.appendChild(o); });
    f.appendChild(sel);
    var sb = el("button","btn inv"); sb.type = "submit"; sb.innerHTML = '<span>Send</span>' + ARR; f.appendChild(sb);
    var err = el("div","ccf-err"); f.appendChild(err);
    f.addEventListener("submit", function(e){
      e.preventDefault(); var v = {}; f.querySelectorAll("input,select").forEach(function(i){ v[i.name] = i.value.trim(); });
      if (!v.name || !v.email || !v.company) { err.textContent = "Please add your name, work email and company."; return; }
      if (!/^\S+@\S+\.\S+$/.test(v.email)) { err.textContent = "Please check the email address."; return; }
      box.innerHTML = ""; var dn = el("div","ccf-done");
      dn.appendChild(el("b",null,"Thank you, " + v.name.split(" ")[0] + "."));
      dn.appendChild(el("span",null,"A partner will reply to " + v.email + (v.need ? " about " + v.need.toLowerCase() : "") + "."));
      box.appendChild(dn);
    });
    box.appendChild(f);
    box.appendChild(el("p","ccf-note","Placeholder: this form is not connected yet. We will link it to our inbox before launch."));
  });
  /* ================= v10: ACE wheel arrows ================= */
  (function(){
    var g = document.querySelector(".w2-arrows"); if (!g) return;
    var R = 168, c = 210, ns = "http://www.w3.org/2000/svg";
    for (var k = 0; k < 6; k++) {
      var a = (k * 60 + 30) * Math.PI / 180, x = c + R * Math.sin(a), y = c - R * Math.cos(a);
      var p = document.createElementNS(ns, "path");
      var deg = k * 60 + 30;
      p.setAttribute("d", "M-6,-7 L4,0 L-6,7");
      p.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ") rotate(" + deg + ")");
      g.appendChild(p);
    }
  })();

  /* ================= v10: leadership ================= */
  var PIMG = {}; document.querySelectorAll("#team img").forEach(function(i){ PIMG[i.alt] = i.src; }); PIMG["D. Balasubramaniam"] = "assets/images/image-a614f5e9c941.jpg";
  
  function partnerImg(p, cls){
    var src = p.img && PIMG[p.img];
    if (src) { var i = el("img"); i.src = src; i.alt = p.n; if (cls) i.className = cls; return i; }
    var d = el("div","ini " + (cls || "")); d.textContent = p.n.replace(/^D\. /,"").split(" ").map(function(w){ return w[0]; }).join("").slice(0,2); d.setAttribute("aria-hidden","true"); return d;
  }
  (function(){
    var team = document.querySelector("#team .team"); if (!team) return;
    team.innerHTML = "";
    PARTNERS.forEach(function(p){ var a = el("a","person"); a.href = "#partner-" + p.id; a.appendChild(partnerImg(p)); if (!p.img) a.appendChild(el("span","ph-note","Photo is a placeholder, we are gonna work on this later")); a.appendChild(el("div","nm",p.n)); a.appendChild(el("div","rl",p.r)); a.appendChild(el("span","more","View profile →")); team.appendChild(a); });
    var lg = document.getElementById("leadGrid");
    PARTNERS.forEach(function(p){ var a = el("a","ld-card"); a.href = "#partner-" + p.id; a.appendChild(partnerImg(p)); var b = el("div"); b.appendChild(el("b",null,p.n)); if (!p.img) b.appendChild(el("span","ph-note","Photo is a placeholder, we are gonna work on this later")); b.appendChild(el("span",null,p.r)); b.appendChild(el("p",null,p.bio.split(". ")[0] + ".")); b.appendChild(el("em",null,"View profile →")); a.appendChild(b); lg.appendChild(a); });
  })();
  function renderPartner(id){
    var p = PARTNERS.filter(function(x){ return x.id === id; })[0] || PARTNERS[0];
    var out = document.getElementById("partnerOut"); out.innerHTML = "";
    var hd = el("div","pp-hd");
    hd.appendChild(partnerImg(p, "pp-img"));
    var t = el("div"); t.appendChild(el("div","crumb","About Us / Leadership")); t.appendChild(el("h1",null,p.n)); t.appendChild(el("div","pp-r",p.r)); if (!p.img) t.appendChild(el("span","ph-note","Photo is a placeholder, we are gonna work on this later"));
    var lk = el("div","row");
    if (p.li) { var a = el("a","btn"); a.href = p.li; a.target = "_blank"; a.rel = "noopener"; a.innerHTML = '<span>Connect on LinkedIn</span>' + ARR; lk.appendChild(a); }
    var c = el("button","link as-btn","Get in touch"); c.type = "button"; c.setAttribute("data-contact",""); lk.appendChild(c);
    t.appendChild(lk); hd.appendChild(t); out.appendChild(hd);
    var body = el("div","pp-body");
    var l = el("div"); l.appendChild(el("h2",null,"About")); l.appendChild(el("p","pp-bio",p.bio));
    if (p.certs) l.appendChild(el("p","pp-cert",p.certs));
    l.appendChild(el("h2",null,"Journey")); var ul = el("ul","pp-j"); p.journey.forEach(function(j){ ul.appendChild(el("li",null,j)); }); l.appendChild(ul);
    body.appendChild(l);
    var r = el("div","pp-side");
    r.appendChild(el("h3",null,"Expertise")); var ch = el("div","pp-ex"); p.ex.forEach(function(x){ ch.appendChild(el("span",null,x)); }); r.appendChild(ch);
    if (p.links.length) { r.appendChild(el("h3",null,"Profiles, talks and writing")); var ll = el("div","pp-links"); p.links.forEach(function(x){ var a = el("a",null,x[0] + " ↗"); a.href = x[1]; a.target = "_blank"; a.rel = "noopener"; ll.appendChild(a); }); r.appendChild(ll); }
    body.appendChild(r); out.appendChild(body);
    var nav = el("div","pp-nav"); var i = PARTNERS.indexOf(p), nx = PARTNERS[(i + 1) % PARTNERS.length];
    var back = el("a","link","← All partners"); back.href = "#leadership"; nav.appendChild(back);
    var n = el("a","link","Next: " + nx.n + " →"); n.href = "#partner-" + nx.id; nav.appendChild(n); out.appendChild(nav);
  }

  route();

  return lifecycle.dispose;
}
