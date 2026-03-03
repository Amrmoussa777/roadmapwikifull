"use client";

import useInput from "@/components/common/input/hooks/useInput";
import { ACTIVITY_SEARCH_ICON } from "@public/icons/monetization";
import React from "react";

const ActivityMonetizationSearchInput = () => {
	const { value, changeValue } = useInput("");

	return (
		<div className="flex-grow w-full md:w-fit h-[37px] flex-jc-c rounded-[8px] border border-[#E0E2E9] focus-within:border-primary-ultramarineBlue hover:border-primary-ultramarineBlue transition duration-200">
			<span className="text-[#ADB0CD] px-4">{ACTIVITY_SEARCH_ICON}</span>

			<input
				type="text"
				placeholder="Search"
				value={value}
				onChange={changeValue}
				className="w-full h-full outline-none bg-transparent text-[14px] placeholder:text-[14px] placeholder:font-poppins placeholder:font-medium placeholder:text-[#696969] text-[#202020]"
			/>
		</div>
	);
};

export default ActivityMonetizationSearchInput;
