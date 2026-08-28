import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function ThreeBackground({ isDark = true }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear previous canvases if any
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      })
    } catch (e) {
      console.warn('WebGL not supported or context creation failed:', e)
      return
    }

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 80

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // Particle Constellation System
    const particleCount = window.innerWidth < 768 ? 60 : 150
    const positions = new Float32Array(particleCount * 3)
    const velocities = []
    const baseColors = new Float32Array(particleCount * 3)

    const color1 = isDark ? new THREE.Color(0xffffff) : new THREE.Color(0x000000)
    const color2 = isDark ? new THREE.Color(0x888888) : new THREE.Color(0x555555)
    const color3 = isDark ? new THREE.Color(0x444444) : new THREE.Color(0x888888)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 140
      positions[i * 3 + 1] = (Math.random() - 0.5) * 140
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80

      velocities.push({
        x: (Math.random() - 0.5) * 0.06,
        y: (Math.random() - 0.5) * 0.06,
        z: (Math.random() - 0.5) * 0.04,
      })

      // Distribute colors
      const chosenColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3
      baseColors[i * 3] = chosenColor.r
      baseColors[i * 3 + 1] = chosenColor.g
      baseColors[i * 3 + 2] = chosenColor.b
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(baseColors, 3)
    )

    // Particle sprite / glow texture
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')
      if (!ctx) return null
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      if (isDark) {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
        gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)')
        gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.1)')
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      } else {
        gradient.addColorStop(0, 'rgba(20, 20, 25, 0.9)')
        gradient.addColorStop(0.3, 'rgba(40, 40, 50, 0.5)')
        gradient.addColorStop(0.8, 'rgba(60, 60, 70, 0.1)')
        gradient.addColorStop(1, 'rgba(80, 80, 90, 0)')
      }
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(32, 32, 30, 0, Math.PI * 2)
      ctx.fill()
      const texture = new THREE.CanvasTexture(canvas)
      return texture
    }

    const circleTexture = createCircleTexture()

    const particleMaterial = new THREE.PointsMaterial({
      size: isDark ? 2.5 : 3.0,
      vertexColors: true,
      map: circleTexture,
      transparent: true,
      opacity: isDark ? 0.6 : 0.5,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particleSystem)

    // Floating 3D Tech Wireframe Geometries
    const floatingGroup = new THREE.Group()
    scene.add(floatingGroup)

    const geoTypes = [
      new THREE.IcosahedronGeometry(4.5, 0),
      new THREE.OctahedronGeometry(3.5, 0),
      new THREE.TetrahedronGeometry(4, 0),
      new THREE.TorusGeometry(3.2, 0.8, 8, 20),
    ]

    const floatMeshes = []
    const meshCount = window.innerWidth < 768 ? 3 : 6

    for (let i = 0; i < meshCount; i++) {
      const geom = geoTypes[i % geoTypes.length]
      const wireMat = new THREE.MeshBasicMaterial({
        color: isDark ? 0x444444 : 0xcccccc,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.2 : 0.15,
      })

      const mesh = new THREE.Mesh(geom, wireMat)
      mesh.position.set(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 50 - 10
      )
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )

      const rotSpeed = {
        x: (Math.random() - 0.5) * 0.012,
        y: (Math.random() - 0.5) * 0.012,
        z: (Math.random() - 0.5) * 0.012,
      }

      floatingGroup.add(mesh)
      floatMeshes.push({ mesh, rotSpeed })
    }

    // Dynamic Connections Line Geometry
    const maxLineConnections = 150
    const linePositions = new Float32Array(maxLineConnections * 6)
    const lineColors = new Float32Array(maxLineConnections * 6)
    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.25 : 0.15,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineMesh)

    // Mouse Interaction
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId
    const startTime = performance.now()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = (performance.now() - startTime) * 0.001

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Parallax camera rotation
      camera.position.x = mouseX * 8
      camera.position.y = mouseY * 8
      camera.lookAt(0, 0, 0)

      // Update particle positions
      const posAttr = particleGeometry.attributes.position
      const pArr = posAttr.array

      for (let i = 0; i < particleCount; i++) {
        pArr[i * 3] += velocities[i].x
        pArr[i * 3 + 1] += velocities[i].y
        pArr[i * 3 + 2] += velocities[i].z

        // Bounce within bounds
        if (Math.abs(pArr[i * 3]) > 70) velocities[i].x *= -1
        if (Math.abs(pArr[i * 3 + 1]) > 70) velocities[i].y *= -1
        if (Math.abs(pArr[i * 3 + 2]) > 40) velocities[i].z *= -1
      }
      posAttr.needsUpdate = true

      // Update connecting lines
      let connectionCount = 0
      const maxDistance = 22
      const linePosArr = lineGeometry.attributes.position.array
      const lineColArr = lineGeometry.attributes.color.array

      for (let i = 0; i < particleCount && connectionCount < maxLineConnections; i++) {
        for (let j = i + 1; j < particleCount && connectionCount < maxLineConnections; j++) {
          const dx = pArr[i * 3] - pArr[j * 3]
          const dy = pArr[i * 3 + 1] - pArr[j * 3 + 1]
          const dz = pArr[i * 3 + 2] - pArr[j * 3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < maxDistance) {
            const idx = connectionCount * 6
            linePosArr[idx] = pArr[i * 3]
            linePosArr[idx + 1] = pArr[i * 3 + 1]
            linePosArr[idx + 2] = pArr[i * 3 + 2]

            linePosArr[idx + 3] = pArr[j * 3]
            linePosArr[idx + 4] = pArr[j * 3 + 1]
            linePosArr[idx + 5] = pArr[j * 3 + 2]

            const alpha = 1.0 - dist / maxDistance
            const col = i % 2 === 0 ? color1 : color2

            lineColArr[idx] = col.r * alpha
            lineColArr[idx + 1] = col.g * alpha
            lineColArr[idx + 2] = col.b * alpha

            lineColArr[idx + 3] = col.r * alpha
            lineColArr[idx + 4] = col.g * alpha
            lineColArr[idx + 5] = col.b * alpha

            connectionCount++
          }
        }
      }
      lineGeometry.setDrawRange(0, connectionCount * 2)
      lineGeometry.attributes.position.needsUpdate = true
      lineGeometry.attributes.color.needsUpdate = true

      // Rotate floating 3D shapes
      floatMeshes.forEach(({ mesh, rotSpeed }, index) => {
        mesh.rotation.x += rotSpeed.x
        mesh.rotation.y += rotSpeed.y
        mesh.rotation.z += rotSpeed.z
        mesh.position.y += Math.sin(elapsedTime * 1.5 + index) * 0.04
      })

      // Slow rotation of whole scene
      particleSystem.rotation.y = elapsedTime * 0.03
      floatingGroup.rotation.y = -elapsedTime * 0.02

      try {
        renderer.render(scene, camera)
      } catch (err) {
        console.warn('ThreeBackground render warning:', err)
      }
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)

      if (container && renderer && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      particleGeometry.dispose()
      particleMaterial.dispose()
      if (circleTexture) circleTexture.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      geoTypes.forEach((g) => g.dispose())
      if (renderer) renderer.dispose()
    }
  }, [isDark])

  return (
    <div
      ref={containerRef}
      className="three-background-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    />
  )
}

export default ThreeBackground
