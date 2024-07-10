import { addCommentArgs } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";

export const addComment = createAsyncThunk(
	"roadmapPreviewPostsSlice/addComment",
	async ({ content, postId }: addCommentArgs) => {
		const accessToken = getCookie("accessToken");

		const res = await axios({
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${postId}/comments`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			data: {
				content,
			},
		});
		const { data } = res;

		return data;
	}
);
