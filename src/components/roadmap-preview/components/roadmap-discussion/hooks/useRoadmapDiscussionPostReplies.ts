import { RoadmapPostReplyPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-post-replies.types";
import { getPostReplies } from "@/components/roadmap-preview/utils/getPostReplies";
import { useEffect, useState, useRef } from "react";

export const useRoadmapDiscussionPostReplies = (postId: string) => {
	const [pageNumber, setPageNumber] = useState(1);
	const [totalItems, setTotalItems] = useState(2);
	const [replies, setReplies] = useState<RoadmapPostReplyPostType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const initialLoad = useRef(true);

	const handleMoreReplies = async () => {
		setIsLoading(true);
		const { comments } = await getPostReplies({
			postId,
			pageNumber,
			pageSize: 2,
		});

		setIsLoading(false);

		setTotalItems(comments.length);
		setPageNumber(prev => prev + 1);

		setReplies(prev => [...prev, ...comments]);
	};

	useEffect(() => {
		if (initialLoad.current) {
			initialLoad.current = false;
			handleMoreReplies();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		handleMoreReplies,
		totalItems,
		replies,
		isLoading,
	};
};
