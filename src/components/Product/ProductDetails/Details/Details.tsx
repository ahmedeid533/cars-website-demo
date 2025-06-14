import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

interface DetailsProps {
  productDetails: any; // Replace 'any' with the actual type if known
  id: string | number; // Adjust the type based on your requirements
}

const Details = ({ productDetails , id}: DetailsProps) => {
console.log("productDetails ==> ", productDetails);
	return (
		<div className="col-span-1 px-10 lg:px-0 lg:col-span-2 flex flex-col gap-16 gap-x-0 justify-center">
			<FirstSection mainInfo={productDetails} />
			{/* <SecondSection /> */}
			<ThirdSection id={id} />
		</div>
	);
};

export default Details
