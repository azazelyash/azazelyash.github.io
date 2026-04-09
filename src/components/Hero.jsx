export default function Hero() {
  return (
    <section id="hero" className="snap-section hero-section">
      <div className="hero-content">
        <p className="hero-eyebrow">Software Developer</p>
        <h1 className="hero-name">Yash Vishwakarma</h1>
        <p className="hero-tagline">
          Building cross-platform mobile experiences with Flutter &amp; React Native.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
