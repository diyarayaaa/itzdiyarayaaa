import { useState, useEffect } from 'react'
import profileImg from '../assets/profile.webp'
import Hero3DCanvas from './Hero3DCanvas'
import TiltCard from './TiltCard'
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  Code2,
  ChevronDown,
} from 'lucide-react'

const roles = [
  'Information Systems Student',
  'IT Support & Hardware Specialist',
  'System & RMA Administrator',
  'Web & AppSheet Developer',
]

function Hero({ isDark = true }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1))
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 100)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="hero-section modern-hero">
      {/* Background 3D Ambient Canvas */}
      <div className="hero-3d-bg-container" aria-hidden="true">
        <Hero3DCanvas isDark={isDark} />
      </div>

      <div className="hero-grid-container">
        {/* TEXT COLUMN */}
        <div className="hero-text-content">
          {/* Status Chip */}
          <div className="hero-tag-chip">
            <span className="chip-sparkle">
              <Sparkles size={14} />
            </span>
            <span>Welcome to My Cyber Portfolio</span>
            <div className="chip-glow" />
          </div>

          {/* Greeting & Name */}
          <div className="hero-title-group">
            <p className="hero-subgreeting">
              <span className="code-bracket">&lt;</span> HELLO WORLD, I'M{' '}
              <span className="code-bracket">/&gt;</span>
            </p>

            <h1 className="hero-main-name">
              Wandi Aditya <span className="text-gradient">Putra</span>
            </h1>

            <div className="hero-alias-badge">
              <span className="alias-label">KNOWN AS</span>
              <span className="alias-value">DIYARA</span>
              <span className="cyber-corner top-l" />
              <span className="cyber-corner bottom-r" />
            </div>
          </div>

          {/* Dynamic Role Ticker */}
          <div className="hero-role-ticker">
            <span className="role-prefix">Specialized in</span>
            <h2 className="role-animated-text">
              {displayText}
              <span className="role-cursor">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="hero-bio-desc">
            Passionate about high-efficiency computer systems, network engineering,
            hardware diagnostics, and building automated digital management tools that
            elevate real-world operations.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-modern primary-glow">
              <span>Explore My Work</span>
              <ArrowRight size={18} className="btn-icon-arrow" />
              <div className="btn-glow-layer" />
            </a>

            <a href="#contact" className="btn-modern secondary-glass">
              <span>Get In Touch</span>
              <div className="btn-border-tracer" />
            </a>
          </div>

          {/* Quick Metrics HUD */}
          <div className="hero-metrics-hud">
            <div className="metric-hud-item">
              <span className="metric-hud-val">3+</span>
              <span className="metric-hud-lbl">Years Field Exp.</span>
            </div>
            <div className="metric-hud-divider" />
            <div className="metric-hud-item">
              <span className="metric-hud-val">100+</span>
              <span className="metric-hud-lbl">Devices Serviced</span>
            </div>
            <div className="metric-hud-divider" />
            <div className="metric-hud-item">
              <span className="metric-hud-val">100%</span>
              <span className="metric-hud-lbl">Dedication</span>
            </div>
          </div>
        </div>

        {/* 3D AVATAR & HOLOGRAPHIC SHOWCASE */}
        <div className="hero-visual-showcase">
          <TiltCard
            className="hero-avatar-tilt-card"
            maxTilt={15}
            scale={1.03}
          >
            <div className="hero-avatar-frame">
              {/* Rotating holographic boundary rings */}
              <div className="holo-orbit-ring ring-one" />
              <div className="holo-orbit-ring ring-two" />
              <div className="avatar-ambient-glow" />

              {/* Profile Image */}
              <div className="avatar-img-wrapper">
                <img
                  src={profileImg}
                  alt="Wandi Aditya Putra (Diyara)"
                  className="avatar-photo"
                />
                <div className="avatar-grid-overlay" />
              </div>

              {/* Holographic floating 3D tech chips */}
              <div className="floating-tech-badge badge-top-left">
                <ShieldCheck size={16} className="badge-icon icon-orange" />
                <div>
                  <span className="badge-title">IT Support</span>
                  <span className="badge-sub">Hardware & RMA</span>
                </div>
              </div>

              <div className="floating-tech-badge badge-bottom-right">
                <Cpu size={16} className="badge-icon icon-cyan" />
                <div>
                  <span className="badge-title">Troubleshooting</span>
                  <span className="badge-sub">PC & Diagnostics</span>
                </div>
              </div>

              <div className="floating-tech-badge badge-top-right">
                <Code2 size={16} className="badge-icon icon-purple" />
                <div>
                  <span className="badge-title">Developer</span>
                  <span className="badge-sub">React & AppSheet</span>
                </div>
              </div>

              {/* Corner Sci-Fi accents */}
              <div className="frame-corner top-left" />
              <div className="frame-corner top-right" />
              <div className="frame-corner bottom-left" />
              <div className="frame-corner bottom-right" />
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About section">
        <span className="scroll-mouse">
          <span className="scroll-wheel" />
        </span>
        <span className="scroll-text">SCROLL TO DISCOVER</span>
        <ChevronDown size={16} className="scroll-arrow" />
      </a>
    </section>
  )
}

export default Hero