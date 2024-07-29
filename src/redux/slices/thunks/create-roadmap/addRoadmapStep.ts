import HandleApiRequests from "@/helpers/handleApiRequests";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addRoadmapStep = createAsyncThunk(
	"createRoadmap/addRoadmapStep",
	async (newStepData: Record<string, string | string[]>) => {
		const data = await HandleApiRequests.handleApiRequest({
			method: `POST`,
			endpoint: "roadmap/step",
			body: newStepData,
		});

		return data;
	}
);
