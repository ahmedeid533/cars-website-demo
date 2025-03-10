import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

const MainSection = () => {
    return (
        <div className='items-start gap-5 grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col gap-4 w-full lg:w-[80%]'>
                <h2 className='flex items-center gap-2 font-bold text-3xl'>
                    <span>About</span>
                    <span className='text-custom-blue'>3RABITK</span>
                </h2>
                <p className='text-[#333] text-xs sm:text-sm'>
                    3RABITK, with a rich legacy spanning 32 years, stands as
                    a venerable online destination for automotive enthusiasts seeking a
                    diverse range of high-quality vehicle components.
                </p>
                <p className='text-[#333] text-xs sm:text-sm'>
                    Since its inception, Mobex 3RABITK has evolved into a trusted
                    name within the automotive industry, earning a reputation for its
                    expansive inventory, commitment to quality, and unparalleled
                    customer service.
                </p>
                <p className='text-[#333] text-xs sm:text-sm'>
                    All components featured in their inventory undergo rigorous quality
                    checks to meet or exceed industry standards, instilling confidence
                    in customers regarding the reliability of their purchases.
                </p>
                <div className='flex items-start'>
                    <Link href={'#'} className='flex items-center gap-2 bg-custom-blue px-8 py-4 rounded font-bold text-white'>
                        <span>Contact with Staff</span>
                        <ArrowRightAltIcon />
                    </Link>
                </div>
            </div>
            <div className='rounded overflow-hidden'>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/FjileRn1Ykw" title="Free In-Store and Curbside Pickup | O&#39;Reilly 3RABITK" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default MainSection
