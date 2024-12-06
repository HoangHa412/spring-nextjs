'use client';
import React, { useState } from "react";
import FormLogin from "@/components/Authentication/SignIn/FormLogin";
import Image from "next/image";
import '@/components/Authentication/index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInstance } from 'swiper/types';
import FormSignUp from "@/components/Authentication/SignUp/FormSignUp";
import 'swiper/css'
import FormForgot from "@/components/Authentication/ForgorPassword/FormForgot";

interface InforList {
    title: string;
    text: string;
}

const inforLists: InforList[] = [
    { title: 'Get started quickly', text: 'Integrate with developer-friendly APIs or choose low-code' },
    { title: 'Get started quickly', text: 'Integrate with developer-friendly APIs or choose low-code' },
    { title: 'Get started quickly', text: 'Integrate with developer-friendly APIs or choose low-code' },
];

const Login: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);

    const handleSignUpClick = () => swiperInstance?.slideTo(0);
    const handleSignInClick = () => swiperInstance?.slideTo(1);
    const handleForgotClick = () => swiperInstance?.slideTo(2);


    return (
        <div className="mx-auto w-full max-w-[1200px] flex flex-row gap-[165px] justify-center opacity-80">
            <div className="w-full max-w-[463px] flex flex-col gap-8 pt-4">
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-4xl text-[#001230] font-bold">Welcome to</h1>
                    <h1 className="text-4xl text-[#001230] font-bold">Dashboard for developer</h1>
                    <p className="text-base font-normal text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti dolorem, eaque,
                        error eveniet incidunt ipsam iure odit pariatur possimus quidem unde? Eligendi explicabo,
                        mollitia!
                    </p>
                </div>
                {inforLists.map((list, index) => (
                    <div key={index} className="flex gap-2 items-start">
                        <Image
                            src="/image/tick-circle.svg"
                            alt="#"
                            width={20}
                            height={20}
                            className='pt-1'
                        />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-xl font-bold text-[#001230]">{list.title}</h2>
                            <p className="text-sm font-normal text-gray-600">{list.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Swiper */}
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={setSwiperInstance}
                    className='w-full max-w-[500px] '
                    initialSlide={1}
                >
                    <SwiperSlide>
                        {/* Form Sign Up */}
                        <FormSignUp onSignInClick={handleSignInClick}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Form Login */}
                        <FormLogin  onSignUpClick={handleSignUpClick} onForgotPasswordClick={handleForgotClick} />
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Form Sign Up */}
                        <FormForgot onSignInClick={handleSignInClick}/>
                    </SwiperSlide>
                </Swiper>
        </div>
    );
};

export default Login;
