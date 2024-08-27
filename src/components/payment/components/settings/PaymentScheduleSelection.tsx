"use client";

import { DURATION_ICON } from "@public/icons/roadmapSteps";
import { EDIT_ICON } from "@public/icons/userProfile";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentScheduleSelection = () => {
	const { push } = useRouter();

	return (
		<li className="bg-[#F3F4F7] p-[12px] sm:p-[24px] font-poppins mb-[24px]">
			{/* Header */}
			<div className="flex-jb-c mb-[20px]">
				<h3 className="font-semibold text-[18px] text-black">
					Payment schedule
				</h3>
				<button
					onClick={() => push(`/payment/settings/information`)}
					className="text-[#92929D] hover:text-black transition duration-200"
				>
					{EDIT_ICON}
				</button>
			</div>

			{/* Schedule date */}
			<h3 className="font-medium text-[16px] text-[#383838]">
				Monthly Every day 27 ($100 threshold)
			</h3>

			<div className="flex-ic-c gap-1 mt-[8px]">
				<span className="text-primary-ultramarineBlue">{DURATION_ICON}</span>
				<p className="text-[14px] text-[#666666]">Next payment after 13 days</p>
			</div>
		</li>
	);
};

export default PaymentScheduleSelection;
