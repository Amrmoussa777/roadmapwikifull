export interface RoadmapPostAuthorType {
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
}

interface Count {
	comments: number;
	votes: number;
}

export interface RoadmapPostType {
	id: string;
	title: string;
	content: string;
	roadmapId: string;
	authorId: string;
	createdAt: string;
	author: RoadmapPostAuthorType;
	_count: Count;
	isVoted: boolean;
}
