import { useGameNav } from '../useGameNav'

export default function Hero() {
  const { go, onHover } = useGameNav()

  return (
    <section id="title" className="hero">
      <div className="pixel-font hero-eyebrow">A PORTFOLIO ADVENTURE</div>
      <h1 className="pixel-font hero-title">
        NAHOM
        <br />
        ASHAGREA
      </h1>
      <div className="pixel-font hero-role">SOFTWARE ENGINEER</div>
      <div className="pixel-font hero-tagline">Passionate builder crafting projects one quest at a time.</div>
      <button
        className="pixel-font btn btn-start"
        onClick={() => go('/levels')}
        onMouseEnter={onHover}
      >
        PRESS START
      </button>
    </section>
  )
}
