import React from "react";

const UserHeaderLoader = () => {
	return (
		<div className="relative w-full h-[400px] md:h-[300px] bg-gray-200 sm:rounded-[16px] overflow-hidden animate-pulse">
			<div className="w-full h-[148px] md:h-2/4 bg-gray-300"></div>
			<div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-full mt-[-70px] md:mt-[-90px] ml-4 border border-gray-200"></div>
			<div className="mt-[80px] md:mt-[90px]">
				<div className="h-6 mx-4 md:mx-8 bg-gray-300 rounded"></div>
				<div className="h-4 mx-4 md:mx-8 bg-gray-300 rounded mt-2 w-1/2"></div>
				<div className="h-8 mx-4 md:mx-8 bg-gray-300 rounded mt-4 w-40 md:w-64"></div>
				<div className="h-8 mt-4 flex mx-4 md:mx-8 gap-2">
					<div className="w-20 bg-gray-300 rounded"></div>
					<div className="w-20 bg-gray-300 rounded"></div>
					<div className="w-10 h-10 rounded-full bg-gray-300"></div>
				</div>
			</div>
		</div>
	);
};

export default UserHeaderLoader;
