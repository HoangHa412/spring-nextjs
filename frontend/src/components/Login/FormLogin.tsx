import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const FormLogin =() =>{
    return (
        <div className='flex flex-col rounded-16 border w-[500px] p-6 gap-5 border-[#C9D8DF] bg-[#F9FBFE] shadow-xl'>
            <h1 className='text-left font-bold text-2xl'>Welcome back</h1>
            {/*Login with*/}
            <div className='flex justify-between'>
                <Link href='#' className='flex gap-2 items-center rounded-8 border py-2 px-5'>
                    <Image
                        src='/image/google logo (Community).svg'
                        alt='#'
                        width={20}
                        height={20}
                    />
                    <h2 className='text-base text-black font-normal'>Log in with Google</h2>
                </Link>
                <Link href='#' className='flex gap-2 items-center rounded-8 border py-2 px-5'>
                    <Image
                        src='/image/github.svg'
                        alt='#'
                        width={20}
                        height={20}
                    />
                    <h2 className='text-base text-black font-normal'>Log in with Github</h2>
                </Link>
            </div>

            <div className='flex justify-between items-center'>
                <div className='w-full h-[1px] max-w-[200px] border'/>
                <span className='text-gray-500 text-base'>or</span>
                <div className='w-full h-[1px] max-w-[200px] border'/>
            </div>

            <form
                action='#'
                method='POST'
                className='flex flex-col gap-6'
            >
                {/*Username*/}
                <div className='flex flex-col w-auto gap-2'>
                    <label
                        htmlFor='userName'
                        className='text-sm leading-[18px] text-[#001230] font-semibold'
                    >
                        Username <span className='text-red-600 text-xs font-medium'>*</span>
                    </label>
                    <input
                        type='text'
                        placeholder='Enter your username'
                        className='h-[40px] border rounded-8 px-3 py-2 border-[#CCD0D5]'
                    />
                </div>
                {/*Password*/}
                <div className='flex flex-col w-auto gap-2'>
                    <label
                        htmlFor='userName'
                        className='text-sm leading-[18px] text-[#001230] font-semibold'
                    >
                        Password <span className='text-red-600 text-xs font-medium'>*</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter your password'
                        className='h-[40px] border rounded-8 px-3 py-2 border-[#CCD0D5]'
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <label htmlFor='remember' className='flex items-center'>
                        <input id='remember' aria-describedby='remember' type='checkbox'
                               className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'/>
                        <span className='text-gray-500 ml-1 text-sm'>Remember me</span>
                    </label>
                    <Link href='#'>
                        <span
                            className='text-sky-600 text-sm font-medium hover:underline text-right flex'>Forget password?</span>
                    </Link>
                </div>
                {/*button*/}
                <div className='flex justify-center items-center '>
                    <Link href='/welcome'>
                        <button
                            className='h-[40px] w-full  font-semibold  flex px-10 rounded-8 items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white'>
                            Sign in to your account
                        </button>
                    </Link>
                </div>
                <h3 className='text-sm text-gray-500'>Don&#39;t have an account yet?
                    <Link href='#'>
                        <span className='text-sky-800 font-bold hover:underline'>Sign up here</span>
                    </Link>
                </h3>
            </form>
        </div>
    )
}

export default FormLogin