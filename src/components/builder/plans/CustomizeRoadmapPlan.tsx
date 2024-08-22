import CustomizeRoadmapPlanFeatures from "@/components/builder/plans/CustomizeRoadmapPlanFeatures";
import SetRoadmapPrice from "@/components/builder/plans/SetRoadmapPrice";
import React from "react";

const CustomizeRoadmapPlan = () => {
	return (
		<div className="relative mt-[64px]">
			<div className="w-full flex flex-col sm:flex-row justify-between mt-8 rounded-[16px] bg-white p-6 lg:p-[32px] z-10">
				<div className="flex flex-col">
					<h3 className="text-[30px] font-semibold text-black">
						Standard Plan
					</h3>

					<SetRoadmapPrice />
				</div>

				<CustomizeRoadmapPlanFeatures />
			</div>

			<div className="absolute w-[164px] h-[148px] top-[-32px] left-0 rounded-[12px] text-white p-[5px] text-center bg-[#383838] -z-10">
				<h3 className="uppercase">Coming Soon</h3>
			</div>
		</div>
	);
};

export default CustomizeRoadmapPlan;
