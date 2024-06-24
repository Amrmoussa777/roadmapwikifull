type Tag = {
	id: string;
	title: string;
};

type Author = {
	name: string;
	image: string;
};

type Reply = {
	id: string;
	postId: string;
	author: Author;
	addedDate: string;
	votes: number;
	content: string;
};

type Post = {
	id: string;
	roadmapId: string;
	author: Author;
	addedDate: string;
	votes: number;
	content: string;
	replies: Reply[];
};

type Roadmap = {
	id: string;
	title: string;
	subscriptionPrice: number;
	cover: string;
	description: string;
	duration: string;
	subscribers: string;
	stepsCount: number;
	tags: Tag[];
	steps: any[];
	posts: Post[];
};

export type RoadmapPreviewSliceType = {
	roadmap: Roadmap;
};
