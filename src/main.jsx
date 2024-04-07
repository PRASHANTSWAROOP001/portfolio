import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './componets/home/Home.jsx'
import Layout from './Layout.jsx'
import About from './componets/about/About.jsx'
import Contact from './componets/contact/Contact.jsx'
import Error from './componets/error/Error.jsx'

import { ThemeProvider } from './context/themeSwitch.jsx'
import Project from './componets/github/Project.jsx'


const darkMode = () =>{
    document.querySelector("html").classList.remove("light")
    document.querySelector("html").classList.add("dark")
}

const lightMode = () =>{
  document.querySelector("html").classList.remove("dark")
  document.querySelector("html").classList.add("light")
}



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children: [{
      path:"",
      element:<Home/>,
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element: <Contact/>
    },
    {
      path:"github",
      element:<Project/>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider value={{darkMode,lightMode}}>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
