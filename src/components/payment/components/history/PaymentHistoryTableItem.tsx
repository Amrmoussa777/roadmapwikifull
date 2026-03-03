import React from "react";

const PaymentHistoryTableItem = () => {
	return (
		<tr className="hover:bg-[#F5F6FE] transition duration-200">
			<td className="flex items-center gap-2 md:gap-4 text-[#171717]">
				0A223455611
			</td>
			<td>12 Jan 2024 - 12:30 PM</td>
			<td>IBAN EG380****002</td>
			<td className="font-semibold text-[#181818]">-100 $</td>
		</tr>
	);
};

export default PaymentHistoryTableItem;
