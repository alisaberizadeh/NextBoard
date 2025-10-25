import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <div>

            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">Dashboard</Link></li>
                    <li><Link href="">Ui</Link></li>
                    <li><Link href="">Steps</Link></li>
                </ul>
            </div>

            <div className='w-full grid grid-cols-2 gap-10 mt-5'>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>    Horizontal
                    </p>
                    <div className='w-11/12 my-5 mx-auto'>

                      <ul className="steps">
  <li className="step step-primary">Register</li>
  <li className="step step-primary">Choose plan</li>
  <li className="step">Purchase</li>
  <li className="step">Receive Product</li>
</ul>

                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>    Vertical
                    </p>
                    <div className='w-11/12 my-5 mx-auto'>

                   <ul className="steps steps-vertical">
  <li className="step step-primary">Register</li>
  <li className="step step-primary">Choose plan</li>
  <li className="step">Purchase</li>
  <li className="step">Receive Product</li>
</ul>

                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>    With data-content
                    </p>
                    <div className='w-11/12 my-5 mx-auto'>

                        <ul className="steps">
                            <li data-content="?" className="step step-neutral">Step 1</li>
                            <li data-content="!" className="step step-neutral">Step 2</li>
                            <li data-content="✓" className="step step-neutral">Step 3</li>
                            <li data-content="✕" className="step step-neutral">Step 4</li>
                            <li data-content="★" className="step step-neutral">Step 5</li>
                            <li data-content="" className="step step-neutral">Step 6</li>
                            <li data-content="●" className="step step-neutral">Step 7</li>
                        </ul>

                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>    Custom colors

                    </p>
                    <div className='w-11/12 my-5 mx-auto'>

                        <ul className="steps">
                            <li className="step step-info">Fly to moon</li>
                            <li className="step step-info">Shrink the moon</li>
                            <li className="step step-info">Grab the moon</li>
                            <li className="step step-error" data-content="?">Sit on toilet</li>
                        </ul>

                    </div>
                </div>

                <div className='col-span-2 lg:col-span-2 bg-base-100 rounded-2xl shadow  py-5'>
                    <p className='w-full font-semibold border-b  pb-4 px-5   border-base-300'>    With scrollable wrapper

                    </p>
                    <div className='w-11/12 my-5 mx-auto'>

                        <div className="overflow-x-auto">
  <ul className="steps">
    <li className="step">start</li>
    <li className="step step-secondary">2</li>
    <li className="step step-secondary">3</li>
    <li className="step step-secondary">4</li>
    <li className="step">5</li>
    <li className="step step-accent">6</li>
    <li className="step step-accent">7</li>
    <li className="step">8</li>
    <li className="step step-error">9</li>
    <li className="step step-error">10</li>
    <li className="step">11</li>
    <li className="step">12</li>
    <li className="step step-warning">13</li>
    <li className="step step-warning">14</li>
    <li className="step">15</li>
    <li className="step step-neutral">16</li>
    <li className="step step-neutral">17</li>
    <li className="step step-neutral">18</li>
    <li className="step step-neutral">19</li>
    <li className="step step-neutral">20</li>
    <li className="step step-neutral">21</li>
    <li className="step step-neutral">22</li>
    <li className="step step-neutral">23</li>
    <li className="step step-neutral">end</li>
  </ul>
</div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Page