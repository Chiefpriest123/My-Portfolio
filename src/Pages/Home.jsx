import React from 'react'
import Hero from '../Component/Hero'
import About from '../Component/About'
import Projects from '../Component/Projects'
import Contact from '../Component/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      {/* <Projects /> */}
      <Contact />
    </div>
  )
}

export default Home