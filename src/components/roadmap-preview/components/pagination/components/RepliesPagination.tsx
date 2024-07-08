import { RepliesPaginationProps } from "@/components/roadmap-preview/components/pagination/types/pagination.types";
import { useAppSelector } from "@/redux/store";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const RepliesPagination = ({
	pageNumber,
	lastPage,
	handleMoreReplies,
}: RepliesPaginationProps) => {
	const { list } = useAppSelector(state => state.roadmapPreviewPosts.posts);

	return (
		<div className="mt-2 text-center px-6 text-[14px]">
			<button
				className="flex-jc-c mx-auto"
				onClick={() => handleMoreReplies()}
				disabled={lastPage}
			>
				More replies...
			</button>
		</div>
	);
};

export default RepliesPagination;
