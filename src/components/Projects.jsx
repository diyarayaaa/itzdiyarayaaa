import { useState } from 'react'
import TiltCard from './TiltCard'
import {
  ArrowUpRight,
  Sparkles,
  Star,
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
        'A comprehensive, centralized service and warranty management system designed to streamline incoming device intakes, repair stage tracking, RMA distributor logistics, customer records, and real-time operational KPI monitoring.',
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
      badge: 'Featured Case Study',
      stats: '100% Operational Adoption',
    },
    {
      id: 'portfolio-cyber',
      title: 'Personal 3D Cyber Portfolio',
      category: 'web',
      categoryLabel: 'Modern Web Application',
      description:
        'An ultra-modern, responsive portfolio platform engineered with Three.js 3D WebGL particle networks, CSS 3D perspective tilt physics, cyberpunk glassmorphism design system, and custom interactions.',
      features: [
        'Interactive 3D WebGL Particle Constellation Background',
        'Custom 3D Perspective Card Tilt Physics Engine',
        'Dual Cyber Dark / Modern Light Theme Engine',
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
      badge: 'Interactive Experience',
      stats: '60 FPS WebGL Rendering',
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
          <span className="tag-pulse" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>
        <h2 className="section-title-modern">
          Featured <span className="text-gradient">Creations & Systems</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications and digital infrastructure developed to solve tangible operational challenges.
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
              {filter === cat.id && <span className="filter-pill-glow" />}
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
                  <span className="id-bracket">[</span>
                  <span className="id-number">0{index + 1}</span>
                  <span className="id-bracket">]</span>
                </div>

                <div className="project-badge-pill">
                  {project.featured && <Star size={13} className="text-orange" />}
                  <span>{project.badge}</span>
                </div>
              </div>

              {/* Category & Title */}
              <div className="project-heading-block">
                <span className="project-category-tag">{project.categoryLabel}</span>
                <h3 className="project-main-title">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="project-desc-text">{project.description}</p>

              {/* Key Features */}
              <div className="project-features-list">
                <h5 className="features-header">
                  <Sparkles size={14} className="text-cyan" /> Key Highlights:
                </h5>
                <div className="features-grid">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="feature-bullet">
                      <CheckCircle2 size={14} className="feature-check text-green" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="project-tech-stack">
                <span className="tech-stack-label">Stack:</span>
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
                    className="project-action-btn primary-action"
                    onClick={() => {
                      if (onCaseStudy) {
                        onCaseStudy()
                      }
                    }}
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={18} />
                    <div className="btn-glow-accent" />
                  </button>
                ) : (
                  <a
                    href="#home"
                    className="project-action-btn secondary-action"
                    onClick={(e) => {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <span>Active In View</span>
                    <ArrowUpRight size={18} />
                  </a>
                )}

                <div className="project-kpi-pill">
                  <span className="kpi-dot" />
                  <span>{project.stats}</span>
                </div>
              </div>

              {/* Holographic Border Accents */}
              <div className="card-cyber-accent top-right" />
              <div className="card-cyber-accent bottom-left" />
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

export default Projects