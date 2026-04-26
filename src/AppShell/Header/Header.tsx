import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../Constants/Constants";
import "./Header.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="hp-mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
  
      {mobileMenuOpen && (
        <div className="hp-mobile-menu">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.link}
              to={l.link}
              className={({ isActive }) =>
                `hp-mobile-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {l.name}
            </NavLink>
          ))}
  
          <div className="hp-mobile-actions">
            <NavLink to="/signin" className="btn btn-outline-dark btn-sm">
              Sign In
            </NavLink>
            <NavLink to="/quote" className="btn btn-primary">
              Get a Quote
            </NavLink>
          </div>
        </div>
      )}
  
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
              <li key={l.link}>
                <NavLink
                  to={l.link}
                  className={({ isActive }) =>
                    `hp-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {l.name}
                </NavLink>
              </li>
            ))}
          </ul>
  
          <div className="hp-nav-actions">
            <a href="#" className="btn btn-outline-dark btn-sm">Sign In</a>
            <a href="#" className="btn btn-primary btn-sm">Get a Quote</a>
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
      </nav>
    </>
  );
}
