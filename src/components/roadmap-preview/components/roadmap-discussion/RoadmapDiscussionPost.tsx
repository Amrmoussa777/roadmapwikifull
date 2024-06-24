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
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const RoadmapDiscussionPost = ({
	id,
	author,
	addedDate,
	content,
	replies,
	roadmapId,
	votes,
}: RoadmapPostType) => {
	const { currentState: isPostMenuOpen, toggle: togglePostMenu } =
		useToggle(false);

	const deletePostButtonRef = useOnClickOutside(() => togglePostMenu());

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
					<h3>
						{author.name}{" "}
						<span className="text-grey-secondary ml-1">{addedDate}</span>
					</h3>
					<p className="text-grey-secondary">{content}</p>
					<div className="flex items-center gap-3 mt-2">
						<button className="flex-jc-c text-grey-secondary">
							{UP_VOTE_ICON} {votes}
						</button>
						<button className="flex-jc-c gap-2 text-grey-secondary">
							{REPLY_ICON} <span>Reply</span>
						</button>
					</div>
				</div>

				<button
					className="rotate-90 text-grey-secondary"
					onClick={togglePostMenu}
				>
					{MENU_ICON}
				</button>

				{isPostMenuOpen ? (
					<button
						ref={deletePostButtonRef}
						className="absolute right-12 border border-red-400 bg-red-200 rounded-md px-4"
					>
						Delete post
					</button>
				) : null}
			</div>

			<RoadmapDiscussionPostReplies replies={replies} />
		</>
	);
};

export default RoadmapDiscussionPost;
