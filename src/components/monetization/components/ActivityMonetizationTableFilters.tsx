import ActivityMonetizationDropButton from "@/components/monetization/components/ActivityMonetizationDropButton";
import React from "react";

const ActivityMonetizationTableFilters = () => {
	return (
		<div className="flex-grow w-full md:w-fit">
			<div className="flex gap-[15px]">
				<ActivityMonetizationDropButton active="All roadmaps">
					<h2>Roadmap</h2>
				</ActivityMonetizationDropButton>
				<ActivityMonetizationDropButton active="Last month">
					<h2>August</h2>
				</ActivityMonetizationDropButton>
			</div>
		</div>
	);
};

export default ActivityMonetizationTableFilters;
