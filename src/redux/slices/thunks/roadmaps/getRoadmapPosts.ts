import { getRoadmapPostsThunkArgs } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRoadmapPosts = createAsyncThunk(
	"roadmapPreviewPostsSlice/getRoadmapPosts",
	async ({ roadmapId, pageNumber, pageSize }: getRoadmapPostsThunkArgs) => {
		const res = await axios({
			method: "GET",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/?roadmapId=${roadmapId}&page=${pageNumber}&pageSize=${pageSize}`,
			headers: {
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZDA2ODBlYS1mOTE4LTQ1ZjYtOWIzOC04ZWY0NWExNmRlNjIiLCJ1c2VybmFtZSI6Ik1heGltbWlsbGlhbiBKb25lcyIsImlhdCI6MTcyMDU5NjM4MywiZXhwIjoxNzIwNjgyNzgzfQ.Xd-7qv1Zrf5rvT_f6_tJht7b4YB9I74CreSUWX9gIH0`,
			},
		});
		const { data } = res;

		return data;
	}
);
