import { RoadmapStepType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

export type RoadmapPreviewStepProps = {
	previewStepId: string | null;
	togglePreviewStepModal: () => void;
};
