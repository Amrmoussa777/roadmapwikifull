"use client";

import React from "react";
import {
	EXPAND_ICON,
	SEARCH_ICON,
} from "../../../../../public/icons/roadmapPreview";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import RoadmapDiscussionPosts from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPosts";
import useToggle from "@/hooks/useToggle";
import useDisableScroll from "@/hooks/useDisableScrolling";
import { CROSS_ICON } from "../../../../../public/icons/roadmapSteps";
import RoadmapDiscussionSearchFrom from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionSearchFrom";

const RoadmapDiscussion = () => {
	const { currentState: isExpandedDiscussion, toggle: toggleDiscussion } =
		useToggle(false);
	const { currentState: isSearchOpen, toggle: toggleSearch } = useToggle(false);
	useDisableScroll(isExpandedDiscussion);

	return (
		<div
			className={`bg-white rounded-md p-4 transition-all duration-300 ${
				isExpandedDiscussion
					? "fixed w-screen h-screen left-0 top-0 overflow-y-auto z-10"
					: "relative"
			}`}
		>
			<div className="flex-jb-c h-[50px]">
				{isSearchOpen ? (
					<div onBlur={toggleSearch}>
						<RoadmapDiscussionSearchFrom />
					</div>
				) : (
					<div>
						<h3>Discussion</h3>
						<p className="text-grey-secondary">4 new comments</p>
					</div>
				)}

				<div className="flex-jc-c [&>button:hover]:text-primary-dark [&>button]:text-grey-icon transition-all">
					<button className="w-[40px] h-[40px]" onClick={toggleDiscussion}>
						{isExpandedDiscussion ? CROSS_ICON : EXPAND_ICON}
					</button>
					<button className="w-[40px] h-[40px]" onClick={toggleSearch}>
						{SEARCH_ICON}
					</button>
				</div>
			</div>

			<HorizontalDivider
				height="h-[0.25px]"
				bgColor="bg-[#E0E0E0]"
				customStyles="my-6"
			/>

			<RoadmapDiscussionPosts />
		</div>
	);
};

export default RoadmapDiscussion;
