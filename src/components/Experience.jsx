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
      status: 'Active Position',
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
        'Hardware Tools',
        'Windows/Linux OS',
        'BIOS/UEFI Utilities',
        'AppSheet',
        'Google Workspace',
        'Multimeter & Testers',
      ],
    },
  ]

  return (
    <section id="experience" className="experience-section modern-section">
      <div className="section-header-modern">
        <div className="section-tag">
          <span className="tag-pulse" />
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="section-title-modern">
          Professional <span className="text-gradient">Experience & Track Record</span>
        </h2>
        <p className="section-subtitle">
          Years of hands-on expertise troubleshooting critical hardware and streamlining operational management.
        </p>
      </div>

      <div className="experience-timeline-container">
        {/* Glowing vertical line */}
        <div className="timeline-tracer-line" aria-hidden="true">
          <div className="tracer-glow-node top" />
          <div className="tracer-glow-node bottom" />
        </div>

        <div className="experience-timeline-list">
          {experiences.map((exp, index) => (
            <div className="timeline-item-wrapper" key={index}>
              {/* Timeline Marker */}
              <div className="timeline-node-marker">
                <div className="node-outer-ring">
                  <div className="node-inner-dot" />
                </div>
                <div className="node-glow" />
              </div>

              {/* 3D Timeline Content Card */}
              <TiltCard className="timeline-tilt-card" maxTilt={8} scale={1.01}>
                <div className="timeline-card-inner">
                  {/* Top Bar */}
                  <div className="timeline-top-bar">
                    <div className="timeline-meta-left">
                      <div className="timeline-period-badge">
                        <Calendar size={14} className="text-orange" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="timeline-status-pill">{exp.status}</span>
                    </div>

                    <div className="timeline-location">
                      <MapPin size={14} className="text-cyan" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="timeline-header-info">
                    <h3 className="timeline-company-name">
                      <Briefcase size={20} className="text-orange" /> {exp.company}
                    </h3>
                    <h4 className="timeline-role-title">{exp.role}</h4>
                  </div>

                  <p className="timeline-summary-text">{exp.description}</p>

                  {/* Responsibilities list */}
                  <div className="timeline-duties-wrapper">
                    <h5 className="duties-title">
                      <Award size={15} className="text-cyan" /> Key Responsibilities & Achievements:
                    </h5>
                    <div className="duties-grid">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="duty-item">
                          <CheckCircle2 size={16} className="duty-check-icon text-green" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech / Tool tags */}
                  <div className="timeline-tools-footer">
                    <span className="tools-label">Tools & Frameworks:</span>
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