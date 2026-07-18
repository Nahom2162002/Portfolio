import { useCallback, useEffect, useRef, useState } from 'react'

const TRACK_SRC = '/moodmode-retro-game-arcade-236133.mp3'
const VOLUME = 0.16
const MUTE_KEY = 'portfolio-music-muted'

export function useBackgroundMusic() {
  const audioRef = useRef(null)
  const [muted, setMuted] = useState(() => {
    try {
      return localStorage.getItem(MUTE_KEY) === 'true'
    } catch {
      return false
    }
  })
  const mutedRef = useRef(muted)
  mutedRef.current = muted

  useEffect(() => {
    const audio = new Audio(TRACK_SRC)
    audio.loop = true
    audio.volume = VOLUME
    audioRef.current = audio

    const tryPlay = () => {
      if (mutedRef.current) return
      audio.play().catch(() => {})
    }

    // Browsers block audio until a real user gesture happens on the page,
    // so retry once on the first click/keypress anywhere.
    tryPlay()
    document.addEventListener('pointerdown', tryPlay, { once: true })
    document.addEventListener('keydown', tryPlay, { once: true })

    return () => {
      document.removeEventListener('pointerdown', tryPlay)
      document.removeEventListener('keydown', tryPlay)
      audio.pause()
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (muted) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }
    try {
      localStorage.setItem(MUTE_KEY, String(muted))
    } catch {
      // ignore (e.g. storage disabled)
    }
  }, [muted])

  const toggleMuted = useCallback(() => setMuted((m) => !m), [])

  return { muted, toggleMuted }
}
