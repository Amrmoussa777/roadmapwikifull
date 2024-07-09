import { RoadmapPreviewSliceType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { fetchRoadmapById } from "@/redux/slices/thunks/roadmapPreviewAsyncThunks";
import RoadmapPreviewUtils from "@/redux/slices/utils/roadmapPreviewSliceUtils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RoadmapPreviewSliceType = {
	roadmap: null,
	isLoading: true,
	error: null,
};

const roadmapPreviewSlice = createSlice({
	name: "roadmapPreviewSlice",
	initialState,
	reducers: {
		toggleStep: (state, action) => {
			if (!state.roadmap) {
				return;
			}

			const roadmapSteps = state.roadmap.steps;
			const stepId = action.payload;

			const updatedRoadmapSteps = RoadmapPreviewUtils.toggleStep(
				roadmapSteps,
				stepId
			);

			state.roadmap.steps = updatedRoadmapSteps;
		},
		deleteStep: (state, action) => {
			const stepId = action.payload;

			if (!state.roadmap) return state;

			const filteredRoadmapSteps = state.roadmap.steps.filter(
				step => step.id !== stepId
			);
			state.roadmap.steps = filteredRoadmapSteps;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchRoadmapById.fulfilled, (state, action) => {
			state.isLoading = false;
			state.roadmap = action.payload;
		});
		builder.addCase(fetchRoadmapById.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchRoadmapById.rejected, (state, action) => {
			state.error = "server error";
			state.roadmap = null;
		});
	},
});

export const { toggleStep, deleteStep } = roadmapPreviewSlice.actions;
export default roadmapPreviewSlice.reducer;
