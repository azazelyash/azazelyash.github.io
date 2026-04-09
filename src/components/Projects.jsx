const projects = [
  {
    id: 1,
    title: 'Business & Productivity Suite',
    description:
      'An ecosystem of 5 interconnected apps for a pharmaceutical company covering order management, warehouse operations, packaging, inventory, payments, and delivery. Role-based flows with delivery verification improved operational efficiency by 50%.',
    tags: ['Flutter', 'Google Maps', 'Firebase', 'REST API'],
    github: 'https://github.com',
    live: 'https://play.google.com/store/apps/details?id=com.yashvishwakarma.salesnbt',
    date: 'March 2023',
    badge: 'Published on Play Store',
  },
  {
    id: 2,
    title: 'Customer Support Web App',
    description:
      'A Flutter Web application for a pharmaceutical company to manage medicine orders, track payments, and generate invoices. Built with Riverpod and Flutter Hooks for efficient state management.',
    tags: ['Flutter Web', 'Riverpod', 'Flutter Hooks', 'REST API'],
    github: 'https://github.com',
    live: null,
    date: 'Sept – Oct 2024',
    badge: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="snap-section section reveal">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-top">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-date">{project.date}</p>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              {project.badge && <span className="project-badge">{project.badge}</span>}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
