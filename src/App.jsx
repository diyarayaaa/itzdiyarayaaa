import React, { useState, useEffect, Component } from 'react'

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

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null
    }
    return this.props.children
  }
}

function App() {
  const [showCaseStudy, setShowCaseStudy] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('diyara_theme')
      if (saved) return saved === 'dark'
    } catch {
      // Safe fallback if localStorage is disabled in iframe/webview
    }
    return true // Default dark cyberpunk
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
      localStorage.setItem('diyara_theme', isDark ? 'dark' : 'light')
    } catch {
      // Safe fallback
    }
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
    if (showCaseStudy) {
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

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className={`app-root ${isDark ? 'theme-dark' : 'theme-light'}`}>
      {/* 3D WebGL Background Canvas with ErrorBoundary */}
      <ErrorBoundary>
        <ThreeBackground isDark={isDark} />
      </ErrorBoundary>

      {/* Ambient Custom Cursor Follower */}
      <ErrorBoundary>
        <CustomCursor isDark={isDark} />
      </ErrorBoundary>

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
          <ErrorBoundary>
            <Hero isDark={isDark} />
          </ErrorBoundary>
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
