import React from 'react'
import Landing from '../components/Landing'
import ToolTechnology from '../components/ToolTechnology'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Achievements from '../components/Achievements'

function Home() {
  return (
    <div id='top'>
        <Landing />
        <div id='' className="h-14"></div>
        <div id='skills' className='my-8 m-2 text-center text-lg font-bold'>
          <span className='text-red-800'>S</span>kills
        </div>
        <ToolTechnology />
        <div id='projects' className='my-8 m-2 text-center text-lg font-bold'>
          <span className='text-red-800'>P</span>rojects
        </div>
        <Projects />
        <div id='achievements' className='my-8 m-2 text-center text-lg font-bold'>
          <span className='text-red-800'>A</span>chievements
        </div>
        <Achievements />
        <Footer />
    </div>
  )
}

export default Home
