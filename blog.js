/* =========================================================
   Blog — posts live in this list. To add a post, copy one
   entry, give it a new slug and write the body as HTML.
   A post opens at blog.html#its-slug
   ========================================================= */
const POSTS = [
  {
    slug: 'frontier-ai-security',
    title: 'Security in the era of frontier AI',
    tag: 'AI security', date: '12 Nov 2026', read: '4 min read', art: 't-aurora',
    excerpt: 'AI is now part of how work gets done. Here is what that changes for the people who have to keep it safe.',
    body: `
      <p>In a short space of time, AI assistants have moved from experiments to everyday tools. Staff use them to draft, summarise, write code and search company knowledge. That is good for productivity, and it quietly changes what a security team has to protect.</p>
      <h2>Three things that are different now</h2>
      <ul>
        <li><strong>Data leaves through conversations.</strong> A pasted contract or customer list is a data transfer, even if nobody thinks of it that way.</li>
        <li><strong>Models take instructions from content.</strong> A web page, email or document can carry hidden instructions that an AI tool will follow unless it is designed not to.</li>
        <li><strong>Agents act, not just answer.</strong> Once a tool can send email, change files or call APIs, a mistake becomes an incident rather than a wrong answer.</li>
      </ul>
      <h2>Where to start</h2>
      <p>Begin with visibility. Find out which AI tools are actually in use, by whom, and with what data. Most organisations discover more than they expected.</p>
      <p>Then set a short, plain policy: which tools are approved, what must never be pasted into them, and who to ask. A one-page policy that people read beats a twenty-page one that they do not.</p>
      <p>Finally, treat AI agents like new members of staff. Give them the least access they need, log what they do, and review that access regularly.</p>
      <p>None of this requires waiting for a perfect framework. The basics of access control, logging and data handling still apply. They just need to be extended to a new kind of user.</p>`,
  },
  {
    slug: 'privileged-access-basics',
    title: 'Privileged access: getting the basics right',
    tag: 'Identity', date: '5 Nov 2026', read: '4 min read', art: 't-report',
    excerpt: 'Most serious breaches involve an account with more access than it needed. Five habits that cut the risk.',
    body: `
      <p>Attackers rarely break in. More often they log in, using an account that was phished, reused or left behind. If that account is an administrator, the rest of the attack is easy. Privileged access management is the work of making sure it is not.</p>
      <h2>Five habits that matter most</h2>
      <ul>
        <li><strong>Know your admin accounts.</strong> List every account with elevated rights, including service accounts and the ones created "temporarily" years ago.</li>
        <li><strong>Separate admin from everyday.</strong> Nobody should read email or browse the web from an account that can change the domain.</li>
        <li><strong>Require strong MFA.</strong> Use phishing-resistant methods such as security keys for anything privileged.</li>
        <li><strong>Grant access just in time.</strong> Give elevated rights for a task and a time window, then remove them automatically.</li>
        <li><strong>Record privileged sessions.</strong> When something goes wrong, you need to know exactly what was done.</li>
      </ul>
      <h2>Do not forget machines</h2>
      <p>API keys, service accounts and automation tokens now outnumber human users in most environments. They often have broad rights and never expire. Keep them in a secrets manager, rotate them, and scope each one to a single job.</p>
      <p>If you only do one thing this quarter, run the inventory. You cannot protect privileged access you do not know exists.</p>`,
  },
  {
    slug: 'virtual-patching-explained',
    title: 'Close your exposure gap with virtual patching',
    tag: 'Network security', date: '29 Oct 2026', read: '3 min read', art: 't-sunset',
    excerpt: 'A fix is announced today. Your change window is in three weeks. Virtual patching covers the gap in between.',
    body: `
      <p>Every vulnerability has an awkward period: the time between the flaw becoming public and the patch being installed everywhere. Attackers know this and often begin scanning within hours. Meanwhile, patching a production system properly takes testing, approval and a maintenance window.</p>
      <h2>What virtual patching is</h2>
      <p>A virtual patch does not change the vulnerable software. Instead, a control in front of it, such as a firewall, intrusion prevention system or web application firewall, is given a rule that recognises attempts to exploit the flaw and blocks them. The system stays vulnerable, but the attack cannot reach it.</p>
      <h2>When it helps most</h2>
      <ul>
        <li>Systems that cannot be restarted on short notice.</li>
        <li>Legacy or end-of-life software that will never receive a fix.</li>
        <li>Third-party appliances where you depend on a vendor's timetable.</li>
      </ul>
      <h2>What it is not</h2>
      <p>It is not a replacement for patching. Rules can be bypassed by a variant of the exploit, and they only protect traffic that passes through the control. Treat a virtual patch as a way to buy safe time, record it, and still schedule the real fix.</p>`,
  },
  {
    slug: 'secure-ai-coding',
    title: 'Secure AI coding across your business',
    tag: 'Application security', date: '22 Oct 2026', read: '4 min read', art: 't-office',
    excerpt: 'AI coding assistants make developers faster. A few guardrails keep that speed from turning into risk.',
    body: `
      <p>Developers have adopted AI coding assistants faster than almost any tool before them. The code they produce is often good. It is also produced in large volumes, by a system that does not know your threat model.</p>
      <h2>The main risks</h2>
      <ul>
        <li><strong>Insecure suggestions.</strong> Generated code can include injection flaws, weak cryptography or missing checks, and it looks just as confident as correct code.</li>
        <li><strong>Leaked secrets.</strong> Keys and passwords in a file can be sent to a model as context, or suggested back into another project.</li>
        <li><strong>Invented dependencies.</strong> Assistants sometimes suggest packages that do not exist. Attackers register those names and wait.</li>
        <li><strong>Too much autonomy.</strong> An agent that can run commands can also run the wrong ones.</li>
      </ul>
      <h2>Guardrails that work</h2>
      <p>Keep a human reviewer on every change, and make clear that the author is responsible for code regardless of who or what wrote it. Run the same static analysis, dependency and secret scanning on AI-written code as on everything else, and run it automatically in the pipeline.</p>
      <p>Give coding agents a sandbox rather than a developer's full machine, and limit what credentials they can see. Finally, choose tools with clear terms on how your code is stored and whether it is used for training.</p>
      <p>The goal is not to slow developers down. It is to make the safe path the fast one.</p>`,
  },
  {
    slug: 'threat-landscape-2026',
    title: 'What we are watching in the 2026 threat landscape',
    tag: 'Threat intel', date: '15 Oct 2026', read: '3 min read', art: 't-magma',
    excerpt: 'Four trends shaping how organisations get attacked, and what each one means for your priorities.',
    body: `
      <p>Predictions about security are usually wrong in the details. The broad direction is easier to see. These are the four patterns we think deserve attention when planning the year ahead.</p>
      <h2>1. Identity is the front door</h2>
      <p>Stolen credentials and session tokens remain the simplest way in. Phishing kits that defeat basic MFA are widely available. Phishing-resistant sign-in and fast detection of unusual logins matter more than another layer at the network edge.</p>
      <h2>2. Faster exploitation</h2>
      <p>The gap between a vulnerability being disclosed and being exploited keeps shrinking. Internet-facing devices such as VPNs and gateways are hit first. Know what you expose, and have a plan for the first 48 hours after a critical advisory.</p>
      <h2>3. Extortion without encryption</h2>
      <p>Many groups now skip ransomware and simply steal data, then threaten to publish it. Good backups do not help with that. Knowing where sensitive data lives, and noticing when it moves, does.</p>
      <h2>4. The supply chain</h2>
      <p>Attackers increasingly go through a supplier, a software dependency or a managed service to reach many victims at once. Ask your key suppliers how they would tell you about an incident, and check what access they really have.</p>
      <p>None of these is new. What has changed is the speed, and that rewards organisations that have rehearsed their response before they need it.</p>`,
  },
  {
    slug: 'agentic-ai-soc',
    title: 'What agentic AI means for your SOC',
    tag: 'Security operations', date: '8 Oct 2026', read: '3 min read', art: 't-grid',
    excerpt: 'AI agents can take the repetitive work out of alert triage. Here is how to bring them in without losing control.',
    body: `
      <p>Security operations teams have a volume problem. There are more alerts than people to read them, and most turn out to be nothing. AI agents that can investigate an alert from start to finish are a real answer to that, if they are introduced carefully.</p>
      <h2>What agents are good at</h2>
      <ul>
        <li>Gathering context: who the user is, what the device did, whether the address has been seen before.</li>
        <li>Summarising an investigation in plain language for the analyst who picks it up.</li>
        <li>Closing well-understood false positives with a recorded reason.</li>
      </ul>
      <h2>Where people stay in charge</h2>
      <p>Actions that affect the business, such as isolating a server, disabling an executive's account or blocking a supplier, should need human approval until the agent has earned trust on lower-risk work. Start with read-only access and expand it step by step.</p>
      <h2>How to measure it</h2>
      <p>Track time to triage, the share of alerts closed without an analyst, and how often a human overturns the agent's conclusion. That last number tells you whether to give it more to do.</p>
      <p>Used this way, agents do not replace analysts. They give them back the hours to do the investigations that need judgement.</p>`,
  },
];

