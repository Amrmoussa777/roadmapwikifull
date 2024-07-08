import { PaginationProps } from "@/components/roadmap-preview/components/pagination/types/pagination.types";
import { useAppSelector } from "@/redux/store";
import React from "react";

const PostsPagination = ({ handleMoreComments }: PaginationProps) => {
	const { list, totalItems, isLoading } = useAppSelector(
		state => state.roadmapPreviewPosts.posts
	);

	return (
		<div
			className={`mt-2 text-center transition-all ${
				totalItems < 2 ? "hidden" : ""
			}`}
		>
			<button
				className="block text-start bg-background text-primary-dark rounded-sm"
				onClick={() => handleMoreComments()}
			>
				{isLoading ? "Loading..." : "Show more comments..."}
			</button>
		</div>
	);
};

export default PostsPagination;
