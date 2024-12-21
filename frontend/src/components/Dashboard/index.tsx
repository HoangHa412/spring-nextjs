'use client'
import React from "react";
import Revenue from "@/components/Dashboard/Revenue";
import OderTime from "@/components/Dashboard/OderTime";
import YourRating from "@/components/Dashboard/YourRating";
import MostOrder from "@/components/Dashboard/MostOrder";
import Order from "@/components/Dashboard/Order";
import Section from "@/components/Dashboard/Section";



const Dashboard: React.FC = () => {
    return (
            <div className='flex flex-col gap-6'>
                <h1 className='text-xl font-semibold pl-1'>DashBoard</h1>
                <Section />
                <div className='flex gap-6'>
                    <Revenue/>
                    <OderTime/>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                    <YourRating/>
                    <MostOrder/>
                    <Order/>
                </div>
            </div>
    )
}
export default Dashboard
