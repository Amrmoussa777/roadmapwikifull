import { MOST_VIRAL_ROADMAP_ICON, PLAY_ICON } from "@public/icons/landingPage";
import { STEPS_ICON, USERS_ICON } from "@public/icons/roadmapPreview";
import { DURATION_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const MostViralRoadmapItem = ({
	title,
	author,
	duration,
	steps,
	subscribers,
}: {
	title: string;
	author: string;
	duration: string;
	steps: number;
	subscribers: number;
}) => {
	return (
		<li className="w-full md:h-[80px] flex flex-col md:flex-row items-center gap-2 mb-3 rounded-2xl py-2 px-2 md:px-[18px] bg-white border border-black/[0.05] shadow-[0_1px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(80,108,240,0.08)] hover:border-[#506CF0]/15 transition-all duration-300">
			<div className="w-full flex gap-2">
				<span className="text-[#D8D8D8] [&>svg]:w-[30px] md:[&>svg]:w-[40px]">
					{MOST_VIRAL_ROADMAP_ICON}
				</span>

				<div>
					<h3 className="text-[16px] md:text-[18px] font-semibold text-[#111]">
						{title}
					</h3>

					<div className="flex flex-wrap justify-between items-center gap-2 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-[#9CA3AF] [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-[#C4CDD5]">
						<span>{author}</span>
						<span className="min-w-[70px]">{DURATION_ICON} {duration}</span>
						<span className="min-w-[70px]">{STEPS_ICON} {steps} Steps</span>
						<span className="min-w-[70px]">{USERS_ICON} {subscribers.toLocaleString()} Subs</span>
					</div>
				</div>
			</div>

			<div className="h-full md:ml-auto flex-jc-c gap-2 self-end">
				<h3 className="text-[18px] text-[#C4CDD5] font-medium font-inter">
					Free
				</h3>
				<button className="w-[114px] h-[36px] flex-jc-c gap-1 md:gap-2 bg-[#FAFBFC] hover:bg-gradient-to-r hover:from-[#506CF0] hover:to-[#7C5CFC] hover:text-white text-[#5A5A5A] font-inter font-medium text-[14px] rounded-full border border-black/[0.05] hover:border-transparent transition-all duration-300">
					{PLAY_ICON} Preview
				</button>
			</div>
		</li>
	);
};

export default MostViralRoadmapItem;
