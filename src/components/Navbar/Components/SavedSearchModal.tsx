'use client'
import { CarContext } from '@/app/[locale]/context/CarContext'
import ClearIcon from '@mui/icons-material/Clear'
import { Backdrop, Fade, Modal, Radio } from '@mui/material'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import React, { useContext, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import VehicleSelectionModal from './VehicleSelectionModal'

type props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const SavedSearchModal = ({ open, setOpen }: props) => {
	const carContext = useContext(CarContext)
	const t = useTranslations('Header')
  const [openVehicleSelection, setOpenVehicleSelection] = useState(false)
  const locale = useLocale()
  const lang = locale === 'en' ? 'en' : 'ar'
  return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={open}>
				<div className="z-[100] border-none outline-none">
					<div
						className="top-[50%] left-[50%] absolute flex flex-col gap-3 border-none outline-none w-[85%] lg:w-1/3"
						style={{ transform: "translate(-50%, -50%)" }}
					>
						<div className="relative flex flex-col justify-start items-start gap-3 bg-white p-6 rounded">
							<div
								onClick={() => {
									setOpen(false);
								}}
								className="top-3 right-3 absolute cursor-pointer"
							>
								<ClearIcon />
							</div>
							<div className="flex justify-between items-center mt-5 w-full">
								<h2 className="from-black text-custom-black text-lg">
									{t('My Garage')}
								</h2>
								{/* <button className='text-custom-blue text-sm' onClick={() => carContext?.deleteAllCars()}>Clear all</button> */}
							</div>
							<div className="flex flex-col gap-1 w-full h-[250px] overflow-y-scroll">
								{carContext?.cars.map((item, index) => (
									<div
										key={item.id}
										className="flex justify-between items-center w-full"
									>
										<Link
											href={`/search?car_brand=${item.car_brand.name[lang]}&car_year=${item.model_year.year}&car_model=${item.car_model.name[lang]}&car_Brand_id=${item.car_brand.id}&car_year_id=${item.model_year.id}&car_model_id=${item.car_model.id}`}
											className="flex items-center gap-0 sm:gap-1"
											onClick={() => {
												carContext.setPrimaryCar(
													item.id
												);
												setOpen(false);
											}}
										>
											<Radio
												checked={index === 0}
												value={item.id}
												name="cars"
												id={index.toString()}
											/>
											<label
												htmlFor={index.toString()}
												className={`text-sm ${
													index === 0
														? "font-bold"
														: ""
												} hover:underline cursor-pointer`}
											>{`${item.model_year.year} ${item.car_brand.name[lang]} ${item.car_model.name[lang]}`}</label>
										</Link>
										<DeleteForeverIcon
											className="hover:text-red-500 cursor-pointer"
											onClick={() =>
												carContext.deleteCarById(
													item.id
												)
											}
										/>
									</div>
								))}
							</div>
							<button
								className="bg-custom-blue hover:bg-custom-blue1-hover p-2 rounded-md w-full text-white transition duration-300"
								onClick={() => {
									setOpenVehicleSelection(true);
								}}
							>
								{t("Add vehicles")}
							</button>
							<VehicleSelectionModal
								open={openVehicleSelection}
								setOpen={setOpenVehicleSelection}
							/>
						</div>
					</div>
				</div>
			</Fade>
		</Modal>
  );
}

export default SavedSearchModal
