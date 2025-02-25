import Image from 'next/image'
import React from 'react'

const SocialMediaBtns = () => {
    return (
        <>
            <button className="w-full rounded capitaize text-custom-black bg-white border border-[#E2E8F0] py-3 flex flex-row items-center gap-3 justify-center relative">
                <Image src={'/auth/gmail.svg'} alt='gmail' width={20} height={20} />
                <span>Sign in With Gmail</span>
            </button>

            <button className="w-full rounded capitaize text-white bg-black py-3 flex flex-row items-center gap-3 justify-center relative">
                <Image src={'/auth/apple.svg'} alt='apple' width={20} height={20} />
                <span>Sign in With Apple</span>
            </button>

            <button className="w-full rounded capitaize text-white bg-[#1877F2] py-3 flex flex-row items-center gap-3 justify-center relative">
                <Image src={'/auth/facebook.svg'} alt='facebook' width={20} height={20} />
                <span>Sign in With Facebook</span>
            </button>
        </>
    )
}

export default SocialMediaBtns
