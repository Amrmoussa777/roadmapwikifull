import React from "react";

const LoadingRoadmapPreviewProfileInfo = () => {
	return (
		<div className="w-full animate-pulse">
			<div className="text-center gap-1 py-2">
				<div className="h-6 bg-gray-200 rounded w-2/5 mx-auto"></div>
				<div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mt-2"></div>
			</div>

			<div className="w-full h-10 flex gap-2 py-2">
				<div className="w-full h-full bg-gray-200 rounded-full"></div>
			</div>
		</div>
	);
};

export default LoadingRoadmapPreviewProfileInfo;
