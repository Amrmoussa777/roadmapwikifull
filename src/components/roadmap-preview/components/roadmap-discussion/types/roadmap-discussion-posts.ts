export type RoadmapPostAuthorType = {
	name: string;
	image: string;
};

export type RoadmapPostReplyType = {
	id: string;
	postId: string;
	author: RoadmapPostAuthorType;
	addedDate: string;
	votes: number;
	content: string;
};

export type RoadmapPostType = {
	id: string;
	roadmapId: string;
	author: RoadmapPostAuthorType;
	addedDate: string;
	votes: number;
	content: string;
	replies: RoadmapPostReplyType[];
};
