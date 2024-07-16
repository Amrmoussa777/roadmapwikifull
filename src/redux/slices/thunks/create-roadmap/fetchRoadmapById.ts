import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";

export const fetchRoadmapById = createAsyncThunk(
	"createRoadmap/fetchRoadmapById",
	async (roadmapId: string | string[]) => {
		try {
			const accessToken = getCookie("accessToken");

			const res = await axios({
				method: "GET",
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap/${roadmapId}`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			const { data } = res;

			return data;
		} catch (error: any) {
			const { response } = error;

			const { message } = response.data;

			return message;
		}
	}
);
