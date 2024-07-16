import React from "react";

const CreateRoadmapHeaderLoader = () => {
	return (
		<div className="w-full bg-white animate-pulse">
			<div className="h-20 flex justify-between items-center px-4 sm:px-6">
				<div className="h-6 w-1/2 bg-gray-400 rounded"></div>

				<div className="flex items-center gap-2">
					<div className="w-24 h-9 rounded-full bg-gray-400"></div>

					<div className="w-9 h-9 rounded-full bg-gray-400"></div>
				</div>
			</div>
		</div>
	);
};

export default CreateRoadmapHeaderLoader;
