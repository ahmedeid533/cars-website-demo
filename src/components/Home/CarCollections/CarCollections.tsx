import { carCollections } from '@/mocks/carCollections'
import Link from 'next/link'
import './style.css'

const CarCollections = () => {
    return (
        <section className='custom-container1'>
            <div className={`grid grid-cols-2 items-center gap-4`}>
                {
                    carCollections.map((collection, index) => (
                        <Link
                            href={collection.path}
                            key={index}
                            className={`h-[20vh] lg:h-[30vh] w-full bg-no-repeat bg-cover bg-center overflow-hidden`}
                            style={{ backgroundImage: `url(${collection.image})` }}
                        >
                            <div className='bg-[#00000066] w-full  h-full flex justify-center custom-style'>
                                <div className='flex flex-col gap-5 items-center justify-end pb-10 text-center text-white'>
                                    <h2 className='text-2xl tracking-widest'>{collection.name}</h2>
                                    <p className='text-[#E1E1E1] uppercase text-sm font-light'>
                                        all collections
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default CarCollections