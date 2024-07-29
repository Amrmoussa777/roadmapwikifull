import GeneralStatisticsPreview from "@/components/creator-home/components/GeneralStatisticsPreview";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const GeneralStatistics = () => {
	return (
		<section className="mt-[40px]">
			<div className="flex-jb-c">
				<div>
					<h3 className="font-inter font-semibold text-[20px] text-[#1E293B]">
						General statistics
					</h3>
					<p className="text-[14px] text-[#898989] font-inter font-normal">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</div>

				<button className="flex-jc-c font-inter font-medium text-[14px] text-[#606060] hover:opacity-80 group transition duration-200">
					View more{" "}
					<span className="w-[17px] h-[17px] rotate-90 [&>svg]:w-[17px] [&>svg]:h-[17px] group-hover:translate-x-[2px] transition duration-200">
						{ARROW_ICON}
					</span>
				</button>
			</div>

			<GeneralStatisticsPreview />
		</section>
	);
};

export default GeneralStatistics;
