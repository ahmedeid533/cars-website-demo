import { contactDetails } from '@/mocks/contactDetails'
import { socialMedia } from '@/mocks/socialMedia'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactDetails = () => {
		const t = useTranslations("Contact");
	
    return (
		<section className="w-full rounded border border-[#E1E1E1] p-10">
			<div className="flex flex-col gap-5">
				<h2 className="text-xl font-bold">{t("Contact details")}</h2>
				<p className="text-sm text-custom-black">
					Etiam pharetra egestas interdum blandit viverra morbi
					consequat mi non bibendum egestas quam egestas nulla.
				</p>
				<div className="flex flex-col gap-10 mt-5">
					{contactDetails.map((contact, index) => (
						<div
							key={index}
							className="flex flex-row gap-5 items-start"
						>
							<Image
								src={contact.image}
								alt={t(contact.label)}
								width={20}
								height={20}
							/>
							<div className="flex flex-col gap-1">
								<h5 className="text-lg font-semibold">
									{t(contact.label)}
								</h5>
								<p className="flex flex-col gap-1 text-custom-black text-sm font-semibold">
									{contact.values.map((k, v) => (
										<span key={v}>
											{index == 0 ? t(k) : k}
										</span>
									))}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-5 mt-10">
					<h2 className="font-bold text-custom-black">
						{t("Follow Us")}
					</h2>
					<div className="flex w-full flex-row gap-10  pb-5">
						{socialMedia.map((key, index) => (
							<Link
								key={index}
								href={"#"}
								className="rounded-full bg-white  flex items-center justify-center"
							>
								<Image
									src={key}
									alt="social-media"
									width={15}
									height={15}
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactDetails
