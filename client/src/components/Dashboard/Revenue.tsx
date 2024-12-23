import React from "react";
import BarChart from "@/components/Dashboard/Chart/BarChart";
import Image from "next/image";



const Revenue: React.FC = () =>{
    return (
        <div className='bg-white rounded-16 shadow-xl p-4 w-full max-w-[1200px] flex flex-col justify-between'>
            <div className='flex justify-between pb-5 items-center'>
                <div className='flex flex-col gap-2'>
                    <h1>Revenue</h1>
                    <span className='text-2xl'>R2,810.00</span>
                    <div className='flex gap-2'>
                        <Image
                            src='/image/Arrow Up.svg'
                            alt='#'
                            width={10}
                            height={10}
                        />
                        <span className='text-[#149D52] text-sm'>2.12%</span>
                        <span className='text-gray-600 text-sm'>vs last week</span>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='flex gap-2'>
                        <div className='rounded-8 bg-[#5A6ACF] w-3 h-3'></div>
                        <span className='text-xs font-normal text-gray-600'>Last 6 days</span>
                    </div>
                    <div className='flex gap-2'>
                        <div className='rounded-8 bg-[#E6E8EC] w-3 h-3'></div>
                        <span className='text-xs font-normal text-gray-600'>Last Week</span>
                    </div>
                </div>
            </div>
            <BarChart/>
        </div>
    )
}

export default Revenue;