import {
	ARROW_PLAN_ICON,
	CHECK_PLAN,
	EURO_CURRENCY_ICON,
} from "@public/icons/plans";
import React from "react";

const CustomizeRoadmapPlan = () => {
	return (
		<div className="relative mt-[64px]">
			<div className="w-full lg:max-w-[610px] flex flex-col sm:flex-row justify-between mt-8 rounded-[16px] bg-white p-6 lg:p-[32px] z-10">
				<div className="flex flex-col">
					<h3 className="text-[30px] font-semibold text-black">
						Standard Plan
					</h3>

					<div className="mt-6 mb-4 sm:mb-16 flex items-center gap-2">
						<span className="text-[#4D4D4D] inline-block">
							{EURO_CURRENCY_ICON}
						</span>
						<input
							type="number"
							className="max-w-[40px] text-[#4D4D4D] text-[18px] font-inter font-bold outline-none border-b-2 border-[#A6A6A6] hidden-input-number-arrows"
						/>
						<span className="text-[#4D4D4D] font-inter">/user</span>
					</div>

					<button className="w-[120px] flex-jc-c gap-2 font-semibold mt-auto bg-primary-ultramarineBlue text-white p-[10px] rounded-[8px]">
						Set price {ARROW_PLAN_ICON}
					</button>
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
