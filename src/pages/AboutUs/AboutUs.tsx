import { useState } from "react";
import "./AboutUs.css";

/* ── Types ───────────────────────────────────────────────────────────────── */
type TeamMember = {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  expertise: string[];
  years: number;
  initials: string;
  accentBg: string;
  accentText: string;
};

type Value = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

type Milestone = {
  year: string;
  title: string;
  desc: string;
  highlight?: boolean;
};

/* ── Static Data ─────────────────────────────────────────────────────────── */
const TEAM: TeamMember[] = [
  {
    id: "ceo",
    name: "Bakumpe Joseph",
    role: "Chief Executive Officer",
    department: "Leadership",
    bio: "Joseph founded Fiat Technologies with a singular mission: to give East African businesses access to enterprise-grade technology without enterprise-grade complexity. With 18 years in infrastructure and software delivery, he has led engagements across Kenya, Uganda, and Tanzania.",
    expertise: ["Strategic Leadership", "Enterprise Architecture", "Business Development", "Digital Transformation"],
    years: 18,
    initials: "DM",
    accentBg: "bg-svc-software",
    accentText: "text-svc-software",
  },
  {
    id: "cto",
    name: "Amina Ochieng",
    role: "Chief Technology Officer",
    department: "Engineering",
    bio: "Amina oversees all software development and infrastructure design at Fiat. A computer science graduate from Strathmore University, she previously led engineering teams at two Uganda-based fintechs before joining Fiat as a founding technical member.",
    expertise: ["Full-Stack Engineering", "Cloud Infrastructure", "DevOps", "API Design"],
    years: 12,
    initials: "AO",
    accentBg: "bg-svc-install",
    accentText: "text-svc-install",
  },
  {
    id: "head-security",
    name: "James Kariuki",
    role: "Head of Physical Security",
    department: "CCTV & Access",
    bio: "James leads all CCTV deployments, access control systems, and physical security audits. He is a certified CCTV systems engineer with over a decade of experience deploying IP surveillance networks across retail, hospitality, and government sectors.",
    expertise: ["IP Surveillance", "Access Control", "NVR / DVR Systems", "Security Audits"],
    years: 11,
    initials: "JK",
    accentBg: "bg-svc-cctv",
    accentText: "text-svc-cctv",
  },
  {
    id: "head-infra",
    name: "Grace Njoroge",
    role: "Head of Infrastructure",
    department: "Networks & Installations",
    bio: "Grace manages all structured cabling, network design, and hardware deployment projects. A Cisco-certified network engineer, she has designed and built out network infrastructure for hospitals, universities, and logistics companies across East Africa.",
    expertise: ["Cisco Networking", "Structured Cabling", "VLAN Design", "Hardware Procurement"],
    years: 9,
    initials: "GN",
    accentBg: "bg-svc-hardware",
    accentText: "text-svc-hardware",
  },
  {
    id: "head-support",
    name: "Brian Otieno",
    role: "Head of Managed Support",
    department: "IT Support",
    bio: "Brian runs Fiat's managed IT support operation — the 24/7 helpdesk, endpoint management, and SLA-backed incident response function. He previously managed IT operations for a 500-seat BPO in Mombasa before bringing that discipline to Fiat's clients.",
    expertise: ["ITSM", "RMM Tooling", "SLA Management", "Endpoint Security"],
    years: 8,
    initials: "BO",
    accentBg: "bg-svc-support",
    accentText: "text-svc-support",
  },
  {
    id: "lead-dev",
    name: "Priya Sharma",
    role: "Lead Software Developer",
    department: "Engineering",
    bio: "Priya is the technical anchor of Fiat's software team. She architected the ERP systems, member portals, and self-service platforms that are now in production across several of Fiat's longest-standing client relationships.",
    expertise: ["Frontend", "Backend", "Cloud", "System Architecture"],
    years: 6,
    initials: "PS",
    accentBg: "bg-brand-surface",
    accentText: "text-brand",
  },
];

