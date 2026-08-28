import { useState, useRef, useEffect, useCallback } from 'react'
import TiltCard from './TiltCard'
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'

function Projects({ onCaseStudy }) {
  const [filter, setFilter] = useState('all')
  const [activeIdx, setActiveIdx] = useState(0)
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const [translateX, setTranslateX] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

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
        'A high-performance, dark minimalist portfolio engineered with Three.js 3D WebGL particle networks, CSS 3D perspective physics, monochrome tech docs design system, and custom studio interactions.',
      features: [
        'Interactive 3D WebGL Particle Constellation Engine',
        'Custom 3D Perspective Card Tilt & Spotlight Physics',
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
    {
      id: 'hardware-matrix',
      title: 'Automated PC Hardware Diagnostic & Inventory Matrix',
      category: 'system',
      categoryLabel: 'Hardware & Inventory Infrastructure',
      description:
        'Cloud-synced inventory and technician testbench dashboard for logging component stress test metrics, hardware temperature logs, RMA serial numbers, and parts allocation in real-time.',
      features: [
        'Component Thermal & Benchmark Data Logging',
        'Automated Low-Stock & Serial RMA Alerts',
        'QR/Barcode Mobile Scanner Integration',
        'Multi-Technician Collaborative Workbench Sync',
      ],
      technologies: [
        'AppSheet',
        'Google Workspace API',
        'Cloud Datastore',
        'Automation Workflows',
      ],
      featured: false,
      badge: 'HARDWARE INTELLIGENCE',
      stats: '500+ ASSETS MONITORED',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'system', label: 'Systems & RMA' },
    { id: 'web', label: 'Web Applications' },
  ]

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  // Detect viewport size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Scroll Choreography for Pinned Horizontal Track
  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRef.current.offsetTop
      const containerHeight = containerRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      const scrollDistance = window.scrollY - containerTop
      const maxScrollDistance = containerHeight - viewportHeight

      if (maxScrollDistance <= 0) return

      const progress = Math.max(0, Math.min(1, scrollDistance / maxScrollDistance))
      setScrollProgress(progress)

      const trackWidth = trackRef.current.scrollWidth
      const trackVisibleWidth = trackRef.current.clientWidth
      const maxTranslate = Math.max(0, trackWidth - trackVisibleWidth + 60)

      setTranslateX(progress * maxTranslate)

      const totalItems = filteredProjects.length
      const currentIdx = Math.min(
        totalItems - 1,
        Math.max(0, Math.floor(progress * totalItems * 0.999))
      )
      setActiveIdx(currentIdx)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile, filteredProjects.length])

  // Click dot to navigate to specific project
  const scrollToProject = useCallback(
    (index) => {
      if (isMobile) {
        if (trackRef.current) {
          const cards = trackRef.current.querySelectorAll('.modern-project-card')
          if (cards[index]) {
            cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
          }
        }
        setActiveIdx(index)
        return
      }

      if (!containerRef.current) return
      const containerTop = containerRef.current.offsetTop
      const containerHeight = containerRef.current.offsetHeight
      const viewportHeight = window.innerHeight
      const maxScrollDistance = containerHeight - viewportHeight
      const totalItems = filteredProjects.length

      const targetProgress = (index + 0.15) / totalItems
      const targetScroll = containerTop + targetProgress * maxScrollDistance

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      })
    },
    [isMobile, filteredProjects.length]
  )

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIdx - 1)
    scrollToProject(nextIdx)
  }

  const handleNext = () => {
    const nextIdx = Math.min(filteredProjects.length - 1, activeIdx + 1)
    scrollToProject(nextIdx)
  }

  return (
    <section
      id="projects"
      ref={containerRef}
      className={`projects-pinned-section ${isMobile ? 'is-mobile-view' : ''}`}
    >
      <div className="projects-sticky-frame">
        {/* Top Section Header */}
        <div className="projects-header-wrapper modern-section">
          <div className="section-header-modern">
            <div className="section-tag">
              <span className="mono-tag">[ 03 // WORK ]</span>
              <span className="chip-sep">/</span>
              <span className="section-tag-sub">PINNED CASE STUDIES</span>
            </div>

            <div className="projects-title-row">
              <h2 className="section-title-modern">Featured Creations &amp; Systems</h2>

              {/* Pin Counter and Navigation Controls */}
              <div className="projects-pin-controls" aria-label="Project Navigation">
                <div className="pin-counter-badge">
                  <span className="pin-count-current">
                    0{Math.min(filteredProjects.length, activeIdx + 1)}
                  </span>
                  <span className="pin-count-sep">/</span>
                  <span className="pin-count-total">0{filteredProjects.length}</span>
                </div>

                <div className="pin-dots-indicator">
                  {filteredProjects.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`pin-dot ${i === activeIdx ? 'is-active' : ''}`}
                      onClick={() => scrollToProject(i)}
                      aria-label={`Jump to project ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="pin-arrow-btns">
                  <button
                    type="button"
                    className="pin-arrow-btn"
                    onClick={handlePrev}
                    disabled={activeIdx === 0}
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    className="pin-arrow-btn"
                    onClick={handleNext}
                    disabled={activeIdx === filteredProjects.length - 1}
                    aria-label="Next project"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="projects-meta-row">
              <p className="section-subtitle">
                Scroll down to travel through real-world applications and digital infrastructure engineered for high operational performance.
              </p>

              {/* Category Filter buttons */}
              <div className="projects-filter-bar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`project-filter-btn ${filter === cat.id ? 'active' : ''}`}
                    onClick={() => {
                      setFilter(cat.id)
                      setActiveIdx(0)
                    }}
                  >
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="projects-track-viewport">
          <div
            ref={trackRef}
            className="projects-horizontal-track"
            style={{
              transform: isMobile ? 'none' : `translate3d(-${translateX}px, 0, 0)`,
            }}
          >
            {filteredProjects.map((project, index) => (
              <TiltCard
                key={project.id}
                className={`modern-project-card ${
                  index === activeIdx ? 'is-active-project' : ''
                } ${project.featured ? 'featured-highlight' : ''}`}
                maxTilt={8}
                scale={1.015}
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

            {/* End of Track Visual Cue Card */}
            <div className="projects-end-card">
              <div className="end-card-inner">
                <span className="end-card-tag">[ MORE IN ARCHIVE ]</span>
                <h4>Want to see more system builds?</h4>
                <p>Explore custom internal administrative tools and hardware diagnostic utilities.</p>
                <a href="#contact" className="btn-solid-white-sm">
                  <span>LET'S TALK</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar at bottom of Pinned Frame */}
        {!isMobile && (
          <div className="projects-track-progress-bar" aria-hidden="true">
            <div
              className="projects-track-progress-fill"
              style={{
                transform: `scaleX(${scrollProgress})`,
              }}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects