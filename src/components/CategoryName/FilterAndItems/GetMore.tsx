import AutorenewIcon from '@mui/icons-material/Autorenew';
import CustomPagination from './CustomPagination';

// @ts-ignore
const GetMore = ({nextPage, setNextPage}) => {
    return (
		<div className="flex flex-col gap-5 py-0 lg:py-16">
			<div className="w-full flex items-center justify-center gap-8">
				{nextPage > 1 && (
					<button
						onClick={() => {
							setNextPage((prevPage: number) => prevPage - 1);
						}}
						className="flex items-center gap-3 rounded py-2 px-5 border border-custom-black text-custom-black font-bold w-1/2 lg:w-1/4 justify-center"
					>
						{/* <AutorenewIcon /> */}
						<span className="uppercase">
							Back
							{/* {meta?.per_page} */}
						</span>
					</button>
				)}
				<button
					onClick={() => {
						setNextPage((prevPage: number) => prevPage + 1);
					}}
					className="flex items-center gap-3 rounded py-2 px-5 border border-custom-black text-custom-black font-bold w-1/2 lg:w-1/4 justify-center"
				>
					<AutorenewIcon />
					<span className="uppercase">
						More
						{/* {meta?.per_page} */}
					</span>
				</button>
			</div>
			{/* <div className="flex w-full items-center justify-center lg:justify-between">
				<p className="text-custom-blue hidden lg:block">
					Showing {meta?.current_page * meta?.per_page}-
					{(meta?.current_page + 1) * meta?.per_page} of {meta?.total}{" "}
					Products
				</p>
					<CustomPagination meta={meta} setNextPage={setNextPage} />
			</div> */}
		</div>
	);
}

export default GetMore
