"use client";

import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import PathnameHelper from "@/helpers/pathname.helper";
import { ROADMAP_LOGO } from "@public/icons/landingPage";
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
			</div>
		</div>
	);
};

export default CreateNewRoadmapHeader;
