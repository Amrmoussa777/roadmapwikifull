import { usePaginationPageNumber } from "@/components/roadmaps/hooks/usePaginationPageNumber";
import { useFetch } from "@/hooks/useFetch";
import { useIsInViewport } from "@/hooks/useIsInViewport";
import {
	setConversationList,
	setConversationTotalItem,
} from "@/redux/slices/conversation/conversationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useRef } from "react";

export const useConversationListPagination = () => {
	const { fetchData: fetchConversations, loading } = useFetch();
	const divRef = useRef<HTMLDivElement>(null);
	const { conversationList, searchResultCount } = useAppSelector(
		state => state.conversation
	);
	const { isInViewport } = useIsInViewport(divRef, loading);
	const { handleMore, pageNumber } = usePaginationPageNumber();
	const dispatch = useAppDispatch();

	const handleShowMoreConversations = async (pageNumber: number) => {
		if (loading) return;

		const { data: newConversations } = await fetchConversations(
			"GET",
			`conversations/?page=${pageNumber}&pageSize=10`
		);

		dispatch(setConversationTotalItem(newConversations.length));

		dispatch(
			setConversationList({
				conversationList: [...conversationList, ...newConversations],
				searchResultCount: null,
			})
		);
	};

	useEffect(() => {
		if (isInViewport) {
			handleMore();
		}
	}, [isInViewport]);

	useEffect(() => {
		if (pageNumber > 1) {
			handleShowMoreConversations(pageNumber);
		}
	}, [pageNumber]);

	useEffect(() => {
		if (conversationList.length) {
			setTimeout(() => {
				dispatch(setConversationTotalItem(conversationList.length));
			}, 300);
		}
	}, []);

	return {
		divRef,
	};
};
