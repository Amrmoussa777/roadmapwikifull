import {
	RoadmapStepType,
	RoadmapStepVerificationType,
	RoadmapType,
} from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

export type CreateRoadmapSliceStateType = {
	roadmap: RoadmapType | null;
	isLoading: boolean;
	error: any;
	verificationToUpdate: RoadmapStepVerificationType | null;
	stepToPreview: RoadmapStepType | null;

	draftRoadmap: {
		title: string;
		description: string;
		icon: null;
	};

	activeRoadmapStepId: string;
};
