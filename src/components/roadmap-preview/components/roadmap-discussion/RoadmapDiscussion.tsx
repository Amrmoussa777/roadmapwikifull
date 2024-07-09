"use client";

import React from "react";
import { EXPAND_ICON, SEARCH_ICON } from "@public/icons/roadmapPreview";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import RoadmapDiscussionPosts from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPosts";
import useDisableScroll from "@/hooks/useDisableScrolling";
import { CROSS_ICON } from "@public/icons/roadmapSteps";
import RoadmapDiscussionSearchFrom from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionSearchFrom";
import { useAppSelector } from "@/redux/store";
import PostsPagination from "@/components/roadmap-preview/components/pagination/components/PostsPagination";
import { useRoadmapDiscussion } from "@/components/roadmap-preview/components/roadmap-discussion/hooks/useRoadmapDiscussion";

const RoadmapDiscussion = () => {
	const {
		isExpandedDiscussion,
		pageNumber,
		handleMoreComments,
		isSearchOpen,
		toggleSearch,
		toggleDiscussion,
	} = useRoadmapDiscussion();
	useDisableScroll(isExpandedDiscussion);
	const { posts } = useAppSelector(state => state.roadmapPreviewPosts);

	if (!posts.list.length) return;

	return (
		<div
			className={`bg-white rounded-md p-2 md:p-4 transition-all duration-300 ${
				isExpandedDiscussion
					? "fixed w-screen h-screen left-0 top-[64px] overflow-y-auto z-10"
					: "relative"
			}`}
		>
			<div className="flex-jb-c h-[50px]">
				{isSearchOpen ? (
					<div>
						<RoadmapDiscussionSearchFrom />
					</div>
				) : (
					<div>
						<h3 className="font-inter text-[#181818] font-semibold">
							Discussion
						</h3>
					</div>
				)}

				<div className="flex-jc-c [&>button:hover]:text-primary-dark [&>button]:text-grey-icon transition-all">
					<button className="w-[40px] h-[40px]" onClick={toggleDiscussion}>
						{isExpandedDiscussion ? CROSS_ICON : EXPAND_ICON}
					</button>
					{/* <button className="w-[40px] h-[40px]">{SEARCH_ICON}</button> */}
				</div>
			</div>

			<HorizontalDivider
				height="h-[0.25px]"
				bgColor="bg-[#E0E0E0]"
				customStyles="my-4"
			/>

			<RoadmapDiscussionPosts />

			<PostsPagination handleMoreComments={handleMoreComments} />
		</div>
	);
};

export default RoadmapDiscussion;
