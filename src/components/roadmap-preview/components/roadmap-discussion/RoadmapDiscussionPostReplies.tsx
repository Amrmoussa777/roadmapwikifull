import React from "react";
import RoadmapDiscussionPostReply from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPostReply";
import RepliesPagination from "@/components/roadmap-preview/components/pagination/components/RepliesPagination";
import { useRoadmapDiscussionPostReplies } from "@/components/roadmap-preview/components/roadmap-discussion/hooks/useRoadmapDiscussionPostReplies";
import { useAppSelector } from "@/redux/store";

const RoadmapDiscussionPostReplies = ({ postId }: { postId: string }) => {
	const { handleMoreReplies, totalItems, isLoading } =
		useRoadmapDiscussionPostReplies(postId);

	const { replies } = useAppSelector(state => state.roadmapPreviewReplies);

	if (!replies[postId].list.length) return;

	const postReplies = replies[postId].list;
	return (
		<div>
			{postReplies.map(reply => (
				<RoadmapDiscussionPostReply key={reply.id} {...reply} />
			))}

			<RepliesPagination
				handleMoreReplies={handleMoreReplies}
				totalItems={totalItems}
				isLoading={isLoading}
			/>
		</div>
	);
};

export default RoadmapDiscussionPostReplies;
