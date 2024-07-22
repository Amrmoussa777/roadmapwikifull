"use client";

import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import PathnameHelper from "@/helpers/pathname.helper";
import { ROADMAP_LOGO } from "@public/icons/landingPage";
import { NAVBAR_MENU_ICON } from "@public/icons/roadmapPreview";
import { SAVE_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CreateNewRoadmapHeader = () => {
	const pathname = usePathname();
	const lastPathname = PathnameHelper.getLastPathname(pathname);

	return (
		<div
			className={`relative w-full z-10 ${
				lastPathname !== "create-roadmap" ? "bg-white" : "null"
			}`}
		>
			<div className="h-[82px] flex-jb-c px-4 sm:px-6">
				<div className="h-full flex-jc-c">
					<Link href="/">{ROADMAP_LOGO}</Link>

					<VerticalDivider width="w-[1px]" bgColor="bg-black/5" />

					<h3 className="text-md sm:text-[20px] font-medium text-[#181818]">
						Create Roadmap
					</h3>
				</div>

				<div className="flex-jc-c gap-2">
					<button
						disabled
						className="w-[35px] sm:w-[100px] md:w-[132px] h-[35px] md:h-[40px] flex-jc-c gap-2 rounded-full text-white [&>svg]:w-[20px] [&>svg]:fill-white bg-primary-ultramarineBlue hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
					>
						{SAVE_ICON} <span className="hidden sm:block">Publish</span>
					</button>

					<button className="w-[35px] md:w-[40px] h-[35px] md:h-[40px] flex-jc-c border border-[#181818] rounded-full hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
						{NAVBAR_MENU_ICON}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateNewRoadmapHeader;
