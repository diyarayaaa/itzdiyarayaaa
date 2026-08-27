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
      <div className="footer-glow-bar" aria-hidden="true" />

      <div className="footer-content-container">
        {/* Brand & Tagline */}
        <div className="footer-brand-col">
          <div className="footer-brand-title">
            <span className="brand-dot-pulse" />
            <span className="footer-brand-name">
              DIYARA<span className="text-orange">.</span>
            </span>
          </div>
          <p className="footer-tagline">
            Crafting reliable computer systems, diagnostics & modern interactive digital solutions.
          </p>
        </div>

        {/* Center: System Status */}
        <div className="footer-status-col">
          <div className="footer-status-pill">
            <Terminal size={14} className="text-cyan" />
            <span>Systems Normal // 60 FPS 3D WebGL Engine</span>
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
            <ArrowUp size={18} />
            <span>Top</span>
            <div className="btn-glow-layer" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer