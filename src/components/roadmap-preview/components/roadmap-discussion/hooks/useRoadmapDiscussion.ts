import useToggle from "@/hooks/useToggle";
import { getRoadmapPosts } from "@/redux/slices/thunks/roadmaps/getRoadmapPosts";
import { useAppDispatch } from "@/redux/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useRoadmapDiscussion = () => {
	const { currentState: isExpandedDiscussion, toggle: toggleDiscussion } =
		useToggle(false);
	const { currentState: isSearchOpen, toggle: toggleSearch } = useToggle(false);
	const [pageNumber, setPageNumber] = useState(1);
	const dispatch = useAppDispatch();

	const { id } = useParams();

	useEffect(() => {
		dispatch(getRoadmapPosts({ roadmapId: id, pageNumber: 1, pageSize: 5 }));
	}, [id]);

	const handleMoreComments = () => {
		setPageNumber(prev => prev + 1);

		dispatch(
			getRoadmapPosts({
				roadmapId: id,
				pageNumber: pageNumber + 1,
				pageSize: 5,
			})
		);
	};

	return {
		isExpandedDiscussion,
		toggleDiscussion,
		isSearchOpen,
		toggleSearch,
		pageNumber,
		handleMoreComments,
	};
};
