import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
interface IProps {
  color : string ,
  value : string ,
  change : string ,
  label : string ,
  icon : React.ReactNode ,
  changecolor : string ,
}

function StatisticsItem(props:IProps) {
  return (
    <div className="bg-base-100 col-span-1 shadow-sm rounded-xl p-7">
          <span className={`p-5 inline-flex  rounded-full ${props.color}`}>{props.icon}</span>
          <p className="text-3xl font-bold mt-5">{props.value}</p>
          <p className="flex items-center justify-between mt-3 text-sm">
            <span className="text-neutral">{props.label}</span>
            <span className={`${props.changecolor} flex items-center`}>{props.change}{props.changecolor === "text-success" ? <FaArrowUp className='ml-1' /> : <FaArrowDown className='ml-1'  /> }</span>
          </p>
        </div>
  )
}

export default StatisticsItem