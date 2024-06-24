import { RoadmapPostReplyType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";
import useToggle from "@/hooks/useToggle";
import Image from "next/image";
import React, { useRef } from "react";
import AuthorImage from "../../../../../public/pp.jpeg";
import {
	REPLY_ICON,
	UP_VOTE_ICON,
} from "../../../../../public/icons/roadmapPreview";
import { MENU_ICON } from "../../../../../public/icons/roadmapSteps";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const RoadmapDiscussionPostReply = ({
	id,
	content,
	author,
	addedDate,
	postId,
	votes,
}: RoadmapPostReplyType) => {
	const { currentState: isPostRepliesMenuOpen, toggle: togglePostRepliesMenu } =
		useToggle(false);

	const deleteReplyButtonRef = useOnClickOutside(() => togglePostRepliesMenu());

	return (
		<div
			key={id}
			className="relative flex justify-between items-start gap-2 p-4 ml-4 rounded-md"
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
					{author.name}{" "}
					<span className="text-grey-secondary ml-1">{addedDate}</span>
				</h3>
				<p className="text-sm text-grey-secondary">{content}</p>
				<div className="flex items-center gap-3 mt-2 text-sm">
					<button className="flex-jc-c text-grey-secondary [&>svg]:w-[20px]">
						{UP_VOTE_ICON} {votes}
					</button>
					<button className="flex-jc-c gap-2 text-grey-secondary [&>svg]:w-[20px]">
						{REPLY_ICON} <span>Reply</span>
					</button>
				</div>
			</div>

			<button
				className="rotate-90 text-grey-secondary [&>svg]:w-[20px]"
				onClick={togglePostRepliesMenu}
			>
				{MENU_ICON}
			</button>

			{isPostRepliesMenuOpen ? (
				<button
					ref={deleteReplyButtonRef}
					className="absolute right-12 border border-red-400 bg-red-200 rounded-md px-4"
				>
					Delete reply
				</button>
			) : null}
		</div>
	);
};

export default RoadmapDiscussionPostReply;
