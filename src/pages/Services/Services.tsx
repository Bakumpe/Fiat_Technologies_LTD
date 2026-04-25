import { useState } from "react";
import "./Services.css";
import { SERVICES } from "../../Constants/Constants";

/* ── Types ──────────────────────────────────────────────────────────────── */
type ViewMode = "grid" | "list";

/* ── Static FAQ data ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "How quickly can you scope and start a new project?",
    a: "Most projects are scoped, quoted, and kicked off within 48–72 hours of initial contact. For urgent deployments, we offer same-day assessments.",
  },
  {
    q: "Do you offer SLA-backed managed support?",
    a: "Yes. All managed support contracts include guaranteed SLA response times — critical incidents are responded to within 1 hour, standard within 4 hours.",
  },
  {
    q: "Can I bundle multiple service categories?",
    a: "Absolutely. Bundled engagements receive priority scheduling and consolidated billing. Many clients combine Software Development with IT Support or CCTV with Network Installation.",
  },
  {
    q: "What industries do you serve?",
    a: "We work across finance, retail, hospitality, logistics, education, and government. Our solutions are adapted to each sector's regulatory and operational requirements.",
  },
  {
    q: "Do you provide hardware warranties and replacements?",
    a: "All hardware sourced through Fiat Technologies comes with a minimum 1-year warranty. We also offer extended coverage and next-business-day replacement plans.",
  },
  {
    q: "Is ongoing maintenance included after project delivery?",
    a: "Delivery includes a 30-day hyper-care period. Ongoing maintenance can be added via a managed support retainer at any time.",
  },
];

/* ── Process steps ───────────────────────────────────────────────────────── */
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We listen first. A 30-minute call to understand your challenges, goals, and constraints before anything is proposed.",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.09 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Scoping & Quote",
    desc: "A detailed proposal with fixed-price or retainer options, timelines, deliverables, and a clear SLA — no hidden costs.",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Delivery & Build",
    desc: "Agile sprints with weekly check-ins for software; milestone-based for hardware and installations. You're never in the dark.",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Handover & Support",
    desc: "Full documentation, staff training, and a 30-day hyper-care period. Then seamless transition to managed support if needed.",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

