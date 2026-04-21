import { useState } from "react";
import "./HomePage.css";

/* ── Data ─────────────────────────────────────────────────────────────────── */

const NAV_LINKS = ["Services", "Projects", "About", "Blog", "Contact"];

const SERVICES = [
  {
    id: "software",
    chipClass: "chip-svc-software",
    accentClass: "accent-software",
    cardAccent: "card-accent-software",
    bgClass: "bg-svc-software",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    tag: "Software Development",
    title: "Custom Software Solutions",
    description:
      "Full-cycle engineering from architecture to deployment. We build scalable web platforms, APIs, and internal tools tailored to your operational needs.",
    features: ["Web & Mobile Apps", "API Integration", "Cloud Architecture"],
    stat: "200+",
    statLabel: "Projects Delivered",
  },
  {
    id: "install",
    chipClass: "chip-svc-install",
    accentClass: "accent-install",
    cardAccent: "card-accent-install",
    bgClass: "bg-svc-install",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1={12} y1={22.08} x2={12} y2={12} />
      </svg>
    ),
    tag: "Software Installation",
    title: "Professional Setup & Deployment",
    description:
      "End-to-end software installation, configuration, and onboarding. We handle enterprise rollouts, licensing, and staff training seamlessly.",
    features: ["ERP & CRM Rollouts", "OS Configuration", "Staff Onboarding"],
    stat: "500+",
    statLabel: "Systems Configured",
  },
  {
    id: "cctv",
    chipClass: "chip-svc-cctv",
    accentClass: "accent-cctv",
    cardAccent: "card-accent-cctv",
    bgClass: "bg-svc-cctv",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x={1} y={5} width={15} height={14} rx={2} ry={2} />
      </svg>
    ),
    tag: "CCTV & Security",
    title: "Security Camera Systems",
    description:
      "Intelligent surveillance infrastructure for offices, warehouses, and commercial spaces. Remote monitoring, AI detection, and 24/7 footage management.",
    features: [
      "IP Camera Networks",
      "Remote Monitoring",
      "AI Motion Detection",
    ],
    stat: "1,000+",
    statLabel: "Cameras Installed",
  },
  {
    id: "hardware",
    chipClass: "chip-svc-hardware",
    accentClass: "accent-hardware",
    cardAccent: "card-accent-hardware",
    bgClass: "bg-svc-hardware",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x={4} y={4} width={16} height={16} rx={2} />
        <rect x={9} y={9} width={6} height={6} />
        <line x1={9} y1={1} x2={9} y2={4} />
        <line x1={15} y1={1} x2={15} y2={4} />
        <line x1={9} y1={20} x2={9} y2={23} />
        <line x1={15} y1={20} x2={15} y2={23} />
        <line x1={20} y1={9} x2={23} y2={9} />
        <line x1={20} y1={14} x2={23} y2={14} />
        <line x1={1} y1={9} x2={4} y2={9} />
        <line x1={1} y1={14} x2={4} y2={14} />
      </svg>
    ),
    tag: "Hardware & Accessories",
    title: "Hardware Procurement & Supply",
    description:
      "Sourcing, procurement, and supply of enterprise-grade hardware — servers, workstations, networking gear, and peripherals at competitive prices.",
    features: ["Servers & Workstations", "Network Equipment", "Peripherals"],
    stat: "50+",
    statLabel: "Trusted Vendors",
  },
  {
    id: "support",
    chipClass: "chip-svc-support",
    accentClass: "accent-support",
    cardAccent: "card-accent-support",
    bgClass: "bg-svc-support",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    tag: "Maintenance & Support",
    title: "Managed IT Support",
    description:
      "Proactive maintenance contracts and responsive helpdesk support. We keep your systems healthy so your team can focus on what matters.",
    features: ["24/7 Helpdesk", "Preventive Maintenance", "SLA Guarantees"],
    stat: "99.8%",
    statLabel: "Uptime Achieved",
  },
];

const STATS = [
  { value: "8+", label: "Years in Operation" },
  { value: "350+", label: "Active Clients" },
  { value: "1,700+", label: "Projects Completed" },
  { value: "99.8%", label: "Client Satisfaction" },
];

