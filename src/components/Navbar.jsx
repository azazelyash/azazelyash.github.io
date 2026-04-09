import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const container = document.querySelector('.scroll-container')
    const target = container || window
    const getScroll = () => (container ? container.scrollTop : window.scrollY)
    const handleScroll = () => setScrolled(getScroll() > 50)
    target.addEventListener('scroll', handleScroll)
    return () => target.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <span className="nav-logo">Yash Vishwakarma</span>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
