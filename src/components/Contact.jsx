import { useState } from 'react'
import confetti from 'canvas-confetti'
import TiltCard from './TiltCard'
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Sparkles,
  ExternalLink,
  Globe2,
} from 'lucide-react'

// Clean GitHub SVG Icon
function GithubIcon({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function Contact() {
  const [copiedKey, setCopiedKey] = useState(null)

  const handleCopy = (text, key, event) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)

    // Trigger celebratory confetti effect from the clicked element
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = (rect.left + rect.width / 2) / window.innerWidth
      const y = (rect.top + rect.height / 2) / window.innerHeight

      confetti({
        particleCount: 45,
        spread: 60,
        origin: { x, y },
        colors: ['#ff7a00', '#00f0ff', '#8b5cf6', '#ffffff'],
        disableForReducedMotion: true,
      })
    }

    setTimeout(() => {
      setCopiedKey(null)
    }, 2400)
  }

  const contacts = [
    {
      key: 'email',
      icon: <Mail size={24} className="contact-icon-svg text-orange" />,
      label: 'Direct Email',
      value: 'wandiadityaputra25@gmail.com',
      link: 'mailto:wandiadityaputra25@gmail.com',
      copyValue: 'wandiadityaputra25@gmail.com',
      actionLabel: 'Send Email',
    },
    {
      key: 'whatsapp',
      icon: <Phone size={24} className="contact-icon-svg text-green" />,
      label: 'WhatsApp Chat',
      value: '+62 813 1848 9243',
      link: 'https://wa.me/6281318489243',
      copyValue: '+6281318489243',
      actionLabel: 'Open WhatsApp',
    },
    {
      key: 'github',
      icon: <GithubIcon size={24} className="contact-icon-svg text-cyan" />,
      label: 'GitHub Profile',
      value: 'github.com/diyarayaaa',
      link: 'https://github.com/diyarayaaa',
      copyValue: 'https://github.com/diyarayaaa',
      actionLabel: 'Visit GitHub',
    },
  ]

  return (
    <section id="contact" className="contact-section modern-section">
      <div className="section-header-modern">
        <div className="section-tag">
          <span className="tag-pulse" />
          <span>CONNECT & COLLABORATE</span>
        </div>
        <h2 className="section-title-modern">
          Let's Build Something <span className="text-gradient">Extraordinary</span>
        </h2>
        <p className="section-subtitle">
          Have an IT infrastructure challenge, a software project, or an exciting career opportunity? Let's connect!
        </p>
      </div>

      <div className="contact-modern-layout">
        {/* LEFT: 3D Invitation Hero Card */}
        <TiltCard className="contact-invitation-card" maxTilt={8} scale={1.01}>
          <div className="invitation-glass-inner">
            <div className="invitation-status-badge">
              <span className="live-status-dot" />
              <span>ONLINE & RESPONSIVE</span>
            </div>

            <h3 className="invitation-heading">
              Ready to discuss hardware diagnostics, systems administration, or web engineering?
            </h3>

            <p className="invitation-text">
              Whether you need hands-on technical troubleshooting, automated inventory & RMA workflows, or modern digital platforms, I am ready to bring dedication and technical excellence to the table.
            </p>

            <div className="invitation-cta-box">
              <a
                href="mailto:wandiadityaputra25@gmail.com"
                className="btn-modern primary-glow full-width"
              >
                <Send size={18} />
                <span>Start a Conversation</span>
                <div className="btn-glow-layer" />
              </a>
            </div>

            <div className="contact-perks-list">
              <div className="perk-item">
                <Sparkles size={16} className="text-orange" />
                <span>Fast response time within 24 hours</span>
              </div>
              <div className="perk-item">
                <Globe2 size={16} className="text-cyan" />
                <span>Available for on-site & remote collaborations</span>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* RIGHT: 3D Contact Cards Grid */}
        <div className="contact-cards-column">
          {contacts.map((c) => (
            <TiltCard key={c.key} className="contact-channel-card" maxTilt={10} scale={1.02}>
              <div className="channel-card-inner">
                <div className="channel-icon-box">
                  {c.icon}
                  <div className="channel-glow-bubble" />
                </div>

                <div className="channel-info">
                  <span className="channel-label">{c.label}</span>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value-link"
                  >
                    {c.value}
                  </a>
                </div>

                <div className="channel-actions">
                  {/* Copy Button */}
                  <button
                    className={`channel-action-btn copy-btn ${
                      copiedKey === c.key ? 'copied' : ''
                    }`}
                    onClick={(e) => handleCopy(c.copyValue, c.key, e)}
                    title="Copy to clipboard"
                    aria-label={`Copy ${c.label}`}
                  >
                    {copiedKey === c.key ? (
                      <>
                        <Check size={16} className="text-green" />
                        <span className="action-tooltip">Copied! 🎉</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span className="action-tooltip">Copy</span>
                      </>
                    )}
                  </button>

                  {/* External Open Link */}
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-action-btn open-btn"
                    title={c.actionLabel}
                    aria-label={c.actionLabel}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact