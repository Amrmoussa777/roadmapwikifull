import React from "react";

const RoadmapPreviewLoader = () => {
	return (
		<div className="hidden lg:block w-full h-full p-6 animate-pulse">
			<div className="h-10 mx-auto bg-gray-200 rounded-full"></div>
			<div className="h-2 mx-auto bg-gray-200 rounded-full my-4"></div>
			<div className="flex flex-col gap-4">
				<div className="relative w-full max-w-xs h-16 block mx-auto p-2 rounded-sm bg-gray-200"></div>
				<div className="relative w-full max-w-xs h-16 block mx-auto p-2 rounded-sm bg-gray-200"></div>
				<div className="relative w-full max-w-xs h-16 block mx-auto p-2 rounded-sm bg-gray-200"></div>
				<div className="relative w-full max-w-xs h-16 block mx-auto p-2 rounded-sm bg-gray-200"></div>
				<div className="relative w-full max-w-xs h-16 block mx-auto p-2 rounded-sm bg-gray-200"></div>
			</div>
		</div>
	);
};

export default RoadmapPreviewLoader;
