import { PROGRAMMING_ICON } from "@public/icons/landingPage";
import { STEPS_ICON } from "@public/icons/roadmapPreview";
import React from "react";
import normalMockup from "@public/Normal-Mockup.svg";
import Image from "@/components/common/image/CustomImage";

const CreatorItem = ({
	name,
	handle,
	category,
}: {
	name: string;
	handle: string;
	category: string;
}) => {
	return (
		<div className="flex flex-col justify-center items-center gap-5 w-[217px]">
			<div className="w-fit flex-jc-c gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#506CF0]/[0.06] to-[#7C5CFC]/[0.06] border border-[#506CF0]/10 text-[#506CF0]">
				{PROGRAMMING_ICON}
				<span className="text-[13px] font-inter font-medium">{category}</span>
			</div>

			<div className="w-full h-[52px] rounded-xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-[1px]">
				<div className="w-full h-full flex-jb-c px-[12px] bg-white rounded-xl">
					<div>
						<h3 className="font-inter font-semibold text-[12px] text-[#111]">
							{name}
						</h3>
						<p className="font-inter font-normal text-[10px] text-[#9CA3AF]">
							{handle}
						</p>
					</div>

					<div className="flex-jc-c gap-2 [&>div]:flex-jc-c [&>div]:gap-1 [&>div>p]:text-[13px] [&>div>p]:font-inter [&>div>p]:font-medium [&>div>p]:text-[#9CA3AF]">
						<div>
							{STEPS_ICON} <p>22</p>
						</div>
						<div>
							{STEPS_ICON} <p>22</p>
						</div>
					</div>
				</div>
			</div>

			<Image src={normalMockup} width={400} height={400} alt="normalMockup" />
		</div>
	);
};

export default CreatorItem;
