import { hireRate, hireServices, hirePastWork } from '../data'
import SectionNav from './SectionNav'
import { useGameNav } from '../useGameNav'

export default function Hire() {
  const { onHover, onClick } = useGameNav()

  return (
    <section id="hire" className="section">
      <div className="pixel-font section-eyebrow">LEVEL 06</div>
      <h2 className="pixel-font section-title">HIRE ME</h2>

      <div className="pixel-font hire-tagline">
        Currently accepting new quests — open to freelance contracts and full-time roles.
      </div>

      <div className="hire-status-grid">
        <div className="hire-status-card">
          <div className="hire-status-header">
            <span className="hire-status-dot" />
            <span className="pixel-font hire-status-name">FREELANCE</span>
          </div>
          <div className="pixel-font hire-rate">{hireRate}</div>
          <div className="hire-status-desc">
            Available for contract and project-based work — from a single feature to a full
            product build.
          </div>
        </div>
        <div className="hire-status-card">
          <div className="hire-status-header">
            <span className="hire-status-dot" style={{ animationDelay: '0.3s' }} />
            <span className="pixel-font hire-status-name">FULL-TIME</span>
          </div>
          <div className="hire-status-desc">
            Open to full-time software engineering roles, remote or on-site.
          </div>
        </div>
      </div>

      <div className="hire-block">
        <div className="pixel-font hire-block-title">SERVICES</div>
        <ul className="hire-list">
          {hireServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>

      <div className="hire-block">
        <div className="pixel-font hire-block-title">PAST WORK</div>
        <div className="hire-past-work">
          {hirePastWork.map((work) => (
            <a
              key={work.name}
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className="pixel-font hire-work-link"
              onMouseEnter={onHover}
              onClick={onClick}
            >
              {work.name}
            </a>
          ))}
        </div>
      </div>

      <div className="hire-cta">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=NahomAshagrea2002@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="btn-link"
          onMouseEnter={onHover}
          onClick={onClick}
        >
          EMAIL ME
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

      <SectionNav backLabel="← LEVEL 05" backTo="/projects" nextLabel="FINISH →" nextTo="/connect" />
    </section>
  )
}
