import { usePaginationPageNumber } from "@/components/roadmaps/hooks/usePaginationPageNumber";
import { useFetch } from "@/hooks/useFetch";
import { useIsInViewport } from "@/hooks/useIsInViewport";
import { pushMoreMessages } from "@/redux/slices/conversation/conversationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useRef, useState } from "react";

export const useConversationMessagesPagination = () => {
	const { fetchData, loading } = useFetch();
	const { handleMore, pageNumber } = usePaginationPageNumber();
	const { conversation } = useAppSelector(
		state => state.conversation.activeConversation
	);
	const [totalItems, setTotalItems] = useState(
		conversation?.messages.length || 0
	);
	const divRef = useRef<HTMLDivElement>(null);

	const { isInViewport } = useIsInViewport(divRef, loading);

	const dispatch = useAppDispatch();

	const handleShowMoreMessages = async (pageNumber: number) => {
		if (conversation && !loading) {
			const { data: newMessages } = await fetchData(
				"GET",
				`conversations/${conversation.id}/messages?page=${pageNumber}&pageSize=5`
			);
			setTotalItems(newMessages.length);
			dispatch(pushMoreMessages(newMessages));
		}
	};

	useEffect(() => {
		if (isInViewport) {
			handleMore();
		}
	}, [isInViewport]);

	useEffect(() => {
		if (pageNumber > 1) {
			handleShowMoreMessages(pageNumber);
		}
	}, [pageNumber]);

	return {
		divRef,
		totalItems,
	};
};
