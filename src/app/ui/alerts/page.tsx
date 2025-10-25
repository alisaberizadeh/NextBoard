import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <div>

            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">Dashboard</Link></li>
                    <li><Link href="">Ui</Link></li>
                    <li><Link href="">Alerts</Link></li>
                </ul>
            </div>

            <div className='w-full grid grid-cols-2 gap-10 mt-5'>
                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>   Basic Alerts</p>
                    <div className='w-11/12 my-5 mx-auto'>
                        <div role="alert" className="alert mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>12 unread messages. Tap to see.</span>
                        </div>


                        <div role="alert" className="alert alert-info mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>New software update available.</span>
                        </div>

                        <div role="alert" className="alert alert-success mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Your purchase has been confirmed!</span>
                        </div>

                        <div role="alert" className="alert alert-warning mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>Warning: Invalid email address!</span>
                        </div><div role="alert" className="alert alert-error mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Error! Task failed successfully.</span>
                        </div>



                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>     Alert soft style</p>
                    <div className='w-11/12 my-5 mx-auto'>



                        <div role="alert" className="alert mb-5 alert-info alert-soft">
                            <span>12 unread messages. Tap to see.</span>
                        </div>
                        <div role="alert" className="alert  mb-5 alert-success alert-soft">
                            <span>Your purchase has been confirmed!</span>
                        </div>
                        <div role="alert" className="alert  mb-5 alert-warning alert-soft">
                            <span>Warning: Invalid email address!</span>
                        </div>
                        <div role="alert" className="alert  mb-5 alert-error alert-soft">
                            <span>Error! Task failed successfully.</span>
                        </div>
                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>    Alert dash style</p>
                    <div className='w-11/12 my-5 mx-auto'>

                        <div role="alert" className="alert alert-info mb-5  alert-dash">
                            <span>12 unread messages. Tap to see.</span>
                        </div>
                        <div role="alert" className="alert alert-success mb-5  alert-dash">
                            <span>Your purchase has been confirmed!</span>
                        </div>
                        <div role="alert" className="alert alert-warning mb-5  alert-dash">
                            <span>Warning: Invalid email address!</span>
                        </div>
                        <div role="alert" className="alert alert-error  mb-5 alert-dash">
                            <span>Error! Task failed successfully.</span>
                        </div>


                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5 '>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>    Alert with buttons</p>
                    <div className='w-11/12 my-5 mx-auto'>

                        <div role="alert" className="alert mb-5 alert-vertical sm:alert-horizontal">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>we use cookies for no reason.</span>
                            <div>
                                <button className="btn btn-sm mr-2">Deny</button>
                                <button className="btn btn-sm btn-primary">Accept</button>
                            </div>
                        </div>

                        <div role="alert" className="alert mb-5 alert-vertical sm:alert-horizontal">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div>
                                <h3 className="font-bold">New message!</h3>
                                <div className="text-xs">You have 1 unread message</div>
                            </div>
                            <button className="btn btn-sm">See</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Page