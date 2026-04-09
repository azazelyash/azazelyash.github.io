const experiences = [
  {
    id: 1,
    role: 'Software Developer Engineer 1',
    company: 'Six30Labs',
    period: 'July 2025 – Present',
    location: 'Remote',
    current: true,
    points: [
      'Working across multiple projects as a Flutter and React Native developer.',
      'Building responsive mobile interfaces consistent across Android and iOS.',
      'Developing and integrating RESTful APIs for mobile-backend communication.',
      'Implementing state management and optimising performance across devices.',
      'Conducting client demos, gathering feedback, and iterating on features.',
    ],
  },
  {
    id: 2,
    role: 'Flutter Developer',
    company: 'Ienergy Digital',
    period: 'May 2024 – July 2025',
    location: 'Noida, India',
    current: false,
    points: [
      'Integrated Hive for offline data storage with auto-sync on network availability.',
      'Developed reusable Hive management class to reduce code redundancy.',
      'Implemented live location tracking and geofencing alerts using Dio and Provider.',
      'Built dynamic, complex UIs using Slivers and data-driven layouts.',
    ],
  },
  {
    id: 3,
    role: 'Flutter Developer Intern',
    company: 'Umeed Digital Health',
    period: 'Jan 2024 – April 2024',
    location: 'Hybrid, India',
    current: false,
    points: [
      "Led development of a Doctor's Prescription app for a healthcare startup.",
      'Delivered 50+ screens in under 20 days following agile methodologies.',
    ],
  },
  {
    id: 4,
    role: 'Flutter Developer Intern',
    company: 'Desktivo Tech',
    period: 'Nov 2023 – Jan 2024',
    location: 'Remote',
    current: false,
    points: [],
  },
  {
    id: 5,
    role: 'Flutter Developer Intern',
    company: 'Skygoal Tech',
    period: 'March 2023 – June 2023',
    location: 'Remote',
    current: false,
    points: [],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="snap-section section exp-section reveal">
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${exp.current ? 'timeline-item--current' : ''}`}>
              {/* Left: period + connector */}
              <div className="tl-left">
                <span className="tl-period">{exp.period}</span>
                <div className="tl-connector">
                  <div className="tl-dot"></div>
                  {index < experiences.length - 1 && <div className="tl-line"></div>}
                </div>
              </div>

              {/* Right: content card */}
              <div className="tl-card">
                <div className="tl-card-header">
                  <div>
                    <h3 className="tl-role">{exp.role}</h3>
                    <p className="tl-company">
                      {exp.company}
                      <span className="tl-location"> · {exp.location}</span>
                    </p>
                  </div>
                  {exp.current && <span className="tl-badge">Current</span>}
                </div>
                {exp.points.length > 0 && (
                  <ul className="tl-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
