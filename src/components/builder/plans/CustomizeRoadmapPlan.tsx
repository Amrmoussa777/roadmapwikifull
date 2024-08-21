import SetRoadmapPrice from "@/components/builder/plans/SetRoadmapPrice";
import { CHECK_PLAN } from "@public/icons/plans";
import React from "react";

const CustomizeRoadmapPlan = () => {
	return (
		<div className="relative mt-[64px]">
			<div className="w-full lg:max-w-[610px] flex flex-col sm:flex-row justify-between mt-8 rounded-[16px] bg-white p-6 lg:p-[32px] z-10">
				<div className="flex flex-col">
					<h3 className="text-[30px] font-semibold text-black">
						Standard Plan
					</h3>

					<SetRoadmapPrice />
				</div>

				<ul className="flex flex-col gap-[16px] mt-8 sm:mt-0 text-[#AEAEAE] font-normal font-sans text-[14px]">
					<li className="flex gap-2">
						{" "}
						<span>{CHECK_PLAN}</span> <p>Lorem Ipsum is simply dummy text.</p>
					</li>
					<li className="flex gap-2">
						{" "}
						<span>{CHECK_PLAN}</span>{" "}
						<p>
							User can{" "}
							<strong className="text-[#4C4C4C] font-">
								view full roadmap
							</strong>
							.
						</p>
					</li>
					<li className="flex gap-2">
						{" "}
						<span>{CHECK_PLAN}</span>{" "}
						<p>
							Lorem Ipsum is simply dummy text{" "}
							<strong className="text-[#4C4C4C] font-">Example.</strong>
						</p>
					</li>
					<li className="flex gap-2">
						{" "}
						<span>{CHECK_PLAN}</span>{" "}
						<p>
							User can contact with{" "}
							<strong className="text-[#4C4C4C] font-">admin.</strong>
						</p>
					</li>
					<li className="flex gap-2">
						{" "}
						<span>{CHECK_PLAN}</span> <p>Lorem Ipsum is simply dummy text.</p>
					</li>
				</ul>
			</div>

			<div className="absolute w-[164px] h-[148px] top-[-32px] left-0 rounded-[12px] text-white p-[5px] text-center bg-[#383838] -z-10">
				<h3 className="uppercase">Coming Soon</h3>
			</div>
		</div>
	);
};

export default CustomizeRoadmapPlan;
