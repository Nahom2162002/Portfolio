import { contactLinks } from '../data'
import { useGameNav } from '../useGameNav'

export default function GameOver() {
  const { go, onHover, onClick } = useGameNav()

  return (
    <section id="connect" className="footer">
      <div className="pixel-font footer-heading">GAME OVER? NOT QUITE.</div>
      <div className="pixel-font footer-tagline">Let's connect and start a new quest together.</div>
      <div className="footer-links">
        {contactLinks.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="btn-link"
            onMouseEnter={onHover}
            onClick={onClick}
          >
            {c.label.toUpperCase()}
          </a>
        ))}
      </div>
      <button
        className="pixel-font btn btn-play-again"
        onClick={() => go('/')}
        onMouseEnter={onHover}
      >
        ↺ PLAY AGAIN
      </button>
    </section>
  )
}
