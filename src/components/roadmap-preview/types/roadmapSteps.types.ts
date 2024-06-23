export type RoadmapStepType = {
	id: string;
	title: string;
	tags: RoadmapStepTagType[];
	duration: string;
	completed: boolean;
	attachments: RoadmapStepAttachmentsType;
};

export type RoadmapStepTagType = {
	id: string;
	title: string;
	color: string;
};

export type RoadmapStepAttachmentsType = {
	images: number;
	videos: number;
	files: number;
};
