import React from 'react'
import Intro from '../Components/Intro'
import { About } from './02-About'
import Services from '../Components/03-Services'
import { Contact } from './04-Contact'
import Footer from '../Components/04-Footer'
import Projects from './MyProjects'
export const Home = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

