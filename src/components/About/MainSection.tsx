import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

const MainSection = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-5'>
            <div className='flex flex-col gap-4 w-full lg:w-[80%]'>
                <h2 className='text-3xl font-bold flex items-center gap-2'>
                    <span>About</span>
                    <span className='text-custom-blue'>Auto Parts</span>
                </h2>
                <p className='text-xs sm:text-sm text-[#333]'>
                    Auto Parts, with a rich legacy spanning 32 years, stands as
                    a venerable online destination for automotive enthusiasts seeking a
                    diverse range of high-quality vehicle components.
                </p>
                <p className='text-xs sm:text-sm text-[#333]'>
                    Since its inception, Mobex Auto Parts has evolved into a trusted
                    name within the automotive industry, earning a reputation for its
                    expansive inventory, commitment to quality, and unparalleled
                    customer service.
                </p>
                <p className='text-xs sm:text-sm text-[#333]'>
                    All components featured in their inventory undergo rigorous quality
                    checks to meet or exceed industry standards, instilling confidence
                    in customers regarding the reliability of their purchases.
                </p>
                <div className='flex items-start'>
                    <Link href={'#'} className='text-white bg-custom-blue rounded py-4 px-8 font-bold flex items-center gap-2'>
                        <span>Contact with Staff</span>
                        <ArrowRightAltIcon />
                    </Link>
                </div>
            </div>
            <div className='rounded overflow-hidden'>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/FjileRn1Ykw" title="Free In-Store and Curbside Pickup | O&#39;Reilly Auto Parts" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default MainSection
