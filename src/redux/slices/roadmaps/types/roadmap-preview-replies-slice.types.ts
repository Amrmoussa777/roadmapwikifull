interface RoadmapPreviewReplyAuthor {
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
}

interface RoadmapPreviewReplyCount {
	replies: number;
	votes: number;
}

export interface RoadmapPreviewReplyType {
	id: string;
	content: string;
	postId: string;
	authorId: string;
	parentId: string | null;
	createdAt: string;
	author: RoadmapPreviewReplyAuthor;
	_count: RoadmapPreviewReplyCount;
}

export interface ReplyState {
	pageNumber: number;
	list: RoadmapPreviewReplyType[];
}

export interface RepliesState {
	[key: string]: ReplyState;
}

export interface RoadmapPreviewRepliesSliceType {
	replies: RepliesState;
}
