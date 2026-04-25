import { useState } from "react";
import "./Projects.css";

/* ── Types ───────────────────────────────────────────────────────────────── */
type Project = {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  categoryChip: string;
  categoryAccent: string;
  categoryBg: string;
  year: string;
  duration: string;
  status: "Completed" | "Ongoing" | "In Progress";
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  featured: boolean;
  icon: React.ReactNode;
};

/* ── Static Data ─────────────────────────────────────────────────────────── */
const PROJECTS: Project[] = [
  {
    id: "erp-logistics",
    title: "Custom ERP Platform",
    client: "Lakeview Logistics Ltd",
    industry: "Logistics",
    category: "software",
    categoryChip: "chip-svc-software",
    categoryAccent: "text-svc-software",
    categoryBg: "bg-svc-software",
    year: "2024",
    duration: "14 weeks",
    status: "Completed",
    summary:
      "End-to-end ERP system built from the ground up to unify fleet management, invoicing, and warehouse operations across 3 depots.",
    challenge:
      "The client was running 4 disconnected spreadsheet systems, causing duplicate data entry, invoice delays of up to 12 days, and no real-time fleet visibility.",
    solution:
      "We architected a unified React + Node.js ERP with role-based access, automated invoice generation, live GPS fleet tracking integration, and a centralised warehouse dashboard.",
    outcome:
      "Invoice cycle reduced from 12 days to same-day. Fleet utilisation improved by 23%. All three depots now operate from a single source of truth.",
    tags: ["React", "Node.js", "PostgreSQL", "GPS API", "Role-Based Auth"],
    stat1Value: "12d→0",
    stat1Label: "Invoice delay eliminated",
    stat2Value: "+23%",
    stat2Label: "Fleet utilisation",
    stat3Value: "3",
    stat3Label: "Depots unified",
    featured: true,
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    id: "cctv-retail",
    title: "Multi-Site CCTV Overhaul",
    client: "Nakumatt Retail Group",
    industry: "Retail",
    category: "cctv",
    categoryChip: "chip-svc-cctv",
    categoryAccent: "text-svc-cctv",
    categoryBg: "bg-svc-cctv",
    year: "2025",
    duration: "3 weeks",
    status: "Completed",
    summary:
      "Replaced legacy analogue CCTV across 6 retail branches with a centralised IP camera network featuring remote monitoring and AI motion alerts.",
    challenge:
      "Aging analogue cameras with no remote access, frequent blind spots, and no incident archiving. Loss-prevention team had zero real-time visibility.",
    solution:
      "Deployed 4K IP cameras across all 6 sites, integrated into a centralised NVR cloud with AI-powered motion zoning, remote live view, and 90-day encrypted archiving.",
    outcome:
      "Shrinkage incidents down 41% in the first quarter. Remote monitoring now operational from HQ for all 6 locations.",
    tags: ["IP Cameras", "NVR", "Cloud Storage", "AI Motion", "Remote Access"],
    stat1Value: "-41%",
    stat1Label: "Shrinkage reduction",
    stat2Value: "6",
    stat2Label: "Sites covered",
    stat3Value: "90d",
    stat3Label: "Encrypted archive",
    featured: true,
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
  },
  {
    id: "network-hospital",
    title: "Hospital Network Infrastructure",
    client: "Tamale International Hospital",
    industry: "Healthcare",
    category: "install",
    categoryChip: "chip-svc-install",
    categoryAccent: "text-svc-install",
    categoryBg: "bg-svc-install",
    year: "2024",
    duration: "6 weeks",
    status: "Completed",
    summary:
      "Designed and installed a segmented, redundant network across 8 floors and 3 buildings, meeting healthcare-grade uptime and security compliance.",
    challenge:
      "A single-point-of-failure flat network caused weekly outages disrupting patient management systems. No VLAN segmentation between clinical, admin, and guest traffic.",
    solution:
      "Implemented full structured cabling with fibre backbone, layer-3 VLAN segmentation (clinical/admin/IoT/guest), redundant uplinks, and UPS-backed switching throughout.",
    outcome:
      "Zero unplanned downtime in the 12 months post-installation. Network audit compliance score rose from 54% to 98%.",
    tags: ["Fibre Optic", "VLAN", "Cisco Switching", "Structured Cabling", "UPS"],
    stat1Value: "0",
    stat1Label: "Downtime incidents (12mo)",
    stat2Value: "98%",
    stat2Label: "Compliance audit score",
    stat3Value: "8",
    stat3Label: "Floors networked",
    featured: true,
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/>
        <path d="M5 8v4h14V8M12 12v4"/>
      </svg>
    ),
  },
  {
    id: "helpdesk-fintech",
    title: "Managed IT Support Rollout",
    client: "PesaLink Financial Services",
    industry: "Finance",
    category: "support",
    categoryChip: "chip-svc-support",
    categoryAccent: "text-svc-support",
    categoryBg: "bg-svc-support",
    year: "2024",
    duration: "Ongoing",
    status: "Ongoing",
    summary:
      "Full managed IT support contract for 180-seat fintech, covering helpdesk, endpoint management, patch cycles, and 24/7 incident response.",
    challenge:
      "Rapid headcount growth from 40 to 180 seats in 18 months left IT support overwhelmed. Average ticket resolution was 3.2 days; regulators flagged patch compliance gaps.",
    solution:
      "Deployed a structured ITSM helpdesk with tiered escalation, automated endpoint patching via RMM, and a dedicated on-call engineer for P1 incidents.",
    outcome:
      "Average resolution time down to 4.1 hours. Patch compliance at 100% for 6 consecutive audit cycles.",
    tags: ["ITSM", "RMM", "Endpoint Mgmt", "24/7 Support", "SLA"],
    stat1Value: "4.1h",
    stat1Label: "Avg resolution time",
    stat2Value: "100%",
    stat2Label: "Patch compliance",
    stat3Value: "180",
    stat3Label: "Seats managed",
    featured: false,
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.09 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6z"/>
      </svg>
    ),
  },
  {
    id: "hardware-school",
    title: "Computer Lab Deployment",
    client: "Strathmore University",
    industry: "Education",
    category: "hardware",
    categoryChip: "chip-svc-hardware",
    categoryAccent: "text-svc-hardware",
    categoryBg: "bg-svc-hardware",
    year: "2023",
    duration: "2 weeks",
    status: "Completed",
    summary:
      "Sourced, configured, and deployed 120 workstations across 3 new computer labs, including imaging, software licensing, and patch management setup.",
    challenge:
      "The university needed 3 labs operational before semester start — a 14-day window with no existing image or deployment pipeline.",
    solution:
      "Procured 120 Lenovo ThinkCentre workstations, built a master image with all required software, deployed via PXE boot imaging, and handed over with full asset register and warranty documentation.",
    outcome:
      "All 3 labs delivered 2 days ahead of deadline. Zero hardware failures in the first semester of operation.",
    tags: ["Hardware Procurement", "PXE Imaging", "Asset Management", "Lenovo", "Software Licensing"],
    stat1Value: "120",
    stat1Label: "Workstations deployed",
    stat2Value: "2d",
    stat2Label: "Ahead of deadline",
    stat3Value: "0",
    stat3Label: "Hardware failures (sem 1)",
    featured: false,
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    id: "portal-sacco",
    title: "Member Self-Service Portal",
    client: "Imarisha SACCO",
    industry: "Finance",
    category: "software",
    categoryChip: "chip-svc-software",
    categoryAccent: "text-svc-software",
    categoryBg: "bg-svc-software",
    year: "2023",
    duration: "10 weeks",
    status: "Completed",
    summary:
      "Built a secure web portal allowing SACCO members to view statements, apply for loans, and track contributions — replacing a fully manual, paper-based process.",
    challenge:
      "All member interactions required in-person visits. Staff processed 300+ manual requests monthly, and members had no visibility into their own accounts.",
    solution:
      "Developed a secure member portal with JWT-authenticated accounts, statement downloads, loan application workflows, and an admin dashboard for staff approvals.",
    outcome:
      "Walk-in requests dropped 78% in the first month. Staff processing time cut by 60%. Loan approval cycle from 7 days to 48 hours.",
    tags: ["React", "Django", "JWT Auth", "PDF Generation", "Workflow Engine"],
    stat1Value: "-78%",
    stat1Label: "Walk-in requests",
    stat2Value: "48h",
    stat2Label: "Loan approval cycle",
    stat3Value: "-60%",
    stat3Label: "Staff processing time",
    featured: false,
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Software" },
  { id: "cctv", label: "CCTV" },
  { id: "install", label: "Installation" },
  { id: "hardware", label: "Hardware" },
  { id: "support", label: "IT Support" },
];

