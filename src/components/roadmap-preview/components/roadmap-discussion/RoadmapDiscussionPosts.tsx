import RoadmapDiscussionPost from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPost";
import { useAppSelector } from "@/redux/store";
import React from "react";

const RoadmapDiscussionPosts = () => {
	const { roadmap } = useAppSelector(state => state.roadmapPreview);
	const { posts } = roadmap;

	return (
		<div>
			{posts.map(post => (
				<RoadmapDiscussionPost key={post.id} {...post} />
			))}
		</div>
	);
};

export default RoadmapDiscussionPosts;
