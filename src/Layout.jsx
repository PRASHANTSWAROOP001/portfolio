import React from 'react'
import Navigation from './componets/navigation/Navigation'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navigation/>
    <Outlet/>
    </>
  )
}

export default Layout