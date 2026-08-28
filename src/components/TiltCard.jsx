import { useState, useRef, useCallback } from 'react'

function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  glare = true,
  scale = 1.018,
  spotlight = true,
  borderBeam = true,
  style: customStyle = {},
  ...props
}) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [transformStyle, setTransformStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  })
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, px: 0, py: 0 })

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      const xPct = Math.max(0, Math.min(100, (px / rect.width) * 100))
      const yPct = Math.max(0, Math.min(100, (py / rect.height) * 100))
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = -((py - centerY) / centerY) * maxTilt
      const rotateY = ((px - centerX) / centerX) * maxTilt

      setMousePos({ x: xPct, y: yPct, px, py })
      setIsHovered(true)

      setTransformStyle({
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)',
      })
    },
    [maxTilt, scale]
  )

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setTransformStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className={`studio-tilt-box ${isHovered ? 'is-hovered' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': `${mousePos.px}px`,
        '--mouse-y': `${mousePos.py}px`,
        '--mouse-x-pct': `${mousePos.x}%`,
        '--mouse-y-pct': `${mousePos.y}%`,
        ...transformStyle,
        ...customStyle,
      }}
      {...props}
    >
      {/* 1. Dynamic Cursor Spotlight Border Rim */}
      <div
        className="studio-box-spotlight-border"
        aria-hidden="true"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* 2. Inner Atmospheric Radial Glow */}
      {spotlight && (
        <div
          className="studio-box-spotlight-inner"
          aria-hidden="true"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(450px circle at ${mousePos.x}% ${mousePos.y}%, var(--spotlight-color, rgba(255, 255, 255, 0.08)) 0%, rgba(255, 255, 255, 0.01) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* 3. Specular Reflective Glass Glare */}
      {glare && (
        <div
          className="studio-box-glare"
          aria-hidden="true"
          style={{
            opacity: isHovered ? 0.6 : 0,
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 60%)`,
          }}
        />
      )}

      {/* 4. Animated Glowing Border Beam (Continuous Shimmer) */}
      {borderBeam && (
        <div className="studio-box-beam-tracker" aria-hidden="true" />
      )}

      {/* 5. 3D Layered Content */}
      <div className="studio-box-content">
        {children}
      </div>
    </div>
  )
}

export default TiltCard
