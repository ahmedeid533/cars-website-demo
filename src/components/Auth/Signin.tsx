"use client"
import { Divider } from '@mui/material'
import CustomInput from './CustomInput'
import CustomPasswordInput from './CustomPasswordInput'
import Link from 'next/link'
import SocialMediaBtns from './SocialMediaBtns'
import { useRouter } from 'next/navigation'

const SignIn = () => {
    const router = useRouter()
    return (
        <>
            <h2 className='text-2xl font-bold text-custom-black uppercase text-center'>account signup</h2>
            <div className='w-full flex flex-col gap-5 mt-5'>
                <h5 className="text-[#111] uppercase font-bold">Set User E-mail Address & Password</h5>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        router.push('/signin/verification')
                    }}
                    className="w-full flex flex-col gap-4"
                >
                    <CustomInput label="Frist Name *" type='text' placeholder='ex: John' />
                    <CustomInput label="Last Name *" type='text' placeholder='Ex: Doe' />
                    <CustomInput label="Please enter your email *" type='email' placeholder='example@gmail.com' />
                    <CustomPasswordInput label='Please enter your passowrd*' />
                    <CustomPasswordInput label='Please confirm your passowrd*' />
                    <CustomInput label="Location *" type='text' placeholder='Ex: London, England' />
                    <button className="w-full rounded uppercase text-white bg-custom-blue py-3 my-3">
                        Create Your Account
                    </button>
                    <Divider />
                    <p className='text-gray-500 text-center'>Or use one of these options</p>
                    <SocialMediaBtns />
                    <p className="text-center">
                        <span className='text-sm text-[#111]'>Already have your account? </span>
                        <Link href={'/login'} className='text-custom-blue'>Login</Link>
                    </p>
                    <p className="text-center text-sm">
                        <span className=' text-[#111]'>By creating an account you are agreeing to our </span>
                        <Link href={'#'} className='text-custom-blue'>Privacy policy and terms of use</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignIn
