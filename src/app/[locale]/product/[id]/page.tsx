import Product from "@/components/Product/Product"
import { Metadata } from "next"
export async function generateStaticParams() {
	// 👇 List all your supported locales here
	return [
		{
			locale: "en",
			id: "1",
			
		 },
		{
			locale: "ar",
			id:"1"
		 },
	];
}
type props = {
	params: Promise<{
		id: string;
	}>;
};

export async function generateMetadata({ params }: props): Promise<Metadata> {
	const resolvedParams = await params;
	return {
		title: `3RABITK | Product #${resolvedParams.id} Cars`,
		description: `Generated for 3RABITK Product #${resolvedParams.id} Cars`,
	};
}

const page = async ({ params }: props) => {
	const resolvedParams = await params 
	console.log("id ==> ", resolvedParams.id);
	return <Product id={resolvedParams.id} />;
};

export default page
