"use client"
import { ThemeContext } from '@/context/ThemeContext'
import Link from 'next/link'
import React, { useContext } from 'react'

function Page() {
    const {toggleTheme , theme} = useContext(ThemeContext)
    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">Dashboard</Link></li>
                    <li><Link href="">Themes</Link></li>
                </ul>
            </div>


            <div className='w-full grid grid-cols-5 gap-10 mt-5'>
                {[
                    "light", "dark", "cupcake", "bumblebee", "emerald",
                    "corporate", "synthwave", "retro", "cyberpunk", "valentine",
                    "halloween", "garden", "forest", "aqua", "lofi",
                    "pastel", "fantasy", "wireframe", "black", "luxury",
                    "dracula", "cmyk", "autumn", "business", "acid",
                    "lemonade", "night", "coffee", "winter", "dim",
                    "nord", "sunset", "caramellatte", "abyss", "silk"
                ].map((themeItem) => (
                    <div
                        key={themeItem}
                        data-theme={themeItem}
                        onClick={()=>toggleTheme(themeItem)}
                        className="bg-base-100 text-base-content col-span-5 sm:col-span-2 xl:col-span-1 cursor-pointer font-sans rounded-xl shadow-sm overflow-hidden transition hover:shadow-md"
                    >
                        <div className="grid grid-cols-5 h-full">
                            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                            <div className="bg-base-300 col-start-1 row-start-3"></div>

                            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-2 p-3">
                                <div className="font-bold text-sm capitalize">{themeItem}</div>

                                <div className="flex flex-wrap gap-2">
                                    <div className="bg-primary flex aspect-square w-6 items-center justify-center rounded">
                                        <div className="text-primary-content text-sm font-bold">A</div>
                                    </div>

                                    <div className="bg-secondary flex aspect-square w-6 items-center justify-center rounded">
                                        <div className="text-secondary-content text-sm font-bold">A</div>
                                    </div>

                                    <div className="bg-accent flex aspect-square w-6 items-center justify-center rounded">
                                        <div className="text-accent-content text-sm font-bold">A</div>
                                    </div>

                                    <div className="bg-neutral flex aspect-square w-6 items-center justify-center rounded">
                                        <div className="text-neutral-content text-sm font-bold">A</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}



            </div>

        </div>
    )
}

export default Page