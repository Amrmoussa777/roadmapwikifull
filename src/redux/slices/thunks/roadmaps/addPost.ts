import HandleApiRequests from "@/helpers/handleApiRequests";
import { addPostArgs } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addPost = createAsyncThunk(
	"roadmapPreviewPostsSlice/addPost",
	async ({ title, content, roadmapId }: addPostArgs) => {
		const data = HandleApiRequests.handleApiRequest({
			method: "POST",
			endpoint: `posts/`,
			body: {
				title,
				content,
				roadmapId,
			},
		});
		return data;
	}
);
