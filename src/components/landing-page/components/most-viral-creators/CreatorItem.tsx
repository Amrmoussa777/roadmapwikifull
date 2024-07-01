import { PROGRAMMING_ICON } from "@public/icons/landingPage";
import { STEPS_ICON } from "@public/icons/roadmapPreview";
import React from "react";
import normalMockup from "@public/Normal-Mockup.svg";
import Image from "next/image";

const CreatorItem = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-6 w-[217px]">
			<div className="w-fit flex-jc-c gap-2 px-8 py-4 rounded-[8px] bg-[#506CF0]/10 text-black">
				{PROGRAMMING_ICON}
				<span className="text-[14px] font-inter font-normal">Programming</span>
			</div>

			<div className="w-full h-[48px] rounded-md bg-gradient-to-b from-[#EBECF2] to-transparent p-[1px]">
				<div className="w-full h-full flex-jb-c px-[12px] bg-background rounded-md">
					<div>
						<h3 className="font-inter font-semibold text-[12px]">
							Lena Stephens
						</h3>
						<p className="font-inter font-normal text-[10px] text-[#757D8A]">
							@lenasteph
						</p>
					</div>

					<div className="flex-jc-c gap-2 [&>div]:flex-jc-c [&>div]:gap-1 [&>div>p]:text-[14px] [&>div>p]:font-inter [&>div>p]:font-medium [&>div>p]:text-[#92929D]">
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
