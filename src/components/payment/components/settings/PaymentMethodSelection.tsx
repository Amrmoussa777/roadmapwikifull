"use client";

import { EDIT_ICON } from "@public/icons/userProfile";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentMethodSelection = () => {
	const { push } = useRouter();

	return (
		<li className="bg-[#F3F4F7] p-[12px] sm:p-[24px] font-poppins">
			{/* Header */}
			<div className="flex-jb-c mb-[20px]">
				<h3 className="font-semibold text-[18px] text-black">Payment method</h3>
				<button
					onClick={() => push(`/payment/settings/information`)}
					className="text-[#92929D] hover:text-black transition duration-200"
				>
					{EDIT_ICON}
				</button>
			</div>

			<p className="text-[14px] text-[#666666]">IBAN transfer</p>

			<p className="text-[#383838] font-medium mt-[7px]">
				EG380019000500000000263180002
			</p>

			<ul className="flex flex-col sm:items-center sm:flex-row gap-4 text-[#666666] text-[14px] mt-[7px] list-disc list-inside">
				<li className="sm:list-none">National bank of Egypt</li>
				<li>123456</li>
				<li>USD</li>
			</ul>
		</li>
	);
};

export default PaymentMethodSelection;
