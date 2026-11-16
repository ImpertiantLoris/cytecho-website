/* =========================================================
   Shared layout — header, Accounts & Support menu, footer and
   contact forms for every page. Include it as the first thing
   inside <body>:  <script src="layout.js"></script>
   ========================================================= */
(function () {
  /* ---- Company details: change them here, they update everywhere ---- */
  const SITE = {
    email: 'info@cytecho.net',
    phone: '+447311113990',
    phoneLabel: '+44 7311 113990',
    place: 'Haverfordwest, Wales, United Kingdom',
    instagram: 'https://www.instagram.com/cytecho_/',
    instagramLabel: '@cytecho_',
  };
  window.SITE = SITE;

  const ANNOUNCEMENTS = [
    ['Zero-day attacks stopped before day one with virtual patching. Read how.', 'blog.html#virtual-patching-explained'],
    ['Build what’s next with AI. Secure it with Cytecho.', 'blog.html#frontier-ai-security'],
    ['Under attack? Message us urgently at ' + SITE.email, 'under-attack.html'],
  ];

  const file = location.pathname.split('/').pop();
  const onHome = file === '' || file === 'index.html';
  const home = (hash) => (onHome ? hash : 'index.html' + hash); // section links work from any page
  const icon = (id, cls = '') => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sprite = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-mark" viewBox="464 622 1076 653"><g fill="currentColor"><polygon points="855,635 1050,622 464,1208 469,1022"/><polygon points="998,755 1416,755 1282,879 998,879"/><polygon points="714,1037 1011,1037 1011,1168 583,1168"/><polygon points="1540,736 1540,905 1153,1275 976,1275"/></g></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M14 5l7 7-7 7"/></symbol>
  <symbol id="i-chev-l" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></symbol>
  <symbol id="i-chev-r" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></symbol>
  <symbol id="i-chev-d" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>
  <symbol id="i-node" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2zm0 4.6L7.5 9.2v5.6l4.5 2.6V6.6z"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/></symbol>
  <symbol id="i-insta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/></symbol>
  <symbol id="i-alert" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.500l9.500 16.500h-19L12 3.500z"/><path d="M12 10v4.500M12 17.300v.2"/></symbol>
</svg>`;

  const brand = `<a class="brand" href="index.html" aria-label="Cytecho home">${icon('i-mark', 'brand-mark')}<span class="brand-word">cytecho</span></a>`;

  const header = `
<div class="announce" id="announce">
  <button class="announce-btn" data-dir="-1" aria-label="Previous announcement">${icon('i-chev-l')}</button>
  <p class="announce-text" aria-live="polite"><a href="${ANNOUNCEMENTS[0][1]}">${ANNOUNCEMENTS[0][0]}</a></p>
  <button class="announce-btn" data-dir="1" aria-label="Next announcement">${icon('i-chev-r')}</button>
</div>
<header class="site-header">
  ${brand}
  <nav class="main-nav" id="mainNav" aria-label="Primary">
    <a href="${home('#platforms')}">Products</a>
    <a href="${home('#solutions')}">Solutions</a>
    <a href="${home('#services')}">Services</a>
    <a href="${home('#proven')}">Partners</a>
    <a href="blog.html">Blog</a>
    <a class="only-mobile" href="contact.html">Contact Us</a>
    <a class="only-mobile nav-alert" href="under-attack.html">Under Attack?</a>
  </nav>
  <div class="header-tools">
    <div class="dd" id="acctDd">
      <button class="btn btn-outline-light dd-toggle" id="acctToggle" aria-expanded="false" aria-controls="acctMenu">Accounts &amp; Support ${icon('i-chev-d', 'ico-sm')}</button>
      <div class="dd-menu" id="acctMenu" hidden>
        <div class="dd-cols">
          <div>
            <h4>Accounts</h4>
            <a href="${home('#proven')}">Partner</a>
            <a href="${home('#engage')}">Customer</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="contact.html">Contact Us</a>
            <a href="blog.html">What’s New</a>
            <a href="contact.html#message">Get Support</a>
          </div>
        </div>
        <a class="btn btn-primary dd-alert" href="under-attack.html">Under Attack?</a>
      </div>
    </div>
    <a class="btn btn-primary" href="contact.html">Contact Us</a>
    <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>
</header>`;

  const footer = `
<footer class="site-footer">
  <div class="wrap">
    <div class="sf-grid">
      <div class="sf-brand">
        ${brand}
        <p>AI-driven cybersecurity, based in ${SITE.place}.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <a href="${home('#platforms')}">Platforms</a>
        <a href="${home('#solutions')}">Solutions</a>
        <a href="${home('#services')}">Services</a>
        <a href="${home('#proven')}">Partners</a>
      </div>
      <div>
        <h3>Company</h3>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact us</a>
        <a href="under-attack.html">Under attack?</a>
        <a href="privacy.html">Privacy policy</a>
        <a href="cookies.html">Cookie policy</a>
      </div>
      <div>
        <h3>Get in touch</h3>
        <a href="mailto:${SITE.email}">${icon('i-mail')}${SITE.email}</a>
        <a href="tel:${SITE.phone}">${icon('i-phone')}${SITE.phoneLabel}</a>
        <a href="${SITE.instagram}" target="_blank" rel="noopener">${icon('i-insta')}${SITE.instagramLabel}</a>
        <span class="sf-place">${icon('i-pin')}${SITE.place}</span>
      </div>
    </div>
    <div class="sf-bottom">
      <span>© ${new Date().getFullYear()} Cytecho. All rights reserved.</span>
      <span class="sf-links">
        <a href="privacy.html">Privacy policy</a>
        <a href="cookies.html">Cookie policy</a>
        <button type="button" data-cookie-settings>Cookie settings</button>
        <a href="#top" id="toTop">Back to top ↑</a>
      </span>
    </div>
  </div>
</footer>
<div class="cookie-banner" id="cookieBanner" role="dialog" aria-labelledby="cookieTitle" hidden>
  <h2 id="cookieTitle">Your cookie choices</h2>
  <p>We store one small item to remember this choice. Optional cookies, such as analytics, are only switched on if you accept. Read our <a href="cookies.html">cookie policy</a>.</p>
  <div class="cookie-actions">
    <button class="btn btn-neutral" type="button" data-cookie="rejected">Reject</button>
    <button class="btn btn-primary" type="button" data-cookie="accepted">Accept</button>
  </div>
</div>`;

  /* ---- Cookie consent ----
     The visitor's choice is kept in their browser for six months, then asked again.
     Anything optional (analytics, ads, embedded media) belongs in loadOptional(),
     which only ever runs after they press Accept. */
  const CONSENT_KEY = 'cytecho-cookie-consent';
  const CONSENT_DAYS = 180;
  let optionalLoaded = false;

  function loadOptional() {
    if (optionalLoaded) return;
    optionalLoaded = true;
    // Add analytics or other non-essential scripts here. Nothing is loaded today.
  }

  function getConsent() {
    try {
      const saved = JSON.parse(localStorage.getItem(CONSENT_KEY));
      if (!saved || !saved.choice) return null;
      const ageDays = (Date.now() - new Date(saved.date).getTime()) / 864e5;
      return ageDays < CONSENT_DAYS ? saved : null;
    } catch (err) { return null; }
  }

  function setConsent(choice) {
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, date: new Date().toISOString() })); } catch (err) { /* storage blocked: ask again next visit */ }
    if (choice === 'accepted') loadOptional();
    showConsentStatus(choice);
  }

  function showConsentStatus(choice) {
    const label = choice === 'accepted' ? 'Accepted' : choice === 'rejected' ? 'Rejected' : 'Not chosen yet';
    document.querySelectorAll('[data-cookie-status]').forEach((el) => { el.textContent = label; });
  }

  function initCookies() {
    const banner = document.getElementById('cookieBanner');
    const saved = getConsent();
    if (saved && saved.choice === 'accepted') loadOptional();
    showConsentStatus(saved && saved.choice);
    banner.hidden = Boolean(saved);

    banner.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-cookie]');
      if (!btn) return;
      const wasAccepted = optionalLoaded;
      setConsent(btn.dataset.cookie);
      banner.hidden = true;
      // Scripts that already ran cannot be unloaded, so a switch to Reject takes full effect on reload.
      if (wasAccepted && btn.dataset.cookie === 'rejected') location.reload();
    });
    document.querySelectorAll('[data-cookie-settings]').forEach((el) => el.addEventListener('click', () => {
      banner.hidden = false;
      banner.querySelector('[data-cookie]').focus();
    }));
  }

  // Header goes exactly where this script tag sits; footer is added once the page has parsed.
  document.currentScript.insertAdjacentHTML('beforebegin', sprite + header);

  /* ---- Announcement bar ---- */
  (function announce() {
    const bar = document.getElementById('announce');
    const text = bar.querySelector('.announce-text');
    let i = 0, timer;
    const show = (n) => {
      i = (n + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length;
      text.classList.add('out');
      setTimeout(() => {
        const a = text.firstElementChild;
        a.textContent = ANNOUNCEMENTS[i][0];
        a.href = ANNOUNCEMENTS[i][1];
        text.classList.remove('out');
      }, 250);
    };
    const auto = () => { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => show(i + 1), 6000); };
    bar.querySelectorAll('.announce-btn').forEach((b) => b.addEventListener('click', () => { show(i + Number(b.dataset.dir)); auto(); }));
    auto();
  })();

  /* ---- Mobile menu ---- */
  (function nav() {
    const toggle = document.getElementById('navToggle'), menu = document.getElementById('mainNav');
    const set = (open) => { menu.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open); };
    toggle.addEventListener('click', () => set(!menu.classList.contains('open')));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  })();

  /* ---- Accounts & Support dropdown ---- */
  (function dropdown() {
    const wrap = document.getElementById('acctDd'), toggle = document.getElementById('acctToggle'), menu = document.getElementById('acctMenu');
    const set = (open) => { menu.hidden = !open; toggle.setAttribute('aria-expanded', open); };
    toggle.addEventListener('click', (e) => { e.stopPropagation(); set(menu.hidden); });
    document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) set(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { set(false); toggle.focus(); } });
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  })();

  /* ---- Contact forms ----
     Turns a filled-in form into an email addressed to SITE.email: the subject comes
     from the form's data-subject, the body lists each field the visitor filled in. */
  function mailtoFor(form) {
    const data = new FormData(form), lines = [];
    data.forEach((value, key) => { if (String(value).trim()) lines.push(`${key}: ${value}`); });
    const who = String(data.get('Name') || '').trim();
    const subject = (form.dataset.subject || 'Website enquiry') + (who ? ' — ' + who : '');
    return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  }
  SITE.mailtoFor = mailtoFor;

  /* ---- Footer + contact forms ---- */
  function ready() {
    document.body.insertAdjacentHTML('beforeend', footer);
    initCookies();
    document.getElementById('toTop').addEventListener('click', (e) => {
      e.preventDefault();
      scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });

    // Fill in contact details wherever a page asks for them.
    document.querySelectorAll('[data-site]').forEach((el) => {
      const key = el.dataset.site;
      if (key === 'email') { el.textContent = SITE.email; if (el.tagName === 'A') el.href = 'mailto:' + SITE.email; }
      if (key === 'phone') { el.textContent = SITE.phoneLabel; if (el.tagName === 'A') el.href = 'tel:' + SITE.phone; }
      if (key === 'place') el.textContent = SITE.place;
      if (key === 'instagram') { el.textContent = SITE.instagramLabel; if (el.tagName === 'A') el.href = SITE.instagram; }
    });

    // Forms marked data-mailto open the visitor's email app with the message
    // written out and addressed to SITE.email. Nothing is sent to a server.
    document.querySelectorAll('form[data-mailto]').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const link = mailtoFor(form);
        location.href = link;
        const note = form.querySelector('.form-note');
        if (note) {
          // If no email app is set up on the visitor's device nothing opens, so give them another way through.
          const retry = Object.assign(document.createElement('a'), { href: link, textContent: 'open the email draft again' });
          note.replaceChildren('Your email app should now open with this message ready. Press send there to deliver it. If nothing opened, ', retry, ` or write to ${SITE.email}.`);
          note.classList.add('ok');
        }
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
})();
