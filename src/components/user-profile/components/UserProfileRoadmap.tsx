import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import { DEVOPS_ICON } from "@public/icons/creator";
import { PLAY_ICON } from "@public/icons/landingPage";
import {
	SHARE_ICON,
	STEPS_ICON,
	USERS_ICON,
} from "@public/icons/roadmapPreview";
import {
	BOOKMARK_ICON,
	CHECK_ICON,
	DURATION_ICON,
	MENU_ICON,
} from "@public/icons/roadmapSteps";
import { COMMENT_ICON } from "@public/icons/userProfile";
import Link from "next/link";
import React from "react";

const UserProfileRoadmap = () => {
	return (
		<li className="bg-white rounded-[12px] p-[12px] lg:p-[24px] mt-4 border border-[#D8D8D8]">
			<div className="flex justify-between items-start gap-2">
				<div className="flex gap-2">
					<div className="min-w-[40px] min-h-[40px] flex-jc-c my-auto rounded-[8px] bg-primary-ultramarineBlue text-white">
						{DEVOPS_ICON}
					</div>

					<div className="flex flex-col gap-2">
						<h3 className="text-[18px] text-[#202020] font-inter font-semibold">
							DevOps Roadmap
						</h3>

						<div className="hidden sm:flex flex-wrap justify-between items-center gap-2 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-[#79828B] [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-[#ACB5B7]">
							<span className="min-w-[70px]">{DURATION_ICON} 3 Weeks</span>
							<span className="min-w-[70px]">{STEPS_ICON} 20 Steps</span>
							<span className="min-w-[70px]">{USERS_ICON} 32 Subscribe</span>
						</div>
					</div>
				</div>

				<div className="ml-auto md:ml-0 flex-jc-c gap-2 text-[#898989] [&>button]:w-[24px] [&>button]:h-[24px] [&>button>svg]:w-[24px] [&>button>svg]:h-[24px]">
					<button>{SHARE_ICON}</button>
					<button>{BOOKMARK_ICON}</button>
					<button>{MENU_ICON}</button>
				</div>
			</div>

			<div className="sm:hidden flex flex-wrap justify-start items-center gap-2 mt-4 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-[#79828B] [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-[#ACB5B7]">
				<span className="min-w-[70px]">{DURATION_ICON} 3 Weeks</span>
				<span className="min-w-[70px]">{STEPS_ICON} 20 Steps</span>
				<span className="min-w-[70px]">{USERS_ICON} 32 Subscribe</span>
			</div>

			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#D8D8D8]"
				customStyles="my-[16px]"
			/>

			<div className="flex items-center gap-3">
				<div className="flex-jc-c gap-[4px]">
					<span className="text-[#00CF7C]">{CHECK_ICON}</span>{" "}
					<p className="font-inter font-medium text-[12px] text-[#383838]">
						05/25 Completed
					</p>
				</div>
				<div className="flex-jc-c gap-[4px]">
					<span className="text-[#00CF7C]">{COMMENT_ICON}</span>{" "}
					<p className="font-inter font-medium text-[12px] text-[#383838]">
						4 new comments
					</p>
				</div>
				<Link href={`/roadmap/roadmapId`} className="flex-jc-c gap-[4px]">
					<span className="text-[#ACB5B7]">{PLAY_ICON}</span>{" "}
					<p className="font-inter font-medium text-[12px] text-[#383838]">
						Preview
					</p>
				</Link>
			</div>
		</li>
	);
};

export default UserProfileRoadmap;
