import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './PageTransition'
import { useBackgroundMusic } from '../useBackgroundMusic'

export default function RootLayout() {
  const { muted, toggleMuted } = useBackgroundMusic()
  const location = useLocation()
  const direction = location.state?.direction ?? 1

  return (
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
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <PageTransition key={location.pathname} direction={direction}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
    </div>
  )
}
