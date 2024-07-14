import useToggle from "@/hooks/useToggle";
import Image from "next/image";
import React, { useState } from "react";
import AuthorImage from "@public/pp.jpeg";
import { UP_VOTE_ICON } from "@public/icons/roadmapPreview";
import { MENU_ICON } from "@public/icons/roadmapSteps";
import { RoadmapPostReplyPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-post-replies.types";
import { UNKNOWN_USER_ICON } from "@public/icons/userProfile";
import { getCookie } from "cookies-next";
import axios from "axios";
import moment from "moment";

const RoadmapDiscussionPostReply = ({
	id,
	content,
	author,
	createdAt,
	_count,
	isVoted: initialIsVoted,
}: RoadmapPostReplyPostType) => {
	const { currentState: isVoted, toggle: toggleVoteUI } =
		useToggle(initialIsVoted);
	const [votesCount, setVotesCount] = useState(_count.votes);
	const { image, fullName } = author;

	const handleToggleVote = async () => {
		const accessToken = getCookie("accessToken");

		await axios({
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/comments/${id}/${
				isVoted ? "downvote" : "upvote"
			}`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		setVotesCount(prev => (isVoted ? prev - 1 : prev + 1));
		toggleVoteUI();
	};

	return (
		<>
			<div className="relative flex justify-between items-start gap-2 p-2 ml-4 rounded-md">
				{image ? (
					<Image
						src={AuthorImage}
						width={100}
						height={100}
						alt="author-pic"
						className="w-[32px] h-[32px] object-cover rounded-full"
					/>
				) : (
					UNKNOWN_USER_ICON
				)}

				<div className="w-full grid">
					<h3 className="text-[13px] text-[#181818] font-inter font-medium">
						{fullName}{" "}
						<span className="ml-1 text-[#9C9DA4] text-[13px] font-normal">
							{moment(createdAt).startOf("hour").fromNow()}
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
							{UP_VOTE_ICON} {votesCount}
						</button>
						{/* <button
							onClick={() => {
								dispatch(toggleReply(id));
								dispatch(toggleCommentForm(null));
							}}
							className="flex-jc-c gap-1 [&>svg]:w-[20px] text-[#ADAEB5] text-[12px] font-inter font-normal"
						>
							{REPLY_ICON} <span>Reply</span>
						</button> */}
					</div>
				</div>

				<button className="rotate-90 text-grey-secondary [&>svg]:w-[20px]">
					{MENU_ICON}
				</button>
			</div>
		</>
	);
};

export default RoadmapDiscussionPostReply;
