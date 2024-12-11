'use client'
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import AuthService from "@/services/auth";
import Image from "next/image";

interface FormForgot{
    email: string
}


const FormForgot: React.FC = () => {
    const router = useRouter();
    const [errors, seterrorss] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState<FormForgot>({
        email: '',
    })

    const validateForm = () => {
        const newerrorss: { [key: string]: string } = {};

        if (!form.email) {
            newerrorss.email = 'Email is required';
        } else if (!validateEmail(form.email)) {
            newerrorss.email = 'Email is not in correct format';
        }

        seterrorss(newerrorss);
        return Object.keys(newerrorss).length === 0;
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            await AuthService.ForgotPassword(form);
            setForm({
                email: '',
            });
            console.log('email successfully')
            await router.push('/login/forgotpass/sendsuccess');
        } catch (err) {
            const errorMessage =
                (err as { response?: { data?: { message?: string } } }).response?.data?.message ||
                'An unexpected error occurred. Please try again.';
            seterrorss({general: errorMessage});
        }
    };

    return (
            <div
                className="flex flex-col rounded-16 border w-full p-6 gap-5 border-[#C9D8DF] bg-[#F9FBFE]">
                <Image
                    src='/image/fi-rs-arrow-left.svg'
                    alt='icon'
                    width={24}
                    height={24}
                    className='cursor-pointer'
                />
                <h1 className=" font-bold text-3xl text-center">Reset your password</h1>
                <span
                    className='text-center font-normal text-base'>Input your email address account to receive a reset link</span>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 pt-4"
                >
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm leading-[18px] text-[#001230] font-semibold">
                            Email <span className="text-red-600 text-xs font-medium">*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            placeholder="Enter your email address"
                            className="h-[40px] border rounded-8 px-3 py-2 border-[#CCD0D5]"
                        />
                        {errors.email && (
                            <span className="text-red-600 text-xs">{errors.email}</span>
                        )}
                        {errors.general && (
                            <span className="text-red-600 text-xs">{errors.general}</span>
                        )}
                    </div>

                    {/* Button */}
                    <div className="flex justify-center items-center text-center">
                        <button
                            type="submit"
                            className="h-[40px] w-full font-semibold flex rounded-8 items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white"
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
    );
}

export default FormForgot;
