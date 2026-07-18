import { education } from '../data'
import SectionNav from './SectionNav'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="pixel-font section-eyebrow">LEVEL 02</div>
      <h2 className="pixel-font section-title">EDUCATION</h2>

      {education.map((ed, i) => (
        <div
          key={ed.school}
          className="education-card"
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          <div className="education-card-header">
            <div className="education-school-group">
              <div className="skill-node" style={{ animationDelay: `${i * 0.3}s` }}>
                <div className="skill-node-inner">
                  <div className="skill-node-fill" style={{ animationDelay: `${i * 0.3}s` }} />
                </div>
              </div>
              <div className="pixel-font education-school">{ed.school}</div>
            </div>
            <div className="pixel-font education-dates">{ed.dates}</div>
          </div>
          <div className="pixel-font education-degree">{ed.degree}</div>
          {ed.activities && ed.activities.length > 0 && (
            <div className="education-activities">
              <div className="pixel-font education-activities-label">
                ACTIVITIES &amp; SOCIETIES
              </div>
              <div className="education-activities-list">
                {ed.activities.map((activity) => (
                  <div className="pixel-font education-activity-tag" key={activity}>
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <SectionNav
        backLabel="← LEVEL 01"
        backTo="/about"
        nextLabel="LEVEL 03 →"
        nextTo="/skills"
      />
    </section>
  )
}
