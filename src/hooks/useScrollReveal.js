import { useEffect } from 'react'

/**
 * Global Scroll Reveal Controller using IntersectionObserver.
 * Observes sections and elements matching `.reveal-on-scroll` or `.reveal-group`
 * and applies `.is-revealed` when in viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-group, .modern-section, .tilt-card').forEach((el) => {
        el.classList.add('is-revealed')
      })
      return
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px',
    })

    const observeAll = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-group, .modern-section, .tilt-card, .timeline-item-wrapper, .skill-category-card, .modern-project-card'
      )
      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el)
        }
      })
    }

    observeAll()

    // Watch for DOM changes when filtering tabs or switching views
    const mutationObserver = new MutationObserver(() => {
      observeAll()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
