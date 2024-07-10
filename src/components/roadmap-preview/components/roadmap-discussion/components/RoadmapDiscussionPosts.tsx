import RoadmapDiscussionPost from "@/components/roadmap-preview/components/roadmap-discussion/components/RoadmapDiscussionPost";
import { useAppSelector } from "@/redux/store";
import React from "react";

const RoadmapDiscussionPosts = () => {
	const { posts } = useAppSelector(state => state.roadmapPreviewPosts);
	const { list } = posts;

	return (
		<div className="flex flex-col gap-2">
			{list.map(post => (
				<RoadmapDiscussionPost key={post.id} {...post} />
			))}
		</div>
	);
};

export default RoadmapDiscussionPosts;
