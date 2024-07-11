export type RoadmapPostReplyAuthorType = {
	id: string;
	email: string;
	role: "USER" | "ADMIN" | "MODERATOR";
	image: string;
	cover: string;
	occupation: string;
	roadmapsSubscribers: number;
	fullName: string;
	userName: string;
	description: string;
};

export type RoadmapPostReplyCountType = {
	replies: number;
	votes: number;
};

export type RoadmapPostReplyPostType = {
	id: string;
	content: string;
	postId: string;
	authorId: string;
	parentId: string | null;
	createdAt: string;
	author: RoadmapPostReplyAuthorType;
	_count: RoadmapPostReplyCountType;
	isVoted: boolean;
};
