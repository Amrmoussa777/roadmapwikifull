import { fetchRoadmapById } from "@/redux/slices/roadmapPreviewAsyncThunks";
import { RoadmapPreviewSliceType } from "@/redux/slices/roadmaps/types/index.types";
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
			state.isLoading = false;
			state.error = action.payload;
			state.roadmap = null;
		});
	},
});

export const { toggleStep } = roadmapPreviewSlice.actions;
export default roadmapPreviewSlice.reducer;
