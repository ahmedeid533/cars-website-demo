import { profileLinks } from '@/mocks/profileLinks'
import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image';

const Profile = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
                <h3 className='font-bold text-custom-black'>My Account</h3>
                <div className='flex flex-col gap-4 items-center text-center'>
                    <Link
                        href={'/login'}
                        className='w-full bg-custom-blue text-white py-3 rounded'
                    >Sign in</Link>
                    <p className='flex flex-row items-center gap-2'>
                        <span className='text-custom-gray'>New Customer?</span>
                        <Link href={'/signin'} className='text-custom-blue'>Sign Up</Link>
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {
                    profileLinks.map((profileLink, index) => (
                        <Link
                            key={index}
                            href={profileLink.path}
                            className='w-full flex pb-3 flex-row items-center justify-between border-b border-b-[#525252]'
                        >
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={profileLink.icon} alt={profileLink.title} width={20} height={20} />
                                <h4 className='capitalize text-custom-black'>{profileLink.title}</h4>
                            </div>
                            <ArrowRightAltIcon className='text-[#525252] ' />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Profile