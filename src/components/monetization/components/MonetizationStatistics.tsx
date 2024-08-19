"use client";

import { NO_STATISTICS_ICON } from "@public/icons/monetization";
import { useRouter } from "next/navigation";
import React from "react";

const MonetizationStatistics = () => {
	const { push } = useRouter();

	return (
		<div className="flex-grow font-inter mt-[24px] p-[16px] md:p-[24px]  border border-[#DCDCDC] bg-white rounded-[12px]">
			<h2 className="text-[20px] text-[#1E293B] font-semibold">Statistics</h2>

			<div className="w-full h-full flex-jc-c flex-col gap-[16px]">
				<span>{NO_STATISTICS_ICON}</span>
				<p className="text-[#9C9DA4] text-[14px]">
					You don’t have any active roadmap
				</p>
				<button
					onClick={() => push("/builder")}
					className="bg-primary-ultramarineBlue text-white text-[14px] font-normal px-[14px] py-[8px] rounded-[8px] border border-transparent hover:bg-white hover:border-primary-ultramarineBlue hover:text-primary-ultramarineBlue transition duration-200"
				>
					Create roadmap
				</button>
			</div>
		</div>
	);
};

export default MonetizationStatistics;
