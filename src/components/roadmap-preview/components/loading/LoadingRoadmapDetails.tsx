import React from "react";

const LoadingRoadmapDetails = () => {
	return (
		<div className="bg-white w-full lg:w-[500px] h-52 flex flex-col gap-4 p-4 py-3 rounded-md lg:sticky top-2 animate-pulse">
			<div>
				<div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
				<div className="h-40 bg-gray-200 rounded w-full"></div>
			</div>
		</div>
	);
};

export default LoadingRoadmapDetails;
