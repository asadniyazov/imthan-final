import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
<>
<Navbar></Navbar>
<Outlet></Outlet>
</>
  )
}

export default Layout