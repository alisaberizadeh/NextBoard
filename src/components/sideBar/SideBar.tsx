import Link from 'next/link'
import React from 'react'
import { BiAlignLeft, BiPaintRoll, BiSolidBarChartAlt2, BiSolidGridAlt, BiSolidHome, BiSolidKey, BiSolidUser, BiTable } from 'react-icons/bi'

function SideBar() {
  return (
    
    <div className="drawer-side border-r border-base-300">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-100 min-h-full bg w-72 px-5 py-10">
              <p className="flex items-center text-3xl font-bold mb-5"><img src="/images/logo.png" alt="Nova Panel" className="w-12 mr-2" />  NextBoard</p>
              <p className="text-xs my-3">MAIN MENU</p>
              <li><Link className="py-3 rounded-lg " href=""><BiSolidHome className="text-lg" /> Dashboard</Link></li>
              <li><Link className="py-3 rounded-lg " href=""><BiSolidUser className="text-lg" /> Profile</Link></li>
              <li><Link className="py-3 rounded-lg " href=""><BiAlignLeft className="text-lg" /> Forms</Link></li>
              <li><Link className="py-3 rounded-lg " href=""><BiTable className="text-lg" /> Table</Link></li>
              <li><Link className="py-3 rounded-lg " href=""><BiSolidBarChartAlt2 className="text-lg" /> Charts</Link></li>
              <p className="text-xs my-3">  OTHERS</p>
              <li><Link className="py-3 rounded-lg " href=""><BiSolidGridAlt className="text-lg" /> UI Elements</Link></li>
              <li><Link className="py-3 rounded-lg " href=""><BiSolidKey className="text-lg" /> Authentication  </Link></li>
              <li><Link className="py-3 rounded-lg " href=""><BiPaintRoll className="text-lg" /> Themes  </Link></li>

              {/* <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>
  )
}

export default SideBar