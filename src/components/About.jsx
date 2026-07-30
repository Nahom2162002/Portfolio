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
          <p>
            Full stack developer with a B.S. in Computational Artificial Intelligence 
            from RIT and a track record of shipping production software independently.
            Built and launched three SaaS products from scratch: LockedIn, InfoDiet, and CodeDuel. 
            All with real users, Stripe billing, JWT authentication, and MongoDB 
            Atlas backends. CodeDuel integrates the Anthropic Claude API to compete 
            against developers on real coding problems in real time.
          </p>
          <p>
            Open source contributor with professional experience at Honeywell. Fluent in
            JavaScript, TypeScript, Python, C++, Java, C#, and C — building across React, Node.js,
            Next.js, Django, AWS, and Azure AI.
          </p>
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
