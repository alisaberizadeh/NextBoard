import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <div>

            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">Dashboard</Link></li>
                    <li><Link href="">Ui</Link></li>
                    <li><Link href="">Loading</Link></li>
                </ul>
            </div>

            <div className='w-full grid grid-cols-2 gap-10 mt-5'>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>     Loading spinner
                    </p>
                    <div className='w-11/12 my-5 mx-auto'>

                        <span className="loading loading-spinner text-primary"></span>
                        <span className="loading loading-spinner text-secondary"></span>
                        <span className="loading loading-spinner text-accent"></span>
                        <span className="loading loading-spinner text-neutral"></span>
                        <span className="loading loading-spinner text-info"></span>
                        <span className="loading loading-spinner text-success"></span>
                        <span className="loading loading-spinner text-warning"></span>
                        <span className="loading loading-spinner text-error"></span>

                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>     Loading dots
                    </p>
                    <div className='w-11/12 my-5 mx-auto'>
                        <span className="loading loading-dots loading-xs"></span>
                        <span className="loading loading-dots loading-sm"></span>
                        <span className="loading loading-dots loading-md"></span>
                        <span className="loading loading-dots loading-lg"></span>
                        <span className="loading loading-dots loading-xl"></span>

                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>     Loading ring
                    </p>
                    <div className='w-11/12 my-5 mx-auto'>
                        <span className="loading loading-ring loading-xs"></span>
                        <span className="loading loading-ring loading-sm"></span>
                        <span className="loading loading-ring loading-md"></span>
                        <span className="loading loading-ring loading-lg"></span>
                        <span className="loading loading-ring loading-xl"></span>

                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>     Loading ball
                    </p>
                    <div className='w-11/12 my-5 mx-auto'>
                        <span className="loading loading-ball loading-xs"></span>
                        <span className="loading loading-ball loading-sm"></span>
                        <span className="loading loading-ball loading-md"></span>
                        <span className="loading loading-ball loading-lg"></span>
                        <span className="loading loading-ball loading-xl"></span>
                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>     Loading infinity
                    </p>
                    <div className='w-11/12 my-5 mx-auto'>
                        <span className="loading loading-infinity loading-xs"></span>
                        <span className="loading loading-infinity loading-sm"></span>
                        <span className="loading loading-infinity loading-md"></span>
                        <span className="loading loading-infinity loading-lg"></span>
                        <span className="loading loading-infinity loading-xl"></span>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Page