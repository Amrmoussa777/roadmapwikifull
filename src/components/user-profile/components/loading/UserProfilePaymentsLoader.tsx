import React from "react";

const UserProfilePaymentsLoader = () => {
	return (
		<div
			id="payments"
			className="bg-white sm:rounded-[12px] p-[18px] animate-pulse"
		>
			<div className="flex-jb-c mb-4">
				<div className="h-6 bg-gray-200 rounded w-1/3"></div>
			</div>

			<ul className="w-full">
				<li className="bg-[#F5F5F5] py-[20px] px-[24px]">
					<div className="w-full flex-jb-c gap-2">
						<div className="w-full flex items-center gap-2">
							<div className="h-5 w-5 bg-gray-200 rounded mr-2"></div>
							<div className="w-full flex flex-col">
								<div className="w-full font-inter font-medium text-[16px] text-black">
									<div className="h-4 bg-gray-200 rounded w-1/2"></div>
								</div>

								<div className="font-poppins font-normal text-[#606060] text[12px]">
									<div className="h-3 bg-gray-200 rounded w-full mt-1"></div>
									<div className="h-3 bg-gray-200 rounded w-2/3 mt-1"></div>
								</div>
							</div>
						</div>
					</div>
				</li>

				<li className="bg-[#F5F5F5] py-[20px] px-[24px]">
					<div className="w-full flex-jb-c gap-2">
						<div className="w-full flex items-center gap-2">
							<div className="h-5 w-5 bg-gray-200 rounded mr-2"></div>
							<div className="w-full flex flex-col">
								<div className="w-full font-inter font-medium text-[16px] text-black">
									<div className="h-4 bg-gray-200 rounded w-1/2"></div>
								</div>

								<div className="font-poppins font-normal text-[#606060] text[12px]">
									<div className="h-3 bg-gray-200 rounded w-full mt-1"></div>
									<div className="h-3 bg-gray-200 rounded w-2/3 mt-1"></div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default UserProfilePaymentsLoader;
