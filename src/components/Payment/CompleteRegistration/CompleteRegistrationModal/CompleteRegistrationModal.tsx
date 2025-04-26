"use client"
import ClearIcon from '@mui/icons-material/Clear';
import { Backdrop, Divider, Fade, Modal } from '@mui/material'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection';

type props = {
	open: boolean;
	setOpen: () => void;
	response: any;
};
const CompleteRegistrationModal = ({ open, setOpen, response }: props) => {
	if (!response) {
		setOpen();
		return null;
	}
	return (
		<Modal
			open={open}
			onClose={() => {
				setOpen();
			}}
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
						className="absolute top-[50%] left-[50%] w-full md:w-3/4 overflow-hidden h-full  border-none outline-none flex flex-col gap-3"
						style={{ transform: "translate(-50%, -50%)" }}
					>
						<div className="custom-container2 py-20 text-custom-black bg-white rounded flex flex-col gap-10 min-h-screen overflow-y-scroll relative">
							<div
								onClick={() => setOpen()}
								className="absolute right-3 top-3 cursor-pointer"
							>
								<ClearIcon />
							</div>
							<FirstSection
								order_number={
									response?.data?.order?.order_number
								}
							/>
							<SecondSection
								items={response?.data?.order.items}
							/>
							<Divider className="my-10" />
							<ThirdSection
								total={response?.data.order.total_amount}
							/>
						</div>
					</div>
				</div>
			</Fade>
		</Modal>
	);
};

export default CompleteRegistrationModal