const INDUSTRIES = ["All Industries", "Logistics", "Retail", "Healthcare", "Finance", "Education"];

const STATUS_MAP: Record<Project["status"], string> = {
  Completed: "chip-success",
  Ongoing: "chip-brand",
  "In Progress": "chip-warning",
};

/* ── Stat strip data ─────────────────────────────────────────────────────── */
const PROJECT_STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "85%", label: "Client Renewal Rate" },
  { value: "12", label: "Industries Served" },
];

/* ── Component ───────────────────────────────────────────────────────────── */
export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [category, setCategory] = useState("all");
  const [industry, setIndustry] = useState("All Industries");
  const [search, setSearch] = useState("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filtered = PROJECTS.filter((p) => {
    const matchCat = category === "all" || p.category === category;
    const matchInd = industry === "All Industries" || p.industry === industry;
    const matchSearch =
      search.trim() === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.client.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchFeatured = !showFeaturedOnly || p.featured;
    return matchCat && matchInd && matchSearch && matchFeatured;
  });

  const activeData = activeProject ? PROJECTS.find((p) => p.id === activeProject) : null;

  return (
    <div className="pj-root">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pj-hero">
        <div className="pj-hero-glow" />
        <div className="pj-hero-grid" />
        <div className="pj-hero-inner">
          <div className="pj-hero-content">
            <span className="text-section-header pj-hero-eyebrow">Our Work</span>
            <h1 className="pj-hero-title">
              Projects That
              <br />
              <span className="pj-hero-title-accent">Speak for Themselves</span>
            </h1>
            <p className="text-body-lg pj-hero-desc">
              Real clients. Real outcomes. Browse our portfolio of delivered
              projects across software, infrastructure, security, and support —
              each one scoped, built, and handed over to specification.
            </p>
            <div className="pj-hero-cta">
              <a href="#projects" className="btn btn-primary btn-lg">
                Browse Projects
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#" className="btn btn-outline-dark btn-lg">Start a Project</a>
            </div>
          </div>

          {/* Featured metrics card */}
          <div className="pj-hero-visual">
            <div className="pj-hero-card card-featured">
              <div className="pj-hero-card-header">
                <span className="text-section-header">Portfolio at a Glance</span>
                <span className="status-dot status-dot-online pulse" />
              </div>
              <div className="pj-hero-metrics">
                {PROJECT_STATS.map((s) => (
                  <div key={s.label} className="pj-hero-metric">
                    <span className="text-brand-heading" style={{ fontSize: 26 }}>{s.value}</span>
                    <span className="text-caption" style={{ marginTop: 2 }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="pj-hero-card-footer">
                <div className="pj-industry-pills">
                  {["Logistics", "Finance", "Healthcare", "Retail", "Education"].map((ind) => (
                    <span key={ind} className="pj-industry-pill text-caption">{ind}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <div className="pj-hero-float pj-hero-float-1 card">
              <div className="pj-float-inner">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-label-sm">On-time delivery</span>
              </div>
              <span className="text-mono-bold" style={{ fontSize: 20 }}>98%</span>
            </div>

            <div className="pj-hero-float pj-hero-float-2 card">
              <div className="pj-float-inner">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                </svg>
                <span className="text-label-sm">Client retention</span>
              </div>
              <span className="text-mono-bold" style={{ fontSize: 20 }}>85%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <div className="pj-stats-strip">
        {PROJECT_STATS.map((s, i) => (
          <div key={i} className="pj-stat-item">
            <span className="text-display" style={{ color: "#fff" }}>{s.value}</span>
            <span className="text-body-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── PROJECT MODAL ────────────────────────────────────────────────── */}
      {activeData && (
        <div className="pj-modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="pj-modal card" onClick={(e) => e.stopPropagation()}>

            {/* Modal header */}
            <div className="pj-modal-header">
              <div className="pj-modal-header-left">
                <div className={`pj-modal-icon ${activeData.categoryBg}`}>
                  <span className={activeData.categoryAccent}>{activeData.icon}</span>
                </div>
                <div>
                  <div className="pj-modal-chips">
                    <span className={`chip ${activeData.categoryChip}`}>{activeData.category.toUpperCase()}</span>
                    <span className={`chip ${STATUS_MAP[activeData.status]}`}>{activeData.status}</span>
                  </div>
                  <h2 className="text-h1" style={{ marginTop: 8 }}>{activeData.title}</h2>
                  <p className="text-body-sm" style={{ marginTop: 4 }}>
                    <span className="text-label-sm">{activeData.client}</span>
                    <span style={{ color: "var(--color-ink-faint)", margin: "0 6px" }}>·</span>
                    <span>{activeData.industry}</span>
                    <span style={{ color: "var(--color-ink-faint)", margin: "0 6px" }}>·</span>
                    <span>{activeData.year}</span>
                    <span style={{ color: "var(--color-ink-faint)", margin: "0 6px" }}>·</span>
                    <span>{activeData.duration}</span>
                  </p>
                </div>
              </div>
              <button
                className="btn btn-ghost btn-sm pj-modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close"
              >
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                Close
              </button>
            </div>

            <div className="pj-modal-body">
              <div className="pj-modal-left">
                {/* Stats row */}
                <div className="pj-modal-stats">
                  {[
                    { v: activeData.stat1Value, l: activeData.stat1Label },
                    { v: activeData.stat2Value, l: activeData.stat2Label },
                    { v: activeData.stat3Value, l: activeData.stat3Label },
                  ].map((s) => (
                    <div key={s.l} className="pj-modal-stat">
                      <span className="text-display" style={{ color: "var(--color-brand)", fontSize: 22 }}>{s.v}</span>
                      <span className="text-caption" style={{ marginTop: 4 }}>{s.l}</span>
                    </div>
                  ))}
                </div>

                {/* Narrative sections */}
                {[
                  { label: "Challenge", icon: "⚡", text: activeData.challenge },
                  { label: "Our Solution", icon: "🛠", text: activeData.solution },
                  { label: "Outcome", icon: "📊", text: activeData.outcome },
                ].map((sec) => (
                  <div key={sec.label} className="pj-modal-section">
                    <div className="pj-modal-section-label">
                      <span className="pj-modal-section-emoji">{sec.icon}</span>
                      <span className="text-section-header">{sec.label}</span>
                    </div>
                    <p className="text-body-md" style={{ marginTop: 8, color: "var(--color-ink-muted)", lineHeight: 1.7 }}>
                      {sec.text}
                    </p>
                  </div>
                ))}

                {/* Tags */}
                <div className="pj-modal-tags">
                  {activeData.tags.map((t) => (
                    <span key={t} className="pj-tag text-label-xs">{t}</span>
                  ))}
                </div>
              </div>

              <div className="pj-modal-right">
                <div className="pj-modal-aside card" style={{ background: "var(--color-bg-subtle)" }}>
                  <p className="text-section-header">Project Details</p>
                  <div className="pj-modal-aside-rows">
                    {[
                      { label: "Client", value: activeData.client },
                      { label: "Industry", value: activeData.industry },
                      { label: "Year", value: activeData.year },
                      { label: "Duration", value: activeData.duration },
                      { label: "Status", value: activeData.status },
                    ].map((row) => (
                      <div key={row.label} className="pj-modal-aside-row">
                        <span className="text-caption">{row.label}</span>
                        <span className="text-label-sm">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 20 }}>
                    Similar Project?
                    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── PROJECT CATALOGUE ─────────────────────────────────────────────── */}
      <section className="pj-section" id="projects">
        <div className="pj-section-header">
          <span className="text-section-header">Portfolio</span>
          <h2 className="text-h1" style={{ marginTop: 8 }}>Browse Our Projects</h2>
          <p className="text-body-md pj-section-sub">
            Filter by service category, industry, or search by keyword. Click any project for the full case study.
          </p>
        </div>

        {/* Filters */}
        <div className="pj-filters">
          {/* Search */}
          <div className="pj-search-wrap">
            <svg className="pj-search-icon" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className="pj-search input"
              type="text"
              placeholder="Search projects, clients, or tech…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="pj-search-clear btn btn-ghost btn-sm" onClick={() => setSearch("")}>
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>

          <div className="pj-filter-row">
            {/* Category pills */}
            <div className="pj-filter-group">
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

            {/* Industry select */}
            <div className="pj-filter-right">
              <select
                className="pj-select input"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                {INDUSTRIES.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>

              {/* Featured toggle */}
              <button
                className={`pj-featured-toggle btn btn-sm ${showFeaturedOnly ? "btn-primary" : "btn-outline"}`}
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              >
                <svg width={13} height={13} viewBox="0 0 24 24" fill={showFeaturedOnly ? "white" : "var(--color-brand)"} stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Featured
              </button>
            </div>
          </div>

          {/* Result count */}
          <div className="pj-result-count">
            <span className="text-caption">
              Showing <span className="text-mono-bold" style={{ fontSize: 12 }}>{filtered.length}</span> of{" "}
              <span className="text-mono-bold" style={{ fontSize: 12 }}>{PROJECTS.length}</span> projects
            </span>
          </div>
        </div>

        {/* Project grid */}
        {filtered.length > 0 ? (
          <div className="pj-grid">
            {filtered.map((p) => (
              <div
                key={p.id}
                className={`pj-card card-service ${p.featured ? "pj-card--featured" : ""} ${activeProject === p.id ? "pj-card--active" : ""}`}
                onClick={() => setActiveProject(p.id === activeProject ? null : p.id)}
              >
                {/* Card top */}
                <div className="pj-card-top">
                  <div className={`pj-card-icon ${p.categoryBg}`}>
                    <span className={p.categoryAccent}>{p.icon}</span>
                  </div>
                  <div className="pj-card-chips">
                    {p.featured && (
                      <span className="pj-featured-badge">
                        <svg width={10} height={10} viewBox="0 0 24 24" fill="var(--color-brand)" stroke="none">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        Featured
                      </span>
                    )}
                    <span className={`chip ${STATUS_MAP[p.status]}`} style={{ fontSize: 10, padding: "2px 8px" }}>
                      {p.status}
                    </span>
                  </div>
                </div>

                {/* Client + industry */}
                <div className="pj-card-meta">
                  <span className={`chip ${p.categoryChip}`} style={{ fontSize: 10 }}>{p.category.toUpperCase()}</span>
                  <span className="text-caption" style={{ color: "var(--color-ink-faint)" }}>·</span>
                  <span className="text-caption">{p.industry}</span>
                  <span className="text-caption" style={{ color: "var(--color-ink-faint)" }}>·</span>
                  <span className="text-caption">{p.year}</span>
                </div>

                <h3 className="text-h2" style={{ marginTop: 10 }}>{p.title}</h3>
                <p className="text-body-sm" style={{ marginTop: 6, color: "var(--color-ink-light)" }}>
                  {p.client}
                </p>
                <p className="text-body-sm" style={{ marginTop: 8 }}>
                  {p.summary.slice(0, 100)}…
                </p>

                {/* Key stats */}
                <div className="pj-card-stats">
                  <div className="pj-card-stat">
                    <span className="text-mono-bold">{p.stat1Value}</span>
                    <span className="text-caption" style={{ marginTop: 2 }}>{p.stat1Label}</span>
                  </div>
                  <div className="pj-card-stat">
                    <span className="text-mono-bold">{p.stat2Value}</span>
                    <span className="text-caption" style={{ marginTop: 2 }}>{p.stat2Label}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="pj-card-tags">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="pj-tag text-label-xs">{t}</span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="pj-tag pj-tag--more text-label-xs">+{p.tags.length - 3}</span>
                  )}
                </div>

                <div className="pj-card-footer">
                  <span className="text-caption">{p.duration}</span>
                  <button className="btn btn-outline btn-sm">
                    Case Study
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="pj-empty card">
            <span className="pj-empty-icon">🔍</span>
            <h3 className="text-h2" style={{ marginTop: 16 }}>No projects found</h3>
            <p className="text-body-md" style={{ marginTop: 8, color: "var(--color-ink-muted)" }}>
              Try adjusting your filters or search term.
            </p>
            <button className="btn btn-outline" style={{ marginTop: 20 }} onClick={() => { setCategory("all"); setIndustry("All Industries"); setSearch(""); setShowFeaturedOnly(false); }}>
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* ── INDUSTRIES SERVED ─────────────────────────────────────────────── */}
      <section className="pj-industries bg-dark">
        <div className="pj-industries-glow" />
        <div className="pj-industries-inner">
          <div className="pj-section-header pj-section-header--dark">
            <span className="text-section-header" style={{ color: "var(--color-brand)" }}>Industries</span>
            <h2 className="text-h1-inv" style={{ marginTop: 8 }}>Sectors We've Worked In</h2>
            <p className="text-body-md" style={{ marginTop: 12, color: "var(--color-ink-light)" }}>
              Our solutions adapt to the specific regulatory, operational, and technical demands of each sector.
            </p>
          </div>
          <div className="pj-industry-grid">
            {[
              { icon: "🏦", name: "Finance & SACCO", count: "4 projects" },
              { icon: "🏥", name: "Healthcare", count: "3 projects" },
              { icon: "🛒", name: "Retail", count: "5 projects" },
              { icon: "🚚", name: "Logistics", count: "3 projects" },
              { icon: "🎓", name: "Education", count: "4 projects" },
              { icon: "🏛", name: "Government", count: "2 projects" },
              { icon: "🏨", name: "Hospitality", count: "3 projects" },
              { icon: "🏭", name: "Manufacturing", count: "2 projects" },
              { icon: "⚽", name: "Sports", count: "2 projects" },
              { icon: "🏭", name: "Manufacturing", count: "2 projects" },
            ].map((ind) => (
              <div key={ind.name} className="pj-industry-card card-dark">
                <span className="pj-industry-emoji">{ind.icon}</span>
                <h4 className="text-h3-inv" style={{ marginTop: 12 }}>{ind.name}</h4>
                <span className="text-caption" style={{ color: "var(--color-brand)", marginTop: 4 }}>{ind.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="hp-cta-banner">
        <div className="hp-cta-inner">
          <div>
            <h2 className="text-h1-inv">Have a project in mind?</h2>
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