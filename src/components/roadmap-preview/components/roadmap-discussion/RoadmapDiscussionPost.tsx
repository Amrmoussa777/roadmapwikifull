import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";
import React from "react";
import AuthorImage from "../../../../../public/pp.jpeg";
import Image from "next/image";
import {
	REPLY_ICON,
	UP_VOTE_ICON,
} from "../../../../../public/icons/roadmapPreview";
import { MENU_ICON } from "../../../../../public/icons/roadmapSteps";
import RoadmapDiscussionPostReplies from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPostReplies";
import useToggle from "@/hooks/useToggle";
import { useAppDispatch } from "@/redux/store";
import {
	fillReplyPostId,
	togglePostVote,
} from "@/redux/slices/roadmaps/roadmapPreviewPostsSlice";

const RoadmapDiscussionPost = ({
	id,
	author,
	addedDate,
	content,
	replies,
	roadmapId,
	votes,
}: RoadmapPostType) => {
	const { currentState: isVoted, toggle: toggleVote } = useToggle(false);

	const dispatch = useAppDispatch();

	const handleToggleVote = () => {
		toggleVote();
		dispatch(
			togglePostVote({ postId: id, type: isVoted ? "decrease" : "increase" })
		);
	};

	return (
		<>
			<div className="relative flex justify-between items-start gap-2 border border-[#E0E0E0] p-4 rounded-md">
				<Image
					src={AuthorImage}
					width={100}
					height={100}
					alt="author-pic"
					className="w-[32px] h-[32px] object-cover rounded-full"
				/>

				<div className="w-full grid">
					<h3 className="text-[14px] text-[#181818] font-inter font-medium">
						{author.name}{" "}
						<span className="text-[#9C9DA4] ml-1 text-[14px] font-normal">
							{addedDate}
						</span>
					</h3>
					<p className="text-grey-secondary font-inter font-light text-[14px]">
						{content}
					</p>
					<div className="flex items-center gap-3 mt-2">
						<button
							className={`flex-jc-c text-[#79828B] vote-btn text-[16px] font-inter font-medium ${
								isVoted ? "voted" : ""
							}`}
							onClick={handleToggleVote}
						>
							{UP_VOTE_ICON} {votes}
						</button>
						<button
							onClick={() =>
								dispatch(
									fillReplyPostId({ replyPostId: id, replyType: "comment" })
								)
							}
							className="flex-jc-c gap-1 text-[#ADAEB5] text-[14px] font-inter font-medium"
						>
							{REPLY_ICON} <span>Comment</span>
						</button>
					</div>
				</div>

				<button className="rotate-90 text-grey-secondary">{MENU_ICON}</button>
			</div>

			<RoadmapDiscussionPostReplies replies={replies} />
		</>
	);
};

export default RoadmapDiscussionPost;
