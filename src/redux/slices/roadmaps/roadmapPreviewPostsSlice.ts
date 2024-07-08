import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";
import { RoadmapPreviewPostsSliceType } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import { getRoadmapPosts } from "@/redux/slices/thunks/getRoadmapPosts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RoadmapPreviewPostsSliceType = {
	isLoading: false,
	error: null,
	posts: {
		list: [],
		lastPage: false,
	},
};

export const roadmapPreviewPostsSlice = createSlice({
	name: "roadmapPreviewPostsSlice",
	initialState,
	reducers: {
		seeLessPosts: state => {
			if (state.posts.list.length > 0) {
				state.posts.list.pop();
			}
			state.posts.lastPage = false;
		},
	},
	extraReducers(builder) {
		builder.addCase(getRoadmapPosts.pending, state => {
			state.isLoading = true;
		});

		builder.addCase(getRoadmapPosts.fulfilled, (state, action) => {
			const isLastPage = action.payload.length < 1;

			if (isLastPage) {
				state.posts.lastPage = true;
			} else {
				state.posts.lastPage = false;

				const newPosts = action.payload.filter(
					(post: RoadmapPostType) =>
						!state.posts.list.some(existingPost => existingPost.id === post.id)
				);
				state.posts.list = [...state.posts.list, ...newPosts];
			}
		});
	},
});

export default roadmapPreviewPostsSlice.reducer;
export const { seeLessPosts } = roadmapPreviewPostsSlice.actions;
