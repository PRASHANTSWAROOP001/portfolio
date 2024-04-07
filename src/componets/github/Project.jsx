import React from 'react'
import Projectcomponets from '../project/projectcomponets'

function Project() {
  return (
    <div className='  dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 dark:text-white flex flex-col  justify-center items-center gap-10 h-screen w-screen'>

      <h1 className='text-3xl text-yellow-400'>Project</h1>

     <div className='w-full h-auto  justify-evenly items-center flex flex-row gap-5'>
     <Projectcomponets/>
     <Projectcomponets/>
     </div>

     <div className='w-full h-auto  justify-evenly items-center flex flex-row gap-5'>
     <Projectcomponets/>
     <Projectcomponets/>
     </div>

    
    </div>
  )
}

export default Project