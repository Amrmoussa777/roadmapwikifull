import { RoadmapPreviewPostsSliceType } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
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
					id: 2,
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
					id: 2,
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
					id: 3,
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
					id: 4,
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
	},
});

export default roadmapPreviewPostsSlice.reducer;
export const { deletePost } = roadmapPreviewPostsSlice.actions;
