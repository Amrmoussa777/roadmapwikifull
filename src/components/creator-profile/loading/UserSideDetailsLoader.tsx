import React from "react";

const UserSideDetailsLoader = () => {
	return (
		<div className="relative md:sticky w-full md:max-w-[296px] h-fit md:top-4 mt-4 sm:rounded-[12px] p-[18px] bg-white animate-pulse">
			<ul className="flex flex-col gap-4">
				<li>
					<div className="h-4 bg-gray-200 rounded w-1/4"></div>
					<div className="h-4 bg-gray-200 rounded mt-1 w-1/2"></div>
					<div className="h-4 bg-gray-200 rounded mt-1 w-1/4"></div>
				</li>
				<li>
					<div className="h-4 bg-gray-200 rounded w-1/4"></div>
					<div className="h-4 bg-gray-200 rounded mt-1 w-1/4"></div>
				</li>
				<li>
					<div className="h-4 bg-gray-200 rounded w-1/4"></div>
					<div className="h-4 bg-gray-200 rounded mt-1 w-1/4"></div>
				</li>
				<li>
					<div className="h-4 bg-gray-200 rounded w-1/4"></div>
					<div className="h-4 bg-gray-200 rounded mt-1 w-1/4"></div>
				</li>
				<li>
					<div className="h-4 bg-gray-200 rounded w-1/4"></div>
					<div className="h-4 bg-gray-200 rounded mt-1 w-1/4"></div>
				</li>
				<li>
					<div className="h-4 bg-gray-200 rounded w-1/4"></div>
					<div className="h-4 bg-gray-200 rounded mt-1 w-1/2"></div>
					<div className="h-4 bg-gray-200 rounded mt-1 w-1/2"></div>
				</li>
			</ul>
		</div>
	);
};

export default UserSideDetailsLoader;
