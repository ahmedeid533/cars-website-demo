"use client"
import { vehicles } from '@/mocks/vehicles'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Vehicles = () => {
    const pathname = usePathname()
    return (
        <section className='custom-container2 pb-5'>
            <div className={`grid grid-cols-${vehicles.length} items-center gap-1 md:gap-5 `}>
                {
                    vehicles.map((vehicle, index) => (
                        <Link href={vehicle.path} key={index} className='flex flex-col items-center text-center gap-3 cursor-pointer h-[15vh] md:h-[20vh]'>
                            <div className={`h-[50px] w-[50px] md:h-[100px] md:w-[100px] p-1 rounded-full flex items-center justify-center  ${pathname === vehicle.path ? "bg-custom-blue" : "bg-[#D9D9D9]"}  `}>
                                <Image src={vehicle.image} alt={vehicle.name} width={100} height={100} className='object-contain p-1' />
                            </div>
                            <h5 className='text-custom-black font-normal lg:font-bold text-sm'>{vehicle.name}</h5>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default Vehicles