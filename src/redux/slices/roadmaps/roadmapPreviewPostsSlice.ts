import { RoadmapPreviewPostsSliceType } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import RoadmapPreviewPostsUtils from "@/redux/slices/utils/roadmapPreviewPostsSliceUtils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RoadmapPreviewPostsSliceType = {
	posts: [
		{
			id: 1,
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
					id: 1,
					postId: 1,
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
					id: 2,
					postId: 1,
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
			id: 2,
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
					id: 1,
					postId: 2,
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
					id: 2,
					postId: 2,
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
					id: 3,
					postId: 2,
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
					id: 4,
					postId: 2,
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
	],
	isLoading: false,
	error: null,
};

export const roadmapPreviewPostsSlice = createSlice({
	name: "roadmapPreviewPostsSlice",
	initialState,
	reducers: {
		deletePost: (state, action) => {
			const postId: number = action.payload;

			const filteredPosts = state.posts.filter(post => post.id !== postId);

			state.posts = filteredPosts;
		},
		deletePostReply: (state, action) => {
			const { postId, replyId } = action.payload;
			console.log(postId, replyId);

			state.posts = RoadmapPreviewPostsUtils.deletePostReply(
				state.posts,
				postId,
				replyId
			);
		},
		togglePostVote: (state, action) => {
			const { postId, type } = action.payload;

			state.posts.map(post => {
				if (post.id === postId) {
					return {
						...post,
						votes: type === "increase" ? post.votes++ : post.votes--,
					};
				}

				return post;
			});
		},

		togglePostReplyVote: (state, action) => {
			const { postId, replyId, type } = action.payload;

			state.posts.map(post => {
				if (post.id === postId) {
					const updatePostReplies = post.replies.map(reply => {
						if (reply.id === replyId) {
							return {
								...reply,
								votes: type === "increase" ? reply.votes++ : reply.votes--,
							};
						}

						return reply;
					});

					return {
						...post,
						replies: updatePostReplies,
					};
				}

				return post;
			});
		},
	},
});

export default roadmapPreviewPostsSlice.reducer;
export const {
	deletePost,
	deletePostReply,
	togglePostVote,
	togglePostReplyVote,
} = roadmapPreviewPostsSlice.actions;
