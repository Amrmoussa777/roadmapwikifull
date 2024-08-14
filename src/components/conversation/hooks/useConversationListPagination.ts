import { usePaginationPageNumber } from "@/components/roadmaps/hooks/usePaginationPageNumber";
import { useFetch } from "@/hooks/useFetch";
import { useIsInViewport } from "@/hooks/useIsInViewport";
import { setConversationList } from "@/redux/slices/conversation/conversationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useRef, useState } from "react";

export const useConversationListPagination = () => {
	const { fetchData: fetchConversations, loading } = useFetch();
	const divRef = useRef<HTMLDivElement>(null);
	const { conversationList } = useAppSelector(state => state.conversation);
	const [totalItems, setTotalItems] = useState(conversationList.length);
	const { isInViewport } = useIsInViewport(divRef, loading);
	const { handleMore, pageNumber } = usePaginationPageNumber();
	const dispatch = useAppDispatch();

	const handleShowMoreConversations = async (pageNumber: number) => {
		if (loading) return;

		const { data: newConversations } = await fetchConversations(
			"GET",
			`conversations/?page=${pageNumber}&pageSize=10`
		);
		setTotalItems(newConversations.length);
		dispatch(setConversationList([...conversationList, ...newConversations]));
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
		if (pageNumber === 1 && conversationList.length) {
			setTotalItems(conversationList.length);
		}
	}, [conversationList]);

	return {
		divRef,
		totalItems,
	};
};
