import RoadmapDiscussionPost from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPost";
import { useAppSelector } from "@/redux/store";
import React from "react";

const RoadmapDiscussionPosts = () => {
	const { posts } = useAppSelector(state => state.roadmapPreviewPosts);

	return (
		<div className="flex flex-col gap-2">
			{posts.map(post => (
				<RoadmapDiscussionPost key={post.id} {...post} />
			))}
		</div>
	);
};

export default RoadmapDiscussionPosts;
