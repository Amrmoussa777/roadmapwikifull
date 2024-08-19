import { SummaryMonetizationItemProps } from "@/components/monetization/types/index.types";
import { MENU_ICON } from "@public/icons/creatorHome";
import React from "react";

const SummaryMonetizationItem = ({
	name,
	value,
	icon,
}: SummaryMonetizationItemProps) => {
	return (
		<li className="w-full h-[124px] flex flex-col justify-between bg-white border border-[#DCDCDC] px-[20px] py-[14px] lg:py-[16px] rounded-[8px]">
			<div className="flex-jb-c">
				<span className="flex-jc-c gap-1 capitalize font-inter font-normal text-[12px] lg:text-[14px] text-[#696969] [&>svg]:w-[14px] [&>svg]:h-[14px]">
					{icon} {name}
				</span>
				<button>{MENU_ICON}</button>
			</div>

			<h3 className="text-[20px] lg:text-[32px] text-[#252424] font-bold">
				{value}
			</h3>

			<p className="text-[#79828B] text-[14px] font-inter">0.00% last month</p>
		</li>
	);
};

export default SummaryMonetizationItem;
