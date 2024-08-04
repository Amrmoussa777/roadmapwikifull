"use client";

import { ADD_ICON } from "@public/icons/userProfile";
import { useRouter } from "next/navigation";
import React from "react";

const AddRoadmapButton = () => {
	const { push } = useRouter();

	return (
		<button
			onClick={() => push("/builder")}
			className="w-[24px] h-[24px] flex-jc-c rounded-full bg-primary-ultramarineBlue text-white hover:bg-white hover:text-primary-ultramarineBlue hover:shadow-csm border border-transparent hover:border-primary-ultramarineBlue transition duration-200"
		>
			{ADD_ICON}
		</button>
	);
};

export default AddRoadmapButton;
