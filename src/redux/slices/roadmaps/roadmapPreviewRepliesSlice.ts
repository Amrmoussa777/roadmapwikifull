import {
	RoadmapPreviewRepliesSliceType,
	RoadmapPreviewReplyType,
} from "@/redux/slices/roadmaps/types/roadmap-preview-replies-slice.types";
import { addComment } from "@/redux/slices/thunks/roadmaps/addComment";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RoadmapPreviewRepliesSliceType = {
	replies: {},
	currentReplyId: null,
};

const roadmapPreviewRepliesSlice = createSlice({
	initialState,
	name: "roadmapPreviewReplies",
	reducers: {
		pushMoreReplies: (state, action) => {
			const { postId, newReplies } = action.payload;

			const oldReplies = state.replies[postId].list;

			// Create a set of old reply IDs for quick lookup
			const oldReplyIds = new Set(oldReplies.map(reply => reply.id));

			// Filter out new replies that are already in old replies
			const filteredNewReplies = newReplies.filter(
				(reply: RoadmapPreviewReplyType) => !oldReplyIds.has(reply.id)
			);

			// Combine old replies with the filtered new replies
			const updatedReplies = [...oldReplies, ...filteredNewReplies];
			state.replies[postId].list = updatedReplies;
			state.replies[postId].pageNumber += 1;
		},
		setInitialPostReplies: (state, action) => {
			const postId = action.payload;

			state.replies[postId] = {
				pageNumber: 1,
				list: [],
			};
		},
		toggleReply: (state, action) => {
			const currentReplyId = action.payload;
			state.currentReplyId = currentReplyId;
		},
	},

	extraReducers(builder) {
		builder.addCase(addComment.fulfilled, (state, action) => {
			const newComment = action.payload;
			const { postId } = newComment;

			const oldReplies = state.replies[postId].list;

			const updatedReplies = [...oldReplies, newComment];

			state.replies[postId].list = updatedReplies;
		});
	},
});

export const { pushMoreReplies, setInitialPostReplies, toggleReply } =
	roadmapPreviewRepliesSlice.actions;
export default roadmapPreviewRepliesSlice.reducer;
