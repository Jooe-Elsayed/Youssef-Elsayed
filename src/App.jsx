  import React from 'react'
  import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Technongies from './components/Technongies.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

  const App = () => {
    return (
      <div className='overflow-x-hidden text-stone-300 antialiased'>
            <div className='fixed inset-0 -z-10'>
              <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            <div className='container max-auto px-8'>
                <Navbar/>
                <Hero/>
                <Technongies/>
                <Projects/>
                <Experience/>
                <Contact/>
            </div>
      </div>
    )
  }

  export default App
