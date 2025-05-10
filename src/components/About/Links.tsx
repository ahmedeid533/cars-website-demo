import Image from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import { useLocale, useTranslations, } from 'next-intl';

const Links = () => {
	const t = useTranslations("about");
	const locale = useLocale();
    return (
		<div className="custom-container2 py-10">
			<div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
				<div
					className="rounded border border-[#D4DEE7] p-10 flex flex-col md:flex-row justify-center items-center gap-10 relative"
					style={{
						background:
							"linear-gradient(99.33deg, #FFFFFF 0%, #E9F3FB 100%)",
					}}
				>
					<Image
						src={"/about/join.svg"}
						alt="joun us"
						width={100}
						height={100}
					/>
					<div className="flex flex-col gap-1 items-center md:items-start">
						<h4 className="font-bold text-xl">
							{t("Join Our Team")}
						</h4>
						<p className="text-custom-gray text-sm mb-2">
							{t("Check out our traders page")}
						</p>
						<div className="flex items-center md:items-start">
							<Link
								target="_blank"
								href={"/trader"}
								className="text-white bg-custom-blue rounded p-2 flex items-center gap-2"
							>
								<span>{t("Read more")}</span>
								<ArrowRightAltIcon className={locale =="en"? "" :"rotate-180 transform"} />
							</Link>
						</div>
					</div>
				</div>
				{/* <div className='rounded border border-[#F0F0F0] bg-[#F0F0F0] p-10 flex flex-col md:flex-row items-center gap-10 relative' >
                    <Image src={'/about/learn.svg'} alt='joun us' width={100} height={100} />
                    <div className='flex flex-col gap-1 items-center md:items-start'>
                        <h4 className='font-bold text-xl'>Learn about Mobex Crew</h4>
                        <p className='text-custom-gray text-sm mb-2'>Check out our news coverage</p>
                        <div className='flex items-start'>
                            <Link target='_blank' href={'https://enovathemes.com/mobex/blog/'} className='text-white bg-custom-blue rounded p-2 flex items-center gap-2'>
                                <span>Read more</span>
                                <ArrowRightAltIcon />
                            </Link>
                        </div>
                    </div>
                </div> */}
			</div>
		</div>
	);
}

export default Links
