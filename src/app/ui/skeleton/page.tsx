import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <div>

            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">Dashboard</Link></li>
                    <li><Link href="">Ui</Link></li>
                    <li><Link href="">Skeleton</Link></li>
                </ul>
            </div>

            <div className='w-full grid grid-cols-2 gap-10 mt-5'>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>     Skeleton - circle with content
                    </p>
                    <div className='w-11/12 my-5 mx-auto'>

                        <div className="flex w-52  m-auto flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                </div>
                            </div>
                            <div className="skeleton h-32 w-full"></div>
                        </div>

                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>     Skeleton - rectangle with content
                    </p>
                    <div className='w-11/12 my-5 mx-auto'>

                        <div className="flex m-auto w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Page