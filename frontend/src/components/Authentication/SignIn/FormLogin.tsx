import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import AuthService from "@/services/auth";
import {useRouter} from "next/navigation";


interface Login {
    username: string
    password: string
}

interface FormLoginProps {
    onSignUpClick: () => void;
    onForgotPasswordClick: () => void;
}

const FormLogin: React.FC<FormLoginProps> = ({onSignUpClick, onForgotPasswordClick}) => {
    const router = useRouter();
    const [error, setError] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [form, setForm] = useState<Login>({
        username: '',
        password: '',
    });

    useEffect(() => {
        const savedRefreshToken = localStorage.getItem('refreshToken');
        if (savedRefreshToken) {
            setForm((prev) => ({...prev, rememberMe: true}));
            handleRefreshToken(savedRefreshToken);
        }
    }, []);

    const handleRefreshToken = async (savedRefreshToken: string) => {
        try {
            await AuthService.refreshToken(savedRefreshToken).then((response) => {
                if (response.accessToken) {
                    sessionStorage.setItem('token', response.accessToken); // Lưu vào sessionStorage
                } else {
                    console.error('Failed to refresh token');
                }
            });
        } catch (error) {
            console.error("Failed to refresh token: ", error);
        }
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.username || !form.password) {
            setError('Please enter both username and password')
        }

        try {
            await AuthService.login(form)
                .then((response) => {
                    if (response.accessToken && response.refreshToken) {
                        sessionStorage.setItem('token', response.accessToken)

                        if (rememberMe) {
                            localStorage.setItem('refreshToken', response.refreshToken)
                        } else {
                            localStorage.removeItem('refreshToken')
                        }
                    }
                })
            setForm({
                username: '',
                password: '',
            })
            setError('')
            await router.push('/welcome');
        } catch (error) {
            console.error("Failed to auth: ", error)
            setError('Username or password is incorrect')
        }
    }
    return (
        <div
            className='flex flex-col rounded-16 border w-full max-w-[500px] p-6 gap-5 border-[#C9D8DF] bg-[#F9FBFE]'>
            <h1 className='text-left font-bold text-2xl'>Welcome back</h1>
            {/*Login with*/}
            <div className='flex justify-between'>
                <Link href='#' className='flex gap-2 items-center rounded-8 border py-2 px-5'>
                    <Image
                        src='/image/google logo (Community).svg'
                        alt='#'
                        width={20}
                        height={20}
                    />
                    <h2 className='text-base text-black font-normal'>Log in with Google</h2>
                </Link>
                <Link href='#' className='flex gap-2 items-center rounded-8 border py-2 px-5'>
                    <Image
                        src='/image/github.svg'
                        alt='#'
                        width={20}
                        height={20}
                    />
                    <h2 className='text-base text-black font-normal'>Log in with Github</h2>
                </Link>
            </div>

            <div className='flex justify-between items-center'>
                <div className='w-full h-[1px] max-w-[200px] border'/>
                <span className='text-gray-500 text-base'>or</span>
                <div className='w-full h-[1px] max-w-[200px] border'/>
            </div>

            <form
                action='#'
                method='POST'
                onSubmit={handleSubmit}
                className='flex flex-col gap-6'
            >
                {/*Username*/}
                <div className='flex flex-col gap-2'>
                    <label
                        htmlFor='userName'
                        className='text-sm leading-[18px] text-[#001230] font-semibold'
                    >
                        Username <span className='text-red-600 text-xs font-medium'>*</span>
                    </label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        value={form.username}
                        onChange={(e) => setForm({...form, username: e.target.value})}
                        placeholder='Enter your username'
                        className='h-[40px] border rounded-8 px-3 py-2 border-[#CCD0D5]'
                    />
                </div>
                {/*Password*/}
                <div className='flex flex-col w-full gap-2'>
                    <label
                        htmlFor='userName'
                        className='text-sm leading-[18px] text-[#001230] font-semibold'
                    >
                        Password <span className='text-red-600 text-xs font-medium'>*</span>
                    </label>
                    <div className='w-full relative'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id='password'
                            name='password'
                            value={form.password}
                            onChange={(e) => setForm({...form, password: e.target.value})}
                            placeholder='Enter your password'
                            className='h-[40px] w-full border rounded-8 px-3 py-2 border-[#CCD0D5]'
                        />
                        <Image
                            src={showPassword ? '../image/eye-password-show-svgrepo-com.svg' : '../image/eye-password-hide-svgrepo-com.svg'}
                            alt='icon'
                            width={20}
                            height={20}
                            onClick={handleShowPassword}
                            className='absolute right-3 top-1/2 transform -translate-y-1/2'
                        />
                    </div>
                </div>
                {error && (
                    <span className='text-red-600 text-sm'>
                        {error}
                    </span>)}

                {/*remember me and forget*/}
                <div className='flex justify-between items-center'>
                    <label htmlFor='remember' className='flex items-center'>
                        <input id='remember' aria-describedby='remember' type='checkbox'
                               onClick={() => {
                                   setRememberMe(!rememberMe)
                               }}
                               className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'/>
                        <span className='text-gray-500 ml-1 text-sm'>Remember me</span>
                    </label>
                        <span
                            className='text-sky-600 text-sm font-medium hover:underline text-right cursor-pointer'
                            onClick={onForgotPasswordClick}>Forget password?</span>
                </div>

                {/*button*/}
                <div className='flex justify-center items-center '>
                    <button
                        type='submit'
                        className='h-[40px] w-full  font-semibold  flex  rounded-8 items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white'>
                        Sign in to your account
                    </button>
                </div>
                <h3 className='text-sm text-gray-500'>Don&#39;t have an account yet?
                        <span className='text-sky-800 font-bold hover:underline cursor-pointer'
                              onClick={onSignUpClick}>Sign up here</span>
                </h3>
            </form>
        </div>
    )
}

export default FormLogin