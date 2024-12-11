import React from "react";
import LineChart from "@/components/Dashboard/Chart/LineChart";
import Image from 'next/Image'


const Order:React.FC = () =>{
    return(
        <div className='bg-white rounded-16 shadow-xl p-6 w-full flex flex-col gap-7'>
            <div className="flex justify-between">
                <div className='flex flex-col gap-3'>
                    <h1>Order</h1>
                    <span className="font-medium text-2xl ">
                        2.568
                    </span>
                    <div className='flex gap-2'>
                        <Image
                        src='/image/Arrow Down.svg'
                        alt='#'
                        width={10}
                        height={10}
                        />
                        <span className='text-[#F2383A] text-sm'>2.12%</span>
                        <span className='text-gray-600 text-sm'>vs last week</span>
                    </div>
                </div>
                <div>
                    <button
                        className="rounded-8 bg-[#FBFCFE] shadow-md text-sm px-5 py-3 hover:border hover:border-gray-300">
                        View Report
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-7'>
                <LineChart/>
                <div className='flex gap-3'>
                    <div className='flex gap-2'>
                        <div className='rounded-8 bg-[#5A6ACF] w-3 h-3'></div>
                        <span className='text-xs font-normal text-gray-600'>Last 6 days</span>
                    </div>
                    <div className='flex gap-3'>
                        <div className='rounded-8 bg-[#E6E8EC] w-3 h-3'></div>
                        <span className='text-xs font-normal text-gray-600'>Last Week</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order