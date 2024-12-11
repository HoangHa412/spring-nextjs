import React from "react";
import Image from "next/image";

interface OderProps {
    img: string;
    title: string;
    purchases: string;
}

const onderItems: OderProps[] = [
    { img: "/image/Group 299.svg", title: "Fresh Salad Bowl", purchases: "IDR 45.000" },
    { img: "/image/Group 299.svg", title: "Fresh Salad Bowl", purchases: "IDR 45.000" },
    { img: "/image/Group 299.svg", title: "Fresh Salad Bowl", purchases: "IDR 45.000" },
    { img: "/image/Group 299.svg", title: "Fresh Salad Bowl", purchases: "IDR 45.000" },
];

const MostOrder: React.FC = () => {
    return (
        <div className="bg-white rounded-16 shadow-xl p-6 w-full flex flex-col gap-7">
            <div>
                <h1>Most Ordered Food</h1>
                <span className="text-xs font-light text-gray-600">
                    Adipiscing elit, sed do eiusmod tempor
                </span>
            </div>
            <div className="flex flex-col gap-5">
                {onderItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex justify-between items-center p-1 ${
                            index !== onderItems.length - 1 ? "border-b" : ""
                        }`}
                    >
                        <div className="flex gap-4 items-center">
                            <Image src={item.img} alt={item.title} width={48} height={48} />
                            <span className="font-normal text-base text-[#273240]">{item.title}</span>
                        </div>
                        <span className="text-xs font-light text-gray-600">{item.purchases}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostOrder;
