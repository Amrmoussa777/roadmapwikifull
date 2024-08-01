import { useState } from "react";

export const useRoadmapPagination = () => {
	const [pageNumber, setPageNumber] = useState(1);

	const handleMoreRoadmaps = async () => {
		setPageNumber(prev => prev + 1);
	};

	const resetPageNumber = () => {
		setPageNumber(1);
	};

	return {
		handleMoreRoadmaps,
		pageNumber,
		resetPageNumber,
	};
};
