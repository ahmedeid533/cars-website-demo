import React from 'react'
import FirstProps from './FirstProps'
import SecondProps from './SecondProps'

const ProductProps = ({ description }) => {
	return (
		<div className="custom-container1 py-10 grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
			<FirstProps description={description} />
			<SecondProps />
		</div>
	);
};

export default ProductProps
