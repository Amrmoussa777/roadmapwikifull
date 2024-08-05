import React from "react";

const UserProfileRoadmapsLoader = () => {
	return (
		<div
			id="subscribes"
			className="bg-white sm:rounded-[12px] p-[18px] animate-pulse"
		>
			<div className="flex-jb-c mb-4">
				<div className="h-5 bg-gray-200 rounded w-1/2"></div>
				<div className="h-6 bg-gray-200 rounded w-1/4"></div>
			</div>

			<div className="bg-white rounded-[12px] p-[12px] lg:p-[24px] mt-4 border border-gray-300 animate-pulse">
				<div className="flex justify-between items-start gap-2">
					<div className="flex gap-2">
						<div className="h-10 w-10 bg-gray-200 rounded"></div>

						<div className="flex flex-col gap-2">
							<div className="h-5 w-24 bg-gray-200 rounded"></div>

							<div className="hidden sm:flex flex-wrap justify-between items-center gap-2 md:gap-3 text-[12px] md:text-[14px]">
								<div className="h-4 w-10 bg-gray-200 rounded"></div>
								<div className="h-4 w-10 bg-gray-200 rounded"></div>
								<div className="h-4 w-10 bg-gray-200 rounded"></div>
							</div>
						</div>
					</div>

					<div className="ml-auto md:ml-0 flex items-center gap-2">
						<div className="h-6 w-6 bg-gray-200 rounded"></div>
						<div className="h-6 w-6 bg-gray-200 rounded"></div>
						<div className="h-6 w-6 bg-gray-200 rounded"></div>
					</div>
				</div>

				<div className="sm:hidden flex flex-wrap justify-start items-center gap-2 mt-4 md:gap-3 text-[12px] md:text-[14px]">
					<div className="h-4 w-10 bg-gray-200 rounded"></div>
					<div className="h-4 w-10 bg-gray-200 rounded"></div>
					<div className="h-4 w-10 bg-gray-200 rounded"></div>
				</div>

				<hr className="h-[1px] bg-gray-300 my-[16px]" />

				<div className="w-full flex items-end gap-3 justify-end">
					<div className="h-4 w-24 bg-gray-200 rounded"></div>
					<div className="h-4 w-24 bg-gray-200 rounded"></div>
					<div className="h-4 w-24 bg-gray-200 rounded"></div>
				</div>
			</div>
		</div>
	);
};

export default UserProfileRoadmapsLoader;
