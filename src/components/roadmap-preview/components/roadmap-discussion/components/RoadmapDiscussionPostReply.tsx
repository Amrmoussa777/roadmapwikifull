import useToggle from "@/hooks/useToggle";
import Image from "next/image";
import React from "react";
import AuthorImage from "@public/pp.jpeg";
import { UP_VOTE_ICON } from "@public/icons/roadmapPreview";
import { MENU_ICON } from "@public/icons/roadmapSteps";

const RoadmapDiscussionPostReply = ({
	id,
	content,
	author,
	addedDate,
	votes,
}: any) => {
	const { currentState: isVoted, toggle: toggleVote } = useToggle(false);

	return (
		<>
			<div className="relative flex justify-between items-start gap-2 p-2 ml-4 rounded-md">
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
							className={`flex-jc-c text-[#79828B] [&>svg]:w-[20px] vote-btn ${
								isVoted ? "voted" : ""
							}`}
						>
							{UP_VOTE_ICON} {votes}
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
