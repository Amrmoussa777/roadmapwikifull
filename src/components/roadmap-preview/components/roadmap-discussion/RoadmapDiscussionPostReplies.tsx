import React, { useState } from "react";
import RoadmapDiscussionPostReply from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionPostReply";
import RepliesPagination from "@/components/roadmap-preview/components/pagination/components/RepliesPagination";

const RoadmapDiscussionPostReplies = () => {
	const repliesData = [
		{
			id: "1",
			title: "Post Inquiry about detaild",
			content: "desc",
			postId: "0510a0f8-c078-4672-a3bd-cf4526767c06",
			authorId: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
			createdAt: "2024-06-30T11:16:27.385Z",
			author: {
				id: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
				email: "maximmillian.jones@roadmapwiki.com",
				role: "USER",
				image: "",
				cover: "",
				occupation: "Creator",
				roadmapsSubscribers: 0,
				fullName: "",
				userName: "Maximmillian Jones",
				description: "",
			},
			_count: {
				comments: 0,
				votes: 0,
			},
		},
		{
			id: "2",
			title: "Post Inquiry about detaild",
			content: "desc",
			postId: "0510a0f8-c078-4672-a3bd-cf4526767c06",
			authorId: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
			createdAt: "2024-06-30T11:16:27.385Z",
			author: {
				id: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
				email: "maximmillian.jones@roadmapwiki.com",
				role: "USER",
				image: "",
				cover: "",
				occupation: "Creator",
				roadmapsSubscribers: 0,
				fullName: "",
				userName: "Maximmillian Jones",
				description: "",
			},
			_count: {
				comments: 0,
				votes: 0,
			},
		},
		{
			id: "3",
			title: "Post Inquiry about detaild",
			content: "desc",
			postId: "0510a0f8-c078-4672-a3bd-cf4526767c06",
			authorId: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
			createdAt: "2024-06-30T11:16:27.385Z",
			author: {
				id: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
				email: "maximmillian.jones@roadmapwiki.com",
				role: "USER",
				image: "",
				cover: "",
				occupation: "Creator",
				roadmapsSubscribers: 0,
				fullName: "",
				userName: "Maximmillian Jones",
				description: "",
			},
			_count: {
				comments: 0,
				votes: 0,
			},
		},
	];
	const [pageNumber, setPageNumber] = useState(1);
	const [totalItems, setTotalItems] = useState(2);
	const [replies, setReplies] = useState(repliesData.slice(0, 2));

	const handleMoreReplies = () => {
		setPageNumber(prev => prev + 1);

		setReplies(prev => [...prev, ...repliesData.slice(2, 4)]);
	};

	return (
		<div>
			{replies.map(reply => (
				<RoadmapDiscussionPostReply key={reply.id} {...reply} />
			))}

			<RepliesPagination handleMoreReplies={handleMoreReplies} />
		</div>
	);
};

export default RoadmapDiscussionPostReplies;
