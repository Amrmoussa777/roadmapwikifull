import { addPostArgs } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";

export const addPost = createAsyncThunk(
	"roadmapPreviewPostsSlice/addPost",
	async ({ title, content, roadmapId }: addPostArgs) => {
		const accessToken = getCookie("accessToken");

		const res = await axios({
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			data: {
				title,
				content,
				roadmapId,
			},
		});
		const { data } = res;

		return data;
	}
);
