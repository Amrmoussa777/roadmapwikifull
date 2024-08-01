import { RoadmapsPaginationProps } from "@/components/roadmaps/types/index.types";
import React from "react";

const RoadmapsPagination = ({
	handleMoreRoadmaps,
	totalItems,
	isLoading,
}: RoadmapsPaginationProps) => {
	return (
		<div
			className={`text-center transition-all ml-6 ${
				totalItems < 5 ? "hidden" : ""
			}`}
		>
			<button
				className="block text-start text-[14px] bg-background text-[#ADAEB5] font-semibold rounded-sm"
				onClick={() => handleMoreRoadmaps()}
				disabled={isLoading}
			>
				{isLoading ? "Loading..." : "Show more Roadmaps..."}
			</button>
		</div>
	);
};

export default RoadmapsPagination;
