'use client'
import Link from 'next/link'
import {redirect} from "next/navigation";
import {useEffect} from "react";

export default function NotFound() {
    useEffect(() =>{
    redirect(`/login`)
    },[])

    return (
        <div className='flex flex-col items-center justify-center h-screen w-full'>
            <h1 className='font-bold text-4xl'>Not Found</h1>
            <p>Could not find requested resource</p>
            <Link href='/login'>Return Login</Link>
        </div>
    )
}