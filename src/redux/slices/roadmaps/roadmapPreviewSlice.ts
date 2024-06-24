import { RoadmapPreviewSliceType } from "@/redux/slices/roadmaps/types/index.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RoadmapPreviewSliceType = {
	roadmap: {
		id: "roadmap_1",
		title: "Frontend Developer Roadmap",
		subscriptionPrice: 10,
		cover: "",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever example text",
		duration: "12 weeks",
		subscribers: "2000",
		stepsCount: 12,
		tags: [
			{
				id: "1",
				title: "HTML",
			},
			{
				id: "2",
				title: "CSS",
			},
			{
				id: "3",
				title: "React",
			},
			{
				id: "4",
				title: "Next",
			},
			{
				id: "5",
				title: "Tailwind",
			},
			{
				id: "6",
				title: "Git",
			},
		],
		steps: [],
		posts: [
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
		],
	},
};

const roadmapPreviewSlice = createSlice({
	name: "roadmapPreviewSlice",
	initialState,
	reducers: {},
});

export const {} = roadmapPreviewSlice.reducer;
export default roadmapPreviewSlice.reducer;
