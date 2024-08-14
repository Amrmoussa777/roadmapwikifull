import { useState } from "react";

export const usePaginationPageNumber = () => {
	const [pageNumber, setPageNumber] = useState(1);

	const handleMore = () => {
		setPageNumber(prev => prev + 1);
	};

	const resetPageNumber = () => {
		setPageNumber(1);
	};

	return {
		handleMore,
		pageNumber,
		resetPageNumber,
	};
};
