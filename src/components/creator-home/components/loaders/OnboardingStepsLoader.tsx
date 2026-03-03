import React from "react";

const OnboardingStepsLoader = () => {
	return (
		<div className="w-full xl:max-w-[350px] xl:h-fit p-[24px] border border-[#DCDCDC] rounded-[12px] animate-pulse">
			<div className="flex justify-start gap-4">
				<div className="flex justify-start gap-4 animate-pulse">
					<div className="w-12 h-12 bg-gray-200 rounded-full"></div>
					<div>
						<div className="h-4 bg-gray-200 rounded w-24"></div>
						<div className="h-3 bg-gray-200 rounded w-16 mt-2"></div>
					</div>
				</div>
				<div>
					<div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
					<div className="h-3 bg-gray-200 rounded w-1/2"></div>
				</div>
			</div>

			<div className="h-[1px] bg-[#DCDCDC] my-[10px] lg:my-[20px]"></div>

			<ul className="h-[250px] xl:h-[200px] overflow-y-scroll">
				<li>
					<div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
					<div className="h-6 bg-gray-200 rounded w-1/2"></div>
				</li>
			</ul>

			<div className="h-[1px] bg-[#DCDCDC] my-[10px] lg:my-[20px]"></div>

			<div className="h-[37px] block mx-auto px-[20px] rounded-full bg-primary-ultramarineBlue"></div>
		</div>
	);
};

export default OnboardingStepsLoader;
