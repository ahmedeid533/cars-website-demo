import { useLocale } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const Links = ({ category }) => {
	const locale = useLocale();
	return (
		<div className="flex items-center text-[#8C8C8C] text-sm">
			<Link className="px-4 " href={`/${locale}`}>
				Home
			</Link>
			<Link className="px-4 border-r border-r-[#8C8C8C]" href={"#"}>
				All Products
			</Link>
			<Link className="px-4 border-r border-r-[#8C8C8C]" href={"#"}>
				{category?.main?.name}
			</Link>
			<Link className="px-4 border-r border-r-[#8C8C8C]" href={"#"}>
				{category?.sub?.name}
			</Link>
		</div>
	);
};

export default Links
