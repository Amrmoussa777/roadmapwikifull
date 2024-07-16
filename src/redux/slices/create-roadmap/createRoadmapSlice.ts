import { CreateRoadmapSliceStateType } from "@/redux/slices/create-roadmap/types/index.types";
import { addRoadmapStep } from "@/redux/slices/thunks/create-roadmap/addRoadmapStep";
import { fetchRoadmapById } from "@/redux/slices/thunks/create-roadmap/fetchRoadmapById";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CreateRoadmapSliceStateType = {
	roadmap: null,
	isLoading: true,
	error: null,
};

const createRoadmapSlice = createSlice({
	initialState,
	name: "createRoadmap",
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchRoadmapById.fulfilled, (state, action) => {
			state.isLoading = false;
			state.roadmap = action.payload;
		});
		builder.addCase(fetchRoadmapById.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchRoadmapById.rejected, (state, action: any) => {
			state.error = action.payload;
			state.roadmap = null;
		});

		builder.addCase(addRoadmapStep.fulfilled, (state, action) => {
			const newStep = action.payload;

			state.roadmap?.steps.unshift(newStep);
		});
	},
});

export const {} = createRoadmapSlice.actions;
export default createRoadmapSlice.reducer;
