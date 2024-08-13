import { SEARCH_ICON } from "@public/icons/roadmapPreview";
import React from "react";

const SearchConversationForm = () => {
	return (
		<div className="h-[50px] my-[24px] flex-jc-c rounded-[8px] border border-[#E5EAFF] focus-within:border-primary-ultramarineBlue hover:border-primary-ultramarineBlue transition duration-200">
			<span className="text-[#979797] px-4">{SEARCH_ICON}</span>

			<input
				type="text"
				placeholder="Search"
				className="w-full h-full outline-none bg-transparent text-[14px] placeholder:text-[14px] placeholder:font-poppins placeholder:font-medium placeholder:text-[#979797] text-[#202020]"
			/>
		</div>
	);
};

export default SearchConversationForm;
