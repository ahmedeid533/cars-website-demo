"use client"
import React from "react";
import Link from 'next/link';
import CustomInput from './CustomInput';
import CustomPasswordInput from './CustomPasswordInput';
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter()
    return (
        <>
            <h2 className='text-6xl font-bold text-custom-black text-cente uppercase'>welcome</h2>
            <div className='border border-transparent md:border-custom-black rounded px-10 py-5 w-full flex flex-col gap-5'>
                <div className="w-full text-center flex items-center justify-center">
                    <h5 className="text-[#111] w-full md:w-1/4 uppercase font-bold text-xl">Let{"'"}s get started!</h5>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        router.push('/')
                    }}
                    className="w-full flex flex-col gap-4"
                >
                    <h6 className='text-sm font-bold capitalize text-[#111]'>please login</h6>
                    <CustomInput label="Please enter your email *" type='email' placeholder='example@gmail.com' />
                    <div className='flex flex-col gap-1'>
                        <CustomPasswordInput label='Please enter your passowrd*' />
                        <h6 className="flex flex-row items-center w-full justify-end">
                            <Link href={'#'} className='text-custom-blue'>Forgot your password?</Link>
                        </h6>
                    </div>
                    <button className="w-full rounded text-white bg-custom-blue py-3 my-3">
                        Log in using our secure server
                    </button>
                    <p className="text-center">
                        <span className='text-sm text-[#111]'>Don{"'"}t have an account? </span>
                        <Link href={'/signin'} className='text-custom-blue'>Signin</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login
