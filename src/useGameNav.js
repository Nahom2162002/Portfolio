import { useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { clickBeep, useGameSounds } from './useGameSounds'
import { ROUTE_ORDER } from './routes'

export function useGameNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const { onHover, onClick } = useGameSounds()

  const go = useCallback(
    (path) => {
      clickBeep()
      const fromIndex = ROUTE_ORDER.indexOf(location.pathname)
      const toIndex = ROUTE_ORDER.indexOf(path)
      const direction = toIndex >= fromIndex ? 1 : -1
      navigate(path, { state: { direction } })
    },
    [navigate, location.pathname]
  )

  return { go, onHover, onClick }
}
