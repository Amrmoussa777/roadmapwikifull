import { ADD_ICON } from "@public/icons/userProfile";
import React from "react";

const AddRoadmapButton = () => {
	return (
		<button className="w-[24px] h-[24px] flex-jc-c rounded-full bg-primary-ultramarineBlue text-white">
			{ADD_ICON}
		</button>
	);
};

export default AddRoadmapButton;
