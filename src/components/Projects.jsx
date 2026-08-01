import { projects } from '../data'
import ProjectAnimation from './ProjectAnimation'
import SectionNav from './SectionNav'
import { useGameSounds } from '../useGameSounds'

export default function Projects() {
  const { onHover, onClick } = useGameSounds()

  return (
    <section id="projects" className="section projects-section">
      <div className="pixel-font section-eyebrow">LEVEL 05</div>
      <h2 className="pixel-font section-title">PROJECTS — ITEM VAULT</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.name} onMouseEnter={onHover}>
            <ProjectAnimation className="project-thumb" variant={p.animation} />
            <div className="project-body">
              <div className="project-icon">
                <span>{p.icon}</span>
              </div>
              <div className="pixel-font project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <div className="pixel-font project-tag" key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="pixel-font project-link"
                onMouseEnter={onHover}
                onClick={onClick}
              >
                VIEW PROJECT →
              </a>
            </div>
          </div>
        ))}
      </div>

      <SectionNav backLabel="← LEVEL 04" backTo="/experience" nextLabel="LEVEL 06 →" nextTo="/hire" />
    </section>
  )
}
