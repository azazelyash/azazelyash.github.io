const skills = {
  Languages: ['Dart', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  Frameworks: ['Flutter', 'React Native', 'Node.js', 'Express.js'],
  Tools: ['Firebase', 'MongoDB', 'Figma', 'Postman', 'Android Studio', 'Xcode'],
  Fields: ['Mobile Development', 'Web Development', 'UI/UX Design', 'REST APIs'],
}

export default function About() {
  return (
    <section id="about" className="snap-section section reveal">
      <div className="section-inner">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Developer Engineer based in Noida, India, currently at{' '}
              <span className="highlight">Six30Labs</span>. I specialise in building
              cross-platform mobile applications using Flutter and React Native, with a
              focus on clean UI, smooth performance, and solid backend integration.
            </p>
            <p>
              I hold a B.Tech in Computer Science from Dr. A.P.J. Abdul Kalam Technical
              University (CGPA 7.93) and have been building production apps since 2023.
            </p>
            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-label">Location</span>
                <span>Noida, Uttar Pradesh, India</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Email</span>
                <a href="mailto:jss.yash085@gmail.com">jss.yash085@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-group">
                <h4 className="skill-group-title">{category}</h4>
                <ul className="skill-list">
                  {items.map((skill) => (
                    <li key={skill} className="skill-item">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
