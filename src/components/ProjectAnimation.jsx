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

const ANIMATIONS = {
  infodiet: InfoDietAnimation,
  lockedin: LockedInAnimation,
  safehaven: SafeHavenAnimation,
}

export default function ProjectAnimation({ variant, className }) {
  const Animation = ANIMATIONS[variant]

  return (
    <div className={`proj-anim ${className || ''}`} aria-hidden="true">
      {Animation && <Animation />}
    </div>
  )
}
