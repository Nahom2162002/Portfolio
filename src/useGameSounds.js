import { useCallback } from 'react'

let sharedCtx = null

function ensureAudio() {
  if (!sharedCtx) {
    const AC = window.AudioContext || window.webkitAudioContext
    sharedCtx = new AC()
  }
  if (sharedCtx.state === 'suspended') sharedCtx.resume()
  return sharedCtx
}

function playNote(ctx, freq, startTime, dur, peakGain) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'square'
  osc.frequency.value = freq
  gain.gain.setValueAtTime(peakGain, startTime)
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + dur)
  osc.connect(gain).connect(ctx.destination)
  osc.start(startTime)
  osc.stop(startTime + dur)
}

export function beep(freq, dur, peakGain = 0.05) {
  try {
    const ctx = ensureAudio()
    playNote(ctx, freq, ctx.currentTime, dur, peakGain)
  } catch {
    // audio unavailable (e.g. autoplay policy) — fail silently
  }
}

// Quick ascending two-note "ding-ding" chime, like the Mario coin sound (B5 -> E6).
export function clickBeep() {
  try {
    const ctx = ensureAudio()
    const now = ctx.currentTime
    playNote(ctx, 987.77, now, 0.09, 0.16)
    playNote(ctx, 1318.51, now + 0.08, 0.24, 0.18)
  } catch {
    // audio unavailable (e.g. autoplay policy) — fail silently
  }
}

export function useGameSounds() {
  const onHover = useCallback(() => beep(880, 0.05), [])
  const onClick = useCallback(() => clickBeep(), [])
  return { onHover, onClick }
}
