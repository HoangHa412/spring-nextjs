'use client'
import React, { FC } from 'react'
import Image from "next/image";
import MyAccountNav from "@/components/Layout/MyAccountNav";



const Header: FC = () => {

  return (
    <header className=' border-b sticky bg-white top-0 h-[60px]'>
      <div className='pl-[270px] w-full h-full flex justify-between items-center'>
          {/*input*/}
          <div className='w-full max-w-[625px] relative'>
              <input
                  type='text'
                  placeholder='Search'
                  className='bg-[#F1F2F7] w-full rounded-8 h-[32px] text-sm px-4'
              />
              <Image
                  src='/image/Icon.svg'
                  alt='icon'
                  width={12}
                  height={12}
                  className='absolute right-4 top-1/2 transform -translate-y-1/2'
              />
          </div>
          {/*my account*/}
          <div className='w-full max-w-[220px] flex gap-2 items-center'>
              <div className='w-7 h-7 rounded-full bg-[#FFE6CC] flex items-center justify-center'>
                  <Image
                      src='/image/Emoticon.png'
                      alt='icon'
                      width={16}
                      height={13}
                  />
              </div>
              <MyAccountNav/>
          </div>
      </div>
    </header>
  )
}

export default Header
