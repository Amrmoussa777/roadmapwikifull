import { ROADMAP_ICONS_ENUM } from "@/enum/roadmapIconsEnum";
import {
	RoadmapStepVerificationType,
	RoadmapType,
} from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

export type CreateRoadmapSliceStateType = {
	roadmap: RoadmapType | null;
	isLoading: boolean;
	error: any;
	verificationToUpdate: RoadmapStepVerificationType | null;
	stepIdToPreview: string | null;
	draftRoadmap: {
		title: string;
		description: string;
		iconName: ROADMAP_ICONS_ENUM | null;
	};

	activeRoadmapStepId: string;
};
