import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";

export type RoadmapPreviewPostsSliceType = {
	posts: RoadmapPostType[];
	isLoading: boolean;
	error: Error | null;
	searchResult: RoadmapPostType[];
	replyPostId: number | null;
};
