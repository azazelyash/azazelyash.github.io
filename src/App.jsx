import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'
import useSmoothSnap from './hooks/useSmoothSnap'
import './App.css'

function App() {
  useReveal()
  useSmoothSnap()

  return (
    <>
      <Navbar />
      <div className="scroll-container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
