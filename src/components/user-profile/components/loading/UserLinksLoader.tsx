import React from "react";

const UserLinksLoader = () => {
	return (
		<div className="bg-white sm:rounded-[12px] p-[18px] animate-pulse mt-2">
			<div className="flex-jb-c mb-4">
				<div className="h-6 bg-gray-200 rounded w-1/4"></div>
				<div className="h-6 bg-gray-200 rounded w-auto"></div>
			</div>

			<ul className="flex flex-col gap-2">
				<li className="h-6 bg-gray-200 rounded w-full"></li>
				<li className="h-6 bg-gray-200 rounded w-full"></li>
				<li className="h-6 bg-gray-200 rounded w-full"></li>
			</ul>
		</div>
	);
};

export default UserLinksLoader;
