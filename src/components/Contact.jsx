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
function GithubIcon({ size = 20, className = '' }) {
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
        particleCount: 35,
        spread: 50,
        origin: { x, y },
        colors: ['#ffffff', '#a1a1aa', '#71717a', '#27272a'],
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
      icon: <Mail size={20} className="contact-icon-svg" />,
      label: 'DIRECT_EMAIL',
      value: 'wandiadityaputra25@gmail.com',
      link: 'mailto:wandiadityaputra25@gmail.com',
      copyValue: 'wandiadityaputra25@gmail.com',
      actionLabel: 'Send Email',
    },
    {
      key: 'whatsapp',
      icon: <Phone size={20} className="contact-icon-svg" />,
      label: 'WHATSAPP_CHAT',
      value: '+62 813 1848 9243',
      link: 'https://wa.me/6281318489243',
      copyValue: '+6281318489243',
      actionLabel: 'Open WhatsApp',
    },
    {
      key: 'github',
      icon: <GithubIcon size={20} className="contact-icon-svg" />,
      label: 'GITHUB_PROFILE',
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
          <span className="mono-tag">[ 05 // CONNECT ]</span>
          <span className="chip-sep">/</span>
          <span className="section-tag-sub">COMMUNICATION CHANNELS</span>
        </div>
        <h2 className="section-title-modern">
          Initiate Collaboration
        </h2>
        <p className="section-subtitle">
          Have an IT infrastructure challenge, a software project, or an exciting career opportunity? Let's connect.
        </p>
      </div>

      <div className="contact-modern-layout">
        {/* LEFT: Invitation Card */}
        <TiltCard className="contact-invitation-card" maxTilt={5} scale={1.01}>
          <div className="card-glass-body">
            <div className="card-header-bar">
              <span className="window-title">[ DOC_COMMS // INVITATION ]</span>
              <div className="window-badge text-highlight-pill">
                <span className="live-status-dot" />
                <span>ONLINE &amp; AVAILABLE</span>
              </div>
            </div>

            <div className="invitation-main-content">
              <h3 className="invitation-heading">
                Ready to discuss hardware diagnostics, systems administration, or digital platforms?
              </h3>

              <p className="invitation-text">
                Whether you need hands-on technical troubleshooting, automated inventory &amp; RMA workflows, or modern web software, I am ready to bring engineering rigor and dedication.
              </p>
            </div>

            <div className="invitation-cta-box">
              <a
                href="mailto:wandiadityaputra25@gmail.com"
                className="btn-solid-white full-width"
              >
                <Send size={16} />
                <span>START A CONVERSATION</span>
              </a>
            </div>

            <div className="contact-perks-list">
              <div className="perk-item">
                <Sparkles size={14} />
                <span>Fast response time within 24 hours</span>
              </div>
              <div className="perk-item">
                <Globe2 size={14} />
                <span>Available for on-site (Garut/Bandung) &amp; remote collaboration</span>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* RIGHT: Contact Channels Document Card */}
        <TiltCard className="contact-channels-card" maxTilt={5} scale={1.01}>
          <div className="card-glass-body">
            <div className="card-header-bar">
              <span className="window-title">[ DOC_COMMS // DIRECT CHANNELS ]</span>
              <div className="window-badge text-highlight-pill">3 ROUTES ACTIVE</div>
            </div>

            <div className="contact-channels-list">
              {contacts.map((c) => (
                <div key={c.key} className="channel-card-inner">
                  <div className="channel-icon-box">
                    {c.icon}
                  </div>

                  <div className="channel-info">
                    <span className="channel-label">[ {c.label} ]</span>
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
                          <Check size={14} className="text-green" />
                          <span className="action-tooltip">COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span className="action-tooltip">COPY</span>
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
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-channels-footer">
              <span className="channel-footer-note">[ DIRECT INBOX &amp; INSTANT COMMUNICATION ]</span>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  )
}

export default Contact