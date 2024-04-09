import React from 'react'
import { GrDeploy } from "react-icons/gr";
import { GoFileCode } from "react-icons/go";

function ProjectComponent2(props) {

  const{level,project,discPara,techPara,codeLink,liveLink } = props.data;

  return (
   <div className=' w-80  h-96 border-2 border-yellow-400 rounded-lg relative'>

    <div className='flex justify-between '>
      <h1 className='px-2 py-1  text-lg font-medium'>Level</h1>
      <h1 className='px-2 py-1 text-lg font-medium'>{level}</h1>
    </div>
    
    <div className='mx-2 my-1'> 
      <h1 className='text-xl font-bold text-center  text-transparent bg-clip-text bg-gradient-to-r  from-yellow-400 to-orange-500'> {project} </h1>
    </div>

    <div className=' ml-2 mr-1'>
      <h1 className='text-xl font-bold dark:text-orange-400' >Description</h1>
      <p className=' font-medium'>{discPara}</p>
    </div>

    <div className='mx-2 my-1'>
      <h1 className='text-xl font-bold dark:text-orange-400'>Tech Stack</h1>
      <p className='font-medium'> {techPara}</p>
    </div>

      <div className='absolute bottom-1 left-2'>
      <div className='flex  justify-center items-center gap-1 hover:text-green-400'>
        <a href={codeLink} target='_blank' className='font-medium'>GitHub Link </a> <GoFileCode />
      </div>
      </div>

      <div className='absolute bottom-1 right-2'>
      <div className='flex items-center gap-1 hover:text-orange-400'>
        <a href={liveLink} target='_blank' className='font-medium'>Live Link</a>
        <GrDeploy />
      </div>
      </div>


      

    </div>
  )
}

export default ProjectComponent2