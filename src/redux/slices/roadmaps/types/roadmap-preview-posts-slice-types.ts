import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";

export interface RoadmapPreviewPostsSliceType {
	isLoading: boolean;
	error: Error | null;
	posts: {
		list: RoadmapPostType[];
		totalItems: number;
		isLoading: boolean;
	};
}

export interface getRoadmapPostsThunkArgs {
	roadmapId: string | string[];
	pageNumber: number;
	pageSize: number;
}

export interface getPostRepliesArgs {
	postId: string | string[];
	pageNumber: number;
	pageSize: number;
}
