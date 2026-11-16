/* =========================================================
   Content — edit these to change what the tabbed sections show
   ========================================================= */
const PLATFORMS = [
  {
    tab: 'AI-Powered Network Security',
    accent: '#ffcb06', accent2: '#d78a12', card: '#ffcb06', card2: '#d78a12', ink: '#000', angle: '135deg',
    desc: 'Securing everyone and everything from the latest threats in every location. Built for Zero Trust and powered by AI, the network security platform proactively monitors, analyzes and prevents sophisticated threats in real time with less complexity.',
    stats: [['95%', 'Of the Fortune 100'], ['75 K', 'Customers']],
    cta: 'Explore Network Security',
    awards: [
      ['Analyst Co.', '', '2026 Market Quadrant for Hybrid Mesh Firewall'],
      ['Analyst Co.', '', '2026 Market Quadrant for SASE Platforms'],
      ['Wavefront', 'serif', 'The Wavefront Report: Enterprise Firewall Solutions'],
      ['Analyst Co.', '', 'Market Quadrant for Single-Vendor SASE'],
      ['Analyst Co.', '', 'Market Quadrant for Network Firewalls'],
      ['Analyst Co.', '', 'Market Quadrant for SD-WAN'],
    ],
    logos: [['Westmere', 'l-serif l-ital l-big'], ['✚ TriCare', 'l-heavy'], ['VILLAGE ROADWAY', 'l-sm l-bold'], ['◢ US SIGNET', 'l-heavy l-ital'], ['cloudforce', 'l-cloud']],
  },
  {
    tab: 'AI-Driven Security Operations',
    accent: '#00cc66', accent2: '#008a45', card: '#00cc66', card2: '#008a45', ink: '#000', angle: '0deg',
    desc: 'Transform the SOC and enable better, faster security with an AI-driven SecOps platform powered by unified data, artificial intelligence and automation.',
    stats: [['700+', 'Partner integrations'], ['480 B', 'Endpoints scanned daily']],
    cta: 'Explore SecOps',
    awards: [
      ['Analyst Co.', '', '2026 Market Quadrant for Endpoint Protection Platforms'],
      ['Wavefront', 'serif', 'Wavefront Cybersecurity IR Services Report'],
      ['Frost & Hale', 'spaced', 'Frost & Hale MDR Radar'],
      ['Wavefront', 'serif', 'The Wavefront Report: Extended Detection and Response Platforms'],
    ],
    logos: [['Infosia', 'l-light l-big'], ['◣slr', 'l-big'], ['BINGO', 'l-box'], ['Brighter', 'l-heavy l-big'], ['⊕ TOYAMA', 'l-bold l-sm']],
  },
  {
    tab: 'Real-Time Cloud Security',
    accent: '#00cc66', accent2: '#008a45', card: '#00cc66', card2: '#008a45', ink: '#000', angle: '0deg',
    desc: 'See more, remediate faster, and prevent what others miss with independent, multi-cloud protection on a platform that merges CNAPP with best-in-class cloud detection and response.',
    stats: [['90%', 'Risk reduction with shift left'], ['25x', 'Reduction in alerts & remediation workflows']],
    cta: 'Explore Cloud Security',
    awards: [
      ['GIGARAY', '', 'A Leader and Outperformer in the Radar for CIEM'],
      ['GIGARAY', '', 'Cloud Security Leader in the first-ever CNAPP report'],
      ['Wavefront', 'serif', 'The Wavefront Report: Cloud Workload Security'],
      ['Frost & Hale', 'spaced', 'Radar: Cloud Security Posture Management'],
      ['Frost & Hale', 'spaced', 'Radar names us a CNAPP Leader'],
      ['Compasspoint', '', 'Overall leader: Leadership Compass for SOAR'],
    ],
    logos: [],
  },
  {
    tab: 'Next-Generation Identity Security',
    accent: '#2a5cff', accent2: '#1a3fd0', card: '#9be4f8', card2: '#55c6ee', ink: '#fff', angle: '90deg',
    desc: 'Secure every identity for the enterprise — human, machine and agentic — with a unified control plane that discovers risk, applies privilege dynamically, and governs the full lifecycle from first access to final session.',
    stats: [['10 K', 'Customers'], ['55%', 'Of the Fortune 500']],
    cta: 'Explore Identity Security',
    awards: [
      ['Analyst Co.', '', 'Market Quadrant for Privileged Access Management, 2025'],
      ['Wavefront', 'serif', 'The Wavefront Report: Privileged Identity Management, 2025'],
      ['Compasspoint', '', 'Leadership Compass: Access Management, 2025'],
      ['Compasspoint', '', 'Leadership Compass: Identity Threat Detection & Response, 2025'],
      ['Frost & Hale', 'spaced', '2025 Radar: Key & Secrets Management'],
      ['Compasspoint', '', 'Leadership Compass: Passwordless Authentication for Enterprises, 2026'],
    ],
    logos: [['CARNELIAN', 'l-serif l-wide'], ['maxima', 'l-heavy l-big'], ['NORTHERN CREST', 'l-wide'], ['TransGourmand', 'l-bold l-sm'], ['Panatonic', 'l-heavy']],
  },
  {
    tab: 'AI-Driven Observability',
    accent: '#00cc66', accent2: '#008a45', card: '#00cc66', card2: '#008a45', ink: '#000', angle: '0deg',
    desc: 'Redefine observability with an AI-driven platform that delivers autonomous remediation and nearly 90% data volume reduction — all driven by chat. Replace static dashboards to close the gap between shipping fast and fixing fast.',
    stats: [['89%', 'Average data optimization'], ['3B', 'Data points processed per second (DPPS)']],
    cta: 'Explore AI-Driven Observability',
    awards: [
      ['Analyst Co.', '', '2026 Market Quadrant for Observability Platforms'],
      ['Analyst Co.', '', '2026 Critical Capabilities for Observability Platforms'],
    ],
    logos: [],
  },
];

