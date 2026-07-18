import { skillGroups } from '../data'
import SectionNav from './SectionNav'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="pixel-font section-eyebrow">LEVEL 03</div>
      <h2 className="pixel-font section-title">SKILLS — CHARACTER STATS</h2>

      {skillGroups.map((sg, gi) => (
        <div key={sg.name} className="skill-card">
          <div className="skill-card-header">
            <div className="pixel-font skill-name">{sg.name}</div>
            <div className="skill-stars">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className={`skill-star ${i < sg.level ? 'skill-star--filled' : ''}`}
                  style={{ animationDelay: `${gi * 0.3 + i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
          <div className="skill-items">{sg.items}</div>
        </div>
      ))}

      <SectionNav
        backLabel="← LEVEL 02"
        backTo="/education"
        nextLabel="LEVEL 04 →"
        nextTo="/experience"
      />
    </section>
  )
}
