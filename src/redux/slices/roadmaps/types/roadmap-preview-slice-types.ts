import { UserType } from "@/redux/slices/user-profile/types/userProfileSlice.types";

export type RoadmapPreviewSliceType = {
	roadmap: null | RoadmapType;
	isLoading: boolean;
	error: null | string;
};

export interface RoadmapPriceType {
	amount: number;
	currency: string;
}

export interface RoadmapUserExperienceType {
	id: string;
	title: string;
	description: string;
}

export interface RoadmapTagType {
	id: string;
	roadmapStepId: string;
	name: string;
	color: string;
}

export interface RoadmapStepAttachmentType {
	id: string;
	type: string;
	key: string;
	url: string;
	roadmapStepId?: string;
	localFile?: File;
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
	order: number;
}

export interface RoadmapType {
	id: string;
	description: string;
	category: null | string;
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
		perks: string[];
	} | null;
	user: UserType;
	steps: RoadmapStepType[];
	tags: RoadmapTagType[];
	_count: {
		steps: number;
		tags: number;
	};
	isSubscribed: boolean;
	status: "DRAFT" | "PUBLISHED";
}

export interface LandingRoadmapType extends Omit<RoadmapType, "isSubscribed"> {}
