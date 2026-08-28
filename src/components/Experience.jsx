import TiltCard from './TiltCard'
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Layers,
  Sparkles,
} from 'lucide-react'

function Experience() {
  const experiences = [
    {
      id: 'exp-1',
      indexTag: '01',
      period: '2021 — PRESENT',
      company: 'Best Computel Service Garut',
      role: 'IT Support Specialist & Computer Technician',
      location: 'Garut, Indonesia',
      status: 'ACTIVE POSITION',
      badge: 'ENTERPRISE SERVICE',
      description:
        'Spearheading complex computer diagnostics, hardware repairs, system deployment, service administration, warranty / RMA lifecycle handling, and internal digital workflow optimization.',
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
    {
      id: 'exp-2',
      indexTag: '02',
      period: '2022 — 2024',
      company: 'Information Systems Academic Lab & Network Ops',
      role: 'Systems Administrator & Lab Technical Assistant',
      location: 'West Java, Indonesia',
      status: 'COMPLETED CADRE',
      badge: 'INFRASTRUCTURE & OPS',
      description:
        'Managed departmental laboratory workstations, LAN architecture, switch routing, operating system images, and provided technical guidance for student computing labs.',
      responsibilities: [
        'Configured & Maintained 40+ Laboratory PC Workstations and Local Servers',
        'Local Area Network (LAN) Cabling, Switch Configuration & Subnet Allocation',
        'Automated Mass OS Image Deployment and Disaster Recovery Protocols',
        'Mentored Undergraduate Students in Hardware Troubleshooting & Network Routing',
      ],
      tools: [
        'Cisco Packet Tracer',
        'TCP/IP & DNS/DHCP',
        'Linux Server (Ubuntu)',
        'Windows Server',
        'VirtualBox & VMware',
      ],
    },
    {
      id: 'exp-3',
      indexTag: '03',
      period: '2020 — 2022',
      company: 'Freelance Hardware & Web Systems Engineering',
      role: 'Independent IT Consultant & Web Developer',
      location: 'Remote / Hybrid',
      status: 'PORTFOLIO CLIENTS',
      badge: 'CONSULTING & DEV',
      description:
        'Delivered customized computing builds, hardware optimization for creators and gamers, and custom responsive web tools for local businesses and organizations.',
      responsibilities: [
        'Custom PC Architecture Design & Component Sourcing for High-Load Workstations',
        'Thermal Optimization, Overclocking Stability Testing, and Noise Profiling',
        'Developed Fast, Clean Frontend Web Interfaces with React, JavaScript, and Modern CSS',
        'Integrated Automated Google Sheets Databases for Real-Time Client Inventory Tracking',
      ],
      tools: [
        'React.js',
        'JavaScript (ES6+)',
        'Benchmarking Suites (3DMark/Prime95)',
        'Google Cloud Services',
        'Git & GitHub',
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
        <div className="experience-title-row">
          <h2 className="section-title-modern">Professional Track Record</h2>
          <span className="stack-guide-pill">
            <Layers size={13} />
            <span>STACKING CARDS TIMELINE</span>
          </span>
        </div>
        <p className="section-subtitle">
          Years of hands-on expertise troubleshooting critical hardware, administering enterprise infrastructure, and streamlining operational management.
        </p>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="experience-stack-container">
        {experiences.map((exp, index) => {
          // Dynamic sticky top offset calculation
          const stickyTopOffset = `calc(85px + ${index * 26}px)`
          const zIndex = 10 + index

          return (
            <div
              key={exp.id}
              className="experience-stack-item"
              style={{
                top: stickyTopOffset,
                zIndex: zIndex,
              }}
            >
              <TiltCard
                className="timeline-tilt-card studio-stack-card"
                maxTilt={6}
                scale={1.012}
              >
                <div className="timeline-card-inner">
                  {/* Top Bar */}
                  <div className="timeline-top-bar">
                    <div className="timeline-meta-left">
                      <span className="exp-index-chip text-highlight-pill">
                        [ #{exp.indexTag} ]
                      </span>
                      <div className="timeline-period-badge">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <span className="timeline-status-pill">{exp.status}</span>
                    </div>

                    <div className="timeline-meta-right">
                      <span className="exp-category-pill">{exp.badge}</span>
                      <div className="timeline-location">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
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
                      <Award size={14} /> [ KEY RESPONSIBILITIES &amp; ACHIEVEMENTS ]
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
                    <span className="tools-label">TOOLS &amp; UTILITIES:</span>
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
          )
        })}
      </div>
    </section>
  )
}

export default Experience