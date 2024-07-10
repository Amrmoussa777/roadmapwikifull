import { PaginationProps } from "@/components/roadmap-preview/components/pagination/types/pagination.types";
import { useAppSelector } from "@/redux/store";
import React from "react";

const PostsPagination = ({ handleMoreComments }: PaginationProps) => {
	const { list, totalItems, isLoading } = useAppSelector(
		state => state.roadmapPreviewPosts.posts
	);

	return (
		<div
			className={`mt-2 text-center transition-all ml-2 ${
				totalItems < 2 ? "hidden" : ""
			}`}
		>
			<button
				className="block text-start bg-background text-grey-secondary rounded-sm"
				onClick={() => handleMoreComments()}
				disabled={isLoading}
			>
				{isLoading ? "Loading..." : "Show more posts..."}
			</button>
		</div>
	);
};

export default PostsPagination;
