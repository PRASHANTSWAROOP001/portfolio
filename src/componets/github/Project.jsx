import React from 'react'
import Projectcomponets from '../project/projectcomponets'
import ProjectComponent2 from '../project/ProjectComponent2'

function Project() {

   const mainProject = {
    level:"Intermediate",
    project:"Portfolio Website",
    discPara: "An Intermediate level react application. It uses typed js for animation. I have used react router for client side routing.It also uses email js for emails/messages. ",
    techPara: "JavaScript, React, Telwind Css, Typed js, React Router, Email js.",
    codeLink:"https://github.com/PRASHANTSWAROOP001/portfolio",
    liveLink: "#",
   }

   const sideProject1 ={
    level:"Intermediate",
    project:"Signature WebApp",
    discPara:"A Html Css and JavaScript webapp to take user Signature using mouse movements. It adds date and time automatically to validate user signature.",
    techPara:"Html Css Javascript Html Canvas",
    codeLink: "https://github.com/PRASHANTSWAROOP001/Signature-WebApp",
    liveLink: "https://prashantswaroop001.github.io/Signature-WebApp/",
   }

   const sideProject2 ={
    level: "Easy",
    project: "To do list",
    discPara: "Its a basic to do list webapp to add, delete and complete a particular task. I created this project to understand Dom manipulation better.",
    techPara:"Html Css Javascript",
    codeLink:"https://github.com/PRASHANTSWAROOP001/To-Do-List",
    liveLink:"#"
   }


  return (
    <div className='  dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 dark:text-white gap-10 h-screen w-screen'>

    <div className='text-center'>
    <h1 className='text-5xl text-yellow-400 py-2'> Hey there!  👋</h1>
      <p className='text-2xl py-2 font-medium'> You’re in for a treat with a bunch of cool code projects here. <br /> Stick around, there’s plenty more coming your way as I grow as a developer. <br /> Keep it real! 🛠️🌟.</p>
    </div>

     <div className= ' my-9 w-full h-auto sm:flex-col sm:gap-5 lg:flex-row flex justify-around items-center '>
      <Projectcomponets data = {sideProject1}></Projectcomponets>
      <ProjectComponent2 data = {mainProject}></ProjectComponent2> 
      <Projectcomponets data = {sideProject2}></Projectcomponets>
    </div>

    
    </div>
  )
}

export default Project