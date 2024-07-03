import React from "react";

const LoadingRoadmapPreviewProfileInfo = () => {
	return (
		<div className="w-full animate-pulse">
			<div className="text-center gap-1 py-2">
				<div className="h-6 bg-gray-200 rounded w-2/5 mx-auto"></div>
				<div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mt-2"></div>
			</div>

			<div className="h-4 bg-gray-200 rounded w-3/5 mx-auto"></div>

			<div className="w-full h-10 flex gap-2 py-2">
				<div className="w-full h-full bg-gray-200 rounded-full"></div>
				<div className="w-10 h-full bg-gray-200 rounded-full"></div>
			</div>

			<div className="h-10 bg-gray-200 rounded w-3/4 mx-auto"></div>

			<ul className="w-full flex flex-wrap items-center gap-4 py-2">
				<li>
					<div className="h-4 bg-gray-200 rounded w-2/5"></div>
					<div className="h-4 bg-gray-200 rounded w-3/5"></div>
				</li>

				<li>
					<div className="h-4 bg-gray-200 rounded w-2/5"></div>
					<div className="h-4 bg-gray-200 rounded w-3/5"></div>
				</li>
			</ul>

			<div className="w-full py-2">
				<div className="w-full flex gap-2 flex-wrap">
					<div className="h-8 bg-gray-200 rounded-full w-1/4"></div>
					<div className="h-8 bg-gray-200 rounded-full w-1/5"></div>
					<div className="h-8 bg-gray-200 rounded-full w-1/3"></div>
				</div>
			</div>

			<div className="w-full py-2">
				<div className="w-full flex gap-2">
					<div className="w-10 h-10 bg-gray-200 rounded"></div>
					<div className="w-10 h-10 bg-gray-200 rounded"></div>
					<div className="w-10 h-10 bg-gray-200 rounded"></div>
				</div>
			</div>
		</div>
	);
};

export default LoadingRoadmapPreviewProfileInfo;