const SOLUTIONS = [
  ['Secure your AI ecosystem', ['Secure AI apps, agents, models, and data at every step', 'Secure the use of GenAI applications in the enterprise']],
  ['Secure your network', ['Stop zero-day threats in zero time with Zero Trust', 'Connect and secure every user, device and branch']],
  ['Secure your cloud', ['Protect applications from code to cloud', 'Detect and respond to cloud threats in real time']],
  ['Secure your identities', ['Apply privilege dynamically for every identity', 'Govern human, machine and agentic access']],
  ['Automate your SOC', ['Cut response times from days to minutes', 'Unify detection, investigation and response']],
  ['Threat intel and incident response services', ['Assess and test your security controls', 'Respond to an active incident in record time']],
  ['Solutions by industry', ['Public sector and critical infrastructure', 'Financial services, healthcare and manufacturing']],
  ['Reimagine your observability', ['Replace static dashboards with chat-driven insight', 'Reduce telemetry volume without losing signal']],
];

const ENGAGE = {
  Executives: [
    ['a-bars', 'Threat briefings', 'A plain-language walk through the threats that matter to your sector, and what to prioritise first.', 'Book a briefing', 'contact.html'],
    ['a-warm', 'Security strategy session', 'Get a plan shaped around your business: where you are exposed today and what to fix in what order.', 'Plan a discussion', 'contact.html'],
    ['a-tunnel', 'Under Attack? We’re Here.', 'Tell us what is happening. We help you contain it, understand it and get back to business.', 'Message us urgently', 'under-attack.html'],
    ['a-shield', 'AI-powered security', 'Advice and insight on using AI safely, and on defending against attackers who use it too.', 'Read our insights', 'blog.html'],
  ],
  Specialists: [
    ['a-mesh', 'Technical deep dives', 'Work through real attack scenarios and defences with our engineers.', 'Ask for a session', 'contact.html'],
    ['a-green', 'Virtual patching explained', 'How to cover the gap between a fix being announced and being installed.', 'Read the post', 'blog.html#virtual-patching-explained'],
    ['a-tunnel', 'Threat research', 'What we are watching in the threat landscape, and why it matters.', 'Read the research', 'blog.html#threat-landscape-2026'],
    ['a-bars', 'Agentic AI in the SOC', 'Bringing AI agents into security operations without losing control.', 'Read the post', 'blog.html#agentic-ai-soc'],
  ],
  Partners: [
    ['a-warm', 'Partner with us', 'Work with Cytecho to deliver security outcomes for your customers.', 'Become a partner', 'contact.html'],
    ['a-mesh', 'Technology alliances', 'Integrate your product with our platforms.', 'Start the conversation', 'contact.html'],
    ['a-shield', 'Managed services', 'Deliver round-the-clock protection built on our platforms.', 'Talk to us', 'contact.html'],
    ['a-green', 'Our partners', 'See the organisations we already work with.', 'View partners', '#proven'],
  ],
  Customers: [
    ['a-green', 'Customer success', 'Guidance from onboarding to optimisation, so you get value sooner.', 'Meet the team', 'contact.html'],
    ['a-bars', 'Get support', 'Something not working as it should? Send us the details.', 'Contact support', 'contact.html#message'],
    ['a-tunnel', 'Report an incident', 'If you think you are under attack, do not wait.', 'Message us urgently', 'under-attack.html'],
    ['a-warm', 'What’s new', 'Product news and practical security writing from the team.', 'Read the blog', 'blog.html'],
  ],
};

