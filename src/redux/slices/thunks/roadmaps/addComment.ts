import HandleApiRequests from "@/helpers/handleApiRequests";
import { addCommentArgs } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addComment = createAsyncThunk(
	"roadmapPreviewPostsSlice/addComment",
	async ({ content, postId }: addCommentArgs) => {
		const data = HandleApiRequests.handleApiRequest({
			method: "POST",
			endpoint: `posts/${postId}/comments`,
			body: { content },
		});

		return data;
	}
);
