import SetRoadmapPrice from "@/components/builder/plans/SetRoadmapPrice";
import React from "react";

const CustomizeRoadmapPlan = () => {
	return (
		<div className="relative mt-[64px] bg-white p-6 lg:p-[32px] rounded-[16px]">
			<h3 className="text-[30px] font-semibold text-black">Standard Plan</h3>

			<SetRoadmapPrice />
		</div>
	);
};

export default CustomizeRoadmapPlan;
