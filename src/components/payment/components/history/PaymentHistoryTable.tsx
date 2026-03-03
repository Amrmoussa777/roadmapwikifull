import PaymentHistoryTableItem from "@/components/payment/components/history/PaymentHistoryTableItem";
import React from "react";

const PaymentHistoryTable = () => {
	return (
		<div className="overflow-x-scroll mt-[24px]">
			<table className="w-full table-auto text-[14px]">
				<thead>
					<tr className="bg-[#EBECF2] text-[#696969] [&>th]:px-[24px] [&>th]:py-[14px] [&>th]:font-medium [&>th]:text-start [&>th]:text-[14px]">
						<th className="min-w-[200px] md:min-w-[260px]">Transaction ID</th>
						<th className="min-w-[250px]">Date time</th>
						<th className="min-w-[250px]">Method</th>
						<th className="min-w-[180px]">Amount (USD)</th>
					</tr>
				</thead>
				<tbody className="[&>tr>td]:px-[24px] [&>tr>td]:h-[64px] font-medium text-[#606060]">
					{Array.from(Array(10)).map((_, i) => (
						<PaymentHistoryTableItem key={i} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PaymentHistoryTable;
