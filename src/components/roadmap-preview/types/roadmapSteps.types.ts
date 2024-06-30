import { RoadmapStepType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

export type RoadmapStepItemProps = {
	step: RoadmapStepType;
	isFirstStep: boolean;
	lastStep: boolean;
	handlePreviewStep?: (step: RoadmapStepType) => void;
	showTags: boolean;
};
