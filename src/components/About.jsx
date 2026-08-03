import { aboutParagraphs } from '../data'
import ImageSlot from './ImageSlot'
import SectionNav from './SectionNav'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="pixel-font section-eyebrow">LEVEL 01</div>
      <h2 className="pixel-font section-title">ABOUT ME</h2>
      <div className="about-content">
        <ImageSlot className="about-portrait" placeholder="Character portrait" src="/IMG_1652.PNG" />
        <div className="about-text">
          {aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
      <SectionNav
        backLabel="← SELECT LEVEL"
        backTo="/levels"
        nextLabel="LEVEL 02 →"
        nextTo="/education"
      />
    </section>
  )
}
