'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LangChangeModal from './LangChangeModal'
import CustomDrawer from './CustomDrawer/CustomDrawer'
import { usePathname } from 'next/navigation'
import { checkIsNotAuthPages } from '../../../global/isNotAuthPages'
import { useLocale } from 'next-intl'

const FirstPart = () => {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const isNotAuthPage = checkIsNotAuthPages(path)
  const locale = useLocale()
  return (
    <div className='flex flex-row items-center gap-3'>
      {isNotAuthPage && <CustomDrawer />}
      <Link href={'/'}>
        <Image src={'/logo.svg'} alt='logo' width={100} height={50} />
      </Link>
      <button
        className='hidden lg:flex flex-row items-center gap-2 p-2 border-[1px] border-custom-black rounded w-auto'
        onClick={() => setOpen(true)}
      >
        <Image src={'/localization.svg'} alt='logo' width={20} height={20} />
        <span className='text-[#3C3C3C]'>
          {locale === 'en' ? 'English' : 'العربية'}
        </span>
      </button>
      <LangChangeModal open={open} setOpen={setOpen} />
    </div>
  )
}

export default FirstPart
