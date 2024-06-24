import { RoadmapPostReplyType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";
import React from "react";
import AuthorImage from "../../../../../public/pp.jpeg";
import { MENU_ICON } from "../../../../../public/icons/roadmapSteps";
import {
	REPLY_ICON,
	UP_VOTE_ICON,
} from "../../../../../public/icons/roadmapPreview";
import Image from "next/image";

const RoadmapDiscussionPostReplies = ({
	replies,
}: {
	replies: RoadmapPostReplyType[];
}) => {
	return replies.map(reply => (
		<div
			key={reply.id}
			className="flex justify-between items-start gap-2 p-4 ml-4 rounded-md"
		>
			<Image
				src={AuthorImage}
				width={100}
				height={100}
				alt="author-pic"
				className="w-[32px] h-[32px] object-cover rounded-full"
			/>

			<div className="w-full grid">
				<h3 className="text-md">
					{reply.author.name}{" "}
					<span className="text-grey-secondary ml-1">{reply.addedDate}</span>
				</h3>
				<p className="text-sm text-grey-secondary">{reply.content}</p>
				<div className="flex items-center gap-3 mt-2 text-sm">
					<button className="flex-jc-c text-grey-secondary [&>svg]:w-[20px]">
						{UP_VOTE_ICON} {reply.votes}
					</button>
					<button className="flex-jc-c gap-2 text-grey-secondary [&>svg]:w-[20px]">
						{REPLY_ICON} <span>Reply</span>
					</button>
				</div>
			</div>

			<button className="rotate-90 text-grey-secondary [&>svg]:w-[20px]">
				{MENU_ICON}
			</button>
		</div>
	));
};

export default RoadmapDiscussionPostReplies;
