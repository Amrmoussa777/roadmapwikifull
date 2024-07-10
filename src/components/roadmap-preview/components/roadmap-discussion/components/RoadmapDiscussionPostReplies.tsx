import React from "react";
import RoadmapDiscussionPostReply from "@/components/roadmap-preview/components/roadmap-discussion/components/RoadmapDiscussionPostReply";
import RepliesPagination from "@/components/roadmap-preview/components/pagination/components/RepliesPagination";
import { useRoadmapDiscussionPostReplies } from "@/components/roadmap-preview/components/roadmap-discussion/hooks/useRoadmapDiscussionPostReplies";
import { useAppSelector } from "@/redux/store";
import RoadmapDiscussionReplyForm from "@/components/roadmap-preview/components/roadmap-discussion/components/RoadmapDiscussionReplyForm";

const RoadmapDiscussionPostReplies = ({ postId }: { postId: string }) => {
	const { handleMoreReplies, totalItems, isLoading } =
		useRoadmapDiscussionPostReplies(postId);

	const { replies, currentReplyId } = useAppSelector(
		state => state.roadmapPreviewReplies
	);

	if (!replies[postId].list.length) return;

	const postReplies = replies[postId].list;
	return (
		<div>
			{postReplies.map(reply => (
				<RoadmapDiscussionPostReply key={reply.id} {...reply} />
			))}

			{currentReplyId ? (
				<RoadmapDiscussionReplyForm customStyles="pl-16" />
			) : null}

			<RepliesPagination
				handleMoreReplies={handleMoreReplies}
				totalItems={totalItems}
				isLoading={isLoading}
			/>
		</div>
	);
};

export default RoadmapDiscussionPostReplies;
