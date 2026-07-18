import { useGameNav } from '../useGameNav'

export default function GameOver() {
  const { go, onHover, onClick } = useGameNav()

  return (
    <section id="connect" className="footer">
      <div className="pixel-font footer-heading">GAME OVER? NOT QUITE.</div>
      <div className="pixel-font footer-tagline">Let's connect and start a new quest together.</div>
      <div className="footer-links">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=NahomAshagrea2002@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="btn-link"
          onMouseEnter={onHover}
          onClick={onClick}
        >
          EMAIL
        </a>
        <a
          href="https://github.com/Nahom2162002"
          target="_blank"
          rel="noreferrer"
          className="btn-link"
          onMouseEnter={onHover}
          onClick={onClick}
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/nahom-ashagrea-1626151b9/"
          target="_blank"
          rel="noreferrer"
          className="btn-link"
          onMouseEnter={onHover}
          onClick={onClick}
        >
          LINKEDIN
        </a>
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
