import React, {FC} from "react";
import Image from "next/image";
import Link from "next/link";

const LeftSide: FC = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className='bg-gray-800 text-white
                    fixed h-screen transition-all
                    duration-300 group w-20 hover:w-64 overflow-hidden'>
                {/* Sidebar content */}
                <div className="flex flex-col items-center ">
                    <div className="mt-4 flex items-center justify-center w-full group-hover:justify-start px-4 gap-4">
                        <Image
                            src='/image/user.svg'
                            alt='#'
                            width={24}
                            height={24}
                        />
                        <Link href='/about'>
                            <span className='text-base font-normal hidden group-hover:inline'>User</span>
                        </Link>
                    </div>
                    <div className="mt-4 flex items-center justify-center w-full group-hover:justify-start px-4 gap-4">
                        <Image
                            src='/image/user-add.svg'
                            alt='#'
                            width={24}
                            height={24}
                        />
                        <Link href='/abouts'>
                            <span className='text-base font-normal hidden group-hover:inline'>Create User</span>
                        </Link>
                    </div>
                    {/* Add more sidebar items here */}
                </div>
            </div>
        </div>
    );
}

export default LeftSide