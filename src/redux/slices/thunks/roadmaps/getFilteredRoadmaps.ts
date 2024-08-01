import HandleApiRequests from "@/helpers/handleApiRequests";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFilteredRoadmaps = createAsyncThunk(
	"roadmapListSlice/getFilteredRoadmaps",
	async ({
		params,
		pageNumber,
		pageSize,
	}: {
		params: string;
		pageNumber: number;
		pageSize: number;
	}) => {
		const data = await HandleApiRequests.handleApiRequest({
			method: "GET",
			endpoint: `roadmap/?page=${pageNumber}&pageSize=${pageSize}&${params}`,
		});

		return data;
	}
);
