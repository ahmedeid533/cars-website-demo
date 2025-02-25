"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Verification = () => {
    const router = useRouter()
    return (
        <div className='border border-transparent md:border-black rounded-md p-10 mt-10 flex flex-col gap-5'>
            <div>
                <h2 className='text-center text-[#181818] font-bold text-xl sm:text-2xl mb-2'>Enter verification code</h2>
                <p className="text-[#4F4F4F] text-center text-md sm:text-lg">Enter code that we have sent to your email your...@domain.com</p>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    router.push('/login')
                }}
                className="w-full flex flex-col gap-4"
            >
                <div className="grid grid-cols-4 justify-center items-center gap-1 md:gap-3 mt-16">
                    {[...Array(4)].map((_, index) => (
                        <input
                            key={index}
                            type="number"
                            maxLength={1}
                            className="bg-[#F3F8FF] p-2 w-full h-[70px] rounded text-center text-[#181818] text-4xl border border-[#D9D9D9]"
                        />
                    ))}
                </div>
                <button className="w-full rounded text-white bg-custom-blue py-3 my-3">
                    Submit
                </button>
            </form>
            <p className="text-sm sm:text-md text-center md:text-start">
                By creating an account, you agree with our <Link href={'#'} className="text-custom-blue cursor-pointer">Terms and Conditions</Link> and <Link href={'#'} className="text-custom-blue cursor-pointer">Privacy Statement.</Link>
            </p>
        </div>
    )
}

export default Verification