(function blog() {
  const root = document.getElementById('blogRoot');
  const arrow = '<svg aria-hidden="true"><use href="#i-arrow"/></svg>';

  const card = (p) => `
    <a class="post-card" href="#${p.slug}">
      <span class="post-art ${p.art}"></span>
      <span class="post-body">
        <span class="post-meta">${p.tag} · ${p.date}</span>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <span class="e-link">Read the post ${arrow}</span>
      </span>
    </a>`;

  const index = () => `
    <section class="page-hero">
      <div class="wrap">
        <p class="eyebrow accent">Cytecho blog</p>
        <h1 class="display">What’s new</h1>
        <p class="page-lead">Practical security writing from the Cytecho team. No jargon for its own sake.</p>
      </div>
    </section>
    <section class="page-body">
      <div class="wrap"><div class="post-grid">${POSTS.map(card).join('')}</div></div>
    </section>`;

  const article = (p) => `
    <section class="page-hero page-hero-sm">
      <div class="wrap article-wrap">
        <a class="back-link" href="blog.html">← All posts</a>
        <p class="eyebrow accent">${p.tag}</p>
        <h1 class="h-xl">${p.title}</h1>
        <p class="post-meta">${p.date} · ${p.read} · Cytecho team</p>
      </div>
    </section>
    <section class="page-body">
      <div class="wrap article-wrap">
        <div class="post-art post-banner ${p.art}"></div>
        <article class="article">${p.body}</article>
        <div class="article-cta">
          <div><h3>Want to talk this through?</h3><p>Tell us what you are working on and we will get back to you.</p></div>
          <a class="btn btn-primary" href="contact.html">Contact us ${arrow}</a>
        </div>
        <h2 class="more-title">More from the blog</h2>
        <div class="post-grid post-grid-2">${POSTS.filter((x) => x.slug !== p.slug).slice(0, 2).map(card).join('')}</div>
      </div>
    </section>`;

  function render() {
    const slug = decodeURIComponent(location.hash.slice(1));
    const post = POSTS.find((p) => p.slug === slug);
    root.innerHTML = post ? article(post) : index();
    document.title = (post ? post.title : 'Blog') + ' — Cytecho';
    scrollTo(0, 0);
  }
  addEventListener('hashchange', render);
  render();
})();
