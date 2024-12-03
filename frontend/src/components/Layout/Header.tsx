'use client'
import React, { FC } from 'react'
import Container from "@/components/Atoms/Containers";
import Logo from "@/components/Atoms/Logo";

const Header: FC = () => {

  return (
    <header className='bg-white sticky top-0 z-40 h-[46px] 2xl:h-[64px] shadow-xl'>
      <Container
        tag={'nav'}
        aria-label='Global'
        className='flex items-center justify-between h-full'
      >
        <Logo />
      </Container>
    </header>
  )
}

export default Header
