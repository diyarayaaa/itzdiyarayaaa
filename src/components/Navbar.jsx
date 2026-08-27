import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react'

function Navbar({ onNavigate, isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Check current visible section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const scrollPos = window.scrollY + 250

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (sectionId) => {
    setMenuOpen(false)
    setActiveSection(sectionId)
    if (onNavigate) {
      onNavigate(sectionId)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className={`modern-navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      {/* TOP MARQUEE TICKER BAR */}
      <div className="top-marquee-bar" aria-label="System status ticker">
        <div className="marquee-track">
          <div className="marquee-content">
            <span className="marquee-item">
              <span className="ticker-dot-live" />
              <span className="ticker-status">SYSTEM STATUS: ONLINE</span>
            </span>
            <span className="marquee-sep">//</span>
            <span className="marquee-item">SPECIALIZATION: IT HARDWARE & DIAGNOSTICS</span>
            <span className="marquee-sep">//</span>
            <span className="marquee-item">GARUT, WEST JAVA — OPEN FOR WORK & COLLABORATION</span>
            <span className="marquee-sep">//</span>
            <span className="marquee-item">TECH STACK: REACT • APPSHEET • LINUX & WINDOWS SYS ADMIN</span>
            <span className="marquee-sep">//</span>
            <span className="marquee-item">DIYARA ENGINEERING ARCHIVE V2.0</span>
            <span className="marquee-sep">//</span>
          </div>

          <div className="marquee-content" aria-hidden="true">
            <span className="marquee-item">
              <span className="ticker-dot-live" />
              <span className="ticker-status">SYSTEM STATUS: ONLINE</span>
            </span>
            <span className="marquee-sep">//</span>
            <span className="marquee-item">SPECIALIZATION: IT HARDWARE & DIAGNOSTICS</span>
            <span className="marquee-sep">//</span>
            <span className="marquee-item">GARUT, WEST JAVA — OPEN FOR WORK & COLLABORATION</span>
            <span className="marquee-sep">//</span>
            <span className="marquee-item">TECH STACK: REACT • APPSHEET • LINUX & WINDOWS SYS ADMIN</span>
            <span className="marquee-sep">//</span>
            <span className="marquee-item">DIYARA ENGINEERING ARCHIVE V2.0</span>
            <span className="marquee-sep">//</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="modern-navbar">
        {/* LOGO */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault()
            handleNavigation('home')
          }}
        >
          <div className="brand-logo-icon">
            <Terminal size={15} />
          </div>
          <span className="brand-text">
            DIYARA
          </span>
          <span className="brand-subtag">DOCS_V2.0</span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="nav-links-dock">
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-dock-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation(item.id)
              }}
            >
              <span className="nav-item-num">0{idx + 1}.</span>
              <span className="nav-item-name">{item.label}</span>
            </a>
          ))}
        </div>

        {/* ACTIONS (Theme toggle & Mobile menu) */}
        <div className="navbar-actions">
          <button
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
            title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
          >
            {isDark ? (
              <Sun className="theme-icon" size={15} />
            ) : (
              <Moon className="theme-icon" size={15} />
            )}
          </button>

          {/* Quick status badge */}
          <div className="status-badge-pill desktop-only">
            <span className="status-dot-pulse" />
            <span className="status-text">AVAILABLE</span>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <span className="mono-doc-label">[ NAVIGATION DIRECTORY ]</span>
          </div>
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation(item.id)
              }}
            >
              <span className="mobile-item-num">0{index + 1} //</span>
              <span className="mobile-item-label">{item.label}</span>
            </a>
          ))}

          <div className="mobile-drawer-footer">
            <div className="status-badge-pill">
              <span className="status-dot-pulse" />
              <span className="status-text">Available for Projects & IT Roles</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar