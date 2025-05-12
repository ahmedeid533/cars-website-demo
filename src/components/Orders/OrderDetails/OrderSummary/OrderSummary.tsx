import React from "react";
import Summary from "./Summary";
import OptionBtns from "./OptionBtns";

const OrderSummary = ({ order }: { order: any }) => {
	return (
		<div className="flex flex-col gap-5">
			<Summary total={order?.total_amount} count={order?.items?.length} />
			<OptionBtns id_={order?.id} status={order?.status} />
		</div>
	);
};

export default OrderSummary;
