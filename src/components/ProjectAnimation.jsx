import './ProjectAnimation.css'

const INFODIET_BARS = Array.from({ length: 8 })

function InfoDietAnimation() {
  return (
    <div className="infodiet-bars">
      {INFODIET_BARS.map((_, i) => (
        <div key={i} className="infodiet-bar" style={{ animationDelay: `${i * 0.12}s` }} />
      ))}
    </div>
  )
}

function LockedInAnimation() {
  return (
    <div className="lockedin-lock">
      <div className="lockedin-shackle">
        <span className="lockedin-shackle-left" />
        <span className="lockedin-shackle-top" />
        <span className="lockedin-shackle-right" />
      </div>
      <div className="lockedin-body">
        <span className="lockedin-keyhole" />
      </div>
    </div>
  )
}

function SafeHavenAnimation() {
  return (
    <div className="safehaven-shield">
      <span className="sh-row sh-row-1" />
      <span className="sh-row sh-row-2" />
      <span className="sh-row sh-row-3" />
      <span className="sh-row sh-row-4" />
      <span className="sh-row sh-row-5" />
      <span className="sh-check sh-check-a" />
      <span className="sh-check sh-check-b" />
    </div>
  )
}

function BeatClaudeAnimation() {
  return (
    <div className="duel-stage">
      <div className="duel-person">
        <span className="duel-person-head" />
        <span className="duel-person-body" />
        <span className="duel-person-arm" />
      </div>
      <span className="duel-spark" />
      <div className="duel-robot">
        <span className="duel-robot-antenna" />
        <span className="duel-robot-head" />
        <span className="duel-robot-eye" />
        <span className="duel-robot-body" />
        <span className="duel-robot-arm" />
      </div>
    </div>
  )
}

function SentinelAnimation() {
  return (
    <div className="sentinel-window">
      <span className="sentinel-scanline" />
      <span className="sentinel-row sentinel-row-1" />
      <span className="sentinel-row sentinel-row-2" />
      <span className="sentinel-row sentinel-row-3" />
      <span className="sentinel-ping" />
    </div>
  )
}

function VibecheckAnimation() {
  return (
    <div className="vibecheck-scan">
      <span className="vibecheck-line vibecheck-line-1" />
      <span className="vibecheck-line vibecheck-line-2" />
      <span className="vibecheck-line vibecheck-line-3" />
      <span className="vibecheck-glass" />
      <span className="pixel-font vibecheck-grade">B+</span>
    </div>
  )
}

const ANIMATIONS = {
  infodiet: InfoDietAnimation,
  lockedin: LockedInAnimation,
  safehaven: SafeHavenAnimation,
  beatclaude: BeatClaudeAnimation,
  sentinel: SentinelAnimation,
  vibecheck: VibecheckAnimation,
}

export default function ProjectAnimation({ variant, className }) {
  const Animation = ANIMATIONS[variant]

  return (
    <div className={`proj-anim ${className || ''}`} aria-hidden="true">
      {Animation && <Animation />}
    </div>
  )
}
