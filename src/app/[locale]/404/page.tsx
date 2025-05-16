import { Metadata } from "next";
import PageNotFoundComponent from "./_component";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
	title: "3RABITK | 404 Not Found",
	description: "Generated for 3RABITK",
};

const page = () => {

	return (
		<aside className="flex md:flex-col flex-col-reverse justify-center items-center gap-5 custom-container2 py-10">
			<div className="relative w-3/4 md:w-full h-[60vh]">
				<Image
					src={"/not-found.svg"}
					alt="notfound"
					fill
					className="object-contain"
				/>
			</div>
			<PageNotFoundComponent />
		</aside>
	);
};

export default page;
