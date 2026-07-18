import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'
import Hero from './components/Hero'
import LevelSelect from './components/LevelSelect'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import GameOver from './components/GameOver'
import { useBackgroundMusic } from './useBackgroundMusic'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation()
  const direction = location.state?.direction ?? 1

  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition direction={direction}><Hero /></PageTransition>} />
        <Route path="/levels" element={<PageTransition direction={direction}><LevelSelect /></PageTransition>} />
        <Route path="/about" element={<PageTransition direction={direction}><About /></PageTransition>} />
        <Route path="/education" element={<PageTransition direction={direction}><Education /></PageTransition>} />
        <Route path="/skills" element={<PageTransition direction={direction}><Skills /></PageTransition>} />
        <Route path="/experience" element={<PageTransition direction={direction}><Experience /></PageTransition>} />
        <Route path="/projects" element={<PageTransition direction={direction}><Projects /></PageTransition>} />
        <Route path="/connect" element={<PageTransition direction={direction}><GameOver /></PageTransition>} />
        <Route path="*" element={<PageTransition direction={direction}><Hero /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const { muted, toggleMuted } = useBackgroundMusic()

  return (
    <BrowserRouter>
      <div className="app">
        <div className="scanline-overlay" />
        <button
          className="music-toggle"
          onClick={toggleMuted}
          aria-label={muted ? 'Unmute background music' : 'Mute background music'}
          title={muted ? 'Unmute music' : 'Mute music'}
        >
          {muted ? '🔇' : '🔊'}
        </button>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  )
}
