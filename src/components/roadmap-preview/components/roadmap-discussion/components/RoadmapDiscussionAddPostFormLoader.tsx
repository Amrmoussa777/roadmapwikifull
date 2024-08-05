import React from "react";

const RoadmapDiscussionAddPostFormLoader = () => {
	return (
		<form className="relative w-full p-1 bg-white mb-2 rounded-md border border-[#E0E0E0] animate-pulse">
			<div className="w-full h-[100px] p-2"></div>

			<div className="h-[0.25px] my-2 bg-[#E0E0E0]"></div>

			<div className="flex-jc-c">
				<div className="flex-jc-c">
					<div className="h-4 w-4 my-1 mx-1 bg-gray-200 rounded"></div>
					<div className="h-4 w-4 my-1 mx-1 bg-gray-200 rounded"></div>
					<div className="h-4 w-4 my-1 mx-1 bg-gray-200 rounded"></div>
					<div className="h-4 w-4 my-1 mx-1 bg-gray-200 rounded"></div>
					<div className="h-4 w-4 my-1 mx-1 bg-gray-200 rounded"></div>
				</div>
				<button className="w-fit h-[36px] px-4 ml-auto mb-1 block rounded-md"></button>
			</div>
		</form>
	);
};

export default RoadmapDiscussionAddPostFormLoader;
