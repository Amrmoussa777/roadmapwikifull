import React from "react";

const PrivateNavbarCurrentUserLoader = () => {
	return (
		<div className="flex items-center gap-2 animate-pulse">
			<div>
				<div className="h-4 bg-gray-200 rounded w-16 ml-auto"></div>
				<div className="h-4 bg-gray-200 rounded w-20 mt-1 ml-auto"></div>
			</div>

			<div className="w-[32px] h-[32px] bg-gray-200 rounded-full"></div>
		</div>
	);
};

export default PrivateNavbarCurrentUserLoader;
