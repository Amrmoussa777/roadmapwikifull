import { RoadmapStepType } from "@/components/roadmap-preview/types/roadmapSteps.types";

type Tag = {
	id: string;
	title: string;
};

type Author = {
	name: string;
	image: string;
};

type Roadmap = {
	id: string;
	title: string;
	price: number;
	cover: string;
	description: string;
	duration: string;
	subscribers: string;
	stepsCount: number;
	tags: Tag[];
	steps: RoadmapStepType[];
};

export type RoadmapPreviewSliceType = {
	roadmap: Roadmap | null;
	isLoading: boolean;
	error: null | Error;
};
