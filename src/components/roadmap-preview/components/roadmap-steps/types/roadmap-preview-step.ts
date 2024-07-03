import { RoadmapStepType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

export type RoadmapPreviewStepProps = {
	previewStep: RoadmapStepType | null;
	togglePreviewStepModal: () => void;
};
