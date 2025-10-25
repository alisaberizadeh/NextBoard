import Link from 'next/link'
import React from 'react'
import { BiAlignLeft, BiPaintRoll, BiSolidBarChartAlt2, BiSolidGridAlt, BiSolidHome, BiSolidKey, BiSolidUser, BiTable } from 'react-icons/bi'

function SideBar() {
  return (
    
    <div className="drawer-side border-r border-base-300 z-50">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-100 min-h-full bg w-72 px-5 py-10">
              <p className="flex items-center text-3xl font-bold mb-5"><img src="/images/logo.png" alt="Nova Panel" className="w-12 mr-2" />  NextBoard</p>
              <p className="text-xs my-3">MAIN MENU</p>
              <li><Link className="py-3 rounded-lg " href="/"><BiSolidHome className="text-lg" /> Dashboard</Link></li>
              <li><Link className="py-3 rounded-lg " href="/profile"><BiSolidUser className="text-lg" /> Profile</Link></li>
              <li><Link className="py-3 rounded-lg " href="/forms"><BiAlignLeft className="text-lg" /> Forms</Link></li>
              <li><Link className="py-3 rounded-lg " href="/tables"><BiTable className="text-lg" /> Tables</Link></li>
              <li><Link className="py-3 rounded-lg " href="/charts"><BiSolidBarChartAlt2 className="text-lg" /> Charts</Link></li>
        
        
              <p className="text-xs my-3">  OTHERS</p>



              <li>
                <details >
                  <summary><BiSolidGridAlt className="text-lg" /> UI Elements</summary>
                  <ul>
                    <li><Link href="/ui/alerts">Alerts</Link></li>
                    <li><Link href="/ui/chat">Chat</Link></li>
                    <li><Link href="/ui/loading ">Loading </Link></li>
                    <li><Link href="/ui/skeleton ">Skeleton </Link></li>
                    <li><Link href="/ui/steps ">Steps </Link></li>
                    <li><Link href="/ui/timeline ">Timeline </Link></li>
                  </ul>
                </details>
              </li>




              <li><Link className="py-3 rounded-lg " href="/themes"><BiPaintRoll className="text-lg" /> Themes  </Link></li>

           
            </ul>
          </div>
  )
}

export default SideBar