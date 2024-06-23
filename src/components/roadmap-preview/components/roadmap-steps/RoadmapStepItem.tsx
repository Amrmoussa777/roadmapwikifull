import { RoadmapStepType } from "@/components/roadmap-preview/types/roadmapSteps.types";
import React from "react";

const RoadmapStepItem = ({}: RoadmapStepType) => {
	return (
		<div className="flex flex-col gap-2 rounded-lg p-4 border border-transparent"></div>
	);
};

export default RoadmapStepItem;
