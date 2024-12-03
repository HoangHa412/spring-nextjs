import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoVnpt from '@/assets/logo-horizontal.svg'

const Logo: FC = () => {
  return (
    <div className='flex lg:flex-1'>
      <Link href='/' className='-m-1.5 p-1.5'>
        <span className='sr-only'>HNSH TJ</span>
        <div className='relative w-[109px] md:w-[90px] lg:w-[120px] 2xl:w-[168px] aspect-[2.71]'>
          <Image
            src={LogoVnpt}
            alt='VNPT SI'
            style={{ cursor: 'pointer', objectFit: 'cover' }}
            fill
          />
        </div>
      </Link>
    </div>
  )
}

export default Logo
