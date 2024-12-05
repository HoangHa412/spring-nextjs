import React, {FC, useState} from "react";
import Image from "next/image";
import Link from "next/link";

const MenuList = [
    {icon: '/image/Chart.svg', name: 'Dashboard1', href: "/dashboard", icon1: '/image/Chart1.svg'},
    {icon: '/image/Chart.svg', name: 'Dashboard2', href: "/welcome", icon1: '/image/Chart1.svg'},
    {icon: '/image/Chart.svg', name: 'Dashboard3', href: "/welcome", icon1: '/image/Chart1.svg'},
    {icon: '/image/Chart.svg', name: 'Dashboard4', href: "/welcome", icon1: '/image/Chart1.svg'},
    {icon: '/image/Chart.svg', name: 'Dashboard5', href: "/welcome", icon1: '/image/Chart1.svg'},
    {icon: '/image/Chart.svg', name: 'Dashboard6', href: "/welcome", icon1: '/image/Chart1.svg'},
    {icon: '/image/Chart.svg', name: 'Dashboard7', href: "/welcome", icon1: '/image/Chart1.svg'},
]

const LeftSide: FC = () => {
    const [activeIndex, setActiveIndex] = useState({
        menu: -1,  // Trạng thái cho nhóm Menu
        others: -1 // Trạng thái cho nhóm Others
    });

    const handleMenuClick = (index: number) => {
        setActiveIndex((prev) => ({...prev, menu: index}));
    };

    return (
        <div className="fixed top-0 left-0 z-10">
            {/* Sidebar */}
            <div
                className='bg-[#F1F2F7] h-screen w-[240px] border-r'>
                {/* Sidebar content */}
                <div className="flex flex-col items-center justify-center">
                    <div className="border-b h-[60px] flex items-center justify-center w-full  px-4 gap-3">
                        <div className='w-7 h-7 rounded-full bg-[#5A67BA] flex items-center justify-center'>
                            <span className='text-white text-sm font-bold'>T</span>
                        </div>
                        <Link href='/welcome'>
                            <span className='text-sm font-bold text-[#5A67BA]'>My DashBoard</span>
                        </Link>
                    </div>
                    <div className='mt-5 w-full max-w-[200px] flex flex-col gap-2'>
                        <h3 className='text-sm text-gray-600 px-[27px] '>Menu</h3>
                        {MenuList.slice(0, 4).map((menu, index) => (
                            <div
                                key={index}
                                className={`flex gap-3 cursor-pointer px-[27px] h-9 rounded-8 items-center ${
                                    activeIndex.menu === index ? 'bg-gray-200 text-[#5A67BA]' : 'text-[#273240]'
                                }`}
                                onClick={() => handleMenuClick(index)}
                            >
                                <Image
                                    src={activeIndex.menu === index ? (menu.icon || '') : (menu.icon1 || '')}
                                    alt='icon'
                                    width={20}
                                    height={20}
                                />
                                <Link href={menu.href}>
                                    <span className='text-sm font-medium'>{menu.name}</span>
                                </Link>
                            </div>
                        ))}
                        <h3 className='text-sm text-gray-600 px-[27px] mt-2'>Other</h3>
                        {MenuList.slice(4, 7).map((menu, index) => (
                            <div
                                key={index + 3} // Adjusting index for uniqueness
                                className={`flex gap-3 cursor-pointer px-[27px] h-9 rounded-8 items-center ${
                                    activeIndex.menu === index + 4 ? 'bg-gray-200 text-[#5A67BA]' : 'text-[#273240]'
                                }`}
                                onClick={() => handleMenuClick(index + 4)}
                            >
                                <Image
                                    src={activeIndex.menu === index + 4 ? (menu.icon || '') : (menu.icon1 || '')}
                                    alt='icon'
                                    width={20}
                                    height={20}
                                />
                                <Link href={menu.href}>
                                    <span className='text-sm font-medium'>{menu.name}</span>
                                </Link>
                            </div>
                        ))}
                    </div>


                    {/* Add more sidebar items here */}
                </div>
            </div>
        </div>
    );
}

export default LeftSide