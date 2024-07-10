import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";
import { RoadmapPreviewPostsSliceType } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import { getRoadmapPosts } from "@/redux/slices/thunks/roadmaps/getRoadmapPosts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RoadmapPreviewPostsSliceType = {
	isLoading: false,
	error: null,
	posts: {
		list: [],
		totalItems: 0,
		isLoading: false,
	},
	currentPostId: null,
};

export const roadmapPreviewPostsSlice = createSlice({
	name: "roadmapPreviewPostsSlice",
	initialState,
	reducers: {
		toggleCommentForm: (state, action) => {
			const currentPostId = action.payload;
			state.currentPostId = currentPostId;
		},
	},
	extraReducers(builder) {
		builder.addCase(getRoadmapPosts.pending, state => {
			state.isLoading = true;
			state.posts.isLoading = true;
		});

		builder.addCase(getRoadmapPosts.fulfilled, (state, action) => {
			const newPosts = action.payload.filter(
				(post: RoadmapPostType) =>
					!state.posts.list.some(existingPost => existingPost.id === post.id)
			);

			state.posts.totalItems = action.payload.length;

			state.posts.list = [...state.posts.list, ...newPosts];
			state.posts.isLoading = false;
		});
	},
});

export default roadmapPreviewPostsSlice.reducer;
export const { toggleCommentForm } = roadmapPreviewPostsSlice.actions;
