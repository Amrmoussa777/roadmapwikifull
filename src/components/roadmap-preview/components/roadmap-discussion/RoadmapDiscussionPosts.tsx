import RoadmapDiscussionPost from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPost";
import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";
import React from "react";

const RoadmapDiscussionPosts = () => {
	const posts: RoadmapPostType[] = [
		{
			id: "post_1",
			roadmapId: "roadmap_1",
			author: {
				name: "Mohamed Elhossiny",
				image: "",
			},
			addedDate: "1 day ago",
			votes: 3,
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
			replies: [
				{
					id: "reply_1",
					postId: "post_1",
					author: {
						name: "Nadine Ayman",
						image: "",
					},
					addedDate: "1 day ago",
					votes: 3,
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				},
				{
					id: "reply_2",
					postId: "post_1",
					author: {
						name: "Nadine Ayman",
						image: "",
					},
					addedDate: "1 day ago",
					votes: 3,
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				},
			],
		},
		{
			id: "post_2",
			roadmapId: "roadmap_1",
			author: {
				name: "Mohamed Elhossiny",
				image: "",
			},
			addedDate: "1 day ago",
			votes: 3,
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
			replies: [
				{
					id: "reply_1",
					postId: "post_2",
					author: {
						name: "Nadine Ayman",
						image: "",
					},
					addedDate: "1 day ago",
					votes: 3,
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				},
				{
					id: "reply_2",
					postId: "post_2",
					author: {
						name: "Nadine Ayman",
						image: "",
					},
					addedDate: "1 day ago",
					votes: 3,
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				},
				{
					id: "reply_3",
					postId: "post_2",
					author: {
						name: "Nadine Ayman",
						image: "",
					},
					addedDate: "1 day ago",
					votes: 3,
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				},
				{
					id: "reply_4",
					postId: "post_2",
					author: {
						name: "Nadine Ayman",
						image: "",
					},
					addedDate: "1 day ago",
					votes: 3,
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				},
			],
		},
	];

	return (
		<div>
			{posts.map(post => (
				<RoadmapDiscussionPost key={post.id} {...post} />
			))}
		</div>
	);
};

export default RoadmapDiscussionPosts;
