"use client"
import Link from 'next/link'
import React from 'react'
import { BiBell, BiMenu, BiMoon, BiSun } from 'react-icons/bi'
import { CiLogout, CiSearch, CiSettings, CiUser } from 'react-icons/ci'
import { FaCheck } from 'react-icons/fa'
import { usePathname } from "next/navigation";


function Navbar() {
  const pathname = usePathname(); 
  const cleanPath = pathname.startsWith("/") ? pathname.slice(1) : pathname; 
  
  return (

    <div className="navbar bg-base-100 shadow-sm sticky top-0  px-5 z-50">
      <div className="flex-1">
        <a className=" text-xl">{cleanPath ? cleanPath : "Dashboard"}</a>
      </div>

      <div className="flex gap-2">
        <label htmlFor="my-drawer-3" className="  lg:hidden  drawer-button  btn btn-circle ml-2">
          <BiMenu className="text-lg" />
        </label>

        <form action="" className="lg:flex w-60 bg-base-300 hidden items-center justify-between px-5 rounded-full border border-base-300 focus-within:border-primary">
          <input type="text" className="outline-none border-none w-11/12 h-full rounded-lg text-sm" placeholder="Search..." />
          <button className="w-1/12 cursor-pointer rounded-full text-lg hover:text-primary"><CiSearch /></button>
        </form>
        <label className="swap swap-rotate btn btn-circle ml-2">
          <input type="checkbox" className="theme-controller" value="synthwave" />

          <BiSun className="swap-off text-lg" />
          <BiMoon className="swap-on  text-lg" />

        </label>



        <div className="lg:block hidden dropdown dropdown-end ml-2">
          <div tabIndex={0} role="button" className="btn btn-circle text-xl ">
            <BiBell />
          </div>
          <ul tabIndex={-1} className="list bg-base-100 rounded-box shadow-md  dropdown-content z-1 mt-5 w-96">

            <p className="p-4 pb-2 text-lg flex items-center justify-between ">
              <span>Notifications</span>
              <span className="bg-accent text-accent-content	 text-xs rounded-md px-2  py-1">5 new</span></p>

            <li className="list-row flex items-center justify-between">
              <div className="flex items-center "><img className="size-10 rounded-full mr-2" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /> Dio Lupa</div>
              <Link href="" className="btn btn-square btn-ghost"><FaCheck /></Link>
            </li>

            <li className="list-row flex items-center justify-between">
              <div className="flex items-center "><img className="size-10 rounded-full mr-2" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /> Dio Lupa</div>
              <Link href="" className="btn btn-square btn-ghost"><FaCheck /></Link>
            </li>

            <li className="list-row flex items-center justify-between">
              <div className="flex items-center "><img className="size-10 rounded-full mr-2" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /> Dio Lupa</div>
              <Link href="" className="btn btn-square btn-ghost"><FaCheck /></Link>
            </li>



          </ul>
        </div>


        <div className="dropdown dropdown-end ml-2">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              <span>Ali Saberi</span>
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow">
            <li><Link href="" className="py-2 rounded-lg"><CiUser className="text-[18px]" /> Profile</Link></li>
            <li><Link href="" className="py-2 rounded-lg"><CiSettings className="text-[18px]" /> Setting</Link></li>
            <li><Link href="" className="py-2 rounded-lg"><CiLogout className="text-[18px]" /> Log Out</Link></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar