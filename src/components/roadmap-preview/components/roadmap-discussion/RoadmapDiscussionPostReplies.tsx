import { RoadmapPostReplyType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";
import React from "react";
import RoadmapDiscussionPostReply from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPostReply";

const RoadmapDiscussionPostReplies = ({
	replies,
}: {
	replies: RoadmapPostReplyType[];
}) => {
	return replies.map(reply => (
		<RoadmapDiscussionPostReply key={reply.id} {...reply} />
	));
};

export default RoadmapDiscussionPostReplies;
