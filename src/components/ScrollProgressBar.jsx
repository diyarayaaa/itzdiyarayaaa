import { useState, useEffect } from 'react'

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight <= 0) {
        setScrollProgress(0)
        return
      }
      const scrollPercent = totalScroll / windowHeight
      setScrollProgress(Math.min(1, Math.max(0, scrollPercent)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="global-scroll-progress-container" aria-hidden="true">
      <div
        className="global-scroll-progress-fill"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      />
    </div>
  )
}

export default ScrollProgressBar
