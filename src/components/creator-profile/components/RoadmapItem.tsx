"use client";

import { DEVOPS_ICON, VERIFIED_ICON } from "@public/icons/creator";
import {
	SHARE_ICON,
	STEPS_ICON,
	USERS_ICON,
} from "@public/icons/roadmapPreview";
import {
	BOOKMARK_ICON,
	DURATION_ICON,
	MENU_ICON,
} from "@public/icons/roadmapSteps";
import Image from "next/image";
import React from "react";
import avatar from "@public/pp.jpeg";
import { PLAY_ICON } from "@public/icons/landingPage";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RoadmapItem = () => {
	const { push } = useRouter();

	return (
		<li className="bg-white rounded-[12px] p-[12px] md:p-[24px] mt-4">
			<div className="flex justify-between items-start gap-2">
				<div className="flex gap-2">
					<div className="w-[40px] h-[40px] flex-jc-c my-auto rounded-[8px] bg-primary-ultramarineBlue text-white">
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

			<div className="flex flex-col sm:flex-row gap-4 justify-between">
				<Link
					href={`/user/userId`}
					className="mt-4 flex items-center gap-2 group"
				>
					<Image
						src={avatar}
						width={100}
						height={100}
						alt="avatar"
						className="w-[30px] h-[30px] rounded-full object-cover"
					/>

					<div className="flex justify-center flex-col">
						<h3 className="flex items-center gap-1 text-[14px] text-[#202020] group-hover:underline">
							Mohamed Elhossiny {VERIFIED_ICON}
						</h3>
						<span className="text-[12px] text-[#79828B]">mhmdlogan</span>
					</div>
				</Link>

				<div className="flex-jc-c [&>button]:w-full [&>button]:flex-jc-c [&>button]:gap-2 gap-3 [&>button]:py-[6px] [&>button]:px-[12px] [&>button]:rounded-[5px] text-[#383838] text-[14px] font-inter font-semibold">
					<button
						onClick={() =>
							push("/roadmap/28c6c08b-30cd-4717-8fd0-a47baa4c40fa")
						}
						className="bg-[#F5F5F5]"
					>
						{PLAY_ICON} Preview
					</button>
					<button
						onClick={() => push("/auth/login")}
						className="bg-primary-ultramarineBlue text-white"
					>
						Subscribe
					</button>
				</div>
			</div>
		</li>
	);
};

export default RoadmapItem;
