export type RoadmapStepType = {
	id: number;
	title: string;
	description: string;
	duration: string;
	attachments: RoadmapStepAttachmentType[];
	verifications: any[];
	tags: RoadmapStepTagType[];
};

export type RoadmapStepAttachmentType = {
	id: number;
	type: "IMAGE" | "VIDEO" | "FILE";
	url: string;
	roadmapStepId: number;
};

export type RoadmapStepTagType = {
	id: number;
	name: string;
	roadmapStepId: number;
	color: string;
};

export type RoadmapStepItemProps = {
	step: RoadmapStepType;
	isFirstStep: boolean;
	lastStep: boolean;
	handlePreviewStep: (step: RoadmapStepType) => void;
};
