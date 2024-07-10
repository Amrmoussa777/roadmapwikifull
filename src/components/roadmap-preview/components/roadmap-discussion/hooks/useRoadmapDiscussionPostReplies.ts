import { getPostReplies } from "@/components/roadmap-preview/utils/getPostReplies";
import { pushMoreReplies } from "@/redux/slices/roadmaps/roadmapPreviewRepliesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState, useRef } from "react";

export const useRoadmapDiscussionPostReplies = (postId: string) => {
	const [totalItems, setTotalItems] = useState(5);
	const [isLoading, setIsLoading] = useState(false);
	const { replies } = useAppSelector(state => state.roadmapPreviewReplies);
	const dispatch = useAppDispatch();

	const pageNumber = replies[postId].pageNumber;
	const initialLoad = useRef(true);

	const handleMoreReplies = async () => {
		setIsLoading(true);
		const { comments } = await getPostReplies({
			postId,
			pageNumber,
			pageSize: 5,
		});

		setIsLoading(false);
		dispatch(pushMoreReplies({ postId, newReplies: comments }));
		setTotalItems(comments.length);
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
		isLoading,
	};
};
