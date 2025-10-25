"use client"
import Link from 'next/link';
import React, { useRef } from 'react'
import { BiCamera, BiLogoFacebook, BiLogoGithub, BiLogoLinkedin, BiLogoTux, BiLogoTwitter } from 'react-icons/bi'

function Page() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="card bg-base-100 w-5/6 m-auto shadow-sm overflow-hidden">
            <div className="w-full h-72 bg-[url('https://i.pinimg.com/736x/3f/10/ed/3f10edb4ad114f2e35d148f4f9037d14.jpg')] bg-cover bg-center">
            </div>
            <div className='w-40 h-40   mx-auto -mt-20 relative'>
                <img src="/images/avatar.jpg" alt="avatar" className='rounded-full border-8 border-white shadow-2xl' />
                <form action="">
                    <input type="file" ref={fileInputRef} className='hidden' />
                    <button onClick={handleClick} className='bg-info text-base-100 p-2 rounded-full absolute right-0 top-9/12 cursor-pointer'><BiCamera className='text-2xl' /></button>
                </form>
            </div>

            <div className="card-body text-center">
                <p className="text-4xl font-black">Card Title</p>
                <p className='mt-2 font-thin text-xl'>Ui/Ux Designer</p>
                <div className="lg:w-4/6  w-full mx-auto stats stats-vertical lg:stats-horizontal border border-base-300 shadow mt-2">
                    <div className="stat">
                        <div className="stat-title">Posts</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">  Followers</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Following  </div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
                <p className='mt-6   text-lg'>About Me </p>
                <p className='mt-2 lg:w-4/6 w-full mx-auto text-gray-500   text-sm'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut.
                    Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.
                </p>
                <p className='mt-4   text-lg'>  Follow me on </p>
                <div className=" mt-2 join mx-auto join-vertical lg:join-horizontal">
                    <Link href="" className="btn text-lg join-item"><BiLogoGithub /></Link>
                    <Link href="" className="btn text-lg join-item"><BiLogoFacebook /></Link>
                    <Link href="" className="btn text-lg join-item"><BiLogoLinkedin /></Link>
                    <Link href="" className="btn text-lg join-item"><BiLogoTwitter /></Link>
              
                </div>

            </div>
        </div>
    )
}

export default Page