const VALUES: Value[] = [
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: "Delivered, Not Just Promised",
    desc: "We measure ourselves by what ships, not what's scoped. Every engagement ends with a working system, full documentation, and a client who knows exactly what they received.",
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Respect for Your Time",
    desc: "We respond to enquiries within 2 hours, scope within 48 hours, and start on the agreed date. Your time has a cost — we treat it like our own.",
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "No Hidden Complexity",
    desc: "We write proposals in plain language. We explain trade-offs honestly. We never upsell a solution that doesn't fit your problem.",
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Built for the Long Run",
    desc: "85% of our clients renew annually. We design systems that last — not ones that create dependency. If you outgrow us, we leave you better than we found you.",
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "Fixed-price or retainer — you know the number before we start. No surprise invoices, no scope creep billed without conversation.",
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
      </svg>
    ),
    title: "Local Expertise, Global Standards",
    desc: "We understand the East African market — power constraints, connectivity realities, procurement timelines. We apply international best practices with local pragmatism.",
  },
];

const MILESTONES: Milestone[] = [
  {
    year: "2025",
    title: "Founded in Uganda",
    desc: "Fiat Technologies incorporated with a 3-person team, initially focused on SME network installations and hardware procurement.",
  },
  {
    year: "2025",
    title: "First Enterprise Contract",
    desc: "Secured our first healthcare sector network project — a 3-building hospital campus that set the template for complex structured cabling engagements.",
  },
  {
    year: "2026",
    title: "Software Division Launched",
    desc: "Added bespoke software development as a formal service line. First clients were SACCOs needing digital member portals to replace paper-based processes.",
  },
  {
    year: "2026",
    title: "Managed Support at Scale",
    desc: "Launched 24/7 managed IT support, growing to 400+ seats under management within 18 months as remote-work demand surged.",
    highlight: true,
  },
  {
    year: "2026",
    title: "Regional Expansion",
    desc: "Extended operations to Uganda and Tanzania. Completed CCTV deployments for retail chains with cross-border footprints.",
  },
  {
    year: "2026",
    title: "200+ Projects Delivered",
    desc: "Crossed the milestone of 200 completed engagements across 12 industries. 85% client renewal rate across all service lines.",
    highlight: true,
  },
];

const COMPANY_STATS = [
  { value: "10+", label: "Years Operating" },
  { value: "200+", label: "Projects Delivered" },
  { value: "85%", label: "Client Renewal Rate" },
  { value: "12", label: "Industries Served" },
  { value: "3", label: "Countries Active" },
  { value: "24/7", label: "Support Coverage" },
];

const DEPARTMENTS = ["All", "Leadership", "Engineering", "CCTV & Access", "Networks & Installations", "IT Support"];

