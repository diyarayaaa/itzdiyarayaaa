import { useState } from 'react'
import TiltCard from './TiltCard'
import CardModal from './CardModal'
import {
  User,
  GraduationCap,
  Briefcase,
  Terminal,
  MapPin,
  CheckCircle2,
  Layers,
} from 'lucide-react'

function About() {
  const [activeModal, setActiveModal] = useState(null)

  const highlights = [
    'PC & Laptop Advanced Hardware Troubleshooting',
    'Windows & Linux OS Deployment and Tuning',
    'Component Replacement & Warranty / RMA Flow',
    'Network Configuration & Peripheral Diagnostics',
    'Modern Web Applications (React, Vite, JavaScript)',
    'Technical Data Logging & Systems Documentation',
  ]

  const infoGrid = [
    {
      icon: <User size={16} className="info-icon" />,
      label: 'IDENTITY',
      value: 'Wandi Aditya Putra',
      sub: 'Known as Diyara // Tech Enthusiast',
    },
    {
      icon: <GraduationCap size={16} className="info-icon" />,
      label: 'ACADEMIC',
      value: 'Information Systems',
      sub: 'Institut Teknologi Garut (2024 - Present)',
    },
    {
      icon: <Briefcase size={16} className="info-icon" />,
      label: 'PRACTICE',
      value: 'Hardware & IT Support',
      sub: 'Best Computel Service Garut (Active)',
    },
    {
      icon: <MapPin size={16} className="info-icon" />,
      label: 'LOCATION',
      value: 'Garut, West Java',
      sub: 'Indonesia (WIB / UTC+7)',
    },
  ]

  return (
    <section id="about" className="modern-section about-section">
      {/* SECTION HEADER */}
      <div className="section-header-modern">
        <div className="section-tag">
          <Terminal size={13} />
          <span className="mono-tag">[ SYS_PROFILE // 01 ]</span>
          <span className="chip-sep">/</span>
          <span className="section-tag-sub">ABOUT THE OPERATOR</span>
        </div>
        <h2 className="section-title-modern">ENGINEERING PROFILE &amp; OPERATIONAL BACKGROUND</h2>
        <p className="section-subtitle">
          Bridging physical computer architectures, precision diagnostics, and scalable web engineering.
        </p>
      </div>

      <div className="about-modern-grid">
        {/* LEFT: Story Card */}
        <TiltCard
          className="about-story-card zoomable-interactive-card"
          maxTilt={8}
          scale={1.015}
          onClick={() => setActiveModal('biography')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setActiveModal('biography')}
          aria-label="Click to enlarge biography card"
        >
          <div className="card-glass-body">
            <div className="card-header-bar">
              <span className="window-title">[ DOCS_REF // BIOGRAPHY ]</span>
              <div className="card-header-right-action">
                <div className="window-badge text-highlight-pill">STATUS: ACTIVE</div>
              </div>
            </div>

            <div className="about-story-text">
              <h3 className="story-serif-heading">Wandi Aditya Putra</h3>
              <p className="lead-paragraph">
                An <span className="text-highlight-pill">Information Systems</span> student who blends deep hands-on expertise in <span className="text-highlight-pill">Hardware Diagnostics</span> with modern software engineering.
              </p>

              <p>
                Having served as an active IT Support technician at <em>Best Computel Service Garut</em>, I have handled hundreds of complex hardware diagnostics, component replacements, operating system installations, and warranty/RMA lifecycles.
              </p>

              <p>
                My objective is to design streamlined digital workflows, administrative databases, and responsive web applications that eliminate operational bottlenecks.
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="about-competencies">
              <h4 className="competencies-title">
                <Layers size={15} /> [ CORE COMPETENCIES ]
              </h4>
              <div className="competencies-grid">
                {highlights.map((item, idx) => (
                  <div key={idx} className="competency-item">
                    <CheckCircle2 size={15} className="check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>

        {/* RIGHT: Operator Matrix & Philosophy Card */}
        <TiltCard
          className="about-identity-card zoomable-interactive-card"
          maxTilt={8}
          scale={1.015}
          onClick={() => setActiveModal('operator')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setActiveModal('operator')}
          aria-label="Click to enlarge operator matrix card"
        >
          <div className="card-glass-body">
            <div className="card-header-bar">
              <span className="window-title">[ DOCS_REF // OPERATOR MATRIX ]</span>
              <div className="card-header-right-action">
                <div className="window-badge text-highlight-pill">VERIFIED: ID</div>
              </div>
            </div>

            {/* 2x2 Info Grid Matrix */}
            <div className="about-info-matrix">
              {infoGrid.map((item, idx) => (
                <div key={idx} className="info-card-inner">
                  <div className="info-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="info-card-text">
                    <span className="info-card-label">[ {item.label} ]</span>
                    <strong className="info-card-value">{item.value}</strong>
                    <span className="info-card-sub">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Work Ethic & Focus Section */}
            <div className="about-philosophy-section">
              <h4 className="competencies-title">
                <Terminal size={15} /> [ WORK ETHIC &amp; FOCUS ]
              </h4>
              <div className="about-philosophy-list">
                <div className="philosophy-item">
                  <span className="philo-label">STATUS //</span>
                  <span className="philo-val">Available for Projects &amp; Full-time Roles</span>
                </div>
                <div className="philosophy-item">
                  <span className="philo-label">MINDSET //</span>
                  <span className="philo-val">Analytical Problem Solver &amp; Continuous Learner</span>
                </div>
                <div className="philosophy-item">
                  <span className="philo-label">FOCUS //</span>
                  <span className="philo-val">Hardware Engineering • System Admin • Web Apps</span>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>

      {/* ENLARGED CARD ZOOM MODAL */}
      <CardModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal === 'biography' ? 'BIOGRAPHY & DOSSIER' : 'OPERATOR MATRIX & PHILOSOPHY'}
      >
        {activeModal === 'biography' && (
          <div className="modal-zoomed-card-content">
            <div className="card-header-bar">
              <span className="window-title">[ DOCS_REF // BIOGRAPHY (FULL DOSSIER) ]</span>
              <div className="window-badge text-highlight-pill">STATUS: ACTIVE</div>
            </div>

            <div className="about-story-text">
              <h3 className="story-serif-heading">Wandi Aditya Putra</h3>
              <p className="lead-paragraph">
                An <span className="text-highlight-pill">Information Systems</span> student who blends deep hands-on expertise in <span className="text-highlight-pill">Hardware Diagnostics</span> with modern software engineering.
              </p>

              <p>
                Having served as an active IT Support technician at <em>Best Computel Service Garut</em>, I have handled hundreds of complex hardware diagnostics, component replacements, operating system installations, and warranty/RMA lifecycles.
              </p>

              <p>
                My objective is to design streamlined digital workflows, administrative databases, and responsive web applications that eliminate operational bottlenecks.
              </p>
            </div>

            <div className="about-competencies">
              <h4 className="competencies-title">
                <Layers size={15} /> [ ALL VERIFIED COMPETENCIES ]
              </h4>
              <div className="competencies-grid">
                {highlights.map((item, idx) => (
                  <div key={idx} className="competency-item">
                    <CheckCircle2 size={15} className="check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeModal === 'operator' && (
          <div className="modal-zoomed-card-content">
            <div className="card-header-bar">
              <span className="window-title">[ DOCS_REF // OPERATOR MATRIX (EXPANDED) ]</span>
              <div className="window-badge text-highlight-pill">VERIFIED: ID</div>
            </div>

            <div className="about-info-matrix">
              {infoGrid.map((item, idx) => (
                <div key={idx} className="info-card-inner">
                  <div className="info-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="info-card-text">
                    <span className="info-card-label">[ {item.label} ]</span>
                    <strong className="info-card-value">{item.value}</strong>
                    <span className="info-card-sub">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-philosophy-section">
              <h4 className="competencies-title">
                <Terminal size={15} /> [ WORK ETHIC &amp; CORE FOCUS ]
              </h4>
              <div className="about-philosophy-list">
                <div className="philosophy-item">
                  <span className="philo-label">STATUS //</span>
                  <span className="philo-val">Available for Projects &amp; Full-time Roles</span>
                </div>
                <div className="philosophy-item">
                  <span className="philo-label">MINDSET //</span>
                  <span className="philo-val">Analytical Problem Solver &amp; Continuous Learner</span>
                </div>
                <div className="philosophy-item">
                  <span className="philo-label">FOCUS //</span>
                  <span className="philo-val">Hardware Engineering • System Admin • Web Apps</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardModal>
    </section>
  )
}

export default About