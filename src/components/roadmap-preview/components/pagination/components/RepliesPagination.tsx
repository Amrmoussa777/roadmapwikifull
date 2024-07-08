import { RepliesPaginationProps } from "@/components/roadmap-preview/components/pagination/types/pagination.types";
import React from "react";

const RepliesPagination = ({ handleMoreReplies }: RepliesPaginationProps) => {
	return (
		<div className={`mt-2 text-center transition-all`}>
			<button
				onClick={handleMoreReplies}
				className="flex-jc-c text-[14px] mx-auto bg-primary-ultramarineBlue text-white px-4 py-2 rounded-sm"
			>
				More replies
			</button>
		</div>
	);
};

export default RepliesPagination;
