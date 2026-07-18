import { useGameNav } from '../useGameNav'

export default function SectionNav({ backLabel, backTo, nextLabel, nextTo }) {
  const { go, onHover } = useGameNav()

  return (
    <div className="section-nav">
      <button className="pixel-font btn btn-nav" onClick={() => go(backTo)} onMouseEnter={onHover}>
        {backLabel}
      </button>
      <button className="pixel-font btn btn-nav" onClick={() => go(nextTo)} onMouseEnter={onHover}>
        {nextLabel}
      </button>
    </div>
  )
}
