import { useState } from "react";
import "./Blog.css";

/* ── Types ───────────────────────────────────────────────────────────────── */
type Category = "all" | "software" | "infrastructure" | "security" | "support" | "industry";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string[];
  category: Category;
  categoryLabel: string;
  categoryChip: string;
  categoryAccent: string;
  categoryBg: string;
  author: string;
  authorRole: string;
  authorInitials: string;
  authorAccentBg: string;
  authorAccentText: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
};

/* ── Static Data ─────────────────────────────────────────────────────────── */
const POSTS: Post[] = [
  {
    id: "erp-vs-spreadsheets",
    title: "Why Your Spreadsheets Are Costing You More Than an ERP",
    slug: "erp-vs-spreadsheets",
    excerpt:
      "Four Excel files, two accountants manually reconciling them every Friday, and an invoice cycle averaging 11 days. We see this pattern constantly — and the fix is less complex than most businesses fear.",
    body: [
      "The hidden cost of spreadsheet-based operations is rarely captured in any budget line. It shows up in lost hours, data entry errors, delayed invoicing, and the slow erosion of trust between departments that can't agree on a single number.",
      "When we engage with a logistics or finance client still running core operations through Excel, the diagnostic is almost always the same: multiple versions of the truth, no audit trail, and a fragile dependency on one or two people who know where things live.",
      "A well-scoped ERP doesn't need to be a 12-month SAP implementation. For most SMEs, a purpose-built React + Node.js application with a clean PostgreSQL data model can unify invoicing, inventory, and reporting in 8–12 weeks — at a fraction of the total cost of the spreadsheet system it replaces.",
      "The key is scoping tightly. Avoid the temptation to replicate every quirk of your spreadsheet in the new system. Use the migration as an opportunity to standardise your processes, not just digitise them.",
    ],
    category: "software",
    categoryLabel: "Software",
    categoryChip: "chip-svc-software",
    categoryAccent: "text-svc-software",
    categoryBg: "bg-svc-software",
    author: "Amina Ochieng",
    authorRole: "CTO",
    authorInitials: "AO",
    authorAccentBg: "bg-svc-install",
    authorAccentText: "text-svc-install",
    date: "12 Nov 2025",
    readTime: "6 min read",
    featured: true,
    tags: ["ERP", "Software Development", "Operations", "SME"],
  },
  {
    id: "cctv-ip-vs-analogue",
    title: "IP Cameras vs Analogue: What the Price Difference Actually Buys You",
    slug: "cctv-ip-vs-analogue",
    excerpt:
      "The upfront cost gap between analogue and IP CCTV has narrowed dramatically. What hasn't changed is the capability gap — and for most businesses, it's decisive.",
    body: [
      "Five years ago, the price argument for sticking with analogue CCTV was reasonable. Today it isn't. 4K IP cameras have dropped significantly in cost, and the infrastructure to support them — NVRs, PoE switches, cloud storage — is widely available and well-supported.",
      "What you're actually buying with IP is remote access, AI motion zoning, encrypted archiving, and the ability to search footage by time, zone, or motion event rather than scrubbing through hours of tape.",
      "For retail clients specifically, the loss-prevention case is clear. One of our deployments for a 6-site retail group saw shrinkage drop 41% in the first quarter after switching to an IP network with AI motion alerts — not because the cameras were better, but because the response time to incidents went from days to minutes.",
      "The cabling consideration is real: IP runs on Cat6, not coax. For new installations this is straightforward. For retrofits, we typically recommend a hybrid approach — reusing existing coax with HD-over-coax cameras where the runs are long, and installing true IP where the infrastructure allows.",
    ],
    category: "security",
    categoryLabel: "Security",
    categoryChip: "chip-svc-cctv",
    categoryAccent: "text-svc-cctv",
    categoryBg: "bg-svc-cctv",
    author: "James Kariuki",
    authorRole: "Head of Physical Security",
    authorInitials: "JK",
    authorAccentBg: "bg-svc-cctv",
    authorAccentText: "text-svc-cctv",
    date: "28 Oct 2025",
    readTime: "5 min read",
    featured: true,
    tags: ["CCTV", "IP Cameras", "Security", "Retail"],
  },
  {
    id: "vlan-segmentation-why",
    title: "Why Every Business Network Needs VLAN Segmentation",
    slug: "vlan-segmentation-why",
    excerpt:
      "Running guest WiFi on the same network segment as your patient management system isn't just a bad practice — it's a compliance failure waiting to happen.",
    body: [
      "A flat network — where every device talks to every other device — is a gift to any attacker who gets inside. One compromised guest device, one rogue IoT sensor, one lateral movement later and you're dealing with a full breach.",
      "VLAN segmentation is the practice of dividing a single physical network into isolated logical segments. Clinical traffic stays on the clinical VLAN. Guest WiFi stays on the guest VLAN. IoT devices — printers, cameras, environmental sensors — get their own segment. None of them can talk to each other unless explicitly permitted.",
      "For healthcare clients, this isn't optional. Regulatory frameworks increasingly require it. For our hospital project, moving from a flat network to a properly segmented layer-3 design lifted their compliance audit score from 54% to 98%.",
      "Implementation requires a layer-3-capable switch, proper VLAN tagging on access ports, and inter-VLAN routing policies defined at the distribution layer. Cisco Catalyst switches are our recommendation for most mid-size installations — reliable, well-documented, and supported.",
    ],
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    categoryChip: "chip-svc-install",
    categoryAccent: "text-svc-install",
    categoryBg: "bg-svc-install",
    author: "Grace Njoroge",
    authorRole: "Head of Infrastructure",
    authorInitials: "GN",
    authorAccentBg: "bg-svc-hardware",
    authorAccentText: "text-svc-hardware",
    date: "14 Oct 2025",
    readTime: "7 min read",
    featured: false,
    tags: ["Networking", "VLAN", "Security", "Compliance"],
  },
  {
    id: "managed-it-vs-inhouse",
    title: "Managed IT Support vs In-House IT: The Real Cost Comparison",
    slug: "managed-it-vs-inhouse",
    excerpt:
      "A single in-house IT officer costs Ksh 900K+ annually in salary alone, before benefits, equipment, and the inevitable coverage gaps on leave days and evenings.",
    body: [
      "The managed IT support vs in-house debate usually starts with salary. It should start with coverage. An in-house IT officer works office hours, takes leave, gets sick, and resigns. A managed support contract covers 24 hours a day, 7 days a week, with no single point of human failure.",
      "The second factor is depth. A single in-house hire can't be a network engineer, a security specialist, a helpdesk agent, and a software troubleshooter simultaneously. A managed support team brings specialists to each problem.",
      "For our fintech client PesaLink, the switch to managed support reduced average ticket resolution from 3.2 days to 4.1 hours — partly because of the dedicated on-call structure, and partly because we brought RMM tooling that automated patch management and endpoint monitoring they had no capacity to run in-house.",
      "Managed IT isn't always the right answer. If your operations are large enough to warrant a full internal IT department of 4+ people, you probably need it. For most businesses under 300 seats, a well-structured managed support contract will outperform an equivalently-priced in-house setup.",
    ],
    category: "support",
    categoryLabel: "IT Support",
    categoryChip: "chip-svc-support",
    categoryAccent: "text-svc-support",
    categoryBg: "bg-svc-support",
    author: "Brian Otieno",
    authorRole: "Head of Managed Support",
    authorInitials: "BO",
    authorAccentBg: "bg-svc-support",
    authorAccentText: "text-svc-support",
    date: "2 Oct 2025",
    readTime: "8 min read",
    featured: false,
    tags: ["IT Support", "Managed Services", "Cost Analysis", "SLA"],
  },
  {
    id: "hardware-procurement-pitfalls",
    title: "5 Hardware Procurement Mistakes East African Businesses Make",
    slug: "hardware-procurement-pitfalls",
    excerpt:
      "From buying consumer-grade hardware for server rooms to ignoring warranty coverage zones, the mistakes are consistent — and expensive to fix after the fact.",
    body: [
      "Mistake one: buying retail hardware for production workloads. Consumer-grade laptops and desktops are not built for continuous operation in a business environment. A Lenovo ThinkCentre or HP EliteDesk has fundamentally different build quality, thermal design, and warranty terms than a consumer machine at a similar price point.",
      "Mistake two: ignoring warranty coverage geography. Many hardware warranties sold in the region are grey-market imports with manufacturer warranties that are voided outside the country of purchase. Always verify in-country warranty coverage before procurement.",
      "Mistake three: no asset register. Knowing what you have, where it is, and when it expires is the foundation of any IT operation. We've onboarded clients with 200-seat environments and no record of serial numbers or purchase dates.",
      "Mistake four: under-speccing for the actual use case. A finance analyst running Power BI on 8GB RAM is a productivity problem. Spec for the workload, not the price band.",
      "Mistake five: no imaging strategy. If you buy 50 machines and configure each one manually, you're paying for 50× the setup time and accepting 50 slightly different configurations. A master image and a PXE deployment pipeline is a one-time investment that pays back on every future deployment.",
    ],
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    categoryChip: "chip-svc-install",
    categoryAccent: "text-svc-install",
    categoryBg: "bg-svc-install",
    author: "Grace Njoroge",
    authorRole: "Head of Infrastructure",
    authorInitials: "GN",
    authorAccentBg: "bg-svc-hardware",
    authorAccentText: "text-svc-hardware",
    date: "18 Sep 2025",
    readTime: "6 min read",
    featured: false,
    tags: ["Hardware", "Procurement", "Asset Management", "SME"],
  },
  {
    id: "sacco-digital-transformation",
    title: "The SACCO Digital Transformation Playbook",
    slug: "sacco-digital-transformation",
    excerpt:
      "SACCOs are one of the most underserved segments in East African fintech. The barriers are real — regulatory complexity, member trust, legacy data — but the path through them is well-established.",
    body: [
      "Most SACCOs we engage with are running paper-based member registers, manual loan processing, and a single shared spreadsheet for contribution tracking. The inefficiency is obvious. What's less obvious is that the solution doesn't have to be a big-bang transformation.",
      "The most effective digital transformation we've seen SACCOs undergo starts with one thing: giving members visibility into their own accounts. A web portal that lets a member check their balance, download a statement, or see the status of a loan application eliminates a significant portion of the in-person traffic overnight.",
      "From there, the workflow layer — loan applications, approval routing, document capture — can be added incrementally. The regulatory reporting module, the mobile access layer, the payment integrations: each follows the last, built on a stable foundation.",
      "Our member portal for Imarisha SACCO reduced walk-in requests by 78% in month one. The staff didn't lose their jobs — they redirected their time to advisory work and complex cases rather than manual processing.",
    ],
    category: "industry",
    categoryLabel: "Industry",
    categoryChip: "chip-brand",
    categoryAccent: "text-brand",
    categoryBg: "bg-brand-surface",
    author: "Priya Sharma",
    authorRole: "Lead Software Developer",
    authorInitials: "PS",
    authorAccentBg: "bg-brand-surface",
    authorAccentText: "text-brand",
    date: "5 Sep 2025",
    readTime: "9 min read",
    featured: true,
    tags: ["SACCO", "Fintech", "Digital Transformation", "Portals"],
  },
];

