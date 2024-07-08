import { PaginationProps } from "@/components/roadmap-preview/components/pagination/types/pagination.types";
import { useAppSelector } from "@/redux/store";
import React from "react";

const PostsPagination = ({ handleMoreComments }: PaginationProps) => {
	const { list, totalItems } = useAppSelector(
		state => state.roadmapPreviewPosts.posts
	);

	return (
		<div
			className={`mt-2 text-center transition-all ${
				totalItems < 2 ? "hidden" : ""
			}`}
		>
			<button
				className="flex-jc-c mx-auto bg-primary-ultramarineBlue text-white px-4 py-2 rounded-sm"
				onClick={() => handleMoreComments()}
			>
				More comments
			</button>
		</div>
	);
};

export default PostsPagination;
