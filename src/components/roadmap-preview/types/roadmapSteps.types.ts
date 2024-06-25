export type RoadmapStepType = {
	id: number;
	title: string;
	tags: RoadmapStepTagType[];
	duration: string;
	completed: boolean;
	attachments: RoadmapStepAttachmentsType;
	description: string;
};

export type RoadmapStepTagType = {
	id: number;
	name: string;
	color: string;
};

export type RoadmapStepAttachmentsType = {
	images: number;
	videos: number;
	files: number;
};

export type RoadmapStepItemProps = {
	step: RoadmapStepType;
	isFirstStep: boolean;
	lastStep: boolean;
	handlePreviewStep: (step: RoadmapStepType) => void;
};
