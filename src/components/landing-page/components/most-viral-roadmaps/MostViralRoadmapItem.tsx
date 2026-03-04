import { MOST_VIRAL_ROADMAP_ICON, PLAY_ICON } from "@public/icons/landingPage";
import { STEPS_ICON, USERS_ICON } from "@public/icons/roadmapPreview";
import { DURATION_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";

const MostViralRoadmapItem = ({
	id,
	title,
	author,
	duration,
	steps,
	subscribers,
}: {
	id: string;
	title: string;
	author: string;
	duration: string;
	steps: number;
	subscribers: number;
}) => {
	return (
		<li className="w-full md:h-[80px] flex flex-col md:flex-row items-center gap-2 mb-3 rounded-2xl py-2 px-2 md:px-[18px] bg-white/15 backdrop-blur-sm border border-white/20 shadow-[0_1px_8px_rgba(0,0,0,0.05)] hover:bg-white/25 hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300">
			<div className="w-full flex gap-2">
				<span className="text-white/40 [&>svg]:w-[30px] md:[&>svg]:w-[40px]">
					{MOST_VIRAL_ROADMAP_ICON}
				</span>

				<div>
					<Link href={`/roadmap/${id}`} className="text-[16px] md:text-[18px] font-semibold text-white hover:text-white/80 transition-colors duration-200">
						{title}
					</Link>

					<div className="flex flex-wrap justify-between items-center gap-2 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-white/60 [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-white/40">
						<span>{author}</span>
						<span className="min-w-[70px]">{DURATION_ICON} {duration}</span>
						<span className="min-w-[70px]">{STEPS_ICON} {steps} Steps</span>
						<span className="min-w-[70px]">{USERS_ICON} {subscribers.toLocaleString()} Subs</span>
					</div>
				</div>
			</div>

			<div className="h-full md:ml-auto flex-jc-c gap-2 self-end">
				<h3 className="text-[18px] text-white/40 font-medium font-inter">
					Free
				</h3>
				<Link
					href={`/roadmap/${id}`}
					className="w-[114px] h-[36px] flex-jc-c gap-1 md:gap-2 bg-white/10 hover:bg-white hover:text-[#506CF0] text-white/80 font-inter font-medium text-[14px] rounded-full border border-white/20 hover:border-transparent transition-all duration-300"
				>
					{PLAY_ICON} Preview
				</Link>
			</div>
		</li>
	);
};

export default MostViralRoadmapItem;
