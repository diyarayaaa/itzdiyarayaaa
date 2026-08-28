import { useState, useEffect } from 'react'
import profileImg from '../assets/profile.webp'
import Hero3DCanvas from './Hero3DCanvas'
import TiltCard from './TiltCard'
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Code2,
  ChevronDown,
  CornerDownRight,
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
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? 35 : 85)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="hero-section modern-hero modern-section">
      {/* Background 3D Ambient Canvas */}
      <div className="hero-3d-bg-container" aria-hidden="true">
        <Hero3DCanvas isDark={isDark} />
      </div>

      <div className="hero-grid-container">
        {/* TEXT COLUMN */}
        <div className="hero-text-content">
          {/* Top Label */}
          <div className="hero-tag-chip">
            <span className="mono-tag">[ 00 // SYSTEM_DOSSIER ]</span>
            <span className="chip-sep">/</span>
            <span className="chip-status">TECH SPECIFICATION</span>
          </div>

          {/* Greeting & Name */}
          <div className="hero-title-group">
            <p className="hero-subgreeting">
              <CornerDownRight size={14} className="subgreeting-icon" />
              <span>PROFILE OVERVIEW & ENGINEERING ARCHIVE</span>
            </p>

            <h1 className="hero-main-name">
              Wandi Aditya Putra
            </h1>

            <div className="hero-alias-badge">
              <span className="alias-label">ALIAS //</span>
              <span className="alias-value text-highlight-pill">DIYARA</span>
            </div>
          </div>

          {/* Dynamic Role Ticker */}
          <div className="hero-role-ticker">
            <span className="role-prefix">SPECIALIZATION:</span>
            <div className="role-animated-box">
              <span className="role-animated-text">
                {displayText}
                <span className="role-cursor">_</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="hero-bio-desc">
            Passionate about high-efficiency computer systems, network engineering,
            hardware diagnostics, and building automated digital management tools that
            eliminate operational bottlenecks.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-solid-white">
              <span>EXPLORE MY WORK</span>
              <ArrowRight size={16} />
            </a>

            <a href="#contact" className="btn-outline-box">
              <span>GET IN TOUCH</span>
            </a>
          </div>

          {/* Quick Metrics HUD */}
          <div className="hero-metrics-hud">
            <div className="metric-hud-item">
              <span className="metric-hud-val">3+</span>
              <span className="metric-hud-lbl">YEARS FIELD EXP</span>
            </div>
            <div className="metric-hud-divider" />
            <div className="metric-hud-item">
              <span className="metric-hud-val">100+</span>
              <span className="metric-hud-lbl">DEVICES SERVICED</span>
            </div>
            <div className="metric-hud-divider" />
            <div className="metric-hud-item">
              <span className="metric-hud-val">100%</span>
              <span className="metric-hud-lbl">DEDICATION</span>
            </div>
          </div>
        </div>

        {/* 3D AVATAR & TECH SHOWCASE */}
        <div className="hero-visual-showcase">
          <TiltCard
            className="hero-avatar-tilt-card"
            maxTilt={10}
            scale={1.01}
          >
            <div className="hero-avatar-frame">
              {/* Top Bar for Card */}
              <div className="avatar-frame-header">
                <span className="frame-status-dot" />
                <span className="frame-id-tag">[ FIG_01: OPERATOR ]</span>
              </div>

              {/* Profile Image */}
              <div className="avatar-img-wrapper">
                <img
                  src={profileImg}
                  alt="Wandi Aditya Putra (Diyara)"
                  className="avatar-photo"
                />
                <div className="avatar-grid-overlay" />
              </div>

              {/* Floating tech badges (Desktop 3D Floating / Mobile Integrated Grid) */}
              <div className="avatar-badges-wrapper">
                <div className="floating-tech-badge badge-top-left">
                  <ShieldCheck size={14} className="badge-icon" />
                  <div className="badge-text-group">
                    <span className="badge-title">IT Support</span>
                    <span className="badge-sub">Hardware &amp; RMA</span>
                  </div>
                </div>

                <div className="floating-tech-badge badge-bottom-right">
                  <Cpu size={14} className="badge-icon" />
                  <div className="badge-text-group">
                    <span className="badge-title">Diagnostics</span>
                    <span className="badge-sub">PC Troubleshooting</span>
                  </div>
                </div>

                <div className="floating-tech-badge badge-top-right">
                  <Code2 size={14} className="badge-icon" />
                  <div className="badge-text-group">
                    <span className="badge-title">Developer</span>
                    <span className="badge-sub">React &amp; AppSheet</span>
                  </div>
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className="avatar-frame-footer">
                <div className="telemetry-status-row">
                  <span className="telemetry-label">[ SYS_TELEMETRY: ONLINE ]</span>
                  <span className="telemetry-ping">12ms · GARUT (ID)</span>
                </div>
                <div className="telemetry-pills">
                  <span className="telemetry-tag">HARDWARE_LAB</span>
                  <span className="telemetry-tag">SYS_ADMIN</span>
                  <span className="telemetry-tag">WEB_DEV</span>
                </div>
              </div>

              {/* Minimal Tech Bracket Accents */}
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
        <span className="scroll-text">SCROLL TO DISCOVER</span>
        <ChevronDown size={14} className="scroll-arrow" />
      </a>
    </section>
  )
}

export default Hero