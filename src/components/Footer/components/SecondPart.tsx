import { footerLinks } from '@/mocks/footerLinks'
import Link from 'next/link'
import React from 'react'
import PlatformLink from './PlatformLink';
import Image from 'next/image';

const SecondPart = () => {
  return (
    <div className='custom-container2 py-10'>

      <div className='flex flex-wrap justify-between items-center gap-y-10 w-full'>
        <div className='flex flex-col gap-5 w-full lg:w-1/3'>
          <div className='flex flex-col items-start gap-2'>
            <Link href={'/'}>
              <Image src={'/main-logo-2.png'} alt='logo' width={150} height={100} className='object-none' />
            </Link>
            <p className='font-[300] text-xs'>Receive pricing updates, shopping tips & more!</p>
          </div>
          <div className='hidden lg:flex flex-wrap items-start gap-20 w-full'>
            {
              footerLinks.slice(0, 2).map((list, index) => (
                <div key={index} className='flex flex-col gap-4'>
                  <h3 className='font-bold text-md'>{list.category}</h3>
                  <div className='flex flex-col gap-3 md:gap-6'>
                    {list.links.map((link, i) => (
                      <Link key={i} href={link.href} className='font-[200] text-sm'>{link.name}</Link>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='w-full lg:w-2/3'>
          <div className='lg:hidden flex justify-between items-start gap-20 mb-4 w-full'>
            {
              footerLinks.slice(0, 2).map((list, index) => (
                <div key={index} className='flex flex-col gap-4'>
                  <h3 className='font-bold text-md'>{list.category}</h3>
                  <div className='flex flex-col gap-3 md:gap-6'>
                    {list.links.map((link, i) => (
                      <Link key={i} href={link.href} className='font-[200] text-sm'>{link.name}</Link>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
          <div className='flex flex-wrap justify-between items-start gap-5 lg:gap-0 w-full'>
            {
              footerLinks.slice(2).map((list, index) => (
                <div key={index} className='flex flex-col gap-4'>
                  <h3 className='font-bold text-md'>{list.category}</h3>
                  <div className='flex flex-col gap-3 md:gap-6'>
                    {list.links.map((link, i) => (
                      <Link key={i} href={link.href} className='font-[200] text-sm'>{link.name}</Link>
                    ))}
                  </div>
                </div>
              ))
            }
            <div>
              <div className='flex flex-col gap-7'>
                <h3 className='font-bold text-md'>Our Mobile App</h3>
                <div className="items-center gap-4 grid grid-cols-2 lg:grid-cols-1">
                  <PlatformLink text1="Download on the" text2="Apple Store" imagePath={'/apple.svg'} />
                  <PlatformLink text1="Get in on" text2="Google Play" imagePath={'/googlePlay.svg'} />
                </div>
                <h3 className='font-bold text-md'>Connect With Us</h3>
                <div className='flex flex-row justify-between items-center w-full'>
                  <Link href={'#'}>
                    <Image src={'/facebook.svg'} alt='facebook' width={15} height={20} />
                  </Link>
                  <Link href={'#'}>
                    <Image src={'/twetter.svg'} alt='twetter' width={20} height={20} />
                  </Link>
                  <Link href={'#'}>
                    <Image src={'/instagram.svg'} alt='instagram' width={20} height={20} />
                  </Link>
                  <Link href={'#'}>
                    <Image src={'/linkedIn.svg'} alt='linkedIn' width={20} height={20} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondPart