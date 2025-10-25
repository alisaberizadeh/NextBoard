import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">Dashboard</Link></li>
                    <li><Link href="">Ui</Link></li>
                    <li><Link href="">Chat</Link></li>
                </ul>
            </div>

            <div className='w-full grid grid-cols-2 gap-10 mt-5'>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow py-5'>
                    <p className='w-full font-semibold border-b pb-4 px-5 border-base-300'>Chat</p>
                    <div className='w-full p-5 space-y-4'>

                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Obi-Wan" src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Obi-Wan Kenobi
                                <time className="text-xs opacity-50 ml-2">12:45</time>
                            </div>
                            <div className="chat-bubble">You were the Chosen One!</div>
                            <div className="chat-footer opacity-50">Delivered</div>
                        </div>

                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Anakin" src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Anakin
                                <time className="text-xs opacity-50 ml-2">12:46</time>
                            </div>
                            <div className="chat-bubble">I hate you!</div>
                            <div className="chat-footer opacity-50">Seen at 12:46</div>
                        </div>

                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Obi-Wan" src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Obi-Wan Kenobi
                                <time className="text-xs opacity-50 ml-2">12:47</time>
                            </div>
                            <div className="chat-bubble">You were my brother, Anakin!</div>
                        </div>

                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Anakin" src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Anakin
                                <time className="text-xs opacity-50 ml-2">12:48</time>
                            </div>
                            <div className="chat-bubble">Don’t lecture me, Obi-Wan!</div>
                        </div>

                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Yoda" src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Master Yoda
                                <time className="text-xs opacity-50 ml-2">12:49</time>
                            </div>
                            <div className="chat-bubble">Much anger I sense in you...</div>
                        </div>

                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow py-5'>
                    <p className='w-full font-semibold border-b pb-4 px-5 border-base-300'>Chat</p>
                    <div className='w-full p-5 space-y-4'>

                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-secondary">
                                Put me on the Council and not make me a Master!??
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-accent">
                                That's never been done in the history of the Jedi.
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-neutral">It's insulting!</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Page