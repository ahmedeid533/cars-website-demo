import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// @ts-ignore
export default function CustomPagination({ meta, setNextPage }) {
	return (
		<Stack spacing={2}>
			<Pagination
				count={Math.ceil(meta?.total / meta?.per_page)}
				variant="outlined"
				shape="rounded"
				onChange={(_, value) => {
					setNextPage(value);
				}}
			/>
		</Stack>
	);
}
