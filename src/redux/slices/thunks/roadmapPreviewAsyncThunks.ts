import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRoadmapById = createAsyncThunk(
	"roadmapPreviewSlice/fetchRoadmapById",
	async (roadmapId: string) => {
		const res = await axios({
			method: "GET",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap/${roadmapId}`,
		});
		const { data } = res;

		return data;
	}
);
