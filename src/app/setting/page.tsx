import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa'

function Page() {
  return (
    <div>
      <div className="breadcrumbs text-sm">
        <ul>
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="">Setting</Link></li>
        </ul>
      </div>
      <div className='w-2/5 bg-base-100 rounded-2xl shadow  py-5 mt-5 mx-auto'>
        <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'> Personal Information</p>

        <div className='grid grid-cols-2 gap-5'>
          <div className='col-span-1 px-5 mt-5'>
            <label className='w-full block  text-sm'>Full Name</label>
            <label className="input w-full mt-3 border-base-300">
              <FaUser className='text-lg' />
              <input type="text" className="grow   focus:outline-none outline-none  " defaultValue="  Ali Saberi" />
            </label>
          </div>
          <div className='col-span-1 px-5 mt-5'>
            <label className='w-full block  text-sm'>  Phone Number</label>
            <label className="input w-full  mt-3 border-base-300">
              <FaPhone className='text-lg' />
              <input type="text" className="grow  focus:outline-none outline-none  " defaultValue="+98 910 470 7092" />
            </label>
          </div>
          <div className='col-span-2 px-5'>
            <label className='w-full block  text-sm'>    Email Address</label>
            <label className="input w-full  mt-3 border-base-300">
              <FaEnvelope className='text-md' />
              <input type="email" className="grow focus:outline-none outline-none  " defaultValue="Alisaberizadeh.one@gmail.com" />
            </label>
          </div>
        </div>

        <div className='col-span-2 px-5 mt-5'>
          <label className='w-full block  text-sm'>      UserName</label>
          <label className="input w-full  mt-3 border-base-300">
            <FaUser className='text-md' />
            <input type="email" className="grow  focus:outline-none outline-none  " defaultValue="Alisaberizadeh" />
          </label>
        </div>

        <div className='col-span-2 px-5 mt-5'>
          <label className='w-full block  text-sm'>      Bio</label>
           <textarea className="textarea border-base-300 focus:outline-none outline-none w-full  mt-3" placeholder="Default textarea"></textarea>
        </div>





        <div className='w-full px-5 mt-5 '>
          <button className="btn  mb-4 bg-primary focus:outline-none py-6 border-none  text-base-100 ">
            Save
          </button>
          <button className="btn  mb-4 bg-base-200 border-base-300 border focus:outline-none py-6  ml-3 ">
            Cancel
          </button>
        </div>



      </div>
    </div>
  )
}

export default Page