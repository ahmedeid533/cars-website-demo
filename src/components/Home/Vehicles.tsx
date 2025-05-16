"use client"
import { vehicles } from '@/mocks/vehicles'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Vehicles = () => {
    const pathname = usePathname()
    const locale = useLocale() as 'en' | 'ar'
    return (
        <section className='custom-container2 pb-5'>
            <div className={`grid grid-cols-${vehicles.length} items-center gap-1 md:gap-5 `}>
                {
                    vehicles.map((vehicle, index) => (
                        <Link href={vehicle.path} key={index} className='flex flex-col items-center gap-3 h-[15vh] md:h-[20vh] text-center cursor-pointer'>
                            <div className={`h-[50px] w-[50px] md:h-[100px] md:w-[100px] p-1 rounded-full flex items-center justify-center  ${pathname === `/${locale}${vehicle.path}` ? "bg-custom-blue" : "bg-[#D9D9D9]"}  `}>
                                <Image src={vehicle.image} alt={vehicle.name[locale]} width={100} height={100} className='p-1 object-contain' />
                            </div>
                            <h5 className='font-normal lg:font-bold text-custom-black text-sm'>{vehicle.name[locale]}</h5>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default Vehicles