import { useState } from 'react'
import TiltCard from './TiltCard'
import {
  Wrench,
  Network,
  Code2,
  Database,
  CheckCircle,
} from 'lucide-react'

function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'hardware', label: 'Hardware & IT' },
    { id: 'network', label: 'Networking' },
    { id: 'software', label: 'Software & Web' },
    { id: 'admin', label: 'Systems & Admin' },
  ]

  const skillData = [
    {
      category: 'hardware',
      title: 'IT Support & Hardware Engineering',
      icon: <Wrench size={26} className="skill-cat-icon text-orange" />,
      accentColor: 'orange',
      skills: [
        { name: 'PC & Laptop Troubleshooting', level: 95 },
        { name: 'Hardware Diagnostics & Repair', level: 90 },
        { name: 'OS Deployment (Windows & Linux)', level: 92 },
        { name: 'Component Replacement & Upgrade', level: 90 },
        { name: 'Thermal Management & Maintenance', level: 88 },
      ],
    },
    {
      category: 'network',
      title: 'Network Infrastructure',
      icon: <Network size={26} className="skill-cat-icon text-cyan" />,
      accentColor: 'cyan',
      skills: [
        { name: 'LAN / WAN Architecture', level: 85 },
        { name: 'Router & Switch Configuration', level: 82 },
        { name: 'TCP/IP, DNS & DHCP Protocols', level: 88 },
        { name: 'Network Troubleshooting & Testing', level: 86 },
        { name: 'Cable Crimping & Patching', level: 92 },
      ],
    },
    {
      category: 'software',
      title: 'Software & Frontend Development',
      icon: <Code2 size={26} className="skill-cat-icon text-purple" />,
      accentColor: 'purple',
      skills: [
        { name: 'React.js & Modern JavaScript', level: 84 },
        { name: 'HTML5 / CSS3 / Glassmorphism', level: 90 },
        { name: 'Vite & Frontend Tooling', level: 85 },
        { name: 'Git & GitHub Version Control', level: 88 },
        { name: 'RESTful APIs & Asynchronous JS', level: 80 },
      ],
    },
    {
      category: 'admin',
      title: 'Systems & Workflow Administration',
      icon: <Database size={26} className="skill-cat-icon text-green" />,
      accentColor: 'green',
      skills: [
        { name: 'Google Sheets Advanced Formulas', level: 92 },
        { name: 'AppSheet Low-Code Development', level: 90 },
        { name: 'RMA & Warranty Tracking Systems', level: 95 },
        { name: 'Service Database Management', level: 88 },
        { name: 'Customer Technical Support', level: 92 },
      ],
    },
  ]

  const filteredData =
    activeTab === 'all'
      ? skillData
      : skillData.filter((item) => item.category === activeTab)

  return (
    <section id="skills" className="skills-section modern-section">
      <div className="section-header-modern">
        <div className="section-tag">
          <span className="tag-pulse" />
          <span>CAPABILITIES & ARSENAL</span>
        </div>
        <h2 className="section-title-modern">
          Technical Skills & <span className="text-gradient">Core Competencies</span>
        </h2>
        <p className="section-subtitle">
          A proven synthesis of hardware diagnostic precision, networking knowledge, and modern digital development.
        </p>

        {/* Category Filter Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((tab) => (
            <button
              key={tab.id}
              className={`filter-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.label}</span>
              {activeTab === tab.id && <span className="tab-active-glow" />}
            </button>
          ))}
        </div>
      </div>

      <div className="skills-modern-grid">
        {filteredData.map((category, index) => (
          <TiltCard
            key={index}
            className={`skill-category-card accent-${category.accentColor}`}
            maxTilt={10}
            scale={1.02}
          >
            <div className="skill-card-inner">
              {/* Header */}
              <div className="skill-card-header">
                <div className="skill-icon-bubble">
                  {category.icon}
                  <div className="icon-glow-bubble" />
                </div>
                <div className="skill-header-meta">
                  <span className="skill-meta-label">DISCIPLINE 0{index + 1}</span>
                  <h3 className="skill-card-title">{category.title}</h3>
                </div>
              </div>

              {/* Skill Bars & Tags */}
              <div className="skill-bars-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-meter-row">
                    <div className="skill-meter-label">
                      <span>{skill.name}</span>
                      <span className="skill-percent-badge">{skill.level}%</span>
                    </div>
                    <div className="skill-meter-track">
                      <div
                        className="skill-meter-fill"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${sIdx * 80}ms`,
                        }}
                      >
                        <span className="meter-glow-head" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer Chip */}
              <div className="skill-card-footer">
                <span className="skill-chip-tag">
                  <CheckCircle size={13} className="text-green" /> Verified Competency
                </span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

export default Skills