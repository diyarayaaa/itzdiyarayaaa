import { useState } from 'react'
import TiltCard from './TiltCard'
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

function Projects({ onCaseStudy }) {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 'best-computel',
      title: 'Best Computel Service & RMA Management System',
      category: 'system',
      categoryLabel: 'Enterprise System Administration',
      description:
        'A comprehensive, centralized service and warranty management system designed to streamline incoming device intakes, repair stage tracking, RMA distributor logistics, customer records, and real-time operational monitoring.',
      features: [
        'Real-time Service Status & RMA Lifecycle Tracking',
        'Distributor & Warranty Claim Automation',
        'Customer Service History & WhatsApp Notification System',
        'Automated Repair Cost & Parts Replacement Calculation',
      ],
      technologies: [
        'Google Sheets',
        'AppSheet',
        'Google Apps Script',
        'JavaScript',
        'Cloud Database',
      ],
      featured: true,
      badge: 'FEATURED CASE STUDY',
      stats: '100% OPERATIONAL ADOPTION',
    },
    {
      id: 'portfolio-cyber',
      title: 'Personal Neo-Brutalist Engineering Portfolio',
      category: 'web',
      categoryLabel: 'Modern Web Application',
      description:
        'A high-performance, dark minimalist portfolio engineered with Three.js 3D WebGL particle networks, CSS 3D perspective physics, monochrome tech docs design system, and custom interactions.',
      features: [
        'Interactive 3D WebGL Particle Constellation Engine',
        'Custom 3D Perspective Card Tilt Physics',
        'Dark Minimalist & Neo-Brutalist Tech Docs System',
        'Dynamic Role Animation & Interactive Contact Hub',
      ],
      technologies: [
        'React 19',
        'Three.js',
        'Vite',
        'Modern CSS3',
        'Lucide Icons',
        'Canvas Confetti',
      ],
      featured: false,
      badge: 'INTERACTIVE PLATFORM',
      stats: '60 FPS WEBGL RENDERING',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'system', label: 'Systems & RMA' },
    { id: 'web', label: 'Web Applications' },
  ]

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="projects-section modern-section">
      <div className="section-header-modern">
        <div className="section-tag">
          <span className="mono-tag">[ 03 // PORTFOLIO ]</span>
          <span className="chip-sep">/</span>
          <span className="section-tag-sub">CASE STUDIES & SYSTEMS</span>
        </div>
        <h2 className="section-title-modern">
          Featured Creations & Systems
        </h2>
        <p className="section-subtitle">
          Real-world applications and digital infrastructure engineered to solve tangible operational challenges.
        </p>

        {/* Filter buttons */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`project-filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="projects-modern-grid">
        {filteredProjects.map((project, index) => (
          <TiltCard
            key={project.id}
            className={`modern-project-card ${project.featured ? 'featured-highlight' : ''}`}
            maxTilt={10}
            scale={1.02}
          >
            <div className="project-card-glass">
              {/* Top Banner Bar */}
              <div className="project-top-row">
                <div className="project-id-badge">
                  <span className="id-tag text-highlight-pill">[ MOD_0{index + 1} ]</span>
                </div>

                <div className="project-badge-pill">
                  <span className="project-badge-text">{project.badge}</span>
                </div>
              </div>

              {/* Category & Title */}
              <div className="project-heading-block">
                <span className="project-category-tag">// {project.categoryLabel}</span>
                <h3 className="project-main-title">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="project-desc-text">{project.description}</p>

              {/* Key Features */}
              <div className="project-features-list">
                <h5 className="features-header">
                  <Sparkles size={13} /> [ KEY HIGHLIGHTS ]
                </h5>
                <div className="features-grid">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="feature-bullet">
                      <CheckCircle2 size={13} className="feature-check" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="project-tech-stack">
                <span className="tech-stack-label">STACK:</span>
                <div className="tech-stack-tags">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="project-footer-actions">
                {project.featured ? (
                  <button
                    className="btn-solid-white-sm"
                    onClick={() => {
                      if (onCaseStudy) {
                        onCaseStudy()
                      }
                    }}
                  >
                    <span>READ CASE STUDY</span>
                    <ArrowUpRight size={15} />
                  </button>
                ) : (
                  <a
                    href="#home"
                    className="btn-outline-box-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <span>ACTIVE IN VIEW</span>
                    <ArrowUpRight size={15} />
                  </a>
                )}

                <div className="project-kpi-pill">
                  <span className="kpi-dot" />
                  <span>{project.stats}</span>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

export default Projects