import { useEffect } from 'react'

/**
 * Global Scroll Reveal Controller using IntersectionObserver.
 * Observes all elements matching `.reveal-on-scroll` or `.reveal-group`
 * and applies `.is-revealed` when in viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback for environments without IntersectionObserver
      document.querySelectorAll('.reveal-on-scroll, .reveal-group').forEach((el) => {
        el.classList.add('is-revealed')
      })
      return
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          // Once revealed, unobserve to keep performance high
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    })

    const elements = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-group, .modern-section, .tilt-card, .timeline-item-card, .skill-card, .project-card'
    )

    elements.forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}
