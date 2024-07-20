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
		addStepTag: (state, action) => {
			const { stepId, newTag } = action.payload;

			if (state.roadmap?.steps) {
				state.roadmap.steps = state.roadmap.steps.map(step =>
					step.id === stepId ? { ...step, tags: [...step.tags, newTag] } : step
				);
			}
		},
		removeStepTag: (state, action) => {
			const { tagId, stepId } = action.payload;

			const updatedSteps =
				state.roadmap?.steps?.map(step =>
					step.id === stepId
						? { ...step, tags: step.tags.filter(tag => tag.id !== tagId) }
						: step
				) ?? [];

			if (state.roadmap) {
				state.roadmap = {
					...state.roadmap,
					steps: updatedSteps,
				};
			}
		},
		removeStep: (state, action) => {
			const stepId = action.payload;

			const updatedSteps =
				state.roadmap?.steps.filter(step => step.id !== stepId) ?? [];

			if (state.roadmap) {
				state.roadmap = {
					...state.roadmap,
					steps: updatedSteps,
				};
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
			state.error = action.payload;
			state.isLoading = false;
			state.roadmap = null;
		});

		builder.addCase(addRoadmapStep.fulfilled, (state, action) => {
			const newStep = action.payload;

			state.roadmap?.steps.push(newStep);
			state.activeRoadmapStepId = newStep.id;
		});
	},
});

export const {
	updateDraftRoadmap,
	expandRoadmapStep,
	addStepTag,
	removeStepTag,
	removeStep,
} = createRoadmapSlice.actions;
export default createRoadmapSlice.reducer;
