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
	searchResult: [],
	replyPostId: null,
	replyType: null,
};

export const roadmapPreviewPostsSlice = createSlice({
	name: "roadmapPreviewPostsSlice",
	initialState,
	reducers: {
		/**
		 * Deletes a post by its ID.
		 * @param {Object} state - The current state of the slice.
		 * @param {Object} action - The action object.
		 * @param {number} action.payload - The ID of the post to delete.
		 */
		deletePost: (state, action) => {
			const postId: number = action.payload;
			const filteredPosts = state.posts.filter(post => post.id !== postId);
			state.posts = filteredPosts;
		},
		/**
		 * Deletes a reply to a post.
		 * @param {Object} state - The current state of the slice.
		 * @param {Object} action - The action object.
		 * @param {number} action.payload.postId - The ID of the post.
		 * @param {number} action.payload.replyId - The ID of the reply to delete.
		 */
		deletePostReply: (state, action) => {
			const { postId, replyId } = action.payload;
			state.posts = RoadmapPreviewPostsUtils.deletePostReply(
				state.posts,
				postId,
				replyId
			);
		},
		/**
		 * Toggles the vote count of a post.
		 * @param {Object} state - The current state of the slice.
		 * @param {Object} action - The action object.
		 * @param {number} action.payload.postId - The ID of the post.
		 * @param {string} action.payload.type - The type of vote change ("increase" or "decrease").
		 */
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
		/**
		 * Toggles the vote count of a reply to a post.
		 * @param {Object} state - The current state of the slice.
		 * @param {Object} action - The action object.
		 * @param {number} action.payload.postId - The ID of the post.
		 * @param {number} action.payload.replyId - The ID of the reply.
		 * @param {string} action.payload.type - The type of vote change ("increase" or "decrease").
		 */
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
		/**
		 * Searches for posts based on a search value.
		 * @param {Object} state - The current state of the slice.
		 * @param {Object} action - The action object.
		 * @param {string} action.payload - The search value.
		 */
		getSearchPosts: (state, action) => {
			const searchValue = action.payload;
			// Implementation for searching posts
		},
		/**
		 * Fills the reply post ID.
		 * @param {Object} state - The current state of the slice.
		 * @param {Object} action - The action object.
		 * @param {number} action.payload.replyPostId - The ID of the post to reply to.
		 * @param {string} action.payload.replyType - The reply type.
		 */
		fillReplyPostId: (state, action) => {
			const { replyPostId, replyType } = action.payload;

			state.replyPostId = replyPostId;
			state.replyType = replyType;
		},
		/**
		 * Adds a reply to a post.
		 * @param {Object} state - The current state of the slice.
		 * @param {Object} action - The action object.
		 * @param {string} action.payload.replyContent - The content of the reply.
		 * @param {number} action.payload.postId - The ID of the post to reply to.
		 */
		replyOnPost: (state, action) => {
			const { replyContent, postId } = action.payload;
			const postLength = state.posts.find(post => post.id === postId)?.replies
				.length;
			const alternativeNewReplyId = Math.floor(Math.random() * 1000000);
			const newReplyId = postLength ? postLength + 1 : alternativeNewReplyId;
			const newReply = {
				id: newReplyId,
				postId,
				author: {
					name: "Nadine Ayman",
					image: "",
				},
				addedDate: "1 day ago",
				votes: 3,
				content: replyContent,
			};
			const updatedPosts = state.posts.map(post => {
				if (post.id === postId) {
					return {
						...post,
						replies: [...post.replies, newReply],
					};
				}
				return post;
			});

			state.posts = updatedPosts;
			state.replyPostId = null;
		},
	},
});

export default roadmapPreviewPostsSlice.reducer;
export const {
	deletePost,
	deletePostReply,
	togglePostVote,
	togglePostReplyVote,
	fillReplyPostId,
	replyOnPost,
} = roadmapPreviewPostsSlice.actions;
