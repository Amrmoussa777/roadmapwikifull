import React from "react";
import RoadmapDiscussionPostReply from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPostReply";

const RoadmapDiscussionPostReplies = ({ replies }: { replies: any[] }) => {
	return replies.map(reply => (
		<RoadmapDiscussionPostReply key={reply.id} {...reply} />
	));
};

export default RoadmapDiscussionPostReplies;
