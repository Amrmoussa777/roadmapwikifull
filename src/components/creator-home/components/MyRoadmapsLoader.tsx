import React from "react";

const MyRoadmapsLoader = () => {
	return (
		<section className="mt-10 animate-pulse">
			<div className="flex justify-between items-center">
				<div className="h-6 bg-gray-200 rounded w-1/4"></div>
				<div className="w-1/4 h-6 bg-gray-200 rounded"></div>
			</div>

			<ul className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 mt-4">
				<li className="py-8 px-6 bg-white rounded-md shadow">
					<div className="w-full flex justify-between items-start gap-2">
						<div className="w-full flex flex-col justify-between gap-2">
							<div className="w-10 h-10 bg-gray-200 rounded"></div>

							<div className="h-5 bg-gray-200 rounded w-full"></div>

							<div className="flex flex-col gap-2">
								<div className="flex items-center">
									<div className="flex flex-row justify-between min-w-max-full">
										<div className="h-4 bg-gray-200 rounded w-1/3"></div>
										<div className="h-4 bg-gray-200 rounded w-1/3"></div>
										<div className="h-4 bg-gray-200 rounded w-1/3"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex gap-2 ml-auto text-[#898989]">
							<div className="w-6 h-6 bg-gray-200 rounded"></div>
							<div className="w-6 h-6 bg-gray-200 rounded"></div>
							<div className="w-6 h-6 bg-gray-200 rounded"></div>
						</div>
					</div>

					<div className="flex items-center gap-2 md:gap-3 text-[12px] md:text-[14px] mt-4">
						<div className="h-4 bg-gray-200 rounded w-1/6"></div>
						<div className="h-4 bg-gray-200 rounded w-1/6"></div>
						<div className="h-4 bg-gray-200 rounded w-1/6"></div>
					</div>
				</li>
				<li className="py-8 px-6 bg-white rounded-md shadow">
					<div className="w-full flex justify-between items-start gap-2">
						<div className="w-full flex flex-col justify-between gap-2">
							<div className="w-10 h-10 bg-gray-200 rounded"></div>

							<div className="h-5 bg-gray-200 rounded w-full"></div>

							<div className="flex flex-col gap-2">
								<div className="flex items-center">
									<div className="flex flex-row justify-between min-w-max-full">
										<div className="h-4 bg-gray-200 rounded w-1/3"></div>
										<div className="h-4 bg-gray-200 rounded w-1/3"></div>
										<div className="h-4 bg-gray-200 rounded w-1/3"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex gap-2 ml-auto text-[#898989]">
							<div className="w-6 h-6 bg-gray-200 rounded"></div>
							<div className="w-6 h-6 bg-gray-200 rounded"></div>
							<div className="w-6 h-6 bg-gray-200 rounded"></div>
						</div>
					</div>

					<div className="flex items-center gap-2 md:gap-3 text-[12px] md:text-[14px] mt-4">
						<div className="h-4 bg-gray-200 rounded w-1/6"></div>
						<div className="h-4 bg-gray-200 rounded w-1/6"></div>
						<div className="h-4 bg-gray-200 rounded w-1/6"></div>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default MyRoadmapsLoader;
