import React from "react";

const RoadmapInfoLoader = () => {
	return (
		<div className="p-4 sm:p-6 animate-pulse">
			<div>
				<div className="h-4 bg-gray-200 rounded w-1/4"></div>
				<div className="h-10 bg-gray-200 rounded w-full mt-1"></div>
			</div>
			<div className="w-full grid grid-cols-2 gap-1 sm:gap-4 mt-6">
				<div>
					<div className="h-4 bg-gray-200 rounded w-1/4"></div>
					<div className="h-10 bg-gray-200 rounded w-full mt-1"></div>
				</div>
				<div>
					<div className="h-4 bg-gray-200 rounded w-1/4"></div>
					<div className="h-10 bg-gray-200 rounded w-full mt-1"></div>
				</div>
			</div>
			<div className="h-6 bg-gray-200 rounded w-1/2 mt-4"></div>
			<div className="h-56 bg-gray-200 rounded w-full mt-2"></div>

			<div className="flex justify-between items-center sm:gap-4 mt-12">
				<div className="h-4 bg-gray-200 rounded w-1/4"></div>
				<div className="flex justify-center items-center">
					<div className="h-10 w-10 bg-gray-200 rounded-full ml-2"></div>
					<div className="h-10 w-10 bg-gray-200 rounded-full ml-2"></div>
					<div className="h-10 w-10 bg-gray-200 rounded-full ml-2"></div>
				</div>
			</div>
			<div className="flex justify-between items-center gap-4 mt-4">
				<div className="h-4 bg-gray-200 rounded w-1/4"></div>
				<div className="flex justify-center items-center">
					<div className="h-10 w-10 bg-gray-200 rounded-full ml-2"></div>
					<div className="h-10 w-10 bg-gray-200 rounded-full ml-2"></div>
					<div className="h-10 w-10 bg-gray-200 rounded-full ml-2"></div>
				</div>
			</div>

			<div className="h-1 bg-gray-200 my-6"></div>

			<div className=" gap-2 text-primary-ultramarineBlue font-medium font-inter">
				<div className="text-center h-6 w-1/4 bg-gray-200 rounded mb-4"></div>
			</div>
		</div>
	);
};

export default RoadmapInfoLoader;
