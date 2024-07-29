import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import { ROADMAP_ICON } from "@public/icons/roadmaps";
import React from "react";

const SearchRoadmapForm = () => {
	return (
		<form className="w-full h-[80px] flex items-center mt-[20px] shadow-csm rounded-full py-[20px] px-[32px]">
			<div className="flex gap-4 w-2/4">
				<span className="text-[#C4C4C4]">{ROADMAP_ICON}</span>
				<input
					type="text"
					placeholder="Enter field name you want roadmap about"
					className="w-full outline-none text-[16px] font-poppins placeholder:font-poppins placeholder:text-[16px]"
				/>
			</div>

			<VerticalDivider width="w-[1px]" bgColor="bg-[#EDEFF5]" />

			<div></div>
		</form>
	);
};

export default SearchRoadmapForm;
