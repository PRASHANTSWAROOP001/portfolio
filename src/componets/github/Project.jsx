import React from 'react'
import Projectcomponets from '../project/projectcomponets'
import ProjectComponent2 from '../project/ProjectComponent2'

function Project() {
  return (
    <div className='  dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 dark:text-white gap-10 h-screen w-screen'>

    <div className='text-center'>
    <h1 className='text-5xl text-yellow-400 py-2'> Hey there!  👋</h1>
      <p className='text-2xl py-2 font-medium'> You’re in for a treat with a bunch of cool code projects here. <br /> Stick around, there’s plenty more coming your way as I grow as a developer. <br /> Keep it real! 🛠️🌟.</p>
    </div>

     <div className= ' my-9 w-full h-auto sm:flex-col md:flex-row border-2 flex justify-around items-center '>
      <Projectcomponets></Projectcomponets>
      <ProjectComponent2></ProjectComponent2>
      <Projectcomponets></Projectcomponets>
    </div>

    
    </div>
  )
}

export default Project