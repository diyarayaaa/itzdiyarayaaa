import { ArrowUp, Terminal } from 'lucide-react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="modern-footer">
      <div className="footer-content-container">
        {/* Brand & Tagline */}
        <div className="footer-brand-col">
          <div className="footer-brand-title">
            <span className="brand-dot-pulse" />
            <span className="footer-brand-name">
              DIYARA
            </span>
            <span className="footer-brand-tag">[ DOCS_SYS ]</span>
          </div>
          <p className="footer-tagline">
            Engineering reliable computer systems, diagnostics & modern interactive digital solutions.
          </p>
        </div>

        {/* Center: System Status */}
        <div className="footer-status-col">
          <div className="footer-status-pill">
            <Terminal size={13} />
            <span>[ SYSTEM: OPERATIONAL // 60 FPS 3D ENGINE ]</span>
          </div>
          <p className="footer-copyright">
            © {currentYear} <strong>Wandi Aditya Putra</strong>. Built with React 19 & Three.js.
          </p>
        </div>

        {/* Right: Scroll to top */}
        <div className="footer-actions-col">
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top of page"
            title="Scroll to Top"
          >
            <ArrowUp size={15} />
            <span>TOP</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer