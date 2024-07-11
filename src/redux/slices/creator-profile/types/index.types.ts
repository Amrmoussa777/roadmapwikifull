import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

export type CreatorProfileStateTypes = {
	user: null | CreatorProfileUserType;
	userRoadmaps: RoadmapType[];
};

export type CreatorProfileUserType = {
	id: string;
	email: string;
	role: string;
	image: string;
	cover: string;
	occupation: string;
	roadmapsSubscribers: number;
	fullName: string;
	userName: string;
	description: string;
	socialMedia: SocialMedia[];
	experiences: Experience[];
	_count: Count;
};

type SocialMedia = {
	id: string;
	platform: string;
	link: string;
};

type Experience = {
	id: string;
	title: string;
	description: string;
	userId: string;
};

type Count = {
	followers: number;
	following: number;
};
