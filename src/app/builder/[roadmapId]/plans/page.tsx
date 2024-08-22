import CustomizeRoadmapPlan from "@/components/builder/plans/CustomizeRoadmapPlan";
import CurrentRoadmapPlan from "@/components/builder/plans/RoadmapPlanItem";
import React from "react";

const page = () => {
	return (
		<div className="p-4 sm:p-6 !pb-[100px] lg:!pb-6">
			<h2 className="font-semibold text-xl sm:text-3xl my-2">Plans</h2>
			<p className="text-[14px] text-[#606060] font-inter font-normal">
				Choose or customise your roadmap plan
			</p>

			<div className="mt-4">
				<CurrentRoadmapPlan />
				<CustomizeRoadmapPlan />
			</div>
		</div>
	);
};

export default page;
