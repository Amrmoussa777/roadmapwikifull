import { RepliesPaginationProps } from "@/components/roadmap-preview/components/pagination/types/pagination.types";
import React from "react";

const RepliesPagination = ({
	handleMoreReplies,
	totalItems,
	isLoading,
}: RepliesPaginationProps) => {
	return (
		<div
			className={`text-center transition-all ml-6 ${
				totalItems < 2 ? "hidden" : ""
			}`}
		>
			<button
				className="block text-start text-[14px] bg-background text-grey-secondary rounded-sm"
				onClick={() => handleMoreReplies()}
				disabled={isLoading}
			>
				{isLoading ? "Loading..." : "Show more comments..."}
			</button>
		</div>
	);
};

export default RepliesPagination;
