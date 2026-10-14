import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import ProjectGallery from './components/ProjectGallery'
import NetworkBackground from './components/NetworkBackground'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

function App() {
  return (
    <div className="relative min-h-screen text-white pt-20">
      <NetworkBackground />
      <Navbar />
      <Hero />
      <ProjectGallery />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
