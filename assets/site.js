/* ============================================================
   Luke Shave Plumbing & Bathrooms — shared behaviour
   ============================================================ */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var WA = "https://api.whatsapp.com/message/XO5FWU33IIP3L1?autoload=1&app_absent=0";
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Where website enquiries are emailed (via FormSubmit — no account needed).
  // Change this to Luke's preferred inbox any time. First enquiry after go-live
  // must be confirmed via the one-time FormSubmit activation email.
  var LEAD_EMAIL = 'lukeshaveplumbing@gmail.com';
  function sendLead(fields) {
    try {
      var body = { _subject: 'New website enquiry — Luke Shave Plumbing', _template: 'table' };
      for (var k in fields) { if (fields[k]) body[k] = fields[k]; }
      fetch('https://formsubmit.co/ajax/' + encodeURIComponent(LEAD_EMAIL), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(body)
      }).catch(function () {});
    } catch (e) {}
  }

  function star(s) { return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 7.1-1.01z"/></svg>'; }
  function icon(p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  function imgDims(src) { if (src.indexOf('gallery-9') > -1) return [691, 1300]; if (src.indexOf('hero-') > -1) return [616, 1200]; if (src.indexOf('about-') > -1) return [1500, 1125]; return [1300, 975]; }
  function pic(src, alt, extra) { var d = imgDims(src); return '<img src="' + src + '" alt="' + alt + '" width="' + d[0] + '" height="' + d[1] + '" loading="lazy" decoding="async"' + (extra || '') + '>'; }

  /* ---------------- Data ---------------- */
  var heroChips = ['Fully Insured', 'Free No-Obligation Quotes', 'Bathroom Specialists'];
  var aboutPoints = ['Independent sole trader', 'No job too big or small', 'Tidy, respectful work', 'Competitive fixed rates'];
  var stats = [{ n: '9.81', l: 'Checkatrade Rating' }, { n: '22', l: 'Verified Reviews' }, { n: '100%', l: 'Recommended' }, { n: '2024', l: 'Vetted Member' }];

  var ICONS = {
    reno: '<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3"/>',
    plumb: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.2-.3-.3-2.2 2.5-2.5z"/>',
    repair: '<path d="M12 22a5 5 0 0 0 5-5c0-3-5-9-5-9s-5 6-5 9a5 5 0 0 0 5 5z"/>',
    upgrade: '<rect x="4" y="11" width="16" height="6" rx="2"/><path d="M4 11V7a3 3 0 0 1 6 0"/><path d="M7 21l-1 1M18 21l1 1"/>'
  };
  var services = [
    { t: 'Complete Bathroom Renovations', d: 'Full renovations from strip-out to finish — tiling, suite and fixtures fitted with care and precision.', img: '/assets/gallery-1.jpg', ic: icon(ICONS.reno), href: '/services/#renovations' },
    { t: 'General Plumbing', d: 'Toilets, taps, valves and everyday plumbing installed and kept running properly all year round.', img: '/assets/gallery-4.jpg', ic: icon(ICONS.plumb), href: '/services/#general' },
    { t: 'Plumbing Repairs', d: 'Leaking taps, weeping joints, burst pipes and urgent failures fixed cleanly and for good.', img: '/assets/gallery-3.jpg', ic: icon(ICONS.repair), href: '/services/#repairs' },
    { t: 'Bathroom Upgrades', d: 'New suites, taps, radiators and towel rails — fresh upgrades without the full renovation.', img: '/assets/gallery-6.jpg', ic: icon(ICONS.upgrade), href: '/services/#upgrades' }
  ];
  var gallery = [
    { img: '/assets/gallery-1.jpg', label: 'Marble & Brass Suite', tall: true },
    { img: '/assets/gallery-7.jpg', label: 'Slate & Stone Shower Room' },
    { img: '/assets/gallery-4.jpg', label: '' },
    { img: '/assets/gallery-3.jpg', label: 'Walk-In Shower' },
    { img: '/assets/gallery-2.jpg', label: 'Marble & Antique Gold Cloakroom', tall: true },
    { img: '/assets/gallery-6.jpg', label: 'Fluted Oak & Stone Suite' },
    { img: '/assets/gallery-5.jpg', label: 'Botanical Feature Bathroom' },
    { img: '/assets/gallery-8.jpg', label: '' },
    { img: '/assets/gallery-9.jpg', label: 'Traditional Panelled Bathroom' }
  ];
  var why = [
    { t: 'Personal Service', d: 'An independent plumber who answers the phone and turns up himself — no call centres.', ic: icon('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>') },
    { t: 'Experienced Specialist', d: 'A bathroom and plumbing specialist who brings in trusted experts where needed.', ic: icon(ICONS.plumb) },
    { t: 'Transparent Pricing', d: 'Clear quotes with no hidden costs — you always know where you stand from the start.', ic: icon('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 15h3"/>') },
    { t: 'Quality Workmanship', d: 'Precise, pedantic in the best way, and finished to a standard to be proud of.', ic: icon('<path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 7.1-1.01z"/>') }
  ];
  var reviews = [
    { t: "His workmanship is outstanding. Luke is extremely precise and takes real pride in what he does. Delivered everything on time, with great advice and no hidden costs. One of the best tradespeople we've ever worked with.", l: 'South East London · SE23' },
    { t: "Luke refitted our downstairs toilet, including ripping out the old, renewing pipework and fitting the new suite. His communication from start to finish was brilliant. A really tidy worker. Thoroughly recommend him!", l: 'Orpington · BR6' },
    { t: "Friendly, reliable, clean and tidy with good workmanship. Over the moon with the bathroom fitting Luke completed for us.", l: 'Orpington · BR6' },
    { t: "Luke did a brilliant job changing the sink and bathroom taps including the bathroom radiator. Professional and punctual throughout.", l: 'Chislehurst · BR7' },
    { t: "Gave us a very competitive quote to rip out the whole bathroom. Worked tirelessly, cleared up after himself and never left us without a toilet. We now have a beautiful new bathroom.", l: 'South East London · SE6' },
    { t: "Polite and his fee was very reasonable. He cleaned up after himself and took the old parts away. Would be happy to use his services again.", l: 'Orpington · BR6' }
  ];
  var areas = ['Bromley', 'Orpington', 'Beckenham', 'West Wickham', 'Chislehurst', 'Sidcup', 'Croydon', 'South East London', 'Kent'];
  var faqs = [
    { q: 'Which areas do you cover?', a: 'We’re based in Orpington and cover South East London and Kent, including Bromley, Beckenham, West Wickham, Chislehurst, Sidcup and Croydon. If you’re nearby and not sure, just ask.' },
    { q: 'Do you offer free quotes?', a: 'Yes. Every quote is free and with no obligation. Send us a few details about your job and we’ll come back to you with a clear, honest price.' },
    { q: 'Are you insured?', a: 'Yes, we’re fully insured for the plumbing and bathroom work we carry out, so you’re covered from start to finish.' },
    { q: 'Do you handle complete bathroom renovations?', a: 'Absolutely. We handle everything from a single tap or repair right through to a complete bathroom renovation — strip-out, first fix, tiling, suite and finishing.' },
    { q: 'Are you Checkatrade vetted?', a: 'Yes. We’ve been a vetted Checkatrade member since 2024 and are rated 9.81/10 across 22 verified customer reviews.' },
    { q: 'How quickly can you respond?', a: 'We pride ourselves on fast response times. For the quickest reply, message us on WhatsApp and we’ll get straight back to you.' }
  ];

  /* ---------- Quote pricing model ---------- */
  var Q_OPTS = {
    service: ['Complete Bathroom Renovation', 'Bathroom Upgrade', 'General Plumbing', 'Plumbing Repair', 'Emergency / Leak'],
    property: ['Flat', 'House', 'Semi Detached', 'Detached'],
    urgency: ['Flexible', 'This Week', 'Within 48 Hours', 'Emergency'],
    size: ['Small', 'Medium', 'Large']
  };
  var Q_LABELS = { service: 'Service needed', property: 'Property type', urgency: 'Urgency', size: 'Job size' };
  var Q_BASE = {
    'Complete Bathroom Renovation': [3800, 9000], 'Bathroom Upgrade': [400, 1800],
    'General Plumbing': [60, 190], 'Plumbing Repair': [80, 260], 'Emergency / Leak': [90, 300]
  };
  var Q_PROP = { 'Flat': 1, 'House': 1.05, 'Semi Detached': 1.1, 'Detached': 1.16 };
  var Q_URG = { 'Flexible': 1, 'This Week': 1.1, 'Within 48 Hours': 1.28, 'Emergency': 1.55 };
  var Q_SIZE = { 'Small': 0.78, 'Medium': 1, 'Large': 1.42 };
  function priceRange(c) {
    var b = Q_BASE[c.service] || [80, 200];
    var m = (Q_PROP[c.property] || 1) * (Q_URG[c.urgency] || 1) * (Q_SIZE[c.size] || 1);
    function r(n) { var v = n * m; return v >= 1000 ? Math.round(v / 100) * 100 : Math.round(v / 10) * 10; }
    function fmt(n) { return '£' + n.toLocaleString('en-GB'); }
    return fmt(r(b[0])) + ' – ' + fmt(r(b[1]));
  }

  /* ---------------- Renderers (guarded) ---------------- */
  function renderStatic() {
    $$('[data-stars]').forEach(function (el) { var s = +el.getAttribute('data-stars'); var h = ''; for (var i = 0; i < 5; i++) h += star(s); el.innerHTML = h; });
    var y = $('#yr'); if (y) y.textContent = new Date().getFullYear();

    var hc = $('[data-hero-chips]');
    if (hc) hc.innerHTML = heroChips.map(function (t) { return '<span><svg viewBox="0 0 24 24" fill="none" stroke="#3FBF6A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>' + t + '</span>'; }).join('');

    var ap = $('[data-about-points]');
    if (ap) ap.innerHTML = aboutPoints.map(function (p) { return '<li><span class="chk"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>' + p + '</li>'; }).join('');

    var st = $('[data-stats]');
    if (st) st.innerHTML = stats.map(function (s) { return '<div class="stat"><div class="n">' + s.n + '</div><div class="l">' + s.l + '</div></div>'; }).join('');

    var sv = $('[data-services]');
    if (sv) sv.innerHTML = services.map(function (s) { return '<a class="svc" href="' + s.href + '" aria-label="View ' + s.t + '">' + pic(s.img, '') + '<div class="svc-body"><div class="kico">' + s.ic + '</div><h3>' + s.t + '</h3><p>' + s.d + '</p><span class="more">View ' + s.t.split(' ')[0] + ' <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div></a>'; }).join('');

    var gl = $('[data-gallery]');
    if (gl) {
      var limit = +(gl.getAttribute('data-limit') || gallery.length);
      gl.innerHTML = gallery.slice(0, limit).map(function (g, i) {
        var lbl = g.label || '';
        var safe = lbl ? lbl.replace(/&/g, 'and') : 'Bathroom project by Luke Shave Plumbing';
        var cap = '<span class="gal-cap">' + (lbl ? '<span class="n">' + lbl + '</span>' : '<span></span>') + '<span class="exp"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></span></span>';
        return '<button class="gal-item' + (g.tall ? ' tall' : '') + '" data-lb="' + i + '" aria-label="View ' + safe + '">' + pic(g.img, safe) + cap + '</button>';
      }).join('');
    }

    var wy = $('[data-why]');
    if (wy) wy.innerHTML = why.map(function (c) { return '<div class="why-card"><div class="kico">' + c.ic + '</div><h3>' + c.t + '</h3><p>' + c.d + '</p></div>'; }).join('');

    var ar = $('[data-areas]');
    if (ar) ar.innerHTML = areas.map(function (a) { return '<span><svg viewBox="0 0 24 24" fill="none" stroke="#0B4D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' + a + '</span>'; }).join('');

    var fq = $('[data-faq]');
    if (fq) {
      fq.innerHTML = faqs.map(function (f) { return '<details class="faq"><summary>' + f.q + '<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><div class="ans">' + f.a + '</div></details>'; }).join('');
      var fs = $('#faqSchema');
      if (fs) fs.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(function (f) { return { "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }; }) });
    }
  }

  /* ---------------- Header ---------------- */
  function initHeader() {
    var header = $('#header'); if (!header) return;
    if (header.classList.contains('force-solid')) return;
    var solid = false;
    function onScroll() { var s = window.scrollY > 30; if (s !== solid) { solid = s; header.classList.toggle('solid', s); } }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* ---------------- Mobile menu ---------------- */
  function initMenu() {
    var mm = $('#mobileMenu'), scrim = $('#scrim'), burger = $('#burger'); if (!mm || !burger) return;
    function open() { mm.classList.add('open'); scrim.classList.add('open'); mm.setAttribute('aria-hidden', 'false'); burger.setAttribute('aria-expanded', 'true'); }
    function close() { mm.classList.remove('open'); scrim.classList.remove('open'); mm.setAttribute('aria-hidden', 'true'); burger.setAttribute('aria-expanded', 'false'); }
    burger.addEventListener('click', open);
    var c = $('#mmClose'); if (c) c.addEventListener('click', close);
    if (scrim) scrim.addEventListener('click', close);
    $$('#mobileMenu nav a').forEach(function (a) { a.addEventListener('click', close); });
  }

  /* ---------------- Reveals ---------------- */
  function initReveal() {
    var els = $$('.reveal,.stagger');
    if (reduce) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------------- Reviews carousel ---------------- */
  function initReviews() {
    var txt = $('#revText'); if (!txt) return;
    var loc = $('#revLoc'), dots = $('[data-review-dots]'), ri = 0, rt;
    function render() { txt.textContent = '“' + reviews[ri].t + '”'; if (loc) loc.textContent = reviews[ri].l; renderDots(); }
    function renderDots() { if (!dots) return; dots.innerHTML = reviews.map(function (_, i) { return '<button class="' + (i === ri ? 'on' : '') + '" data-dot="' + i + '" aria-label="Review ' + (i + 1) + '"></button>'; }).join(''); }
    function go(i) { ri = (i + reviews.length) % reviews.length; render(); }
    function reset() { clearInterval(rt); rt = setInterval(function () { go(ri + 1); }, 6500); }
    var p = $('#revPrev'), n = $('#revNext');
    if (p) p.addEventListener('click', function () { go(ri - 1); reset(); });
    if (n) n.addEventListener('click', function () { go(ri + 1); reset(); });
    if (dots) dots.addEventListener('click', function (e) { var d = e.target.closest('[data-dot]'); if (d) { go(+d.getAttribute('data-dot')); reset(); } });
    var card = $('.rev-card'), sx = 0;
    if (card) {
      card.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
      card.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 45) { go(dx < 0 ? ri + 1 : ri - 1); reset(); } }, { passive: true });
    }
    render(); reset();
  }

  /* ---------------- Lightbox ---------------- */
  function initLightbox() {
    var lb = $('#lightbox'); if (!lb) return;
    var img = $('#lbImg'), gl = $('[data-gallery]'), li = 0;
    var limit = gl ? +(gl.getAttribute('data-limit') || gallery.length) : gallery.length;
    function show() { var g = gallery[li]; img.src = g.img; img.alt = (g.label || 'Bathroom project by Luke Shave Plumbing').replace(/&/g, 'and'); }
    function open(i) { li = i; show(); lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { lb.classList.remove('open'); document.body.style.overflow = ''; }
    function nav(d) { li = (li + d + limit) % limit; show(); }
    if (gl) gl.addEventListener('click', function (e) { var b = e.target.closest('[data-lb]'); if (b) open(+b.getAttribute('data-lb')); });
    $('#lbClose').addEventListener('click', close);
    $('#lbPrev').addEventListener('click', function () { nav(-1); });
    $('#lbNext').addEventListener('click', function () { nav(1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) { if (!lb.classList.contains('open')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') nav(-1); if (e.key === 'ArrowRight') nav(1); });
  }

  /* ---------------- Instant quote estimator ---------------- */
  function initQuote() {
    $$('[data-quote]').forEach(function (form) {
      // populate selects
      $$('select[data-q]', form).forEach(function (sel) {
        var key = sel.getAttribute('data-q'); var opts = Q_OPTS[key] || [];
        sel.innerHTML = opts.map(function (o) { return '<option>' + o + '</option>'; }).join('');
      });
      // defaults
      var def = { service: 'Plumbing Repair', property: 'House', urgency: 'Flexible', size: 'Medium' };
      Object.keys(def).forEach(function (k) { var s = $('select[data-q="' + k + '"]', form); if (s) s.value = def[k]; });
      var estEl = $('[data-estimate]', form);
      function calc() {
        var c = {};
        $$('select[data-q]', form).forEach(function (s) { c[s.getAttribute('data-q')] = s.value; });
        if (estEl) estEl.textContent = priceRange(c);
        return c;
      }
      $$('select[data-q]', form).forEach(function (s) { s.addEventListener('change', calc); });
      calc();

      var thanks = $('[data-quote-thanks]', form);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = $('[data-q="name"]', form), contact = $('[data-q="contact"]', form);
        var ok = true;
        if (name) { var nOk = !!name.value.trim(); name.parentElement.classList.toggle('err', !nOk); ok = ok && nOk; }
        if (contact) { var cOk = contact.value.trim().length >= 5; contact.parentElement.classList.toggle('err', !cOk); ok = ok && cOk; }
        if (!ok) { var f = form.querySelector('.err input'); if (f) f.focus(); return; }
        var c = calc();
        var msg = "Hi Luke, I'd like a quote.%0A%0A";
        msg += 'Service: ' + encodeURIComponent(c.service) + '%0A';
        msg += 'Property: ' + encodeURIComponent(c.property) + '%0A';
        msg += 'Urgency: ' + encodeURIComponent(c.urgency) + '%0A';
        msg += 'Job size: ' + encodeURIComponent(c.size) + '%0A';
        msg += 'Estimated range: ' + encodeURIComponent(estEl ? estEl.textContent : '') + '%0A';
        if (name) msg += 'Name: ' + encodeURIComponent(name.value.trim()) + '%0A';
        if (contact) msg += 'Contact: ' + encodeURIComponent(contact.value.trim());
        sendLead({ Name: name ? name.value.trim() : '', Contact: contact ? contact.value.trim() : '', Service: c.service, Property: c.property, Urgency: c.urgency, 'Job size': c.size, 'Estimated range': estEl ? estEl.textContent : '', Source: 'Instant quote' });
        window.open(WA + '&text=' + msg, '_blank', 'noopener');
        if (thanks) { thanks.style.display = 'block'; }
      });
    });
  }

  /* ---------------- Full enquiry form (contact) ---------------- */
  function initContact() {
    var form = $('#enquiryForm'); if (!form) return;
    function setErr(f, on) { f.classList.toggle('err', on); }
    function valid() {
      var ok = true;
      var name = $('#f-name'), phone = $('#f-phone'), email = $('#f-email'), svc = $('#f-service');
      setErr(name.parentElement, !name.value.trim()); ok = ok && !!name.value.trim();
      var pOk = phone.value.replace(/[^0-9]/g, '').length >= 7; setErr(phone.parentElement, !pOk); ok = ok && pOk;
      var eOk = !email.value.trim() || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()); setErr(email.parentElement, !eOk); ok = ok && eOk;
      var sOk = !!svc.value; setErr(svc.parentElement, !sOk); ok = ok && sOk;
      return ok;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!valid()) { var f = form.querySelector('.err input,.err select'); if (f) f.focus(); return; }
      var d = { name: $('#f-name').value.trim(), phone: $('#f-phone').value.trim(), email: $('#f-email').value.trim(), service: $('#f-service').value, message: $('#f-msg').value.trim() };
      sendLead({ Name: d.name, Phone: d.phone, Email: d.email, Service: d.service, Details: d.message, Source: 'Contact form' });
      var t = "Hi Luke, I'd like a quote.%0A%0AName: " + encodeURIComponent(d.name) + '%0APhone: ' + encodeURIComponent(d.phone);
      if (d.email) t += '%0AEmail: ' + encodeURIComponent(d.email);
      t += '%0AService: ' + encodeURIComponent(d.service);
      if (d.message) t += '%0ADetails: ' + encodeURIComponent(d.message);
      var send = $('#waSend'); if (send) send.href = WA + '&text=' + t;
      var sm = $('#successMsg'); if (sm) sm.textContent = 'Thanks ' + d.name.split(' ')[0] + ' — we’ve prepared your enquiry. Tap below to send it to us on WhatsApp for the fastest reply.';
      form.style.display = 'none';
      var succ = $('#formSuccess'); if (succ) { succ.classList.add('show'); succ.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); }
    });
    $$('#enquiryForm input,#enquiryForm select').forEach(function (el) { el.addEventListener('input', function () { if (el.parentElement.classList.contains('err')) setErr(el.parentElement, false); }); });
  }

  /* ---------------- WhatsApp links + floating button ---------------- */
  function initWhatsApp() {
    $$('[data-wa]').forEach(function (a) { a.href = WA; });
    if (!document.querySelector('.wa-fab')) {
      var a = document.createElement('a');
      a.className = 'wa-fab';
      a.href = WA; a.target = '_blank'; a.rel = 'noopener';
      a.setAttribute('aria-label', 'Message Luke Shave Plumbing on WhatsApp');
      a.innerHTML = '<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.9.9-2.8-.2-.3A8.3 8.3 0 1 1 12 20.3zm4.6-5.9c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.6-1.5-.9-2-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4z"/></svg><span class="lbl">WhatsApp</span>';
      document.body.appendChild(a);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderStatic(); initHeader(); initMenu(); initReveal(); initReviews(); initLightbox(); initQuote(); initContact(); initWhatsApp();
  });
})();
