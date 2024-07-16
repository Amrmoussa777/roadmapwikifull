"use client";

import { ADD_ICON } from "@public/icons/userProfile";
import { useRouter } from "next/navigation";
import React from "react";

const AddRoadmapButton = () => {
	const { push } = useRouter();

	return (
		<button
			onClick={() => push("/create-roadmap")}
			className="w-[24px] h-[24px] flex-jc-c rounded-full bg-primary-ultramarineBlue text-white"
		>
			{ADD_ICON}
		</button>
	);
};

export default AddRoadmapButton;
