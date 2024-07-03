import React from "react";

const LoadingRoadmapHeader = () => {
	return (
		<div className="h-[150px] animate-pulse">
			<div className="w-full h-1/2 bg-gray-200 rounded-t-md"></div>
			<div className="w-full h-1/2 bg-white rounded-b-md px-2 md:px-4 lg:px-6 flex items-center justify-between">
				<div className="h-4 bg-gray-200 rounded w-3/4"></div>
				<div className="flex items-center justify-center gap-2">
					<div className="w-[100px] h-full bg-gray-200 rounded flex items-center justify-center gap-2">
						<div className="h-4 bg-gray-200 rounded w-3/4"></div>
						<div className="w-12 md:w-14 h-10 md:h-11 flex items-center justify-center text-md md:text-lg font-semibold bg-black/20 rounded-r-md">
							<div className="h-4 bg-gray-200 rounded w-1/3"></div>
						</div>
					</div>
					<div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border border-grey-iconBorder rounded-full">
						<div className="h-4 w-4 bg-gray-200 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoadingRoadmapHeader;
