import { SummaryItemProps } from "@/components/creator-home/types/index.types";
import { MENU_ICON } from "@public/icons/creatorHome";
import React from "react";

const SummaryItem = ({ name, value, icon }: SummaryItemProps) => {
	return (
		<li className="w-full sm:w-[156px] h-[79px] lg:w-[200px] lg:h-[100px] flex flex-col justify-between bg-[#F5F6FE] px-[20px] py-[14px] lg:py-[16px] rounded-[8px]">
			<div className="flex-jb-c">
				<span className="flex-jc-c gap-1 font-inter font-normal text-[12px] lg:text-[14px] text-[#696969] [&>svg]:w-[18px]">
					{icon} {name}
				</span>
				<button>{MENU_ICON}</button>
			</div>

			<h3 className="text-[20px] lg:text-[32px] text-[#252424] font-bold">
				{value}
			</h3>
		</li>
	);
};

export default SummaryItem;
