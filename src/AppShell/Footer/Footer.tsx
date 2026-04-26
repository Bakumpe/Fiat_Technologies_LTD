import { SERVICES} from "../../Constants/Constants";
import "./Footer.css"

export default function Footer(){

    return(
        <>
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
        </>
    )
}