import PaymentHistoryTable from "@/components/payment/components/history/PaymentHistoryTable";
import React from "react";

const page = () => {
	return (
		<section className="font-inter">
			<h2 className="font-bold text-[20px] md:text-[24px] text-[#111111]">
				Payment history
			</h2>

			<PaymentHistoryTable />
		</section>
	);
};

export default page;
