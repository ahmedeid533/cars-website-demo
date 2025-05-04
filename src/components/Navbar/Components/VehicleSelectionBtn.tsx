'use client'
import Image from 'next/image'
import { useContext, useState } from 'react'
import VehicleSelectionModal from './VehicleSelectionModal'
import { CarContext } from '@/app/[locale]/context/CarContext'
import SavedSearchModal from './SavedSearchModal'
import { useLocale, useTranslations } from 'next-intl'
import { CarBrand } from '@/types'

const VehicleSelectionBtn = () => {
  const [hovered, setIsHovered] = useState(false)
  const [openCarSearchForm, setOpenCarSearchForm] = useState(false)
  const [openSavedSearch, setOpenSavedSearch] = useState(false)
  const carContext = useContext(CarContext)
	const t = useTranslations('Header')
	const locale = useLocale() as 'en' | 'ar'

  return (
		<>
			<button
				className={`
                    ${
						carContext?.cars.length === 0
							? "bg-custom-blue text-white "
							: "bg-[#6F88FF26] text-custom-blue "
					}
                    w-full rounded-md p-4 font-bold flex flex-row items-center justify-center gap-2 transition duration-300 hover:bg-[#6F88FF26] hover:text-custom-black`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() =>
					carContext?.cars.length === 0
						? setOpenCarSearchForm(true)
						: setOpenSavedSearch(true)
				}
			>
				<div className="relative">
					{carContext?.cars.length === 0 ? (
						<Image
							src={hovered ? "/carBlackIcon.svg" : "/carIcon.svg"}
							alt={"car"}
							width={30}
							height={30}
						/>
					) : (
						<Image
							src={"/carBlackIcon.svg"}
							alt={"car"}
							width={30}
							height={30}
						/>
					)}
					{carContext?.cars.length !== 0 && (
						<span className="bottom-[6px] absolute bg-custom-green px-[6px] py-[0px] rounded-full w-auto text-white text-sm">
							{carContext?.cars.length &&
							carContext?.cars.length > 5
								? "5+"
								: carContext?.cars.length}
						</span>
					)}
				</div>
				<span className="">
					{carContext?.cars.length === 0
						? t("Select your Vehicle")
						: `${carContext?.cars[0].model_year.year} ${
								carContext?.cars[0].car_brand.name[locale]
						  } ${carContext?.cars[0].car_model.name[locale]} | ${t(
								"Change"
						  )}`}
				</span>
			</button>
			<SavedSearchModal
				open={openSavedSearch}
				setOpen={setOpenSavedSearch}
			/>
			<VehicleSelectionModal
				open={openCarSearchForm}
				setOpen={setOpenCarSearchForm}
			/>
		</>
  );
}

export default VehicleSelectionBtn
