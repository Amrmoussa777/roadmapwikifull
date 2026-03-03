import React from "react";

const UserRoadmapsLoader = () => {
	return (
		<div className="w-full md:w-[calc(100%-296px)] mt-8 md:mt-4 md:pl-4 px-2 sm:px-0 animate-pulse">
			<div className="w-full flex-justify-between px-2 sm:px-0">
				<div>
					<div className="h-6 bg-gray-200 rounded w-1/2"></div>
				</div>
			</div>

			<ul className="mt-6">
				<li className="h-20 mt-4 bg-gray-200 rounded"></li>
				<li className="h-20 mt-4 bg-gray-200 rounded"></li>
				<li className="h-20 mt-4 bg-gray-200 rounded"></li>
				<li className="h-20 mt-4 bg-gray-200 rounded"></li>
				<li className="h-20 mt-4 bg-gray-200 rounded"></li>
				<li className="h-20 mt-4 bg-gray-200 rounded"></li>
				<li className="h-20 mt-4 bg-gray-200 rounded"></li>
			</ul>
		</div>
	);
};

export default UserRoadmapsLoader;
