"use client";

import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import useToggle from "@/hooks/useToggle";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import { ROADMAP_ICON, SEARCH_ICON } from "@public/icons/roadmaps";
import React from "react";

const SearchRoadmapForm = () => {
	const { currentState: isOptionsHidden, toggle: hideOptions } =
		useToggle(false);

	return (
		<form className="w-full h-[80px] flex items-center mt-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[16px] p-[20px] border border-transparent focus-within:border-primary-ultramarineBlue focus-within:shadow-[5px_5px_0px_0px_rgba(80,108,240),0_8px_30px_rgb(0,0,0,0.12)] transition duration-200">
			<div className="flex gap-4 w-2/4">
				<span className="text-[#C4C4C4]">{ROADMAP_ICON}</span>
				<input
					type="text"
					placeholder="Enter field name you want roadmap about"
					className="w-full outline-none text-[16px] font-poppins placeholder:font-poppins placeholder:text-[16px]"
				/>
			</div>

			<VerticalDivider width="w-[1px]" bgColor="bg-[#EDEFF5]" />

			<div className="w-2/4 flex-jb-c">
				<button
					id="roadmapDuration"
					type="button"
					onClick={hideOptions}
					className="w-fit flex-jb-c roadmap-info-select font-poppins text-[16px] border-none sm:text-[18px] text-[#383838]"
				>
					Roadmaps
					<span
						className={`!text-[#3F3F3F] [&>svg]:transition-all ${
							isOptionsHidden ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
						}`}
					>
						{ARROW_ICON}
					</span>
				</button>

				<button className="w-[48px] h-[48px] flex-jc-c bg-[#F6F6F6] text-[#383838] rounded-full">
					{SEARCH_ICON}
				</button>
			</div>
		</form>
	);
};

export default SearchRoadmapForm;
