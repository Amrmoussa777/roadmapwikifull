import React from "react";
import RoadmapDiscussionPostReply from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPostReply";
import RepliesPagination from "@/components/roadmap-preview/components/pagination/components/RepliesPagination";
import { useRoadmapDiscussionPostReplies } from "@/components/roadmap-preview/components/roadmap-discussion/hooks/useRoadmapDiscussionPostReplies";

const RoadmapDiscussionPostReplies = ({ postId }: { postId: string }) => {
	const { handleMoreReplies, replies, totalItems, isLoading } =
		useRoadmapDiscussionPostReplies(postId);

	return (
		<div>
			{replies.map(reply => (
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
