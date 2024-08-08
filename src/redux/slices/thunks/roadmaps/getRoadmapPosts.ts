import HandleApiRequests from "@/helpers/handleApiRequests";
import { getRoadmapPostsThunkArgs } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRoadmapPosts = createAsyncThunk(
	"roadmapPreviewPostsSlice/getRoadmapPosts",
	async ({ roadmapId, pageNumber, pageSize }: getRoadmapPostsThunkArgs) => {
		const data = await HandleApiRequests.handleApiRequest({
			method: "GET",
			endpoint: `posts/?roadmapId=${roadmapId}&page=${pageNumber}&pageSize=${pageSize}`,
		});

		return data;
	}
);