const TESTIMONIALS = [
  {
    name: "Amara Osei",
    role: "CTO, NovaCorp Uganda",
    text: "Fiat Technologies delivered our entire ERP rollout on time and on budget. Their hardware team and software engineers worked as one unit — rare and impressive.",
    rating: 5,
  },
  {
    name: "Sandra Mukasa",
    role: "Director of Operations, SafeHaven Properties",
    text: "The CCTV installation across our 12 sites was flawless. Remote monitoring works perfectly and the team's support response time is exceptional.",
    rating: 5,
  },
  {
    name: "James Kiprotich",
    role: "Head of IT, Meridian Bank",
    text: "We've relied on Fiat Technologies for over 4 years for all our maintenance contracts. Consistent, professional, and genuinely expert.",
    rating: 5,
  },
];

/* ── Component ────────────────────────────────────────────────────────────── */

export default function Homepage() {
  const [activeService, setActiveService] = useState("software");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const active = SERVICES.find((s) => s.id === activeService)!;

  return (
    <div className="hp-root">
      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav className="hp-nav">
        <div className="hp-nav-inner">
          <div className="hp-nav-brand">
            <div className="hp-nav-logo">
              <span className="hp-logo-f">F</span>
            </div>
            <div>
              <span className="text-wordmark">Fiat Technologies</span>
              <p className="text-tagline" style={{ marginTop: 1 }}>
                Precision. Performance. Trust.
              </p>
            </div>
          </div>

          <ul className="hp-nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="hp-nav-link">
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="hp-nav-actions">
            <a href="#" className="btn btn-outline-dark btn-sm">
              Sign In
            </a>
            <a href="#" className="btn btn-primary btn-sm">
              Get a Quote
            </a>
          </div>

          <button
            className="hp-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="hp-mobile-menu">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="hp-mobile-link">
                {l}
              </a>
            ))}
            <div className="hp-mobile-actions">
              <a href="#" className="btn btn-outline-dark btn-sm">
                Sign In
              </a>
              <a href="#" className="btn btn-primary">
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hp-hero">
        <div className="hp-hero-glow" />
        <div className="hp-hero-grid-lines" />

        <div className="hp-hero-inner">
          <div className="hp-hero-content">
            {/* <div className="hp-hero-eyebrow">
              <span className="status-dot status-dot-online pulse" />
              <span
                className="text-mono-sm"
                style={{ color: "var(--color-brand)" }}
              >
                Serving East Africa since 2016
              </span>
            </div> */}

            <h1 className="hp-hero-title">
              Technology that
              <br />
              <span className="hp-hero-title-accent">Powers Business</span>
            </h1>

            <p className="text-body-lg hp-hero-desc">
              End-to-end IT solutions — from custom software engineering and
              CCTV installations to hardware supply and managed support. One
              partner. Every layer of your technology stack.
            </p>

            <div className="hp-hero-cta">
              <a href="#" className="btn btn-primary btn-lg">
                Explore Services
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#" className="btn btn-outline-dark btn-lg">
                View Case Studies
              </a>
            </div>

            {/* <div className="hp-hero-chips">
              {SERVICES.map((s) => (
                <span key={s.id} className={`chip ${s.chipClass} hp-hero-chip`}>
                  {s.tag}
                </span>
              ))}
            </div> */}
          </div>

          <div className="hp-hero-visual">
            <div className="hp-hero-card-stack">
              <div className="hp-hero-card hp-hero-card-back card-dark" />
              <div className="hp-hero-card hp-hero-card-mid card-dark">
                <div
                  className="terminal"
                  style={{ fontSize: 11, padding: "var(--space-md)" }}
                >
                  <div className="terminal-prompt">sys.status --check</div>
                  <div style={{ color: "var(--color-success)", marginTop: 4 }}>
                    ✓ All systems operational
                  </div>
                  <div
                    style={{ marginTop: 2, color: "var(--color-ink-light)" }}
                  >
                    uptime: 99.8% · incidents: 0
                  </div>
                </div>
              </div>
              <div className="hp-hero-card hp-hero-card-front card-featured">
                <div className="hp-hero-metric-grid">
                  {STATS.map((s) => (
                    <div key={s.label} className="hp-hero-metric">
                      <span
                        className="text-brand-heading"
                        style={{ fontSize: 22 }}
                      >
                        {s.value}
                      </span>
                      <span className="text-caption" style={{ marginTop: 2 }}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <div className="hp-stats-strip">
        {STATS.map((s, i) => (
          <div key={i} className="hp-stat-item">
            <span
              className="text-display"
              style={{ color: "var(--color-brand)" }}
            >
              {s.value}
            </span>
            <span className="text-body-sm">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="hp-section hp-services" id="services">
        <div className="hp-section-header">
          <span className="text-section-header">What We Do</span>
          <h2 className="text-h1" style={{ marginTop: 8 }}>
            Five Core Service Categories
          </h2>
          <p className="text-body-md hp-section-sub">
            From silicon to software — we deliver every layer of enterprise
            technology with precision and accountability.
          </p>
        </div>

        {/* Tab Nav */}
        <div className="hp-svc-tabs">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              className={`hp-svc-tab ${activeService === s.id ? "hp-svc-tab--active" : ""}`}
              onClick={() => setActiveService(s.id)}
              data-service={s.id}
            >
              <span className={`hp-svc-tab-icon ${s.accentClass}`}>
                {s.icon}
              </span>
              <span className="text-label-sm">{s.tag.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Panel */}
        <div
          className={`hp-svc-panel card ${active.cardAccent}`}
          key={active.id}
        >
          <div className="hp-svc-panel-left">
            <span className={`chip ${active.chipClass}`}>{active.tag}</span>
            <h3 className="text-h1" style={{ marginTop: 16 }}>
              {active.title}
            </h3>
            <p
              className="text-body-lg"
              style={{ marginTop: 12, color: "var(--color-ink-muted)" }}
            >
              {active.description}
            </p>

            <ul className="hp-svc-features">
              {active.features.map((f) => (
                <li key={f} className="hp-svc-feature">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--color-brand)", flexShrink: 0 }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-label-md">{f}</span>
                </li>
              ))}
            </ul>

            <a href="#" className="btn btn-primary" style={{ marginTop: 24 }}>
              Learn More
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <div className="hp-svc-panel-right">
            <div className={`hp-svc-icon-wrap ${active.bgClass}`}>
              <span className={active.accentClass}>{active.icon}</span>
            </div>
            <div className="hp-svc-stat card-dark" style={{ marginTop: 24 }}>
              <span
                className="text-display"
                style={{ color: "var(--color-brand)" }}
              >
                {active.stat}
              </span>
              <span
                className="text-body-sm"
                style={{ color: "var(--color-ink-light)", marginTop: 4 }}
              >
                {active.statLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <div className="hp-svc-grid">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className={`card-service hp-svc-card ${activeService === s.id ? "hp-svc-card--active" : ""}`}
              onClick={() => setActiveService(s.id)}
            >
              <div className={`hp-svc-card-icon ${s.bgClass}`}>
                <span className={s.accentClass}>{s.icon}</span>
              </div>
              <span className={`chip ${s.chipClass}`} style={{ marginTop: 16 }}>
                {s.tag}
              </span>
              <h4 className="text-h3" style={{ marginTop: 12 }}>
                {s.title}
              </h4>
              <p className="text-body-sm" style={{ marginTop: 8 }}>
                {s.description.slice(0, 90)}…
              </p>
              <div className="hp-svc-card-footer">
                <span className="text-mono-bold">{s.stat}</span>
                <span className="text-caption" style={{ marginLeft: 6 }}>
                  {s.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY FIAT ─────────────────────────────────────────────────────── */}
      <section className="hp-section hp-why bg-dark">
        <div className="hp-why-glow" />
        <div className="hp-section-header hp-section-header--dark">
          <span
            className="text-section-header"
            style={{ color: "var(--color-brand)" }}
          >
            Why Choose Us
          </span>
          <h2 className="text-h1-inv" style={{ marginTop: 8 }}>
            Built for Enterprise Reliability
          </h2>
          <p
            className="text-body-md"
            style={{ marginTop: 12, color: "var(--color-ink-light)" }}
          >
            We don't just deliver technology — we engineer trust.
          </p>
        </div>

        <div className="hp-why-grid">
          {[
            {
              icon: "⚡",
              title: "Fast Turnaround",
              desc: "Projects scoped, quoted, and deployed faster than industry averages without compromising on quality.",
            },
            {
              icon: "🔒",
              title: "Enterprise Security",
              desc: "Every solution we build or install adheres to strict security protocols and data protection standards.",
            },
            {
              icon: "🛠",
              title: "Full-Stack Expertise",
              desc: "Software engineers, hardware specialists, and field technicians all under one roof, one contract.",
            },
            {
              icon: "📞",
              title: "24/7 Support",
              desc: "Round-the-clock helpdesk and on-site response teams with guaranteed SLA response times.",
            },
            {
              icon: "📊",
              title: "Transparent Reporting",
              desc: "Real-time dashboards, monthly reports, and proactive communication at every project milestone.",
            },
            {
              icon: "🤝",
              title: "Long-Term Partnership",
              desc: "85% of our clients renew. We build relationships, not just systems.",
            },
          ].map((item) => (
            <div key={item.title} className="hp-why-card card-dark">
              <span className="hp-why-emoji">{item.icon}</span>
              <h4 className="text-h3-inv" style={{ marginTop: 16 }}>
                {item.title}
              </h4>
              <p
                className="text-body-sm"
                style={{ marginTop: 8, color: "var(--color-dark-muted)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="hp-section hp-testimonials">
        <div className="hp-section-header">
          <span className="text-section-header">Client Voices</span>
          <h2 className="text-h1" style={{ marginTop: 8 }}>
            What Our Clients Say
          </h2>
        </div>

        <div className="hp-testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card hp-testimonial-card">
              <div className="hp-testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="var(--color-warning)"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p
                className="text-body-md"
                style={{
                  marginTop: 16,
                  fontStyle: "italic",
                  color: "var(--color-ink-muted)",
                }}
              >
                "{t.text}"
              </p>
              <div className="hp-testimonial-author">
                <div className="hp-testimonial-avatar">{t.name.charAt(0)}</div>
                <div>
                  <p className="text-label-md">{t.name}</p>
                  <p className="text-caption">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="hp-cta-banner">
        <div className="hp-cta-inner">
          <div>
            <h2 className="text-h1-inv">Ready to work with us?</h2>
            <p
              className="text-body-lg"
              style={{ color: "var(--color-ink-light)", marginTop: 8 }}
            >
              Get a free consultation and scoped quote within 48 hours.
            </p>
          </div>
          <div className="hp-cta-actions">
            <a href="#" className="btn btn-primary btn-lg">
              Get a Free Quote
            </a>
            <a href="#" className="btn btn-outline-dark btn-lg">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="hp-footer bg-dark">
        <div className="hp-footer-inner">
          <div className="hp-footer-brand">
            <div className="hp-nav-brand" style={{ marginBottom: 12 }}>
              <div className="hp-nav-logo">
                <span className="hp-logo-f">F</span>
              </div>
              <span className="text-wordmark">Fiat Technologies</span>
            </div>
            <p
              className="text-body-sm"
              style={{ color: "var(--color-dark-muted)", maxWidth: 240 }}
            >
              Precision technology solutions for modern enterprises across East
              Africa.
            </p>
            <div className="hp-footer-status">
              <span className="status-dot status-dot-online pulse" />
              <span
                className="text-mono-sm"
                style={{ color: "var(--color-success)" }}
              >
                All systems operational
              </span>
            </div>
          </div>

          <div className="hp-footer-links">
            <div className="hp-footer-col">
              <p
                className="text-section-header"
                style={{ color: "var(--color-brand)" }}
              >
                Services
              </p>
              {SERVICES.map((s) => (
                <a key={s.id} href="#" className="hp-footer-link">
                  {s.tag}
                </a>
              ))}
            </div>
            <div className="hp-footer-col">
              <p
                className="text-section-header"
                style={{ color: "var(--color-brand)" }}
              >
                Company
              </p>
              {["About Us", "Our Team", "Projects", "Blog", "Careers"].map(
                (l) => (
                  <a key={l} href="#" className="hp-footer-link">
                    {l}
                  </a>
                ),
              )}
            </div>
            <div className="hp-footer-col">
              <p
                className="text-section-header"
                style={{ color: "var(--color-brand)" }}
              >
                Contact
              </p>
              <p
                className="text-body-sm"
                style={{ color: "var(--color-dark-muted)" }}
              >
                info@fiattechnologies.com
              </p>
              <p
                className="text-body-sm"
                style={{ color: "var(--color-dark-muted)", marginTop: 6 }}
              >
                +256 700 000 000
              </p>
              <p
                className="text-body-sm"
                style={{ color: "var(--color-dark-muted)", marginTop: 6 }}
              >
                Kampala, Uganda
              </p>
            </div>
          </div>
        </div>

        <hr
          className="divider-dark"
          style={{ margin: "0 var(--space-xxxl)" }}
        />
        <div className="hp-footer-bottom">
          <p
            className="text-caption"
            style={{ color: "var(--color-dark-muted)" }}
          >
            © 2026 Fiat Technologies LTD. All rights reserved.
          </p>
          <div className="hp-footer-legal">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (l) => (
                <a key={l} href="#" className="hp-footer-link text-caption">
                  {l}
                </a>
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
