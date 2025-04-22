"use client"
// import Link from 'next/link';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { apiClient } from '@/util/axois';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const ThirdSection = ({ id }: { id: number | string }) => {
	const [counter, setCounter] = useState(1);
	// const [open, setOpen] = useState(false);
	const cookie = new Cookies();
	const router = useRouter();

	const addToCart = () => {
		const token = cookie.get("token");
		if (!token) {
			router.push("/login");
		}
		if (counter < 1) {
			toast.error("Quantity must be at least 1");
			return;
		}
		apiClient(token)
			.post("/cart/add", {
				product_id: id,
				quantity: counter,
			})
			.then((res) => {
				toast.success("Product added to cart successfully");
			})
			.catch((err) => {
				console.log("error ==> ", err);
				toast.error("Error adding product to cart");
			});
		
	};
	return (
		<div className="flex flex-col gap-3">
			{/* <h5 className='font-bold'>CHOOSE OPTION(S):</h5>
            <CustomSelectInput /> */}
			<div className="grid grid-cols-3 items-center gap-3 mt-150px lg:mt-[250px]">
				<div className="w-full flex items-center justify-between border border-custom-black text-custom-black px-2 rounded py-4 text-center">
					<div
						className="cursor-pointer"
						onClick={() => setCounter(counter - 1)}
					>
						<RemoveIcon />
					</div>
					<span className="font-bold">{counter}</span>
					<div
						className="cursor-pointer"
						onClick={() => setCounter(counter + 1)}
					>
						<AddIcon />
					</div>
				</div>
				<div
					// href={"/cart"}
					onClick={()=>addToCart()}
					className="uppercase rounded col-span-2 w-full border border-custom-blue bg-custom-blue py-4 text-white text-center"
				>
					Add To Cart
				</div>
			</div>
			{/* <div className='flex items-end justify-end'>
                <button onClick={() => setOpen(true)} className='w-2/3 lg:w-full py-3 rounded border border-custom-black text-custom-black font-bold'>
                    PRODUCT OPTIONS
                </button>
            </div> */}
			{/* <DetailsModel setOpen={setOpen} open={open} /> */}
		</div>
	);
};

export default ThirdSection
