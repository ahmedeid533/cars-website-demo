import DoneIcon from '@mui/icons-material/Done';
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CancelIcon from "@mui/icons-material/Cancel";

const SecondLine = ({order}: {order: any}) => {
    return (
		<div className="w-full flex flex-row flex-wrap items-start justify-between pb-5 gap-3 lg:gap-0">
			<div className="flex flex-col gap-1 lg:gap-3 text-custom-black">
				<h5 className="text-xs lg:text-xl font-bold">Status</h5>
				<div className="flex items-center gap-1">
					{order?.status === "completed" && (
						<div className="rounded-full bg-custom-green p-1 flex items-center justify-center text-white">
							<DoneIcon
								className="text-sm"
								style={{ maxWidth: "2vw" }}
							/>
						</div>
					)}
					{order?.status === "pending" && (
						<div className="rounded-full bg-yellow-500 p-1 flex items-center justify-center text-white">
							<PendingActionsIcon
								className="text-sm"
								style={{ maxWidth: "2vw" }}
							/>
						</div>
					)}
					{order?.status === "cancelled" && (
						<div className="rounded-full bg-red-500 p-1 flex items-center justify-center text-white">
							<CancelIcon
								className="text-sm"
								style={{ maxWidth: "2vw" }}
							/>
						</div>
					)}
					<span className="text-xs lg:text-sm font-normal lg:font-bold">
						{order?.status}
					</span>
				</div>
			</div>
			<div className="flex flex-col gap-1 lg:gap-3 text-custom-black">
				<h5 className="text-xs lg:text-xl font-bold">
					Order create Date
				</h5>
				<span className="text-xs lg:text-sm font-normal lg:font-bold ">
					{/* 15 / 6 / 2024 */}
					{new Date(order?.created_at).toLocaleDateString("en-US", {
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
					})}
				</span>
			</div>
			<div className="flex flex-col gap-1 lg:gap-3 text-custom-black">
				<h5 className="text-xs lg:text-xl font-bold">
					Last update Date
				</h5>
				<span className="text-xs lg:text-sm font-normal lg:font-bold ">
					{/* 15 / 6 / 2024 */}
					{new Date(order?.updated_at).toLocaleDateString("en-US", {
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
					})}
				</span>
			</div>
			{/* <div className='flex flex-col gap-1 lg:gap-3 text-custom-black'>
                <h5 className='text-xs lg:text-xl font-bold'>price</h5>
                <span className='text-xs lg:text-sm font-normal lg:font-bold '>$199</span>
            </div>
            <div className='flex flex-col gap-1 lg:gap-3 text-custom-black'>
                <h5 className='text-xs lg:text-xl font-bold'>Discount</h5>
                <span className='text-xs lg:text-sm font-normal lg:font-bold  line-through'>$199</span>
            </div> */}
			<div className="flex flex-col gap-1 lg:gap-3 text-custom-blue">
				<h5 className="text-xs lg:text-xl font-bold">Total</h5>
				<span className="text-xs lg:text-sm font-normal lg:font-bold">
					{order?.total_amount} EGP
				</span>
			</div>
		</div>
	);
}

export default SecondLine
