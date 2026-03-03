import HandleApiRequests from "@/helpers/handleApiRequests";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRoadmapById = createAsyncThunk(
	"roadmapPreviewSlice/fetchRoadmapById",
	async (roadmapId: string, thunkAPI) => {
		try {
			const data: any = await HandleApiRequests.handleApiRequest({
				method: "GET",
				endpoint: `roadmap/${roadmapId}`,
			});

			return data;
		} catch (error: any) {
			const { message } = error.response.data;

			return thunkAPI.rejectWithValue(message);
		}
	}
);
