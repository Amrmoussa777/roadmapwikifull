import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { COMMENT_ICON, UP_VOTE_ICON } from "@public/icons/roadmapPreview";
import { MENU_ICON } from "@public/icons/roadmapSteps";
import useToggle from "@/hooks/useToggle";
import moment from "moment";
import Link from "next/link";
import { UNKNOWN_USER_ICON } from "@public/icons/userProfile";
import RoadmapDiscussionPostReplies from "@/components/roadmap-preview/components/roadmap-discussion/components/RoadmapDiscussionPostReplies";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
	setInitialPostReplies,
	toggleReply,
} from "@/redux/slices/roadmaps/roadmapPreviewRepliesSlice";
import { toggleCommentForm } from "@/redux/slices/roadmaps/roadmapPreviewPostsSlice";
import RoadmapDiscussionReplyForm from "@/components/roadmap-preview/components/roadmap-discussion/components/RoadmapDiscussionReplyForm";
import { getCookie } from "cookies-next";
import axios from "axios";
import HandleApiRequests from "@/helpers/handleApiRequests";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useRouter } from "next/navigation";
import Avatar from "@/components/common/avatar/components/Avatar";

const RoadmapDiscussionPost = ({
	id,
	author,
	createdAt,
	content,
	_count,
	isVoted: initialIsVoted,
}: RoadmapPostType) => {
	const { currentState: isVoted, toggle: toggleVoteUI } =
		useToggle(initialIsVoted);
	const [votesCount, setVotesCount] = useState(_count.votes);
	const { fullName, image, userName } = author;
	const dispatch = useAppDispatch();
	const { replies } = useAppSelector(state => state.roadmapPreviewReplies);
	const { currentPostId } = useAppSelector(state => state.roadmapPreviewPosts);
	const { currentUser } = useContext(CurrentUserContext);
	const { push } = useRouter();

	useEffect(() => {
		dispatch(setInitialPostReplies(id));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleToggleVote = async () => {
		if (!currentUser) return push("/auth/login");

		await HandleApiRequests.handleApiRequest({
			method: "POST",
			endpoint: `posts/${id}/${isVoted ? "downvote" : "upvote"}`,
		});

		setVotesCount(prev => (isVoted ? prev - 1 : prev + 1));
		toggleVoteUI();
	};

	return (
		<>
			<div className="rounded-md bg-gradient-to-b from-[#EBECF2] to-transparent p-[1.3px]">
				<div className="relative flex justify-between items-start gap-2 bg-white p-2 rounded-md">
					<div className="w-[32px] h-[32px] object-cover rounded-full text-[#181818]">
						<Avatar
							image_url={""}
							name={fullName}
							customStyles="w-[32px] h-[32px] rounded-full object-cover !bg-primary-ultramarineBlue !text-white"
						/>
					</div>

					<div className="w-full grid">
						<h3 className="text-[14px] text-[#181818] font-inter font-medium">
							<Link href={`/user/${userName}`} className="hover:underline">
								{fullName || "Unknown"}{" "}
							</Link>
							<span className="text-[#9C9DA4] ml-1 text-[14px] font-normal">
								{moment(createdAt).fromNow()}
							</span>
						</h3>
						<p className="text-grey-secondary font-inter font-light text-[14px]">
							{content}
						</p>
						<div className="flex items-center gap-3 mt-2">
							<button
								onClick={handleToggleVote}
								className={`flex-jc-c text-[#79828B] vote-btn text-[16px] font-inter font-medium [&>svg]:hover:text-[#F4392B] [&>svg]:transition [&>svg]:duration-100 ${
									isVoted ? "voted" : ""
								}`}
							>
								{UP_VOTE_ICON} {votesCount}
							</button>
							<button
								onClick={() => {
									dispatch(toggleCommentForm(id));
									dispatch(toggleReply(null));
								}}
								className="flex-jc-c gap-1 text-[#ADAEB5] text-[14px] font-inter font-medium"
							>
								{COMMENT_ICON} <span>Comment</span>
							</button>
						</div>
					</div>

					<button className="rotate-90 text-grey-secondary">{MENU_ICON}</button>
				</div>
			</div>

			{currentPostId === id ? (
				<RoadmapDiscussionReplyForm customStyles="px-2" />
			) : null}

			{replies[id] ? <RoadmapDiscussionPostReplies postId={id} /> : null}
		</>
	);
};

export default RoadmapDiscussionPost;
