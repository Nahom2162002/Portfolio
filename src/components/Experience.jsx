import { experience } from '../data'
import SectionNav from './SectionNav'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="pixel-font section-eyebrow">LEVEL 04</div>
      <h2 className="pixel-font section-title">EXPERIENCE — QUEST LOG</h2>

      {experience.map((ex, i) => (
        <div key={`${ex.role}-${ex.company}`} className="experience-item">
          <div className="experience-bullet" style={{ animationDelay: `${i * 0.3}s` }} />
          <div className="experience-card">
            <div className="experience-card-header">
              <div className="pixel-font experience-role">
                {ex.role} · {ex.company}
              </div>
              <div className="experience-meta">
                <div className="pixel-font experience-dates">{ex.dates}</div>
                <div className="pixel-font experience-location">{ex.location}</div>
              </div>
            </div>
            <ul className="experience-bullets">
              {ex.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <SectionNav
        backLabel="← LEVEL 03"
        backTo="/skills"
        nextLabel="LEVEL 05 →"
        nextTo="/projects"
      />
    </section>
  )
}
