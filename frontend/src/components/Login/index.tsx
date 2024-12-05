import React from "react";
import FormLogin from "@/components/Login/FormLogin";
import Image from "next/image";
import '../Login/index.css'

const inforLists = [
    {title: 'Get started quickly', text: 'Integrate with developer-friendly APIs or choose low-code'},
    {title: 'Get started quickly', text: 'Integrate with developer-friendly APIs or choose low-code'},
    {title: 'Get started quickly', text: 'Integrate with developer-friendly APIs or choose low-code'},
]

const Login = () => {
    return (
        <div className='mx-auto max-w-[1200px] flex flex-row gap-[165px] opacity-80'>
            <div className='w-full max-w-[463px] flex flex-col gap-8 pt-4'>
                <div className='w-full flex flex-col gap-2'>
                    <h1 className='text-4xl text-[#001230] font-bold'>Welcome to</h1>
                    <h1 className='text-4xl text-[#001230] font-bold'>Dashboard for developer</h1>
                    <p className='text-base font-normal text-gray-600'>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Cumque deleniti dolorem, eaque, error eveniet incidunt ipsam iure odit
                        pariatur possimus quidem unde? Eligendi explicabo, mollitia!</p>
                </div>
                {inforLists.map((list, index) => (
                    <div key={index} className='flex gap-2 items-start'>
                        <Image
                            src='/image/tick-circle.svg'
                            alt='#'
                            width={20}
                            height={20}
                        />
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-xl font-bold text-[#001230]'> {list.title}</h2>
                            <p className='text-sm font-normal text-gray-600'>{list.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/*form*/}
            <div className='flex items-center justify-center'>
                <FormLogin/>
            </div>
        </div>
    )
}

export default Login