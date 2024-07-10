import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";

export interface RoadmapPreviewPostsSliceType {
	isLoading: boolean;
	error: Error | null;
	posts: {
		list: RoadmapPostType[];
		totalItems: number;
		isLoading: boolean;
	};
	currentPostId: string | null;
}

export interface getRoadmapPostsThunkArgs {
	roadmapId: string | string[];
	pageNumber: number;
	pageSize: number;
}

export interface addCommentArgs {
	content: string;
	postId: string;
}

export interface addPostArgs {
	title: string;
	content: string;
	roadmapId: string;
}

export interface getPostRepliesArgs {
	postId: string | string[];
	pageNumber: number;
	pageSize: number;
}
