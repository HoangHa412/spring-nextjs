'use client'
import React, {useState} from 'react';
import AuthService from "@/services/auth";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {SignUp} from "@/types";


const FormSignUp: React.FC = () => {
    const router = useRouter();
    const [errors, seterrorss] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState<SignUp>({
        username: '',
        cfPassword: '',
        email: '',
        phone: '',
        password: ''
    });

    const validateForm = () => {
        const newerrorss: { [key: string]: string } = {};
        if (!form.username) newerrorss.username = 'Username is required';

        if (!form.email) {
            newerrorss.email = 'Email is required';
        } else if (!validateEmail(form.email)) {
            newerrorss.email = 'Email is not in correct format';
        }

        if (!form.password) {
            newerrorss.password = 'Password is required';
        } else if (!validatePassword(form.password)) {
            newerrorss.password = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        }

        if (!form.cfPassword) {
            newerrorss.cfPassword = 'Confirm Password is required';
        } else if (form.cfPassword !== form.password) {
            newerrorss.cfPassword = 'Confirm Password does not match';
        }

        seterrorss(newerrorss);
        return Object.keys(newerrorss).length === 0;
    };

    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            await AuthService.SignUp(form);
            setForm({
                username: '',
                password: '',
                cfPassword: '',
                email: '',
                phone: ''
            });
            router.push('');
        } catch (err) {
            const errorMessage =
                (err as { response?: { data?: { message?: string } } }).response?.data?.message ||
                'An unexpected error occurred. Please try again.';
            seterrorss({general: errorMessage});
        }
    };

    return (
        <div className="flex flex-col rounded-16 border w-full p-6 gap-5 border-[#C9D8DF] bg-[#F9FBFE] ">
            <h1 className="text-left font-bold text-2xl">Do you want to Sign Up?</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
            >
                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm leading-[18px] text-[#001230] font-semibold">
                        Email <span className="text-red-600 text-xs font-medium">*</span>
                    </label>
                    <input
                        type="email"
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
                </div>

                {/* Username */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="text-sm leading-[18px] text-[#001230] font-semibold">
                        Username <span className="text-red-600 text-xs font-medium">*</span>
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={form.username}
                        onChange={(e) => setForm({...form, username: e.target.value})}
                        placeholder="Enter your username"
                        className="h-[40px] border rounded-8 px-3 py-2 border-[#CCD0D5]"
                    />
                    {errors.username && (
                        <span className="text-red-600 text-xs">{errors.username}</span>
                    )}
                    {errors.general && (
                        <span className="text-red-600 text-xs">{errors.general}</span>
                    )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm leading-[18px] text-[#001230] font-semibold">
                        Phone
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        placeholder="Enter your phone number"
                        className="h-[40px] border rounded-8 px-3 py-2 border-[#CCD0D5]"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm leading-[18px] text-[#001230] font-semibold">
                        Password <span className="text-red-600 text-xs font-medium">*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={(e) => setForm({...form, password: e.target.value})}
                        placeholder="Enter your password"
                        className="h-[40px] border rounded-8 px-3 py-2 border-[#CCD0D5]"
                    />
                    {errors.password && (
                        <span className="text-red-600 text-xs">{errors.password}</span>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="cfPassword" className="text-sm leading-[18px] text-[#001230] font-semibold">
                        Confirm Password <span className="text-red-600 text-xs font-medium">*</span>
                    </label>
                    <input
                        type="password"
                        id="cfPassword"
                        name="cfPassword"
                        value={form.cfPassword}
                        onChange={(e) => setForm({...form, cfPassword: e.target.value})}
                        placeholder="Confirm your password"
                        className="h-[40px] border rounded-8 px-3 py-2 border-[#CCD0D5]"
                    />
                    {errors.cfPassword && (
                        <span className="text-red-600 text-xs">{errors.cfPassword}</span>
                    )}
                </div>

                {/* Button */}
                <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        className="h-[40px] w-full font-semibold flex rounded-8 items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white"
                    >
                        Sign Up
                    </button>
                </div>

                <h3 className="text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link
                        href='/login' passHref
                    >
                        <span
                            className="text-sky-800 font-bold hover:underline cursor-pointer"
                        >
                            Sign in here
                        </span>
                    </Link>
                </h3>
            </form>
        </div>
    );
};

export default FormSignUp;
