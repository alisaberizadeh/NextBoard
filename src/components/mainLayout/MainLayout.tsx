"use client"
import React from 'react'
import Navbar from '../navbar/Navbar'
import SideBar from '../sideBar/SideBar'
import { ThemeProvider } from '@/context/ThemeContext'

function MainLayout(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />

          <div className="myContainer py-7 ">
            {props.children}
          </div>

        </div>
        <SideBar />
      </div>
    </ThemeProvider>

  )
}

export default MainLayout