/* ── Component ───────────────────────────────────────────────────────────── */
export default function AboutUs() {
  const [activeMember, setActiveMember] = useState<string | null>(null);
  const [department, setDepartment] = useState("All");

  const filtered = department === "All"
    ? TEAM
    : TEAM.filter((m) => m.department === department);

  const activeData = activeMember ? TEAM.find((m) => m.id === activeMember) : null;

  return (
    <div className="ab-root">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="ab-hero">
        <div className="ab-hero-glow" />
        <div className="ab-hero-grid" />
        <div className="ab-hero-inner">
          <div className="ab-hero-content">
            <span className="text-section-header ab-hero-eyebrow">About Fiat Technologies</span>
            <h1 className="ab-hero-title">
              Technology That
              <br />
              <span className="ab-hero-title-accent">Actually Works</span>
            </h1>
            <p className="text-body-lg ab-hero-desc">
              We're a Uganda-based technology company delivering software, infrastructure,
              security, and managed IT support to businesses across East Africa. Founded in 2025,
              we've built our reputation on one thing: doing what we say we will.
            </p>
            <div className="ab-hero-cta">
              <a href="#team" className="btn btn-primary btn-lg">
                Meet the Team
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#" className="btn btn-outline-dark btn-lg">Our Projects</a>
            </div>
          </div>

          {/* Stats card */}
          <div className="ab-hero-visual">
            <div className="ab-hero-card card-featured">
              <div className="ab-hero-card-header">
                <span className="text-section-header">Company at a Glance</span>
                <span className="status-dot status-dot-online pulse" />
              </div>
              <div className="ab-hero-metrics">
                {COMPANY_STATS.map((s) => (
                  <div key={s.label} className="ab-hero-metric">
                    <span className="text-brand-heading" style={{ fontSize: 26 }}>{s.value}</span>
                    <span className="text-caption" style={{ marginTop: 2 }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="ab-hero-card-footer">
                <div className="ab-location-row">
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="text-caption">Uganda · Kampala · Dar es Salaam</span>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <div className="ab-hero-float ab-hero-float-1 card">
              <div className="ab-float-inner">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-label-sm">Est.</span>
              </div>
              <span className="text-mono-bold" style={{ fontSize: 20 }}>2025</span>
            </div>

            <div className="ab-hero-float ab-hero-float-2 card">
              <div className="ab-float-inner">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                </svg>
                <span className="text-label-sm">Team size</span>
              </div>
              <span className="text-mono-bold" style={{ fontSize: 20 }}>32+</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <div className="ab-stats-strip">
        {COMPANY_STATS.map((s, i) => (
          <div key={i} className="ab-stat-item">
            <span className="text-display" style={{ color: "#fff" }}>{s.value}</span>
            <span className="text-body-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── STORY SECTION ────────────────────────────────────────────────── */}
      <section className="ab-section ab-story">
        <div className="ab-story-inner">
          <div className="ab-story-left">
            <span className="text-section-header">Our Story</span>
            <h2 className="text-h1" style={{ marginTop: 8 }}>Built in Uganda.<br />Built for Africa.</h2>

            <p className="text-body-md ab-story-para">
              Fiat Technologies was founded in 2025 by a small team of engineers who noticed a persistent gap
              in the East African market: businesses were either locked into expensive multinational IT firms
              with no local accountability, or left to patch together solutions from unreliable freelancers.
            </p>
            <p className="text-body-md ab-story-para">
              We built Fiat to be the third option — a team with the technical depth of an enterprise firm
              and the responsiveness of a local partner. Over ten years, that position has earned us
              relationships with clients in finance, healthcare, retail, logistics, and education.
            </p>
            <p className="text-body-md ab-story-para">
              We're not a reseller. We're not a staffing agency. We're a delivery company — and our track record
              of 200+ completed engagements, a 98% on-time rate, and an 85% renewal rate is the proof.
            </p>

            <div className="ab-story-badges">
              {[
                { label: "ISO 9001 Aligned", icon: "🏅" },
                { label: "Cisco Partner", icon: "🔗" },
                { label: "Microsoft Silver", icon: "⚡" },
              ].map((b) => (
                <div key={b.label} className="ab-story-badge">
                  <span>{b.icon}</span>
                  <span className="text-label-sm">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ab-story-right">
            {/* Mission / Vision cards */}
            <div className="ab-mv-card card">
              <div className="ab-mv-icon bg-brand-surface">
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <h4 className="text-h3" style={{ marginTop: 12 }}>Mission</h4>
              <p className="text-body-sm" style={{ marginTop: 8 }}>
                To give East African businesses access to reliable, well-built technology solutions —
                delivered on time, scoped honestly, and supported beyond handover.
              </p>
            </div>

            <div className="ab-mv-card card" style={{ marginTop: 16 }}>
              <div className="ab-mv-icon bg-svc-install">
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--color-svc-install)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <h4 className="text-h3" style={{ marginTop: 12 }}>Vision</h4>
              <p className="text-body-sm" style={{ marginTop: 8 }}>
                To be the most trusted technology delivery partner in East Africa — known not for our size,
                but for the quality and integrity of every engagement we take on.
              </p>
            </div>

            {/* Quick numbers */}
            <div className="ab-story-numbers card" style={{ marginTop: 16 }}>
              {[
                { v: "32+", l: "Full-time staff" },
                { v: "Ush 0", l: "Hidden fees, ever" },
                { v: "48h", l: "Avg. quote turnaround" },
              ].map((n) => (
                <div key={n.l} className="ab-story-num">
                  <span className="text-mono-bold" style={{ fontSize: 18 }}>{n.v}</span>
                  <span className="text-caption" style={{ marginTop: 4 }}>{n.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────────── */}
      <section className="ab-values bg-dark">
        <div className="ab-values-glow" />
        <div className="ab-values-inner">
          <div className="ab-section-header ab-section-header--dark">
            <span className="text-section-header" style={{ color: "var(--color-brand)" }}>What We Stand For</span>
            <h2 className="text-h1-inv" style={{ marginTop: 8 }}>Our Values</h2>
            <p className="text-body-md" style={{ marginTop: 12, color: "var(--color-ink-light)" }}>
              Six principles that govern every project, every proposal, and every support call.
            </p>
          </div>
          <div className="ab-values-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className="ab-value-card card-dark" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="ab-value-icon bg-brand-surface">
                  <span className="text-brand">{v.icon}</span>
                </div>
                <h4 className="text-h3-inv" style={{ marginTop: 16 }}>{v.title}</h4>
                <p className="text-body-sm" style={{ marginTop: 8, color: "var(--color-dark-muted)", lineHeight: 1.65 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
      <section className="ab-section ab-timeline-section">
        <div className="ab-section-header">
          <span className="text-section-header">Our History</span>
          <h2 className="text-h1" style={{ marginTop: 8 }}>A Decade of Delivery</h2>
          <p className="text-body-md ab-section-sub">
            From a 3-person startup to a 32-strong team operating across three countries.
          </p>
        </div>

        <div className="ab-timeline">
          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              className={`ab-timeline-item ${m.highlight ? "ab-timeline-item--highlight" : ""} ${i % 2 === 0 ? "ab-timeline-item--left" : "ab-timeline-item--right"}`}
            >
              <div className="ab-timeline-content card">
                <div className="ab-timeline-year-row">
                  <span className="ab-timeline-year text-mono-bold">{m.year}</span>
                  {m.highlight && (
                    <span className="chip chip-brand" style={{ fontSize: 10 }}>Milestone</span>
                  )}
                </div>
                <h4 className="text-h3" style={{ marginTop: 10 }}>{m.title}</h4>
                <p className="text-body-sm" style={{ marginTop: 8, lineHeight: 1.6 }}>{m.desc}</p>
              </div>
              <div className="ab-timeline-dot" />
            </div>
          ))}
          <div className="ab-timeline-spine" />
        </div>
      </section>

      {/* ── TEAM MODAL ───────────────────────────────────────────────────── */}
      {activeData && (
        <div className="ab-modal-backdrop" onClick={() => setActiveMember(null)}>
          <div className="ab-modal card" onClick={(e) => e.stopPropagation()}>
            <div className="ab-modal-header">
              <div className="ab-modal-header-left">
                <div className={`ab-modal-avatar ${activeData.accentBg}`}>
                  <span className={`text-h2 ${activeData.accentText}`}>{activeData.initials}</span>
                </div>
                <div>
                  <div className="ab-modal-chips">
                    <span className="chip chip-brand" style={{ fontSize: 10 }}>{activeData.department}</span>
                    <span className="chip chip-steel" style={{ fontSize: 10 }}>{activeData.years} yrs exp</span>
                  </div>
                  <h2 className="text-h1" style={{ marginTop: 8 }}>{activeData.name}</h2>
                  <p className="text-body-sm" style={{ marginTop: 4 }}>{activeData.role}</p>
                </div>
              </div>
              <button
                className="btn btn-ghost btn-sm ab-modal-close"
                onClick={() => setActiveMember(null)}
                aria-label="Close"
              >
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                Close
              </button>
            </div>

            <div className="ab-modal-body">
              <div className="ab-modal-left">
                <div className="ab-modal-section">
                  <span className="text-section-header">About</span>
                  <p className="text-body-md" style={{ marginTop: 10, color: "var(--color-ink-muted)", lineHeight: 1.7 }}>
                    {activeData.bio}
                  </p>
                </div>
              </div>

              <div className="ab-modal-right">
                <div className="ab-modal-aside card" style={{ background: "var(--color-bg-subtle)" }}>
                  <p className="text-section-header">Areas of Expertise</p>
                  <ul className="ab-expertise-list">
                    {activeData.expertise.map((e) => (
                      <li key={e} className="ab-expertise-item">
                        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span className="text-label-sm">{e}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="ab-aside-stat">
                    <span className="text-display" style={{ color: "var(--color-brand)", fontSize: 28 }}>{activeData.years}</span>
                    <span className="text-caption" style={{ marginTop: 4 }}>Years of experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TEAM SECTION ─────────────────────────────────────────────────── */}
      <section className="ab-section" id="team" style={{ backgroundColor: "var(--color-bg-warm)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="ab-section-header">
            <span className="text-section-header">The People</span>
            <h2 className="text-h1" style={{ marginTop: 8 }}>Meet the Team</h2>
            <p className="text-body-md ab-section-sub">
              Every discipline under one roof. Click any card to learn more.
            </p>
          </div>

          {/* Department filter */}
          <div className="ab-dept-filter">
            {DEPARTMENTS.map((d) => (
              <button
                key={d}
                className={`pj-filter-tab ${department === d ? "pj-filter-tab--active" : ""}`}
                onClick={() => setDepartment(d)}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Team grid */}
          <div className="ab-team-grid">
            {filtered.map((m) => (
              <div
                key={m.id}
                className={`ab-member-card card-service ${activeMember === m.id ? "ab-member-card--active" : ""}`}
                onClick={() => setActiveMember(m.id === activeMember ? null : m.id)}
              >
                <div className="ab-member-top">
                  <div className={`ab-member-avatar ${m.accentBg}`}>
                    <span className={`text-h2 ${m.accentText}`}>{m.initials}</span>
                  </div>
                  <span className="chip chip-steel" style={{ fontSize: 10, alignSelf: "flex-start" }}>{m.department}</span>
                </div>

                <h3 className="text-h2" style={{ marginTop: 14 }}>{m.name}</h3>
                <p className="text-body-sm" style={{ marginTop: 4, color: "var(--color-brand)" }}>{m.role}</p>
                <p className="text-body-sm" style={{ marginTop: 10 }}>
                  {m.bio.slice(0, 100)}…
                </p>

                <div className="ab-member-tags">
                  {m.expertise.slice(0, 3).map((e) => (
                    <span key={e} className="pj-tag text-label-xs">{e}</span>
                  ))}
                </div>

                <div className="ab-member-footer">
                  <div className="ab-member-exp">
                    <span className="text-mono-bold" style={{ fontSize: 16 }}>{m.years}</span>
                    <span className="text-caption" style={{ marginLeft: 4 }}>yrs exp</span>
                  </div>
                  <button className="btn btn-outline btn-sm">
                    Profile
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CULTURE STRIP ────────────────────────────────────────────────── */}
      <section className="ab-culture">
        <div className="ab-culture-inner">
          <div className="ab-section-header">
            <span className="text-section-header">Life at Fiat</span>
            <h2 className="text-h1" style={{ marginTop: 8 }}>Culture & Environment</h2>
          </div>
          <div className="ab-culture-grid">
            {[
              { emoji: "🏗", title: "Build real things", desc: "Every engineer here has production deployments to their name. We build — we don't prototype indefinitely." },
              { emoji: "📍", title: "Uganda-first", desc: "We are proudly local. Our office, our clients, and our impact are rooted in East Africa." },
              { emoji: "🎓", title: "Continuous learning", desc: "Certifications, conference attendance, and internal knowledge-sharing are part of how we work." },
              { emoji: "⚖️", title: "Honest culture", desc: "We flag problems early — with clients and with each other. No surprises is a cultural norm, not just a business policy." },
            ].map((c) => (
              <div key={c.title} className="ab-culture-card card">
                <span className="ab-culture-emoji">{c.emoji}</span>
                <h4 className="text-h3" style={{ marginTop: 14 }}>{c.title}</h4>
                <p className="text-body-sm" style={{ marginTop: 8, lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="hp-cta-banner">
        <div className="hp-cta-inner">
          <div>
            <h2 className="text-h1-inv">Want to work with us?</h2>
            <p className="text-body-lg" style={{ color: "var(--color-ink-light)", marginTop: 8 }}>
              Whether as a client or a team member — we'd love to hear from you.
            </p>
          </div>
          <div className="hp-cta-actions">
            <a href="#" className="btn btn-primary btn-lg">Start a Project</a>
            <a href="#" className="btn btn-outline-dark btn-lg">View Careers</a>
          </div>
        </div>
      </section>
    </div>
  );
}