import { MOST_VIRAL_ROADMAP_ICON, PLAY_ICON } from "@public/icons/landingPage";
import { STEPS_ICON, USERS_ICON } from "@public/icons/roadmapPreview";
import { DURATION_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const MostViralRoadmapItem = () => {
	return (
		<li className="w-full md:h-[80px] flex flex-col md:flex-row items-center gap-2 mb-4 rounded-[12px] py-2 px-2 md:px-[18px] border border-[#D8D8D8]">
			<div className="w-full flex gap-2">
				<span className="text-[#D8D8D8] [&>svg]:w-[30px] md:[&>svg]:w-[40px]">
					{MOST_VIRAL_ROADMAP_ICON}
				</span>

				<div>
					<h3 className="text-[16px] md:text-[18px] font-semibold text-[#202020]">
						DevOps Roadmap
					</h3>

					<div className="flex flex-wrap justify-between items-center gap-2 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-[#79828B] [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-[#ACB5B7]">
						<span>Amr Mousa</span>
						<span className="min-w-[70px]">{DURATION_ICON} 3 Weeks</span>
						<span className="min-w-[70px]">{STEPS_ICON} 20 Steps</span>
						<span className="min-w-[70px]">{USERS_ICON} 32 Subscribe</span>
					</div>
				</div>
			</div>

			<div className="md:ml-auto flex-jc-c gap-2 self-end">
				<h3 className="text-[18px] text-[#979797] font-medium font-inter">
					Free
				</h3>
				<button className="w-[114px] h-[36px] flex-jc-c gap-1 md:gap-2 bg-[#F5F5F5] text-[#383838] font-inter font-medium text-[14px] rounded-[5px]">
					{PLAY_ICON} Preview
				</button>
			</div>
		</li>
	);
};

export default MostViralRoadmapItem;
