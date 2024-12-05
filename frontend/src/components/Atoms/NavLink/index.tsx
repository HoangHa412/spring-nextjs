import React, { FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Link from 'next/link'

interface Props extends PropsWithChildren {
  path: string
  active: boolean
}
const NavLink: FC<Props> = ({ path, active, children }) => {
  const baseClasses =
    'text-subtle h-full flex items-center px-2 2xl:px-4 pt-[3px] border-b-[3px] border-transparent transition-all duration-300 '
  const hoverClasses = 'hover:text-primary hover:font-semibold'
  const activeClasses = clsx({
    'text-primary font-semibold border-primary': active
  })

  console.log(active)

  return (
    <Link
      href={path}
      passHref
      className={twMerge(baseClasses, hoverClasses, activeClasses)}
    >
      {children}
    </Link>
  )
}
export default NavLink
