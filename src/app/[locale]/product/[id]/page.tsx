import Product from "@/components/Product/Product"
import { Metadata } from "next"

type props = {
	params: {
		id: string;
	};
};

export async function generateMetadata({ params }: props): Promise<Metadata> {
	return {
		title: `3RABITK | Product #${params.id}`,
		description: `Generated for 3RABITK Product #${params.id} Cars`,
	};
}

const page = ({ params }: props) => {
	console.log("id ==> ", params.id);
	return <Product id={params.id} />;
};

export default page
