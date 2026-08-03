import { useOutlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './PageTransition'
import { useBackgroundMusic } from '../useBackgroundMusic'

export default function RootLayout() {
  const { muted, toggleMuted } = useBackgroundMusic()
  const location = useLocation()
  const direction = location.state?.direction ?? 1
  // Capture the matched page element here rather than rendering <Outlet/> inline below.
  // <Outlet/> subscribes to router context, so the *exiting* PageTransition instance
  // (kept mounted by AnimatePresence to animate away) would otherwise get force-updated
  // to the new route's content the instant navigation happens, flashing the next page
  // before its own transition even starts. A captured element is an inert snapshot.
  const element = useOutlet()

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
          {element}
        </PageTransition>
      </AnimatePresence>
    </div>
  )
}
