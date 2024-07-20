import { RoadmapStepType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

export type RoadmapStepItemProps = {
	id: string;
	title: string;
	tags: string[];
	daysDuration: number | null;
	editorContent: string;
	attachments: File[];
	active: boolean;
	status: string;
};

export type RoadmapStepDurationProps = {
	stepId: string;
	description: string;
	title: string;
	defaultDuration: string;
};

export type CreateRoadmapStepItemProps = {
	step: RoadmapStepType;
	isDragging: boolean;
	setIsDragging: (value: boolean) => void;
};
