import HandleApiRequests from "@/helpers/handleApiRequests";
import { reduxAsyncWrapper } from "@/helpers/reduxAsyncWrapper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRoadmapById = createAsyncThunk(
	"createRoadmap/fetchRoadmapById",
	reduxAsyncWrapper(async (roadmapId: string | string[]) => {
		const data: any = await HandleApiRequests.handleApiRequest({
			method: "GET",
			endpoint: `roadmap/${roadmapId}`,
		});
		return data;
	})
);