/* ── Component ──────────────────────────────────────────────────────────── */
export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? SERVICES : SERVICES.filter((s) => s.id === filter);

  const active = activeService
    ? SERVICES.find((s) => s.id === activeService)
    : null;

  return (
    <div className="sv-root">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="sv-hero">
        <div className="sv-hero-glow" />
        <div className="sv-hero-grid" />
        <div className="sv-hero-inner">
          <div className="sv-hero-content">
            <span className="text-section-header sv-hero-eyebrow">
              What We Offer
            </span>
            <h1 className="sv-hero-title">
              Every Layer of Your
              <br />
              <span className="sv-hero-title-accent">Technology Stack</span>
            </h1>
            <p className="text-body-lg sv-hero-desc">
              Five core service pillars. One accountable partner. Whether you need
              a bespoke application, a secure CCTV network, or round-the-clock IT
              support — we deliver with precision and transparency.
            </p>

            <div className="sv-hero-stats">
              {SERVICES.map((s) => (
                <div key={s.id} className="sv-hero-stat-pill">
                  <span className={`sv-hero-stat-icon ${s.accentClass}`}>{s.icon}</span>
                  <span className="text-label-sm">{s.tag.split(" ")[0]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sv-hero-visual">
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                className={`sv-hero-orbit-card card ${activeService === s.id ? "sv-hero-orbit-card--active" : ""}`}
                style={{
                  "--orbit-angle": `${i * (360 / SERVICES.length)}deg`,
                  "--orbit-delay": `${i * 0.1}s`,
                } as React.CSSProperties}
                onClick={() => setActiveService(s.id === activeService ? null : s.id)}
              >
                <span className={`sv-hero-orbit-icon ${s.accentClass}`}>{s.icon}</span>
                <span className="text-caption sv-hero-orbit-label">{s.tag.split(" ")[0]}</span>
                <span className="text-mono-bold sv-hero-orbit-stat">{s.stat}</span>
              </div>
            ))}
            <div className="sv-hero-orbit-center card-featured">
              <div className="sv-hero-orbit-center-inner">
                <span className="text-display" style={{ color: "var(--color-brand)" }}>5</span>
                <span className="text-caption" style={{ marginTop: 2, textAlign: "center" }}>Core Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE DETAIL MODAL ─────────────────────────────────────────── */}
      {active && (
        <div className="sv-modal-backdrop" onClick={() => setActiveService(null)}>
          <div
            className={`sv-modal card ${active.cardAccent}`}
            key={active.id}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sv-modal-inner">
              <div className="sv-modal-left">
                <div className="sv-modal-top">
                  <span className={`chip ${active.chipClass}`}>{active.tag}</span>
                  <button
                    className="sv-modal-close btn btn-ghost btn-sm"
                    onClick={() => setActiveService(null)}
                    aria-label="Close"
                  >
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    Close
                  </button>
                </div>
                <h2 className="text-h1" style={{ marginTop: 16 }}>{active.title}</h2>
                <p className="text-body-lg" style={{ marginTop: 10, color: "var(--color-ink-muted)" }}>{active.description}</p>

                <ul className="hp-svc-features" style={{ marginTop: 20 }}>
                  {active.features.map((f) => (
                    <li key={f} className="hp-svc-feature">
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-brand)", flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span className="text-label-md">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sv-modal-right">
                <div className={`sv-drawer-icon ${active.bgClass}`}>
                  <span className={active.accentClass}>{active.icon}</span>
                </div>
                <div className="sv-drawer-metric">
                  <span className="text-display" style={{ color: "var(--color-brand)" }}>{active.stat}</span>
                  <span className="text-body-sm" style={{ marginTop: 4, color: "var(--color-ink-light)" }}>{active.statLabel}</span>
                </div>
                <a href="#" className="btn btn-primary" style={{ marginTop: 20, width: "100%", justifyContent: "center" }}>
                  Get a Quote
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── SERVICES CATALOGUE ────────────────────────────────────────────── */}
      <section className="sv-section sv-catalogue" id="services">
        <div className="sv-section-header">
          <span className="text-section-header">Service Catalogue</span>
          <h2 className="text-h1" style={{ marginTop: 8 }}>
            Explore Our Capabilities
          </h2>
          <p className="text-body-md sv-section-sub">
            Click any service card for full details, or filter by category below.
          </p>
        </div>

        {/* Toolbar */}
        <div className="sv-toolbar">
          <div className="sv-filter-tabs">
            <button
              className={`sv-filter-tab ${filter === "all" ? "sv-filter-tab--active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Services
            </button>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                className={`sv-filter-tab ${filter === s.id ? "sv-filter-tab--active" : ""}`}
                onClick={() => setFilter(s.id)}
              >
                <span className={s.accentClass}>{s.icon}</span>
                {s.tag.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="sv-view-toggle">
            <button
              className={`sv-view-btn ${viewMode === "grid" ? "sv-view-btn--active" : ""}`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </button>
            <button
              className={`sv-view-btn ${viewMode === "list" ? "sv-view-btn--active" : ""}`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="4" width="18" height="2" rx="1"/><rect x="3" y="11" width="18" height="2" rx="1"/><rect x="3" y="18" width="18" height="2" rx="1"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Grid view */}
        {viewMode === "grid" && (
          <div className="sv-grid">
            {filtered.map((s) => (
              <div
                key={s.id}
                className={`sv-card card-service ${activeService === s.id ? "sv-card--active" : ""}`}
                onClick={() => setActiveService(s.id === activeService ? null : s.id)}
              >
                <div className="sv-card-top">
                  <div className={`sv-card-icon ${s.bgClass}`}>
                    <span className={s.accentClass}>{s.icon}</span>
                  </div>
                  <span className={`chip ${s.chipClass}`}>{s.tag}</span>
                </div>

                <h3 className="text-h2" style={{ marginTop: 16 }}>{s.title}</h3>
                <p className="text-body-sm" style={{ marginTop: 8 }}>
                  {s.description.slice(0, 110)}…
                </p>

                <ul className="sv-card-features">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f} className="sv-card-feature">
                      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-brand)", flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span className="text-body-xs">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="sv-card-footer">
                  <div className="sv-card-stat">
                    <span className="text-mono-bold">{s.stat}</span>
                    <span className="text-caption" style={{ marginLeft: 6 }}>{s.statLabel}</span>
                  </div>
                  <button className="sv-card-cta btn btn-outline btn-sm">
                    Details
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List view */}
        {viewMode === "list" && (
          <div className="sv-list">
            {filtered.map((s, i) => (
              <div
                key={s.id}
                className={`sv-list-row card ${activeService === s.id ? "sv-list-row--active" : ""}`}
                onClick={() => setActiveService(s.id === activeService ? null : s.id)}
              >
                <span className="sv-list-num text-mono-sm">{String(i + 1).padStart(2, "0")}</span>

                <div className={`sv-list-icon ${s.bgClass}`}>
                  <span className={s.accentClass}>{s.icon}</span>
                </div>

                <div className="sv-list-info">
                  <div className="sv-list-info-top">
                    <h3 className="text-h3">{s.title}</h3>
                    <span className={`chip ${s.chipClass}`}>{s.tag}</span>
                  </div>
                  <p className="text-body-sm" style={{ marginTop: 4 }}>
                    {s.description.slice(0, 120)}…
                  </p>
                </div>

                <div className="sv-list-stat">
                  <span className="text-mono-bold" style={{ fontSize: 18 }}>{s.stat}</span>
                  <span className="text-caption">{s.statLabel}</span>
                </div>

                <button className="btn btn-outline btn-sm sv-list-cta">
                  Details
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="sv-section sv-process bg-dark">
        <div className="sv-process-glow" />
        <div className="sv-section-header sv-section-header--dark">
          <span className="text-section-header" style={{ color: "var(--color-brand)" }}>
            How It Works
          </span>
          <h2 className="text-h1-inv" style={{ marginTop: 8 }}>
            From First Call to Full Delivery
          </h2>
          <p className="text-body-md" style={{ marginTop: 12, color: "var(--color-ink-light)" }}>
            A repeatable, transparent process honed across 200+ engagements.
          </p>
        </div>

        <div className="sv-process-steps">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.number} className="sv-process-step card-dark">
              <div className="sv-process-step-head">
                <span className="sv-process-num text-mono-bold">{step.number}</span>
                <div className="sv-process-icon bg-brand-surface">
                  <span className="text-brand">{step.icon}</span>
                </div>
              </div>
              <h4 className="text-h3-inv" style={{ marginTop: 16 }}>{step.title}</h4>
              <p className="text-body-sm" style={{ marginTop: 8, color: "var(--color-dark-muted)" }}>{step.desc}</p>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="sv-process-connector" aria-hidden="true">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-dark-muted)" }}>
                    <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="sv-section sv-compare">
        <div className="sv-section-header">
          <span className="text-section-header">Service Comparison</span>
          <h2 className="text-h1" style={{ marginTop: 8 }}>
            Find the Right Fit
          </h2>
          <p className="text-body-md sv-section-sub">
            See how our services stack up across key dimensions.
          </p>
        </div>

        <div className="sv-table-wrap">
          <table className="sv-table">
            <thead>
              <tr>
                <th className="sv-table-th sv-table-th-label">Service</th>
                <th className="sv-table-th">Delivery Time</th>
                <th className="sv-table-th">Ongoing SLA</th>
                <th className="sv-table-th">Remote</th>
                <th className="sv-table-th">On-Site</th>
                <th className="sv-table-th">Starting From</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "software",     delivery: "2–12 wks",  sla: "4 hrs", remote: true,  onsite: false, price: "Contact Us" },
                { id: "install",      delivery: "1–5 days",  sla: "2 hrs", remote: false, onsite: true,  price: "Contact Us" },
                { id: "cctv",         delivery: "2–7 days",  sla: "4 hrs", remote: true,  onsite: true,  price: "Contact Us" },
                { id: "hardware",     delivery: "1–3 days",  sla: "NBD",   remote: false, onsite: true,  price: "Contact Us" },
                { id: "support",      delivery: "Same Day",   sla: "1 hr",  remote: true,  onsite: true,  price: "Contact Us" },
              ].map((row) => {
                const svc = SERVICES.find((s) => s.id === row.id)!;
                return (
                  <tr
                    key={row.id}
                    className={`sv-table-row ${activeService === row.id ? "sv-table-row--active" : ""}`}
                    onClick={() => setActiveService(row.id === activeService ? null : row.id)}
                  >
                    <td className="sv-table-td sv-table-td-label">
                      <div className="sv-table-service">
                        <div className={`sv-table-service-icon ${svc.bgClass}`}>
                          <span className={svc.accentClass}>{svc.icon}</span>
                        </div>
                        <div>
                          <p className="text-label-md">{svc.title.split(" ")[0]}</p>
                          <span className={`chip ${svc.chipClass}`} style={{ fontSize: 10, padding: "2px 8px" }}>{svc.tag}</span>
                        </div>
                      </div>
                    </td>
                    <td className="sv-table-td"><span className="text-mono-sm">{row.delivery}</span></td>
                    <td className="sv-table-td"><span className="text-mono-sm" style={{ color: "var(--color-brand)" }}>{row.sla}</span></td>
                    <td className="sv-table-td">
                      {row.remote
                        ? <span className="chip chip-success" style={{ fontSize: 10 }}>✓ Yes</span>
                        : <span className="chip chip-steel" style={{ fontSize: 10 }}>— No</span>
                      }
                    </td>
                    <td className="sv-table-td">
                      {row.onsite
                        ? <span className="chip chip-success" style={{ fontSize: 10 }}>✓ Yes</span>
                        : <span className="chip chip-steel" style={{ fontSize: 10 }}>— No</span>
                      }
                    </td>
                    <td className="sv-table-td">
                      <span className="text-label-sm" style={{ color: "var(--color-brand)" }}>{row.price}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="sv-section sv-faq" style={{ backgroundColor: "var(--color-bg-warm)" }}>
        <div className="sv-faq-inner">
          <div className="sv-faq-left">
            <span className="text-section-header">FAQ</span>
            <h2 className="text-h1" style={{ marginTop: 8 }}>Common Questions</h2>
            <p className="text-body-md" style={{ marginTop: 12, color: "var(--color-ink-muted)" }}>
              Can't find what you need? Our team responds to all enquiries within 2 business hours.
            </p>
            <a href="#" className="btn btn-primary" style={{ marginTop: 28 }}>
              Ask Us Directly
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <line x1={5} y1={12} x2={19} y2={12}/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div className="sv-faq-list">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`sv-faq-item card ${openFaq === i ? "sv-faq-item--open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="sv-faq-question">
                  <span className="text-label-md">{faq.q}</span>
                  <svg
                    className="sv-faq-chevron"
                    width={16} height={16} viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
                {openFaq === i && (
                  <p className="text-body-sm sv-faq-answer">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="hp-cta-banner">
        <div className="hp-cta-inner">
          <div>
            <h2 className="text-h1-inv">Ready to get started?</h2>
            <p className="text-body-lg" style={{ color: "var(--color-ink-light)", marginTop: 8 }}>
              Get a free consultation and scoped quote within 48 hours.
            </p>
          </div>
          <div className="hp-cta-actions">
            <a href="#" className="btn btn-primary btn-lg">Get a Free Quote</a>
            <a href="#" className="btn btn-outline-dark btn-lg">Call Us Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}