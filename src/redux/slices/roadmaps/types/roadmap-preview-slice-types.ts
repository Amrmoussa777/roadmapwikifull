export type RoadmapPreviewSliceType = {
	roadmap: null | RoadmapType;
	isLoading: boolean;
	error: null | string;
};

export interface RoadmapPriceType {
	amount: number;
	currency: string;
}

export interface RoadmapUserType {
	id: string;
	email: string;
	role: string;
	image: string;
	occupation: string;
	roadmapsSubscribers: number;
	fullName: string;
	userName: string;
	description: string;
	experiences: RoadmapUserExperienceType[];
	socialMedia: any[];
	_count: {
		followers: number;
		following: number;
	};
}

export interface RoadmapUserExperienceType {
	id: string;
	title: string;
	description: string;
}

export interface RoadmapTagType {
	id: string;
	roadmapId: string;
	tag: string;
	color: string;
}

export interface RoadmapStepAttachmentType {
	id: string;
	type: string;
	url: string;
}

export interface RoadmapStepVerificationType {
	id: string;
	title: string;
	link: string;
}

export interface RoadmapStepTagType {
	id: string;
	name: string;
	color: string;
	roadmapStepId: string;
}

export interface RoadmapStepType {
	id: string;
	title: string;
	duration: string;
	description: string;
	tags: RoadmapStepTagType[];
	attachments: RoadmapStepAttachmentType[];
	verifications: RoadmapStepVerificationType[];
	completed: boolean;
}

export interface RoadmapType {
	id: string;
	description: string;
	icon: null | string;
	createdAt: string;
	userId: string;
	title: string;
	duration: string;
	flag: string;
	primaryColor: string;
	secondaryColor: string;
	cover: null | string;
	subscribersCount: number;
	urlIdentifier: string;
	price: {
		currency: string;
		amount: number;
	};
	user: RoadmapUserType;
	steps: RoadmapStepType[];
	tags: RoadmapTagType[];
	_count: {
		steps: number;
		tags: number;
	};
	isSubscribed: boolean;
}

export interface LandingRoadmapType extends Omit<RoadmapType, "isSubscribed"> {}
