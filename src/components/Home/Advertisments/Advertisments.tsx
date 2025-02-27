import React from 'react'
import MajiorAdv from './MajiorAdv'
import Link from 'next/link'
import { BannerFooter } from '@/types'
import { useLocale } from 'next-intl'

const Advertisments = ({ bannerFooter }: { bannerFooter: BannerFooter[] }) => {
  const locale = useLocale()
  return (
    <section className='custom-container1 py-10'>
      <div className='items-center gap-5 grid grid-cols-1 lg:grid-cols-4'>
        <div className='flex flex-row lg:flex-col gap-3'>
          <MajiorAdv
            backgroundImage={bannerFooter[0].image_url}
            title={bannerFooter[0].title}
          />
          <MajiorAdv
            backgroundImage={bannerFooter[1].image_url}
            title={bannerFooter[1].title}
          />
        </div>
        <div
          className='col-span-1 lg:col-span-2 bg-cover bg-no-repeat bg-center h-[258px] lg:h-[428.3px]'
          style={{ backgroundImage: `url(${bannerFooter[2].image_url})` }}
        >
          <div className='flex flex-col justify-center items-center gap-4 bg-[#00000066] h-full text-white'>
            <h3 className='w-2/3 text-3xl lg:text-5xl text-center leading-[1.2]'>
              {bannerFooter[2].title}
            </h3>
            <Link
              href={'#'}
              className='bg-custom-blue px-10 py-3 rounded font-bold text-white text-sm'
            >
              {locale === 'en' ? 'SHOP NOW' : 'تسوق الآن'}
            </Link>
          </div>
        </div>
        <div className='flex flex-row lg:flex-col gap-3'>
          <MajiorAdv
            backgroundImage={bannerFooter[3].image_url}
            title={bannerFooter[3].title}
          />
          <MajiorAdv
            backgroundImage={bannerFooter[4].image_url}
            title={bannerFooter[4].title}
          />
        </div>
      </div>
    </section>
  )
}

export default Advertisments
