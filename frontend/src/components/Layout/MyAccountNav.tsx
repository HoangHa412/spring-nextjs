'use client'
import React, { FC, Fragment } from 'react'
import { usePathname } from 'next/navigation'
import type { MenuItem } from '@/types'
import NavLink from "@/components/Atoms/NavLink";
import NavPopup from "@/components/Atoms/NavPopup";
import MyAccountPopUp from "@/components/Layout/MyAccountPopUp";

const NavMenu: FC = () => {
    const pathname = usePathname()

    const menu: MenuItem[] = [
        {
            key: 'My Account',
            label: 'My Account',
            children: <MyAccountPopUp />
        },
    ]

    const isActive = (key: string) => {
        const pathSegments = pathname.split('/').filter(Boolean)
        return pathSegments.some((segment) => segment === key)
    }

    return (
        <div className='hidden lg:flex h-full'>
            {menu.map((item, i) => (
                <Fragment key={i}>
                    {item.href && (
                        <NavLink path={item.href} active={isActive(item.key)}>
              {/*<span className='text-[10px] text-[#404D64] leading-[14px] lg:text-xs 2xl:text-base'>*/}
                {item.label}
              {/*</span>*/}
                        </NavLink>
                    )}
                    {item.children && (
                        <NavPopup active={isActive(item.key)} title={item.label}>
                            {item.children}
                        </NavPopup>
                    )}
                </Fragment>
            ))}
        </div>
    )
}
export default NavMenu
