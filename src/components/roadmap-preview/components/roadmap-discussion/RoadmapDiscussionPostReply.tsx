import { RoadmapPostReplyType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";
import useToggle from "@/hooks/useToggle";
import Image from "next/image";
import React from "react";
import AuthorImage from "../../../../../public/pp.jpeg";
import {
	REPLY_ICON,
	UP_VOTE_ICON,
} from "../../../../../public/icons/roadmapPreview";
import { MENU_ICON } from "../../../../../public/icons/roadmapSteps";
import { useAppDispatch } from "@/redux/store";
import {
	fillReplyPostId,
	togglePostReplyVote,
} from "@/redux/slices/roadmaps/roadmapPreviewPostsSlice";

const RoadmapDiscussionPostReply = ({
	id,
	content,
	author,
	addedDate,
	postId,
	votes,
}: RoadmapPostReplyType) => {
	const { currentState: isVoted, toggle: toggleVote } = useToggle(false);

	const dispatch = useAppDispatch();

	const handleToggleVote = () => {
		toggleVote();
		dispatch(
			togglePostReplyVote({
				postId,
				replyId: id,
				type: isVoted ? "decrease" : "increase",
			})
		);
	};

	return (
		<div
			key={id}
			className="relative flex justify-between items-start gap-2 p-2 ml-4 rounded-md"
		>
			<Image
				src={AuthorImage}
				width={100}
				height={100}
				alt="author-pic"
				className="w-[32px] h-[32px] object-cover rounded-full"
			/>

			<div className="w-full grid">
				<h3 className="text-[13px] text-[#181818] font-inter font-medium">
					{author.name}{" "}
					<span className="ml-1 text-[#9C9DA4] text-[13px] font-normal">
						{addedDate}
					</span>
				</h3>
				<p className="text-[12px] text-grey-secondary font-inter font-light">
					{content}
				</p>
				<div className="flex items-center gap-3 mt-2 text-sm font-inter font-normal text-[#79828B]">
					<button
						onClick={handleToggleVote}
						className={`flex-jc-c text-[#79828B] [&>svg]:w-[20px] vote-btn ${
							isVoted ? "voted" : ""
						}`}
					>
						{UP_VOTE_ICON} {votes}
					</button>
					<button
						onClick={() =>
							dispatch(
								fillReplyPostId({ replyPostId: postId, replyType: "reply" })
							)
						}
						className="flex-jc-c gap-1 [&>svg]:w-[20px] text-[#ADAEB5] text-[12px] font-inter font-normal"
					>
						{REPLY_ICON} <span>Reply</span>
					</button>
				</div>
			</div>

			<button className="rotate-90 text-grey-secondary [&>svg]:w-[20px]">
				{MENU_ICON}
			</button>
		</div>
	);
};

export default RoadmapDiscussionPostReply;
