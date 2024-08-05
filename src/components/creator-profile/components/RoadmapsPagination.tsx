import React from "react";

const RoadmapsPagination = ({
	handleShowMoreRoadmaps,
	totalItems,
	isLoading,
}: {
	handleShowMoreRoadmaps: () => void;
	totalItems: number;
	isLoading: boolean;
}) => {
	return (
		<div
			className={`mt-2 text-center transition-all ml-2 ${
				totalItems < 10 ? "hidden" : ""
			}`}
		>
			<button
				onClick={handleShowMoreRoadmaps}
				className="relative overflow-hidden block text-start text-[#ADAEB5] font-semibold rounded-sm bg-transparent my-3"
			>
				{isLoading ? "Loading..." : "Show more roadmaps..."}
			</button>
		</div>
	);
};

export default RoadmapsPagination;
