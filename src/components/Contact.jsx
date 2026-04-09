const links = [
  {
    label: 'Email',
    value: 'jss.yash085@gmail.com',
    href: 'mailto:jss.yash085@gmail.com',
    arrow: '↗',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yashvishwakarma',
    href: 'https://linkedin.com',
    arrow: '↗',
  },
  {
    label: 'GitHub',
    value: 'github.com/yashvishwakarma',
    href: 'https://github.com',
    arrow: '↗',
  },
  {
    label: 'Phone',
    value: '+91 94532 71141',
    href: 'tel:+919453271141',
    arrow: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="snap-section section reveal">
      <div className="section-inner">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-intro">
          Open to new opportunities, collaborations, or just a good conversation.
          Reach out through any of the channels below.
        </p>

        <div className="contact-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="contact-row"
            >
              <div className="contact-row-left">
                <span className="contact-row-label">{link.label}</span>
                <span className="contact-row-value">{link.value}</span>
              </div>
              {link.arrow && <span className="contact-row-arrow">{link.arrow}</span>}
            </a>
          ))}
        </div>

        <div className="contact-location">
          <span className="contact-row-label">Location</span>
          <span>Noida, Uttar Pradesh, India</span>
        </div>
      </div>
    </section>
  )
}
