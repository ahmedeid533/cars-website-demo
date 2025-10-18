import AutorenewIcon from '@mui/icons-material/Autorenew';
import CustomPagination from './CustomPagination';

// @ts-ignore
const GetMore = ({meta, setNextPage}) => {
    return (
		<div className="flex flex-col gap-5 py-0 lg:py-16">
			<div className="w-full flex items-center justify-center">
					<button onClick={
						() => {
							setNextPage((prevPage: number) => prevPage + 1);
						}
				} className="flex items-center gap-3 rounded py-2 px-5 border border-custom-black text-custom-black font-bold w-1/2 lg:w-1/4 justify-center">
					<AutorenewIcon />
						<span className="uppercase">next {meta?.per_page}</span>
				</button>
			</div>
			<div className="flex w-full items-center justify-center lg:justify-between">
				<p className="text-custom-blue hidden lg:block">
					Showing {meta?.current_page * meta?.per_page}-
					{(meta?.current_page + 1) * meta?.per_page} of {meta?.total}{" "}
					Products
				</p>
					<CustomPagination meta={meta} setNextPage={setNextPage} />
			</div>
		</div>
	);
}

export default GetMore
