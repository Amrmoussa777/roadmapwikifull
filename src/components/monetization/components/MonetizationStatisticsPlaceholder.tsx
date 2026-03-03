import { NO_STATISTICS_ICON } from "@public/icons/monetization";
import { useRouter } from "next/navigation";
import React from "react";

const MonetizationStatisticsPlaceholder = () => {
	return (
		<>
			<span>{NO_STATISTICS_ICON}</span>
			<p className="text-[#9C9DA4] text-[14px]">
				You don’t have any statistics yet, coming soon.
			</p>
			{/* <button
				className="bg-primary-ultramarineBlue text-white text-[14px] font-normal px-[14px] py-[8px] rounded-[8px] border border-transparent hover:bg-white hover:border-primary-ultramarineBlue hover:text-primary-ultramarineBlue transition duration-200"
			>
				Create roadmap
			</button> */}
		</>
	);
};

export default MonetizationStatisticsPlaceholder;
