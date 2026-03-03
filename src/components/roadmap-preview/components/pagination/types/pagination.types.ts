export type PaginationProps = {
	handleMoreComments: () => void;
};
export type RepliesPaginationProps = {
	handleMoreReplies: () => void;
	totalItems: number;
	isLoading: boolean;
};
