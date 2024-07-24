import { CHECK_PLAN, EURO_CURRENCY_ICON } from "@public/icons/plans";
import React from "react";

const CurrentRoadmapPlan = () => {
	return (
		<div className="w-full lg:max-w-[610px] flex flex-col sm:flex-row justify-between mt-8 rounded-[16px] bg-white p-6 lg:p-[32px]">
			<div className="flex flex-col">
				<h3 className="text-[30px] font-semibold text-black">Free Plan</h3>

				<div className="mt-6 mb-4 sm:mb-16 flex items-center gap-2">
					<span className="text-[#4D4D4D] inline-block">
						{EURO_CURRENCY_ICON}
					</span>
					<span className="text-[#4D4D4D] text-[18px] font-inter font-bold">
						0
					</span>
					<span className="text-[#4D4D4D] font-inter">/user</span>
				</div>

				<span className="w-[120px] font-semibold font-inter mt-auto bg-primary-ultramarineBlue/10 text-primary-ultramarineBlue p-[10px] rounded-[8px]">
					Current plan
				</span>
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
						<strong className="text-[#4C4C4C] font-">view full roadmap</strong>.
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
	);
};

export default CurrentRoadmapPlan;
