import React from "react";

const LoadingRoadmapDetails = () => {
	return (
		<div className="bg-white w-full lg:w-[500px] h-fit flex flex-col gap-4 p-4 py-3 rounded-md lg:sticky top-2 animate-pulse">
			<div>
				<div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
				<div className="h-6 bg-gray-200 rounded w-full"></div>
			</div>

			<ul className="flex flex-wrap md:flex-col md:items-start gap-2">
				<li>
					<div>
						<span className="h-6 w-6 bg-gray-200 rounded"></span>
						<div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
					</div>
					<div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
				</li>
				<li>
					<div>
						<span className="h-6 w-6 bg-gray-200 rounded"></span>
						<div className="h-4 bg-gray-200 rounded w-4 mt-2"></div>
					</div>
					<div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
				</li>
				<li>
					<div>
						<span className="h-6 w-6 bg-gray-200 rounded"></span>
						<div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
					</div>
					<div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
				</li>
			</ul>

			<div className="block">
				<div>
					<div className="h-4 bg-gray-200 rounded w-1/6 mb-2"></div>
				</div>

				<div className="w-full flex gap-2 flex-wrap mt-1">
					<div className="h-6 bg-gray-200 rounded w-1/4 mr-1"></div>
					<div className="h-6 bg-gray-200 rounded w-1/4 mr-1"></div>
					<div className="h-6 bg-gray-200 rounded w-1/4 mr-1"></div>
				</div>
			</div>

			<button className="w-fit font-inter font-normal block md:hidden">
				<div className="h-8 bg-gray-200 rounded w-1/2 mt-2"></div>
			</button>
		</div>
	);
};

export default LoadingRoadmapDetails;
