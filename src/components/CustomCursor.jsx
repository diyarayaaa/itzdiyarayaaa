import { useEffect, useState } from 'react'

function CustomCursor({ isDark = true }) {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true)
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.tilt-card') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeaveWindow = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeaveWindow)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeaveWindow)
    }
  }, [isVisible])

  // Smooth trailing position with requestAnimationFrame
  useEffect(() => {
    let animId
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }))
      animId = requestAnimationFrame(updateTrailing)
    }
    animId = requestAnimationFrame(updateTrailing)
    return () => cancelAnimationFrame(animId)
  }, [position])

  if (!isVisible) return null

  return (
    <>
      {/* Primary Dot */}
      <div
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: isClicking ? '6px' : '8px',
          height: isClicking ? '6px' : '8px',
          backgroundColor: isDark ? '#00f0ff' : '#0097a7',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: isDark
            ? '0 0 12px #00f0ff, 0 0 24px rgba(0, 240, 255, 0.6)'
            : '0 0 8px rgba(0, 151, 167, 0.5)',
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.3s ease',
        }}
      />

      {/* Trailing Glowing Ring */}
      <div
        className="custom-cursor-ring"
        style={{
          position: 'fixed',
          top: trailingPos.y,
          left: trailingPos.x,
          width: isHovering ? '54px' : isClicking ? '28px' : '36px',
          height: isHovering ? '54px' : isClicking ? '28px' : '36px',
          border: `1.5px solid ${
            isHovering
              ? isDark
                ? '#ff7a00'
                : '#e65100'
              : isDark
              ? 'rgba(0, 240, 255, 0.5)'
              : 'rgba(0, 151, 167, 0.4)'
          }`,
          backgroundColor: isHovering
            ? isDark
              ? 'rgba(255, 122, 0, 0.08)'
              : 'rgba(230, 81, 0, 0.06)'
            : 'transparent',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99998,
          transition:
            'width 0.25s cubic-bezier(0.1, 0.9, 0.2, 1), height 0.25s cubic-bezier(0.1, 0.9, 0.2, 1), border-color 0.2s ease, background-color 0.2s ease',
        }}
      />
    </>
  )
}

export default CustomCursor
