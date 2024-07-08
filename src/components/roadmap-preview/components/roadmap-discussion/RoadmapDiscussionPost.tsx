import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";
import React from "react";
import Image from "next/image";
import { COMMENT_ICON, UP_VOTE_ICON } from "@public/icons/roadmapPreview";
import { MENU_ICON } from "@public/icons/roadmapSteps";
import useToggle from "@/hooks/useToggle";
import moment from "moment";
import Link from "next/link";
import { UNKNOWN_USER_ICON } from "@public/icons/userProfile";
import RoadmapDiscussionPostReplies from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPostReplies";

const RoadmapDiscussionPost = ({
	id,
	author,
	createdAt,
	content,
	roadmapId,
}: RoadmapPostType) => {
	const { currentState: isVoted, toggle: toggleVote } = useToggle(false);
	const { fullName, image, userName } = author;

	return (
		<>
			<div className="relative flex justify-between items-start gap-2 border border-[#E0E0E0] p-2 rounded-md">
				<div className="w-[32px] h-[32px] object-cover rounded-full text-[#181818]">
					{image ? (
						<Image
							src={image}
							width={100}
							height={100}
							alt="author-pic"
							className="w-full h-full rounded-full"
						/>
					) : (
						UNKNOWN_USER_ICON
					)}
				</div>

				<div className="w-full grid">
					<h3 className="text-[14px] text-[#181818] font-inter font-medium">
						<Link href={`/user/${userName}`} className="hover:underline">
							{fullName || "Unknown"}{" "}
						</Link>
						<span className="text-[#9C9DA4] ml-1 text-[14px] font-normal">
							{moment(createdAt).startOf("hour").fromNow()}
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
						>
							{UP_VOTE_ICON} 0
						</button>
						<button className="flex-jc-c gap-1 text-[#ADAEB5] text-[14px] font-inter font-medium">
							{COMMENT_ICON} <span>Comment</span>
						</button>
					</div>
				</div>

				<button className="rotate-90 text-grey-secondary">{MENU_ICON}</button>
			</div>

			{/* <RoadmapDiscussionPostReplies /> */}
		</>
	);
};

export default RoadmapDiscussionPost;
