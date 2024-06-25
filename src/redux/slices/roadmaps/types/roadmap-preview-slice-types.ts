import { RoadmapStepType } from "@/components/roadmap-preview/types/roadmapSteps.types";

interface User {
	id: number;
	userName: string;
	experiences: Experience[];
	socialMedia: SocialMediaLink[];
}

interface Experience {
	id: number;
	title: string;
	description: string;
}

interface SocialMediaLink {
	id: number;
	name: string;
	link: string;
}

type Tag = {
	id: string;
	title: string;
};

type Roadmap = {
	id: number;
	title: string;
	price: number;
	icon: null;
	cover: string;
	description: string;
	duration: string;
	subscribers: string;
	stepsCount: number;
	userId: number;
	user: User;
	createdAt: string;
	tags: Tag[];
	steps: RoadmapStepType[];
};

export type RoadmapPreviewSliceType = {
	roadmap: Roadmap | null;
	isLoading: boolean;
	error: null | Error;
};
