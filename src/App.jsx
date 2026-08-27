import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BestComputelCaseStudy from './components/BestComputelCaseStudy'
import ThreeBackground from './components/ThreeBackground'
import CustomCursor from './components/CustomCursor'

import './App.css'

function App() {
  const [showCaseStudy, setShowCaseStudy] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('diyara_theme')
    if (saved) return saved === 'dark'
    return true // Default dark cyberpunk
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('diyara_theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  const openCaseStudy = () => {
    setShowCaseStudy(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const closeCaseStudy = () => {
    setShowCaseStudy(false)

    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }, 100)
  }

  const handleNavigation = (sectionId) => {
    // Kalau sedang di Case Study
    if (showCaseStudy) {
      setPendingSection(sectionId)
      setShowCaseStudy(false)

      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
          })
        }
      }, 100)

      return
    }

    // Kalau sedang di halaman utama
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className={`app-root ${isDark ? 'theme-dark' : 'theme-light'}`}>
      {/* 3D WebGL Background Canvas */}
      <ThreeBackground isDark={isDark} />

      {/* Ambient Custom Cursor Follower */}
      <CustomCursor isDark={isDark} />

      {/* Glassmorphic Navigation */}
      <Navbar
        onNavigate={handleNavigation}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {showCaseStudy ? (
        <div className="case-study-overlay-view">
          <BestComputelCaseStudy onBack={closeCaseStudy} />
        </div>
      ) : (
        <main className="portfolio-main-content">
          <Hero isDark={isDark} />
          <About />
          <Skills />
          <Experience />
          <Projects onCaseStudy={openCaseStudy} />
          <Contact />
        </main>
      )}

      <Footer />
    </div>
  )
}

export default App
