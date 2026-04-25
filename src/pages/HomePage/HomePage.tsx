import { useState } from "react";
import "./HomePage.css";
import {SERVICES, STATS, TESTIMONIALS} from "../../Constants/Constants";


/* ── Component ────────────────────────────────────────────────────────────── */

export default function Homepage() {
  const [activeService, setActiveService] = useState("software");
  const active = SERVICES.find((s) => s.id === activeService)!;


  return (
    <div className="hp-root">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hp-hero">
        <div className="hp-hero-glow" />
        <div className="hp-hero-grid-lines" />

        <div className="hp-hero-inner">
          <div className="hp-hero-content">
            
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
                Reach Out
              </a>
            </div>

            <div className="hp-hero-chips">
              {SERVICES.map((s) => (
                <span key={s.id} className={`chip ${s.chipClass} hp-hero-chip`}>
                  {s.tag}
                </span>
              ))}
            </div>
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

            <a href="/services" className="btn btn-primary" style={{ marginTop: 24 }}>
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
    </div>
  );
}
