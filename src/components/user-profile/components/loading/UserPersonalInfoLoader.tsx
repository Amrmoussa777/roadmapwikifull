import React from "react";

const UserPersonalInfoLoader = () => {
	return (
		<div
			id="info"
			className="bg-white sm:rounded-[12px] p-[18px] animate-pulse"
		>
			<div className="flex-jb-c mb-4">
				<div className="h-4 bg-gray-200 rounded w-1/3"></div>
				<div className="h-10 bg-gray-200 rounded w-1/4"></div>
			</div>
			<div className="grid grid-cols-2 gap-2">
				<div className="h-10 bg-gray-200 rounded"></div>
				<div className="h-10 bg-gray-200 rounded"></div>
			</div>
			<div className="h-10 bg-gray-200 rounded w-1/4 mt-2"></div>
		</div>
	);
};

export default UserPersonalInfoLoader;
