// Week 8 starter: React State & Interactive Components
// TODO: Break down your week 7 monolithic component into separate components
// Each component should manage its own state as appropriate
// Navbar: is the mobile menu open? (a boolean)
// Projects: which filter is active? (a string such as 'all')
// Contact: what has the user typed, and which fields have errors? (two objects)

import './App.css'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="portfolio">
      <NavBar />
      <Projects />
      <h1>Week 8: React State & Interactive Components</h1>
      <p>Follow the README instructions to build your component-based portfolio!</p>

      {/* TODO: Import and add components here:
          - <Hero />
          - <About />
          - <Skills />
          - <Contact />
          - <Footer />
      */}
    </div>
  )
}

export default App
