import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Hero3DCanvas({ isDark = true }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Clear existing children
    while (mount.firstChild) {
      mount.removeChild(mount.firstChild)
    }

    const width = mount.clientWidth || 360
    const height = mount.clientHeight || 360

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      })
    } catch (e) {
      console.warn('Hero3DCanvas WebGL init failed:', e)
      return
    }

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 18

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    mount.appendChild(renderer.domElement)

    // Center Core 3D Group
    const coreGroup = new THREE.Group()
    scene.add(coreGroup)

    // 1. Central Holographic Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(3.6, 1)
    const coreMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x07090e : 0xffffff,
      emissive: isDark ? 0xff7a00 : 0xe65100,
      emissiveIntensity: isDark ? 0.35 : 0.2,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    coreGroup.add(coreMesh)

    // Inner Glowing Core Sphere
    const innerGeo = new THREE.SphereGeometry(2.2, 24, 24)
    const innerMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x00f0ff : 0x0097a7,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    coreGroup.add(innerMesh)

    // 2. Orbital Cyber Rings
    const ring1Geo = new THREE.TorusGeometry(5.2, 0.08, 16, 100)
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xff7a00 : 0xe65100,
      transparent: true,
      opacity: 0.8,
    })
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat)
    ring1.rotation.x = Math.PI / 3
    coreGroup.add(ring1)

    const ring2Geo = new THREE.TorusGeometry(6.0, 0.06, 16, 100)
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x00f0ff : 0x0097a7,
      transparent: true,
      opacity: 0.7,
    })
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.y = Math.PI / 4
    ring2.rotation.x = -Math.PI / 6
    coreGroup.add(ring2)

    const ring3Geo = new THREE.TorusGeometry(6.8, 0.05, 16, 100)
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x8b5cf6 : 0x6200ea,
      transparent: true,
      opacity: 0.6,
    })
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat)
    ring3.rotation.z = Math.PI / 3
    coreGroup.add(ring3)

    // 3. Floating Orbital Satellites / Nodes
    const satelliteGroup = new THREE.Group()
    coreGroup.add(satelliteGroup)

    const satNodes = []
    const satCount = 6
    for (let i = 0; i < satCount; i++) {
      const satGeo = new THREE.OctahedronGeometry(0.35, 0)
      const satMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xff7a00 : 0x00f0ff,
        wireframe: false,
      })
      const satMesh = new THREE.Mesh(satGeo, satMat)
      const angle = (i / satCount) * Math.PI * 2
      const radius = 5.2 + (i % 2) * 0.8
      satMesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 1.5,
        Math.sin(angle) * radius
      )
      satelliteGroup.add(satMesh)
      satNodes.push({ mesh: satMesh, angle, radius, speed: 0.02 + i * 0.005 })
    }

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const orangeLight = new THREE.PointLight(0xff7a00, 3, 30)
    orangeLight.position.set(10, 10, 10)
    scene.add(orangeLight)

    const cyanLight = new THREE.PointLight(0x00f0ff, 3, 30)
    cyanLight.position.set(-10, -10, 10)
    scene.add(cyanLight)

    // Mouse Tracking
    let targetRotX = 0
    let targetRotY = 0
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      targetRotY = x * Math.PI * 0.8
      targetRotX = y * Math.PI * 0.8
    }

    const handleMouseLeave = () => {
      targetRotX = 0
      targetRotY = 0
    }

    mount.addEventListener('mousemove', handleMouseMove)
    mount.addEventListener('mouseleave', handleMouseLeave)

    const handleResize = () => {
      if (!mount || !renderer) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      if (w > 0 && h > 0) {
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animId
    const startTime = performance.now()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = (performance.now() - startTime) * 0.001

      // Smooth rotation toward mouse
      mouseX += (targetRotX - mouseX) * 0.08
      mouseY += (targetRotY - mouseY) * 0.08

      coreGroup.rotation.x = mouseX + Math.sin(elapsed * 0.5) * 0.1
      coreGroup.rotation.y = mouseY + elapsed * 0.35

      // Animate inner mesh
      innerMesh.rotation.y = -elapsed * 0.5
      innerMesh.rotation.x = elapsed * 0.2
      const scale = 1 + Math.sin(elapsed * 2) * 0.05
      innerMesh.scale.set(scale, scale, scale)

      // Animate orbital rings
      ring1.rotation.z = elapsed * 0.4
      ring2.rotation.z = -elapsed * 0.3
      ring3.rotation.x = elapsed * 0.25

      // Animate satellites
      satNodes.forEach((node) => {
        node.angle += node.speed
        node.mesh.position.x = Math.cos(node.angle) * node.radius
        node.mesh.position.z = Math.sin(node.angle) * node.radius
        node.mesh.position.y = Math.sin(node.angle * 3) * 1.8
        node.mesh.rotation.x += 0.04
        node.mesh.rotation.y += 0.04
      })

      try {
        renderer.render(scene, camera)
      } catch (err) {
        console.warn('Hero3DCanvas render warning:', err)
      }
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      mount.removeEventListener('mousemove', handleMouseMove)
      mount.removeEventListener('mouseleave', handleMouseLeave)

      if (mount && renderer && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }

      coreGeo.dispose()
      coreMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      ring1Geo.dispose()
      ring1Mat.dispose()
      ring2Geo.dispose()
      ring2Mat.dispose()
      ring3Geo.dispose()
      ring3Mat.dispose()
      if (renderer) renderer.dispose()
    }
  }, [isDark])

  return (
    <div
      ref={mountRef}
      className="hero-3d-canvas-wrapper"
      aria-label="Interactive 3D Holographic Core"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto',
        cursor: 'grab',
      }}
    />
  )
}

export default Hero3DCanvas
