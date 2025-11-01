"use client"
import { ThemeContext } from '@/context/ThemeContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { BiBell, BiMenu, BiMoon, BiSun } from 'react-icons/bi'
import { BsPalette, BsPaletteFill } from 'react-icons/bs'
import { CiLogout, CiSearch, CiSettings, CiUser } from 'react-icons/ci'
import { FaCheck } from 'react-icons/fa'


function Navbar() {

    const {toggleTheme , theme} = useContext(ThemeContext)

  return (

    <div className="navbar bg-base-100 shadow-sm sticky top-0  px-5 z-50">
      <div className="flex-1">
        <a className=" text-xl">Dashboard</a>
      </div>

      <div className="flex gap-2">
        <label htmlFor="my-drawer-3" className="  lg:hidden  drawer-button  btn btn-circle ml-2">
          <BiMenu className="text-lg" />
        </label>

        <form action="" className="lg:flex w-60 bg-base-300 hidden items-center justify-between px-5 rounded-full border border-base-300 focus-within:border-primary">
          <input type="text" className="outline-none border-none w-11/12 h-full rounded-lg text-sm" placeholder="Search..." />
          <button className="w-1/12 cursor-pointer rounded-full text-lg hover:text-primary"><CiSearch /></button>
        </form>


        <div className="lg:block hidden dropdown dropdown-end ml-2">
          <div tabIndex={0} role="button" className="btn btn-circle text-xl ">
            <BiBell />
          </div>
          <ul tabIndex={-1} className="list bg-base-100  border border-base-200 rounded-box shadow-md  dropdown-content z-1 mt-5 w-96">

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
        <div className="block  dropdown dropdown-end ml-2">
          <div tabIndex={0} role="button" className="btn btn-circle text-xl ">
            <BsPalette />
          </div>
          <ul tabIndex={-1} className="bg-base-100 border border-base-200 rounded-box shadow-md  dropdown-content z-1 mt-5 w-52 h-96 overflow-y-scroll p-3">


            {[
              "light", "dark", "cupcake", "bumblebee", "emerald",
              "corporate", "synthwave", "retro", "cyberpunk", "valentine",
              "halloween", "garden", "forest", "aqua", "lofi",
              "pastel", "fantasy", "wireframe", "black", "luxury",
              "dracula", "cmyk", "autumn", "business", "acid",
              "lemonade", "night", "coffee", "winter", "dim",
              "nord", "sunset", "caramellatte", "abyss", "silk"
            ].map((themeItem) => (
              <li data-theme={themeItem} key={themeItem}  onClick={()=>toggleTheme(themeItem)} className='w-full bg-base-100 bg-none flex items-center mb-3 p-2   border-base-200 rounded-lg shadow cursor-pointer'>
                <div className='  grid grid-cols-2 gap-2'>
                  <span className='col-span-1 w-2 h-2 rounded-full bg-base-content'></span>
                  <span className='col-span-1 w-2 h-2 rounded-full bg-primary '></span>
                  <span className='col-span-1 w-2 h-2 rounded-full bg-secondary'></span>
                  <span className='col-span-1 w-2 h-2 rounded-full bg-accent'></span>
                </div>
                 <div className=' truncate ml-5 text-sm flex items-center'>
                  {themeItem}
                  {theme === themeItem ? <FaCheck className='ml-2' />  : ""}
                </div>
              </li>



            ))}






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
            <li><Link href="/profile" className="py-2 rounded-lg"><CiUser className="text-[18px]" /> Profile</Link></li>
            <li><Link href="/setting" className="py-2 rounded-lg"><CiSettings className="text-[18px]" /> Setting</Link></li>
            <li><Link href="" className="py-2 rounded-lg"><CiLogout className="text-[18px]" /> Log Out</Link></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar