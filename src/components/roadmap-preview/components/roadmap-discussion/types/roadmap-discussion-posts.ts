export type RoadmapPostAuthorType = {
	name: string;
	image: string;
};

export type RoadmapPostReplyType = {
	id: number;
	postId: string;
	author: RoadmapPostAuthorType;
	addedDate: string;
	votes: number;
	content: string;
};

export type RoadmapPostType = {
	id: number;
	roadmapId: string;
	author: RoadmapPostAuthorType;
	addedDate: string;
	votes: number;
	content: string;
	replies: RoadmapPostReplyType[];
};
