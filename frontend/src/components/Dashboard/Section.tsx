import React from "react";
import Image from "next/image";

interface props{
    title: string;
    icon: string;
    total: string;
}

const SectionItems: props[]=[
    {title: "Total Sales", icon: "/image/Vector.svg", total:"$2,456"},
    {title: "Total Expenses", icon: "/image/Vector (1).svg", total:"$2,456"},
    {title: "Total Visitors", icon: "/image/Vector (2).svg", total:"$2,456"},
    {title: "Total Orders", icon: "/image/Vector (3).svg", total:"$2,456"},
]

const Section: React.FC = () =>{
    return(
        <div className='grid grid-cols-4 gap-4 '>
            {SectionItems.map((item, index) =>(
                <div key={index} className='bg-white rounded-16 shadow-xl p-7'>
                    <div className='flex gap-5'>
                        <Image src={item.icon} alt='' width={30} height={38}/>
                        <div className='flex flex-col gap-2'>
                            <span className='text-gray-600 text-xs font-light'>{item.title}</span>
                            <span className='text-2xl font-semibold'>{item.total}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Section;