const CODE = [
  '<span class="c">// inline prevention rule v2.0</span>',
  '',
  '<span class="k">function</span> inspectRequest(req, policy = <span class="k">null</span>) {',
  '',
  '  <span class="k">const</span> signals = extract(req.headers, req.body);',
  '',
  '  <span class="k">if</span> (policy === <span class="k">null</span>) {',
  '    policy = loadPolicy(<span class="s">\'default\'</span>);',
  '  }',
  '',
  '  <span class="k">const</span> verdict = model.score(signals, {',
  '    threshold: policy.threshold,',
  '    context:   <span class="s">\'inline\'</span>,',
  '    lookback:  <span class="s">\'15m\'</span>,',
  '  });',
  '',
  '  <span class="k">if</span> (verdict.malicious) {',
  '    audit.write(req.id, verdict.reason);',
  '    <span class="k">return</span> block(req, verdict.reason);',
  '  }',
  '',
  '  <span class="k">return</span> allow(req);',
  '}',
  '$ <span class="cur"></span>',
];

/* =========================================================
   Helpers
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const icon = (id) => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;

/**
 * Run `enter(el)` each time `el` scrolls into view, and `leave(el)` once it has
 * fully left, so animations replay on every pass instead of only the first.
 */
function whenVisible(els, enter, leave, threshold = 0.3) {
  if (!('IntersectionObserver' in window)) { els.forEach(enter); return; }
  const active = new WeakSet();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const el = e.target;
      if (e.isIntersecting && e.intersectionRatio >= threshold - 0.01 && !active.has(el)) { active.add(el); enter(el); }
      else if (!e.isIntersecting && active.has(el)) { active.delete(el); if (leave) leave(el); }
    });
  }, { threshold: [0, threshold] });
  els.forEach((el) => io.observe(el));
}

/** Count a number up from zero to its data-count value. */
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const dec = parseInt(el.dataset.dec || '0', 10);
  cancelAnimationFrame(el._raf);
  if (reduceMotion) { el.textContent = target.toFixed(dec); return; }
  const start = performance.now(), dur = 1500;
  (function tick(now) {
    const p = Math.min(1, Math.max(0, (now - start) / dur));
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(dec);
    if (p < 1) el._raf = requestAnimationFrame(tick);
  })(start);
}

/** Put a counter back to zero so it can count up again next time. */
function resetCount(el) {
  cancelAnimationFrame(el._raf);
  el.textContent = (0).toFixed(parseInt(el.dataset.dec || '0', 10));
}

/* =========================================================
   Flowing line-mesh canvas (hero + one bento tile)
   ========================================================= */
