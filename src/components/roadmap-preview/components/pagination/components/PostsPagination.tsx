import { PaginationProps } from "@/components/roadmap-preview/components/pagination/types/pagination.types";
import { useAppSelector } from "@/redux/store";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const PostsPagination = ({
	pageNumber,
	lastPage,
	handleLessComments,
	handleMoreComments,
}: PaginationProps) => {
	const { list } = useAppSelector(state => state.roadmapPreviewPosts.posts);

	return (
		<div className="flex-jb-c mt-2 text-center">
			<button
				className="flex-jc-c"
				onClick={() => handleLessComments()}
				disabled={pageNumber === 1 || list.length === 1}
			>
				<span className="-rotate-90 [&>svg]:w-[20px]">{ARROW_ICON}</span> Less
				comments
			</button>

			<button
				className="flex-jc-c"
				onClick={() => handleMoreComments()}
				disabled={lastPage}
			>
				More comments
				<span className="rotate-90 [&>svg]:w-[20px]">{ARROW_ICON}</span>
			</button>
		</div>
	);
};

export default PostsPagination;
