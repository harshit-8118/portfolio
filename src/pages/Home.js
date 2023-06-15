import React from 'react'
import Landing from '../components/Landing'
import ToolTechnology from '../components/ToolTechnology'

function Home() {
  return (
    <div>
        <Landing />
        <div className="h-14"></div>
        <div className='m-2 text-center text-5xl font-bold'>
          <span className='text-red-800'>S</span>kills
        </div>
        <ToolTechnology />
        <div className='m-2 text-center text-5xl font-bold'>
          <span className='text-red-800'>P</span>rojects
        </div>

        
    </div>
  )
}

export default Home
