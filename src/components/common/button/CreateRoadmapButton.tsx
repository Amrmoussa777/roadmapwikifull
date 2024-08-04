"use client";

import { ADD_ROADMAP_ICON } from "@public/icons/creatorHome";
import { useRouter } from "next/navigation";
import React from "react";

const CreateRoadmapButton = () => {
	const { push } = useRouter();

	return (
		<button
			onClick={() => push("/builder")}
			className="w-[148px] h-[40px] hidden sm:flex-jb-c px-[12px] font-inter font-normal text-[14px] rounded-full bg-primary-ultramarineBlue text-white hover:bg-white hover:text-[#181818] hover:shadow-lg border border-transparent hover:border-primary-ultramarineBlue transition duration-200 group"
		>
			<span className="w-[20px] h-[20px] flex-jc-c rounded-full bg-white text-[#181818] group-hover:bg-primary-ultramarineBlue group-hover:text-white transition duration-200">
				{ADD_ROADMAP_ICON}
			</span>{" "}
			New roadmap
		</button>
	);
};

export default CreateRoadmapButton;
