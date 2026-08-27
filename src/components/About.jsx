import TiltCard from './TiltCard'
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
  const highlights = [
    'PC & Laptop Advanced Hardware Troubleshooting',
    'Windows & Linux OS Deployment and Tuning',
    'Local Area Network (LAN) & Router Config',
    'Service, RMA & Warranty Lifecycle Administration',
    'Modern Web Development with React & JavaScript',
    'Automated Workflow with Google Sheets & AppSheet',
  ]

  const infoGrid = [
    {
      icon: <User size={20} className="info-icon text-orange" />,
      label: 'Full Name',
      value: 'Wandi Aditya Putra',
      sub: 'Known as Diyara',
    },
    {
      icon: <GraduationCap size={20} className="info-icon text-cyan" />,
      label: 'Education',
      value: 'S1 Information Systems',
      sub: 'Computer & Network Background',
    },
    {
      icon: <Briefcase size={20} className="info-icon text-purple" />,
      label: 'Specialty',
      value: 'IT Support & Technician',
      sub: 'Service & System Admin',
    },
    {
      icon: <MapPin size={20} className="info-icon text-orange" />,
      label: 'Location',
      value: 'Garut / West Java',
      sub: 'Indonesia',
    },
  ]

  return (
    <section id="about" className="about-section modern-section">
      <div className="section-header-modern">
        <div className="section-tag">
          <span className="tag-pulse" />
          <span>ABOUT ME</span>
        </div>
        <h2 className="section-title-modern">
          Engineering Solutions Through <span className="text-gradient">Hardware & Code</span>
        </h2>
        <p className="section-subtitle">
          Bridging the gap between physical IT infrastructure and intelligent digital software systems.
        </p>
      </div>

      <div className="about-modern-grid">
        {/* LEFT: 3D Story Card */}
        <TiltCard className="about-story-card" maxTilt={8} scale={1.01}>
          <div className="card-glass-body">
            <div className="card-header-bar">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="window-title">diyara_profile.sys</span>
              <div className="window-badge">ACTIVE</div>
            </div>

            <div className="about-story-text">
              <p className="lead-paragraph">
                I am <strong className="highlight-text">Wandi Aditya Putra</strong>, an Information Systems student who blends deep hands-on expertise in computer hardware with modern software development skills.
              </p>

              <p>
                Having served as an active IT Support technician at <em>Best Computel Service Garut</em>, I have handled hundreds of complex hardware diagnostics, component replacements, operating system installations, and warranty/RMA lifecycles.
              </p>

              <p>
                My goal is to continuously innovate by designing streamlined digital workflows, administrative databases, and responsive web applications that eliminate operational bottlenecks.
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="about-competencies">
              <h4 className="competencies-title">
                <Layers size={16} className="text-orange" /> Core Highlights
              </h4>
              <div className="competencies-grid">
                {highlights.map((item, idx) => (
                  <div key={idx} className="competency-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>

        {/* RIGHT: 3D Info Matrix */}
        <div className="about-matrix-container">
          <div className="about-info-matrix">
            {infoGrid.map((item, idx) => (
              <TiltCard key={idx} className="info-matrix-card" maxTilt={12} scale={1.03}>
                <div className="info-card-inner">
                  <div className="info-icon-wrapper">
                    {item.icon}
                    <div className="icon-glow" />
                  </div>
                  <div className="info-card-text">
                    <span className="info-card-label">{item.label}</span>
                    <strong className="info-card-value">{item.value}</strong>
                    <span className="info-card-sub">{item.sub}</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Interactive Tech HUD Terminal */}
          <TiltCard className="about-hud-terminal" maxTilt={6} scale={1.01}>
            <div className="terminal-inner">
              <div className="terminal-top">
                <Terminal size={16} className="text-cyan" />
                <span>terminal://system_metrics</span>
              </div>
              <div className="terminal-code">
                <p><span className="t-green">status:</span> "ready_for_dispatch"</p>
                <p><span className="t-cyan">mode:</span> "problem_solver & continuous_learner"</p>
                <p><span className="t-orange">focus:</span> ["Hardware_Engineering", "System_Admin", "Fullstack_Web"]</p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}

export default About