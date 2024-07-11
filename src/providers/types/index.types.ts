import { ReactNode } from "react";

export type ChildrenType = {
	children: ReactNode;
};

export type CurrentUserSocialMedia = {
	id: string;
	platform: string;
	link: string;
};

export type CurrentUserExperience = {
	id: string;
	title: string;
	description: string;
	userId: string;
};

export type CurrentUserCount = {
	followers: number;
	following: number;
};

export type CurrentUserType = {
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
	socialMedia: CurrentUserSocialMedia[];
	experiences: CurrentUserExperience[];
	_count: CurrentUserCount;
};

export type CurrentUserContextType = {
	currentUser: CurrentUserType | null | undefined;
};
