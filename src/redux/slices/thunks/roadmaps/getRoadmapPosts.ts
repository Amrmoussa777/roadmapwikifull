import { getRoadmapPostsThunkArgs } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";

export const getRoadmapPosts = createAsyncThunk(
	"roadmapPreviewPostsSlice/getRoadmapPosts",
	async ({ roadmapId, pageNumber, pageSize }: getRoadmapPostsThunkArgs) => {
		const accessToken = getCookie("accessToken");

		const res = await axios({
			method: "GET",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/?roadmapId=${roadmapId}&page=${pageNumber}&pageSize=${pageSize}`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		const { data } = res;

		return data;
	}
);
