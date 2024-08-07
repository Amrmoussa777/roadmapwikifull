"use client";

import { DEVOPS_ICON } from "@public/icons/creator";
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
import React, { useContext, useState } from "react";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import Link from "next/link";
import { ROADMAP_ICONS } from "@/config/roadmapIcons";
import { ROADMAP_ICON } from "@public/icons/landingPage";
import ShareModal from "@/components/common/modal/components/ShareModal";
import useToggle from "@/hooks/useToggle";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useRouter } from "next/navigation";

const LatestRoadmap = ({
	id,
	title,
	duration,
	status,
	_count,
	category,
	userId,
	primaryColor,
}: RoadmapType) => {
	const [roadmapShareId, setRoadmapShareId] = useState("");
	const { currentState: shareModal, toggle: toggleShareModal } =
		useToggle(false);
	const { currentUser } = useContext(CurrentUserContext);
	const { push } = useRouter();
	const { steps } = _count;
	const roadmapIcon = ROADMAP_ICONS.find(icon => icon.name === category);

	return (
		<>
			<li className="h-fit flex justify-between flex-col bg-white rounded-[12px] p-[24px] mt-4 shadow-csm">
				<div className="flex justify-between items-start h-full gap-2">
					<div className="h-full flex flex-col justify-between gap-2">
						<div
							style={{ backgroundColor: primaryColor }}
							className="min-w-[40px] w-[40px] min-h-[40px] h-[40px] [&>svg]:w-[30px] flex-jc-c rounded-[8px] bg-primary-ultramarineBlue text-white"
						>
							{roadmapIcon?.icon || ROADMAP_ICON}
						</div>

						<Link
							href={`/roadmap/${id}`}
							className="w-fit text-[18px] text-[#202020] font-inter font-semibold hover:text-primary-ultramarineBlue transition duration-200"
						>
							{title}
						</Link>

						<div className="flex flex-col gap-2">
							<div className="hidden sm:flex flex-wrap items-center gap-2 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-[#383838] [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-[#ACB5B7]">
								<span>
									{DURATION_ICON} {duration}
								</span>
								<span>
									{STEPS_ICON} {steps} Steps
								</span>
								<span>{USERS_ICON} 32 Subscribe</span>
								{status === "DRAFT" ? (
									<div className="h-[20px] text-[12px] text-[#79828B] bg-[#F6F6F6] rounded-full px-[8px]">
										<p>Not published</p>
									</div>
								) : null}
							</div>
						</div>
					</div>

					<div className="ml-auto md:ml-0 flex-jc-c gap-2 text-[#898989] [&>button]:duration-200 [&>button]:transition [&>button:hover]:text-black [&>button]:w-[24px] [&>button]:h-[24px] [&>button>svg]:w-[24px] [&>button>svg]:h-[24px]">
						<button
							onClick={() => {
								setRoadmapShareId(id);
								toggleShareModal();
							}}
						>
							{SHARE_ICON}
						</button>
						<button>{BOOKMARK_ICON}</button>
						<button>{MENU_ICON}</button>
					</div>
				</div>

				<div className="sm:hidden flex flex-wrap justify-start items-center gap-2 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-[#898989] [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-[#ACB5B7]">
					<span className="min-w-[70px]">
						{DURATION_ICON} {duration} Weeks
					</span>
					<span className="min-w-[70px]">
						{STEPS_ICON} {steps} Steps
					</span>
					<span className="min-w-[70px]">{USERS_ICON} 32 Subscribe</span>

					{status === "DRAFT" ? (
						<div className="h-[20px] text-[12px] text-[#79828B] bg-[#F6F6F6] rounded-full px-[8px]">
							<p>Not published</p>
						</div>
					) : null}
				</div>

				{userId === currentUser?.id && (
					<button
						onClick={() => push(`/builder/${id}/steps`)}
						className="w-fit bg-[#F5F5F5] border border-transparent hover:shadow-csm hover:border-[#ACB5B7] hover:bg-white hover:text-primary-ultramarineBlue ml-auto flex-jc-c py-[6px] px-[6px] sm:px-[12px] rounded-[5px] text-[#383838] text-[12px] sm:text-[14px] font-inter font-semibold transition duration-200"
					>
						{status === "PUBLISHED" ? "Edit" : "Publish"}
					</button>
				)}
			</li>

			<ShareModal
				title="Share link"
				link={`https://roadmapwiki.com/roadmap/${roadmapShareId}`}
				messageText="Share this roadmap"
				open={shareModal}
				toggleShareModal={toggleShareModal}
			/>
		</>
	);
};

export default LatestRoadmap;