function waveMesh(canvas, { colors, lines = 44, amp = 0.2, spread = 0.2, centerY = 0.5, alpha = 0.4, speed = 0.25, from = 0 }) {
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, visible = true, raf = 0;

  function resize() {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = r.width; h = r.height;
    canvas.width = Math.max(1, w * dpr); canvas.height = Math.max(1, h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(performance.now());
  }

  function draw(t) {
    if (!w || !h) return;
    const s = (t / 1000) * speed;
    ctx.clearRect(0, 0, w, h);
    const x0 = w * from;
    const grad = ctx.createLinearGradient(x0, 0, w, 0);
    colors.forEach((c, i) => grad.addColorStop(i / (colors.length - 1), c));
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1;
    ctx.globalAlpha = alpha;
    for (let i = 0; i < lines; i++) {
      const p = i / (lines - 1);
      ctx.beginPath();
      for (let x = x0 - 10; x <= w + 10; x += 10) {
        const u = (x - x0) / (w - x0);
        const env = 0.35 + 0.65 * Math.sin(Math.PI * Math.min(1, Math.max(0, u)));
        const y = h * centerY
          + h * amp * env * (Math.sin(u * 4.4 + s + p * 1.7) * 0.62 + Math.sin(u * 9.3 - s * 1.35 + p * 3.3) * 0.26)
          + (p - 0.5) * h * spread * Math.cos(u * 3.1 + s * 0.7 + p);
        x === x0 - 10 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  function loop(t) { draw(t); if (visible) raf = requestAnimationFrame(loop); }

  new ResizeObserver(resize).observe(canvas);
  resize();
  if (reduceMotion) return;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(loop);
    }).observe(canvas);
  } else { raf = requestAnimationFrame(loop); }
}

waveMesh($('#heroCanvas'), { colors: ['rgba(122,92,255,0)', '#6a48ff', '#a895ff', '#eef0ff', '#5fd4ff'], lines: 54, amp: 0.26, spread: 0.3, centerY: 0.52, alpha: 0.45, from: 0.3 });
waveMesh($('#tileWaves'), { colors: ['#cfc4ff', '#8f7bff', '#e4dcff', '#7a5cff'], lines: 26, amp: 0.13, spread: 0.2, centerY: 0.42, alpha: 0.55, speed: 0.35 });

/* =========================================================
   Recommended carousel
   ========================================================= */
(function reco() {
  const track = $('#recoTrack'), prev = $('#recoPrev'), next = $('#recoNext');
  const step = () => ($('.reco-card', track).getBoundingClientRect().width + 20) * 1;
  const sync = () => {
    prev.disabled = track.scrollLeft < 4;
    next.disabled = track.scrollLeft > track.scrollWidth - track.clientWidth - 4;
  };
  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', sync, { passive: true });
  addEventListener('resize', sync);
  sync();
})();

/* =========================================================
   Sticky section nav — highlight the section in view
   ========================================================= */
(function spy() {
  const links = $$('#sectionNav [data-spy]');
  const map = new Map(links.map((a) => [document.getElementById(a.dataset.spy), a]));
  const update = () => {
    const line = innerHeight * 0.35;
    let current = null;
    map.forEach((a, sec) => { if (sec && sec.getBoundingClientRect().top <= line) current = a; });
    links.forEach((a) => a.classList.toggle('is-active', a === current));
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
})();

/* =========================================================
   Rings, bars and counters
   ========================================================= */
(function stats() {
  const rings = $$('.ring'), bars = $('.bars');
  if (reduceMotion || !('IntersectionObserver' in window)) return; // leave everything at its final value
  const setRing = (r, on) => $('.ring-fill', r).style.setProperty('--v', on ? Number(r.dataset.pct) / 100 : 0);
  rings.forEach((r) => setRing(r, false));
  bars.classList.add('pre');
  whenVisible(rings, (r) => setRing(r, true), (r) => setRing(r, false), 0.4);
  whenVisible([bars], (b) => b.classList.remove('pre'), (b) => b.classList.add('pre'), 0.3);
  whenVisible($$('[data-count]'), countUp, resetCount, 0.6);
})();

/* =========================================================
   Platforms tabs
   ========================================================= */
(function platforms() {
  const section = $('#platforms'), tabs = $('#platTabs'), panel = $('#platPanel');

  tabs.innerHTML = PLATFORMS.map((p, i) =>
    `<button class="plat-tab" role="tab" aria-selected="false" data-i="${i}" style="--tab:${p.accent}">${icon('i-node')}${p.tab}</button>`).join('');

  function select(i) {
    const p = PLATFORMS[i];
    $$('.plat-tab', tabs).forEach((t, n) => t.setAttribute('aria-selected', n === i));
    const s = section.style;
    s.setProperty('--accent', p.accent); s.setProperty('--accent-2', p.accent2);
    s.setProperty('--card', p.card); s.setProperty('--card-2', p.card2);
    s.setProperty('--accent-ink', p.ink); s.setProperty('--art-angle', p.angle);

    panel.innerHTML = `
      <h3 class="plat-title">${p.tab}</h3>
      <div class="plat-body">
        <div class="plat-copy">
          <p>${p.desc}</p>
          <div class="mini-stats">${p.stats.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('')}</div>
          <a class="btn btn-accent" href="contact.html">${p.cta} ${icon('i-arrow')}</a>
        </div>
        <div class="plat-awards">
          <div class="award-grid">${p.awards.map(([firm, cls, title]) => `<div class="award"><b class="${cls}">${firm}</b><span>${title}</span></div>`).join('')}</div>
        </div>
      </div>
      ${p.logos.length ? `<p class="eyebrow center trusted-label">Trusted by the best</p>
      <div class="logo-row">${p.logos.map(([n, c]) => `<span class="logo ${c}">${n}</span>`).join('')}</div>` : '<div style="height:120px"></div>'}`;
    panel.style.animation = 'none'; void panel.offsetWidth; panel.style.animation = '';
  }

  tabs.addEventListener('click', (e) => {
    const t = e.target.closest('.plat-tab');
    if (!t) return;
    select(Number(t.dataset.i));
    t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  });
  tabs.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const all = $$('.plat-tab', tabs), cur = all.findIndex((t) => t.getAttribute('aria-selected') === 'true');
    const n = (cur + (e.key === 'ArrowRight' ? 1 : -1) + all.length) % all.length;
    select(n); all[n].focus();
  });
  select(0);
})();

