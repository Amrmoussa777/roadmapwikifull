export type RoadmapPreviewSliceType = {
	roadmap: null | RoadmapType;
	isLoading: boolean;
	error: null | Error;
};

export interface RoadmapPriceType {
	amount: number;
	currency: string;
}

export interface RoadmapUserType {
	id: number;
	email: string;
	userName: string;
	image: string;
	followers: number;
	roadmapsSubscribers: number;
	role: string;
	experiences: RoadmapUserExperienceType[];
	socialMedia: any[];
}

export interface RoadmapUserExperienceType {
	id: number;
	title: string;
	description: string;
}

export interface RoadmapTagsType {
	id: number;
	roadmapId: number;
	tag: string;
	color: string;
}

export interface RoadmapStepAttachmentType {
	id: number;
	type: string;
	url: string;
}

export interface RoadmapStepVerificationType {
	id: number;
	title: string;
	link: string;
}

export interface RoadmapStepTagType {
	id: number;
	name: string;
	color: string;
	roadmapStepId: number;
}

export interface RoadmapStepType {
	id: number;
	title: string;
	duration: string;
	description: string;
	tags: RoadmapStepTagType[];
	attachments: RoadmapStepAttachmentType[];
	verifications: RoadmapStepVerificationType[];
	completed: boolean;
}

export interface RoadmapType {
	id: number;
	title: string;
	duration: string;
	description: string;
	icon: string | null;
	createdAt: string;
	userId: number;
	cover: string | null;
	subscribersCount: number;
	price: RoadmapPriceType;
	user: RoadmapUserType;
	steps: RoadmapStepType[];
	tags: RoadmapTagsType[];
	_count: {
		steps: number;
		tags: number;
	};
}
