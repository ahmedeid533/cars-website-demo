import Image from 'next/image'
import CustomTabPanel from './CustomTabPanel'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { SubCategory } from '@/types'
import { memo } from 'react'

interface ICustomItemsContainer {
  value: number
  name: string
  data: SubCategory[]
}
const CustomItemsContainer = ({ value, name, data }: ICustomItemsContainer) => {
console.log("data ==> ", data);
  const locale = useLocale()
  return (
		<div className="custom-container1 pt-5">
			<CustomTabPanel value={value} index={value}>
				<div className="justify-center items-center gap-x-3 gap-y-6 lg:gap-x-0 lg:gap-y-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					{(data && data?.length > 0) ? (
						data?.map((item, index) => (
							<Link
								title={item?.slug}
								href={`/category/${item?.slug}?category_id=${item?.parent_category!.id}&sub_category_id=${item?.id}`}
								key={index}
								className="flex flex-col items-center gap-1 w-full h-full"
							>
								<div className="flex px-4 h-[110px] md:h-[180px]">
									<Image
										src={item?.image_url ? item?.image_url : "/images/placeholder.png"}
										alt={
											item?.name[
												locale === "en" ? "en" : "ar"
											]
										}
										width={400}
										height={400}
										className="w-auto h-[110px] md:h-[180px] md:p-6 pb-0 object-contain"
									/>
								</div>
								<h6 className="text-xs text-center">
									{item?.name[locale === "en" ? "en" : "ar"]}
								</h6>
							</Link>
						))
					) : (
						<h2>Loading...</h2>
					)}
				</div>
			</CustomTabPanel>
		</div>
  );
}

export default memo(CustomItemsContainer)