const CATEGORIES = [
  { id: "all" as Category, label: "All Posts" },
  { id: "software" as Category, label: "Software" },
  { id: "infrastructure" as Category, label: "Infrastructure" },
  { id: "security" as Category, label: "Security" },
  { id: "support" as Category, label: "IT Support" },
  { id: "industry" as Category, label: "Industry" },
];

const BLOG_STATS = [
  { value: "40+", label: "Articles Published" },
  { value: "6", label: "Topic Categories" },
  { value: "Monthly", label: "New Entries" },
];

/* ── Component ───────────────────────────────────────────────────────────── */
export default function Blog() {
  const [activePost, setActivePost] = useState<string | null>(null);
  const [category, setCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const filtered = POSTS.filter((p) => {
    const matchCat = category === "all" || p.category === category;
    const matchSearch =
      search.trim() === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
      p.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = POSTS.filter((p) => p.featured);
  const activeData = activePost ? POSTS.find((p) => p.id === activePost) : null;

  return (
    <div className="bl-root">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bl-hero">
        <div className="bl-hero-glow" />
        <div className="bl-hero-grid" />
        <div className="bl-hero-inner">
          <div className="bl-hero-content">
            <span className="text-section-header bl-hero-eyebrow">Insights & Guides</span>
            <h1 className="bl-hero-title">
              Tech Thinking
              <br />
              <span className="bl-hero-title-accent">From the Field</span>
            </h1>
            <p className="text-body-lg bl-hero-desc">
              Practical guides, case-study breakdowns, and honest opinions from
              the engineers and specialists who deliver our projects. No marketing
              fluff — just what we've learned doing the work.
            </p>
            <div className="bl-hero-tags">
              {["ERP", "CCTV", "Networking", "ITSM", "Hardware", "Fintech"].map((t) => (
                <span key={t} className="bl-hero-tag text-caption">{t}</span>
              ))}
            </div>
          </div>

          {/* Featured post preview card */}
          <div className="bl-hero-visual">
            <div className="bl-hero-card card-featured">
              <div className="bl-hero-card-header">
                <span className="text-section-header">Latest Featured</span>
                <span className="chip chip-brand" style={{ fontSize: 10 }}>New</span>
              </div>
              {featured[0] && (
                <div
                  className="bl-hero-preview"
                  onClick={() => setActivePost(featured[0].id)}
                >
                  <span className={`chip ${featured[0].categoryChip}`} style={{ fontSize: 10 }}>
                    {featured[0].categoryLabel}
                  </span>
                  <h3 className="text-h3" style={{ marginTop: 10, lineHeight: 1.35 }}>
                    {featured[0].title}
                  </h3>
                  <p className="text-body-xs" style={{ marginTop: 8 }}>
                    {featured[0].excerpt.slice(0, 90)}…
                  </p>
                  <div className="bl-hero-preview-meta">
                    <div className={`bl-author-dot ${featured[0].authorAccentBg}`}>
                      <span className={`text-label-xs ${featured[0].authorAccentText}`}>
                        {featured[0].authorInitials}
                      </span>
                    </div>
                    <span className="text-caption">{featured[0].author}</span>
                    <span className="text-caption" style={{ color: "var(--color-ink-faint)" }}>·</span>
                    <span className="text-caption">{featured[0].readTime}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Floating stat cards */}
            {BLOG_STATS.map((s, i) => (
              <div key={s.label} className={`bl-hero-float bl-hero-float-${i + 1} card`}>
                <span className="text-mono-bold" style={{ fontSize: 18 }}>{s.value}</span>
                <span className="text-caption">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <div className="bl-stats-strip">
        {BLOG_STATS.map((s, i) => (
          <div key={i} className="bl-stat-item">
            <span className="text-display" style={{ color: "#fff" }}>{s.value}</span>
            <span className="text-body-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── POST READER MODAL ─────────────────────────────────────────────── */}
      {activeData && (
        <div className="bl-modal-backdrop" onClick={() => setActivePost(null)}>
          <div className="bl-modal card" onClick={(e) => e.stopPropagation()}>

            {/* Modal header */}
            <div className="bl-modal-header">
              <div className="bl-modal-header-left">
                <div className="bl-modal-chips">
                  <span className={`chip ${activeData.categoryChip}`}>{activeData.categoryLabel}</span>
                  <span className="chip chip-steel" style={{ fontSize: 10 }}>{activeData.readTime}</span>
                </div>
                <h2 className="bl-modal-title">{activeData.title}</h2>
                <div className="bl-modal-byline">
                  <div className={`bl-author-dot ${activeData.authorAccentBg}`}>
                    <span className={`text-label-xs ${activeData.authorAccentText}`}>
                      {activeData.authorInitials}
                    </span>
                  </div>
                  <div>
                    <span className="text-label-sm">{activeData.author}</span>
                    <span className="text-caption" style={{ color: "var(--color-ink-faint)", margin: "0 6px" }}>·</span>
                    <span className="text-caption">{activeData.authorRole}</span>
                    <span className="text-caption" style={{ color: "var(--color-ink-faint)", margin: "0 6px" }}>·</span>
                    <span className="text-caption">{activeData.date}</span>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-ghost btn-sm bl-modal-close"
                onClick={() => setActivePost(null)}
                aria-label="Close"
              >
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                Close
              </button>
            </div>

            <div className="bl-modal-body">
              <div className="bl-modal-left">
                {/* Excerpt lead */}
                <p className="bl-modal-lead">{activeData.excerpt}</p>
                <hr className="divider" style={{ margin: "24px 0" }} />
                {/* Body paragraphs */}
                {activeData.body.map((para, i) => (
                  <p key={i} className="text-body-md" style={{ marginTop: i > 0 ? 18 : 0, lineHeight: 1.78, color: "var(--color-ink-muted)" }}>
                    {para}
                  </p>
                ))}
                {/* Tags */}
                <div className="bl-modal-tags">
                  {activeData.tags.map((t) => (
                    <span key={t} className="pj-tag text-label-xs">{t}</span>
                  ))}
                </div>
              </div>

              <div className="bl-modal-right">
                {/* Author card */}
                <div className="bl-modal-author card" style={{ background: "var(--color-bg-subtle)" }}>
                  <p className="text-section-header">Author</p>
                  <div className="bl-modal-author-row">
                    <div className={`bl-author-dot bl-author-dot--lg ${activeData.authorAccentBg}`}>
                      <span className={`text-h3 ${activeData.authorAccentText}`}>
                        {activeData.authorInitials}
                      </span>
                    </div>
                    <div>
                      <p className="text-label-md">{activeData.author}</p>
                      <p className="text-caption">{activeData.authorRole}</p>
                    </div>
                  </div>
                </div>

                {/* Related posts */}
                <div className="bl-modal-related" style={{ marginTop: 16 }}>
                  <p className="text-section-header" style={{ marginBottom: 12 }}>Related Posts</p>
                  {POSTS.filter((p) => p.id !== activeData.id && p.category === activeData.category)
                    .slice(0, 2)
                    .map((p) => (
                      <div
                        key={p.id}
                        className="bl-related-item card"
                        style={{ marginBottom: 10, cursor: "pointer" }}
                        onClick={() => setActivePost(p.id)}
                      >
                        <span className={`chip ${p.categoryChip}`} style={{ fontSize: 10 }}>{p.categoryLabel}</span>
                        <p className="text-label-sm" style={{ marginTop: 8, lineHeight: 1.4 }}>{p.title}</p>
                        <p className="text-caption" style={{ marginTop: 4 }}>{p.readTime}</p>
                      </div>
                    ))}
                  {POSTS.filter((p) => p.id !== activeData.id && p.category === activeData.category).length === 0 && (
                    POSTS.filter((p) => p.id !== activeData.id).slice(0, 2).map((p) => (
                      <div
                        key={p.id}
                        className="bl-related-item card"
                        style={{ marginBottom: 10, cursor: "pointer" }}
                        onClick={() => setActivePost(p.id)}
                      >
                        <span className={`chip ${p.categoryChip}`} style={{ fontSize: 10 }}>{p.categoryLabel}</span>
                        <p className="text-label-sm" style={{ marginTop: 8, lineHeight: 1.4 }}>{p.title}</p>
                        <p className="text-caption" style={{ marginTop: 4 }}>{p.readTime}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FEATURED POSTS ────────────────────────────────────────────────── */}
      <section className="bl-section bl-featured-section">
        <div className="bl-section-header">
          <span className="text-section-header">Editor's Picks</span>
          <h2 className="text-h1" style={{ marginTop: 8 }}>Featured Articles</h2>
        </div>
        <div className="bl-featured-grid">
          {featured.map((p, i) => (
            <div
              key={p.id}
              className={`bl-featured-card card-service ${i === 0 ? "bl-featured-card--hero" : ""}`}
              onClick={() => setActivePost(p.id)}
            >
              <div className="bl-featured-card-top">
                <div className="bl-featured-chips">
                  <span className={`chip ${p.categoryChip}`} style={{ fontSize: 10 }}>{p.categoryLabel}</span>
                  {i === 0 && <span className="pj-featured-badge">
                    <svg width={10} height={10} viewBox="0 0 24 24" fill="var(--color-brand)" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    Featured
                  </span>}
                </div>
                <span className="text-caption">{p.date}</span>
              </div>

              <h3 className={i === 0 ? "bl-featured-title-lg text-h1" : "bl-featured-title text-h2"} style={{ marginTop: 12 }}>
                {p.title}
              </h3>
              <p className="text-body-sm" style={{ marginTop: 8, lineHeight: 1.65 }}>
                {p.excerpt.slice(0, i === 0 ? 160 : 100)}…
              </p>

              <div className="bl-card-tags" style={{ marginTop: 12 }}>
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="pj-tag text-label-xs">{t}</span>
                ))}
              </div>

              <div className="bl-card-footer">
                <div className="bl-card-author">
                  <div className={`bl-author-dot ${p.authorAccentBg}`}>
                    <span className={`text-label-xs ${p.authorAccentText}`}>{p.authorInitials}</span>
                  </div>
                  <div>
                    <span className="text-label-sm">{p.author}</span>
                    <span className="text-caption" style={{ color: "var(--color-ink-faint)", margin: "0 5px" }}>·</span>
                    <span className="text-caption">{p.readTime}</span>
                  </div>
                </div>
                <button className="btn btn-outline btn-sm">
                  Read
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ALL POSTS ─────────────────────────────────────────────────────── */}
      <section className="bl-section bl-all-section" style={{ backgroundColor: "var(--color-bg-warm)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="bl-section-header">
            <span className="text-section-header">All Articles</span>
            <h2 className="text-h1" style={{ marginTop: 8 }}>Browse by Topic</h2>
          </div>

          {/* Filters */}
          <div className="bl-filters">
            <div className="bl-filter-group">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  className={`pj-filter-tab ${category === c.id ? "pj-filter-tab--active" : ""}`}
                  onClick={() => setCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="bl-search-wrap">
              <svg className="bl-search-icon" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                className="bl-search input"
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button className="bl-search-clear btn btn-ghost btn-sm" onClick={() => setSearch("")}>
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          <div className="bl-result-count">
            <span className="text-caption">
              Showing <span className="text-mono-bold" style={{ fontSize: 12 }}>{filtered.length}</span> of{" "}
              <span className="text-mono-bold" style={{ fontSize: 12 }}>{POSTS.length}</span> articles
            </span>
          </div>

          {/* Post list */}
          {filtered.length > 0 ? (
            <div className="bl-post-list">
              {filtered.map((p, i) => (
                <div
                  key={p.id}
                  className="bl-post-row card"
                  onClick={() => setActivePost(p.id)}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="bl-post-row-left">
                    <div className="bl-post-row-meta">
                      <span className={`chip ${p.categoryChip}`} style={{ fontSize: 10 }}>{p.categoryLabel}</span>
                      <span className="text-caption" style={{ color: "var(--color-ink-faint)" }}>·</span>
                      <span className="text-caption">{p.date}</span>
                      <span className="text-caption" style={{ color: "var(--color-ink-faint)" }}>·</span>
                      <span className="text-caption">{p.readTime}</span>
                    </div>
                    <h3 className="text-h3" style={{ marginTop: 8 }}>{p.title}</h3>
                    <p className="text-body-sm" style={{ marginTop: 6 }}>
                      {p.excerpt.slice(0, 120)}…
                    </p>
                    <div className="bl-card-tags" style={{ marginTop: 10 }}>
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className="pj-tag text-label-xs">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bl-post-row-right">
                    <div className="bl-card-author">
                      <div className={`bl-author-dot ${p.authorAccentBg}`}>
                        <span className={`text-label-xs ${p.authorAccentText}`}>{p.authorInitials}</span>
                      </div>
                      <span className="text-label-sm">{p.author}</span>
                    </div>
                    <button className="btn btn-outline btn-sm" style={{ marginTop: 12 }}>
                      Read Article
                      <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bl-empty card">
              <span style={{ fontSize: 40 }}>📭</span>
              <h3 className="text-h2" style={{ marginTop: 16 }}>No articles found</h3>
              <p className="text-body-md" style={{ marginTop: 8, color: "var(--color-ink-muted)" }}>
                Try a different category or search term.
              </p>
              <button className="btn btn-outline" style={{ marginTop: 20 }} onClick={() => { setCategory("all"); setSearch(""); }}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section className="bl-newsletter bg-dark">
        <div className="bl-newsletter-glow" />
        <div className="bl-newsletter-inner">
          <div className="bl-newsletter-text">
            <span className="text-section-header" style={{ color: "var(--color-brand)" }}>Stay Updated</span>
            <h2 className="text-h1-inv" style={{ marginTop: 8 }}>Get New Articles in Your Inbox</h2>
            <p className="text-body-md" style={{ marginTop: 12, color: "var(--color-dark-muted)" }}>
              One email per month. Practical insights from the engineers who build real things.
              No spam, no marketing — just content worth reading.
            </p>
          </div>
          <div className="bl-newsletter-form">
            <input
              className="input input-dark bl-newsletter-input"
              type="email"
              placeholder="your@email.com"
            />
            <button className="btn btn-primary">
              Subscribe
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="hp-cta-banner">
        <div className="hp-cta-inner">
          <div>
            <h2 className="text-h1-inv">Ready to apply these ideas?</h2>
            <p className="text-body-lg" style={{ color: "var(--color-ink-light)", marginTop: 8 }}>
              Get a free consultation and scoped quote within 48 hours.
            </p>
          </div>
          <div className="hp-cta-actions">
            <a href="#" className="btn btn-primary btn-lg">Start a Project</a>
            <a href="#" className="btn btn-outline-dark btn-lg">View Services</a>
          </div>
        </div>
      </section>
    </div>
  );
}