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
      title: <>IT Support &amp;<br />Hardware Engineering</>,
      icon: <Wrench size={20} className="skill-cat-icon" />,
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
      title: <>Network Infrastructure</>,
      icon: <Network size={20} className="skill-cat-icon" />,
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
      title: <>Software &amp; Web<br /> Development</>,
      icon: <Code2 size={20} className="skill-cat-icon" />,
      skills: [
        { name: 'React.js & Modern JavaScript', level: 84 },
        { name: 'HTML5 / CSS3 / Web Architecture', level: 90 },
        { name: 'Vite & Frontend Tooling', level: 85 },
        { name: 'Git & GitHub Version Control', level: 88 },
        { name: 'RESTful APIs & Asynchronous JS', level: 80 },
      ],
    },
    {
      category: 'admin',
      title: <>Systems &amp; Workflow<br />Administration</>,
      icon: <Database size={20} className="skill-cat-icon" />,
      skills: [
        { name: 'Google Sheets Advanced Formulas', level: 92 },
        { name: 'AppSheet Low-Code Development', level: 90 },
        { name: 'RMA & Warranty Tracking Systems', level: 95 },
        { name: 'Service Database Management', level: 88 },
        { name: 'Customer Technical Advisory', level: 92 },
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
          <span className="mono-tag">[ 02 // CAPABILITIES ]</span>
          <span className="chip-sep">/</span>
          <span className="section-tag-sub">TECHNICAL ARSENAL</span>
        </div>
        <h2 className="section-title-modern">
          Technical Skills & Competencies
        </h2>
        <p className="section-subtitle">
          A proven synthesis of hardware diagnostic precision, network engineering, and modern digital platforms.
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
            </button>
          ))}
        </div>
      </div>

      <div className="skills-modern-grid">
        {filteredData.map((category, index) => (
          <TiltCard
            key={index}
            className="skill-category-card"
            maxTilt={6}
            scale={1.01}
          >
            <div className="skill-card-inner">
              {/* Header */}
              <div className="skill-card-header">
                <div className="skill-icon-bubble">
                  {category.icon}
                </div>
                <div className="skill-header-meta">
                  <span className="skill-meta-label">[ DISCIPLINE 0{index + 1} ]</span>
                  <h3 className="skill-card-title">{category.title}</h3>
                </div>
              </div>

              {/* Skill Bars & Tags */}
              <div className="skill-bars-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-meter-row">
                    <div className="skill-meter-label">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent-badge text-highlight-pill">{skill.level}%</span>
                    </div>
                    <div className="skill-meter-track">
                      <div
                        className="skill-meter-fill"
                        style={{
                          '--skill-target': `${skill.level}%`,
                          width: `${skill.level}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer Chip */}
              <div className="skill-card-footer">
                <span className="skill-chip-tag">
                  <CheckCircle size={12} /> [ VERIFIED COMPETENCY ]
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