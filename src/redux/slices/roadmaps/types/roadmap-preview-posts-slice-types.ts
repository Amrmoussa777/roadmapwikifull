import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";

export interface RoadmapPreviewPostsSliceType {
	isLoading: boolean;
	error: Error | null;
	posts: {
		list: RoadmapPostType[];
		lastPage: boolean;
	};
}

export interface getRoadmapPostsThunkArgs {
	roadmapId: string | string[];
	pageNumber: number;
	pageSize: number;
}

export interface getPostRepliesThunkArgs {
	postId: string | string[];
	pageNumber: number;
	pageSize: number;
}
