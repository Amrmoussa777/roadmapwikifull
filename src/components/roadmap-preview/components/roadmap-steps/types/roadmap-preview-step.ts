import { RoadmapStepType } from "@/components/roadmap-preview/types/roadmapSteps.types";

export type RoadmapPreviewStepProps = {
	previewStep: RoadmapStepType | null;
	togglePreviewStepModal: () => void;
};
