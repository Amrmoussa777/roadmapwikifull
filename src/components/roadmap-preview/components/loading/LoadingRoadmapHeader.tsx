import React from "react";

const LoadingRoadmapHeader = () => {
	return (
		<div className="h-[150px] animate-pulse">
			<div className="w-full h-1/2 bg-gray-200 rounded-t-md"></div>
			<div className="w-full h-1/2 bg-white rounded-b-md px-2 md:px-4 lg:px-6 flex items-center justify-between g">
				<div className="w-52 h-4 bg-gray-200 rounded"></div>
				<div className="flex items-center justify-center gap-2">
					<div className="w-44 h-10 bg-gray-200 rounded flex items-center justify-center gap-2">
						<div className="h-4 bg-gray-200 rounded w-3/4"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoadingRoadmapHeader;
