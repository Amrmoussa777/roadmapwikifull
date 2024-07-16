import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

export type CreateRoadmapSliceStateType = {
	roadmap: RoadmapType | null;
	isLoading: boolean;
	error: any;

	draftRoadmap: {
		title: string;
		description: string;
		icon: null;
	};
};
