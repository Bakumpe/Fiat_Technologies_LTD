import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import "./Appshell.css";


// ── Scroll-to-top on route change ────────────────────────────────────────────

function ScrollToTop() {
  const { pathname } = useLocation();
  const prev = useRef(pathname);

  useEffect(() => {
    if (prev.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      prev.current = pathname;
    }
  }, [pathname]);

  return null;
}

// ── AppShell ─────────────────────────────────────────────────────────────────

export default function AppShell() {
  return (
    <>
      <ScrollToTop />

      {/* Sticky top navbar */}
      <Header />

      {/* Page content — offset by navbar height via CSS var */}
      <main className="shell-main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}