import { RoadmapPreviewSliceType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
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
		updateRoadmap: (state, action) => {
			const roadmap = action.payload;

			state.roadmap = roadmap;
			state.isLoading = false;
		},
		updateRoadmapError: (state, action) => {
			const error = action.payload;

			state.error = error;
			state.roadmap = null;
			state.isLoading = false;
		},
	},
});

export const { toggleStep, deleteStep, updateRoadmap, updateRoadmapError } =
	roadmapPreviewSlice.actions;
export default roadmapPreviewSlice.reducer;
