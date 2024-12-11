'use client'
import React, { useState } from "react";
import { ResetPass } from "@/types";
import AuthService from "@/services/auth";
import {useParams, useRouter} from "next/navigation";

const FormReset: React.FC = () => {
    const tokens = useParams();
    const router = useRouter();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState<ResetPass>({
        token: tokens,
        password: '',
        cfPassword: ''
    });

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.password) {
            newErrors.password = 'Password is required';
        } else if (!validPass(form.password)) {
            newErrors.password =
                'Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        }

        if (form.cfPassword !== form.password) {
            newErrors.cfPassword = 'Confirm password does not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await AuthService.ResetPassword(form);
            setForm({
                token: null,
                password: '',
                cfPassword: ''
            });
            await router.push('/login');
        } catch (err) {
            const errorMessage =
                (err as { response?: { data?: { message?: string } } }).response?.data?.message ||
                'An unexpected error occurred. Please try again.';
            setErrors({ general: errorMessage });
        }
    };

    const validPass = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    return (
        <div className="flex flex-col rounded-16 border w-full  p-6 gap-5 border-[#C9D8DF] bg-[#F9FBFE]">
            <h1 className="font-bold text-3xl text-center">Reset your password</h1>
            <span className="text-center font-normal text-base">
                Input your email address account to receive a reset link
            </span>
            {errors.general && (
                <div className="text-red-600 text-sm text-center mb-4">{errors.general}</div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-4">
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
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        placeholder="Enter your password"
                        className="h-[40px] border rounded-8 px-3 py-2 border-[#CCD0D5]"
                    />
                    {errors?.password && (
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
                        onChange={(e) => setForm({ ...form, cfPassword: e.target.value })}
                        placeholder="Confirm your password"
                        className="h-[40px] border rounded-8 px-3 py-2 border-[#CCD0D5]"
                    />
                    {errors?.cfPassword && (
                        <span className="text-red-600 text-xs">{errors.cfPassword}</span>
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
};

export default FormReset;
