import { CreateRoadmapSliceStateType } from "@/redux/slices/create-roadmap/types/index.types";
import { addRoadmapStep } from "@/redux/slices/thunks/create-roadmap/addRoadmapStep";
import { fetchRoadmapById } from "@/redux/slices/thunks/create-roadmap/fetchRoadmapById";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CreateRoadmapSliceStateType = {
	roadmap: null,
	isLoading: true,
	error: null,
	draftRoadmap: {
		title: "",
		description: "",
		icon: null,
	},
	activeRoadmapStepId: "",
};

const createRoadmapSlice = createSlice({
	initialState,
	name: "createRoadmap",
	reducers: {
		updateDraftRoadmap: (state, action) => {
			const { title, description } = action.payload;

			state.draftRoadmap = {
				title,
				description,
				icon: null,
			};
		},
		expandRoadmapStep: (state, action) => {
			const roadmapStepId = action.payload;

			if (roadmapStepId === state.activeRoadmapStepId) {
				state.activeRoadmapStepId = "";
			} else {
				state.activeRoadmapStepId = roadmapStepId;
			}
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchRoadmapById.pending, state => {
			state.isLoading = true;
			state.error = null;
			state.roadmap = null;
		});
		builder.addCase(fetchRoadmapById.fulfilled, (state, action) => {
			state.isLoading = false;
			state.roadmap = action.payload;
			state.error = null;
		});
		builder.addCase(fetchRoadmapById.rejected, (state, action) => {
			state.error = "No roadmap";
			state.isLoading = false;
		});

		builder.addCase(addRoadmapStep.fulfilled, (state, action) => {
			const newStep = action.payload;

			state.roadmap?.steps.push(newStep);
			state.activeRoadmapStepId = newStep.id;
		});
	},
});

export const { updateDraftRoadmap, expandRoadmapStep } =
	createRoadmapSlice.actions;
export default createRoadmapSlice.reducer;
