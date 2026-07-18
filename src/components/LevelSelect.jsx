import { levelDefs } from '../data'
import { useGameNav } from '../useGameNav'

export default function LevelSelect() {
  const { go, onHover } = useGameNav()

  return (
    <section id="levels" className="section levels-section">
      <div className="pixel-font levels-heading">SELECT A LEVEL</div>
      <div className="pixel-font levels-subheading">Choose your path to explore my journey</div>

      <div className="levels-track">
        <div className="levels-path" />

        {levelDefs.map((lvl, i) => {
          const isEven = i % 2 === 0
          return (
            <div
              key={lvl.id}
              className={`level-row ${isEven ? 'level-row--start' : 'level-row--end'}`}
            >
              <button
                className={`level-node ${isEven ? 'level-node--forward' : 'level-node--reverse'}`}
                onClick={() => go(lvl.route)}
                onMouseEnter={onHover}
              >
                <div className="pixel-font level-num">{lvl.num}</div>
                <div>
                  <div className="pixel-font level-title">{lvl.title}</div>
                  <div className="pixel-font level-desc">{lvl.desc}</div>
                </div>
              </button>
            </div>
          )
        })}
      </div>

      <div className="section-nav section-nav--center">
        <button className="pixel-font btn btn-nav" onClick={() => go('/')} onMouseEnter={onHover}>
          ← TITLE
        </button>
      </div>
    </section>
  )
}
