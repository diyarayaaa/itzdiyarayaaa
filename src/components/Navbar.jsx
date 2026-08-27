import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

function Navbar({ onNavigate, isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
            <img
              src={`${import.meta.env.BASE_URL}favicon.svg`}
              alt="DIYARA logo"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <div className="brand-glow" />
          </div>
          <span className="brand-text">
            DIYARA<span className="brand-dot">.</span>
          </span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="nav-links-dock">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-dock-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation(item.id)
              }}
            >
              {activeSection === item.id && <span className="active-indicator" />}
              {item.label}
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
              <Sun className="theme-icon sun" size={18} />
            ) : (
              <Moon className="theme-icon moon" size={18} />
            )}
            <span className="theme-glow" />
          </button>

          {/* Quick status badge */}
          <div className="status-badge-pill desktop-only">
            <span className="status-dot-pulse" />
            <span className="status-text">Open to Work</span>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{ transitionDelay: `${index * 40}ms` }}
              className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation(item.id)
              }}
            >
              <span>0{index + 1}.</span> {item.label}
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