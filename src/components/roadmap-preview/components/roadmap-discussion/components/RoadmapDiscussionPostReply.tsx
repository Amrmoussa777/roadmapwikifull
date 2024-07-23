import useToggle from "@/hooks/useToggle";
import Image from "next/image";
import React, { useContext, useState } from "react";
import AuthorImage from "@public/pp.jpeg";
import { UP_VOTE_ICON } from "@public/icons/roadmapPreview";
import { MENU_ICON } from "@public/icons/roadmapSteps";
import { RoadmapPostReplyPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-post-replies.types";
import { UNKNOWN_USER_ICON } from "@public/icons/userProfile";
import { getCookie } from "cookies-next";
import axios from "axios";
import moment from "moment";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useRouter } from "next/navigation";
import HandleApiRequests from "@/helpers/handleApiRequests";
import Avatar from "@/components/common/avatar/components/Avatar";

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
	const { currentUser } = useContext(CurrentUserContext);
	const { push } = useRouter();

	const handleToggleVote = async () => {
		if (!currentUser) return push("/auth/login");

		await HandleApiRequests.handleApiRequest({
			method: "POST",
			endpoint: `posts/comments/${id}/${isVoted ? "downvote" : "upvote"}`,
		});

		setVotesCount(prev => (isVoted ? prev - 1 : prev + 1));
		toggleVoteUI();
	};

	return (
		<>
			<div className="relative flex justify-between items-start gap-2 p-2 ml-4 rounded-md">
				<Avatar
					image_url={image}
					name={fullName || ""}
					customStyles="min-w-[25px] w-[25px] min-h-[25px] h-[25px] rounded-full object-cover !bg-primary-ultramarineBlue text-white text-[14px]"
				/>

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
							className={`flex-jc-c text-[#79828B] [&>svg]:w-[20px] vote-btn [&>svg]:hover:text-[#F4392B] [&>svg]:transition [&>svg]:duration-100 ${
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
