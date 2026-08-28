import TiltCard from './TiltCard'
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
} from 'lucide-react'

function Experience() {
  const experiences = [
    {
      period: '2021 — PRESENT',
      company: 'Best Computel Service Garut',
      role: 'IT Support Specialist & Computer Technician',
      location: 'Garut, Indonesia',
      status: 'ACTIVE POSITION',
      description:
        'Spearheading computer diagnostics, hardware repairs, system deployment, service administration, warranty lifecycle handling, and digital workflow optimization.',
      responsibilities: [
        'Advanced PC & Laptop Hardware Troubleshooting & Diagnostics',
        'Component Level Inspection, Upgrades (CPU, GPU, RAM, NVMe), and Thermal Solutions',
        'Operating System Installations, Driver Deployments, and Software Configuration',
        'Comprehensive Service Administration & RMA / Warranty Lifecycle Handling',
        'Developing Digital Management Sheets & AppSheet Systems for Internal Tracking',
        'Customer Technical Consultation & After-Service Advisory Support',
      ],
      tools: [
        'Hardware Diagnostics',
        'Windows/Linux OS',
        'BIOS/UEFI Tools',
        'AppSheet',
        'Google Workspace',
        'Multimeters & Testers',
      ],
    },
  ]

  return (
    <section id="experience" className="experience-section modern-section">
      <div className="section-header-modern">
        <div className="section-tag">
          <span className="mono-tag">[ 04 // EXPERIENCE ]</span>
          <span className="chip-sep">/</span>
          <span className="section-tag-sub">CAREER RECORD</span>
        </div>
        <h2 className="section-title-modern">
          Professional Track Record
        </h2>
        <p className="section-subtitle">
          Years of hands-on expertise troubleshooting critical hardware and streamlining operational management.
        </p>
      </div>

      <div className="experience-timeline-container">
        {/* Timeline line */}
        <div className="timeline-tracer-line" aria-hidden="true" />

        <div className="experience-timeline-list">
          {experiences.map((exp, index) => (
            <div className="timeline-item-wrapper" key={index}>
              {/* Timeline Marker */}
              <div className="timeline-node-marker">
                <div className="node-inner-dot" />
              </div>

              {/* Timeline Card */}
              <TiltCard className="timeline-tilt-card" maxTilt={10} scale={1.02}>
                <div className="timeline-card-inner">
                  {/* Top Bar */}
                  <div className="timeline-top-bar">
                    <div className="timeline-meta-left">
                      <div className="timeline-period-badge text-highlight-pill">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <span className="timeline-status-pill">{exp.status}</span>
                    </div>

                    <div className="timeline-location">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="timeline-header-info">
                    <h3 className="timeline-company-name">
                      <Briefcase size={18} /> {exp.company}
                    </h3>
                    <h4 className="timeline-role-title">// {exp.role}</h4>
                  </div>

                  <p className="timeline-summary-text">{exp.description}</p>

                  {/* Responsibilities list */}
                  <div className="timeline-duties-wrapper">
                    <h5 className="duties-title">
                      <Award size={14} /> [ KEY RESPONSIBILITIES & ACHIEVEMENTS ]
                    </h5>
                    <div className="duties-grid">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="duty-item">
                          <CheckCircle2 size={14} className="duty-check-icon" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech / Tool tags */}
                  <div className="timeline-tools-footer">
                    <span className="tools-label">TOOLS & UTILITIES:</span>
                    <div className="tools-tags-list">
                      {exp.tools.map((tool, tIdx) => (
                        <span key={tIdx} className="tool-tag-pill">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience