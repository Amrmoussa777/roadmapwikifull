"use client";

import React from "react";
import { EXPAND_ICON } from "@public/icons/roadmapPreview";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import RoadmapDiscussionPosts from "@/components/roadmap-preview/components/roadmap-discussion/components/RoadmapDiscussionPosts";
import useDisableScroll from "@/hooks/useDisableScrolling";
import { CROSS_ICON } from "@public/icons/roadmapSteps";
import { useAppSelector } from "@/redux/store";
import PostsPagination from "@/components/roadmap-preview/components/pagination/components/PostsPagination";
import { useRoadmapDiscussion } from "@/components/roadmap-preview/components/roadmap-discussion/hooks/useRoadmapDiscussion";
import RoadmapDiscussionAddPostForm from "@/components/roadmap-preview/components/roadmap-discussion/components/RoadmapDiscussionAddPostForm";
import NumberStats from "@/components/common/states/NumberStats";

const RoadmapDiscussion = () => {
	const { isExpandedDiscussion, handleMoreComments, toggleDiscussion } =
		useRoadmapDiscussion();
	useDisableScroll(isExpandedDiscussion);
	const { posts } = useAppSelector(state => state.roadmapPreviewPosts);

	return (
		<div
			className={`bg-white rounded-md p-2 md:p-4 transition-all duration-300 ${
				isExpandedDiscussion
					? "fixed w-screen h-screen left-0 top-0 overflow-y-auto z-50"
					: "relative"
			}`}
		>
			<div className="flex-jb-c h-[50px]">
				<div>
					<h3 className="font-inter text-[#181818] font-semibold">
						Discussion
					</h3>
				</div>

				<div className="flex-jc-c [&>button:hover]:text-primary-dark [&>button]:text-grey-icon transition-all">
					<button
						className={`w-[40px] h-[40px] flex-jc-c ${
							!isExpandedDiscussion ? "hover:scale-125" : ""
						} transition duration-200`}
						onClick={toggleDiscussion}
					>
						{isExpandedDiscussion ? CROSS_ICON : EXPAND_ICON}
					</button>
					{/* <button className="w-[40px] h-[40px]">{SEARCH_ICON}</button> */}
				</div>
			</div>

			<RoadmapDiscussionAddPostForm />

			{posts.list.length ? (
				<>
					<HorizontalDivider
						height="h-[0.25px]"
						bgColor="bg-[#E0E0E0]"
						customStyles="my-4"
					/>

					<RoadmapDiscussionPosts />

					<PostsPagination handleMoreComments={handleMoreComments} />
				</>
			) : (
				<NumberStats text="No posts yet!" />
			)}
		</div>
	);
};

export default RoadmapDiscussion;