/* =========================================================
   Bento: timestamp, looping exploit list, typed code
   ========================================================= */
(function bento() {
  const d = new Date(Date.now() - 864e5);
  $('#stamp').textContent = `${d.getMonth() + 1}.${d.getDate()}.${String(d.getFullYear()).slice(2)}`;

  const list = $('.exploits ul');
  list.innerHTML += list.innerHTML; // duplicate for a seamless loop

  const pre = $('#code');
  pre.innerHTML = CODE.map((l) => `<span class="ln">${l || ' '}</span>`).join('');
  const lines = $$('.ln', pre);
  if (reduceMotion) { lines.forEach((l) => l.classList.add('on')); return; }
  let started = false;
  const type = () => {
    lines.forEach((l) => l.classList.remove('on'));
    lines.forEach((l, i) => setTimeout(() => l.classList.add('on'), 140 * i + 200));
    setTimeout(type, 140 * lines.length + 5000);
  };
  whenVisible([pre], () => { if (!started) { started = true; type(); } }, null, 0.2);
  // Fallback so the code is never left blank if the observer does not fire.
  setTimeout(() => { if (!started) lines.forEach((l) => l.classList.add('on')); }, 4000);
})();

/* =========================================================
   Solutions list
   ========================================================= */
(function solutions() {
  const list = $('#solList'), links = $('#solLinks');
  list.innerHTML = SOLUTIONS.map(([name], i) =>
    `<li><button aria-pressed="false" data-i="${i}">${icon('i-node')}${name}</button></li>`).join('');
  function select(i) {
    $$('button', list).forEach((b, n) => b.setAttribute('aria-pressed', n === i));
    links.innerHTML = SOLUTIONS[i][1].map((t) => `<a href="contact.html"><span>${t}</span>${icon('i-arrow')}</a>`).join('');
    links.style.animation = 'none'; void links.offsetWidth; links.style.animation = '';
  }
  const pick = (e) => { const b = e.target.closest('button'); if (b) select(Number(b.dataset.i)); };
  list.addEventListener('click', pick);
  list.addEventListener('mouseover', pick);
  list.addEventListener('focusin', pick);
  select(0);
})();

/* =========================================================
   Engage tabs
   ========================================================= */
(function engage() {
  const tabs = $('#engageTabs'), grid = $('#engageGrid'), names = Object.keys(ENGAGE);
  tabs.innerHTML = names.map((n) => `<button role="tab" aria-selected="false" data-n="${n}">${n}</button>`).join('');
  function select(name) {
    $$('button', tabs).forEach((b) => b.setAttribute('aria-selected', b.dataset.n === name));
    grid.innerHTML = ENGAGE[name].map(([art, title, body, cta, href], i) => `
      <a class="e-card" href="${href}" style="animation-delay:${i * 60}ms">
        <span class="e-thumb ${art}">${art === 'a-bars' ? '<b>THREAT<br>BRIEF</b>' : art === 'a-shield' ? icon('i-mark') : ''}</span>
        <span class="e-body"><h3>${title}</h3><p>${body}</p><span class="e-link">${cta} ${icon('i-arrow')}</span></span>
      </a>`).join('');
  }
  tabs.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) select(b.dataset.n); });
  select(names[0]);
})();

/* =========================================================
   Scroll-in animation — replays whenever a block comes back into view
   ========================================================= */
(function reveal() {
  if (reduceMotion || !('IntersectionObserver' in window)) return;
  const groups = [
    '.hero-inner > *', '.reco-head', '.ai .display', '.good-copy', '.ring', '.bar-row', '.bad-copy',
    '.why-head', '.stat-card', '.plat-heading', '.bento-sec .h-xl', '.tile', '.services .h-xl',
    '.svc-copy', '.svc-tiles > div', '.sol-left > h2', '.proven h2', '.logo-grid .logo',
    '.engage .h-xl', '.cta-inner > *',
  ];
  groups.forEach((sel) => $$(sel).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.setProperty('--d', Math.min(i, 5) * 80 + 'ms');
  }));
  whenVisible($$('.reveal'), (el) => el.classList.add('in'), (el) => el.classList.remove('in'), 0.15);
})();
