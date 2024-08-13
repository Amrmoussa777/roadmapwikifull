import { useFetch } from "@/hooks/useFetch";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { setActiveConversation } from "@/redux/slices/conversation/conversationSlice";
import { ConversationUser } from "@/redux/slices/conversation/types/index.types";
import { useAppDispatch } from "@/redux/store";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useContext, useEffect } from "react";

export const useHandleActiveConversation = () => {
	const { conversationId } = useParams();
	const dispatch = useAppDispatch();
	const { fetchData: fetchConversation } = useFetch();
	const { fetchData: fetchConversationMessages } = useFetch();
	const { push } = useRouter();
	const { currentUser } = useContext(CurrentUserContext);

	const setConversationAsActive = useCallback(async () => {
		if (!conversationId) return;

		dispatch(setActiveConversation("loading"));

		try {
			const { data: conversation } = await fetchConversation(
				"GET",
				`conversations/${conversationId}`
			);
			const { data: conversationMessages } = await fetchConversationMessages(
				"GET",
				`conversations/${conversationId}/messages?page=1&pageSize=10`
			);

			const activeConversation = {
				...conversation,
				messages: conversationMessages,
			};

			console.log({ currentUser });

			const receiver = activeConversation.users?.find(
				(item: ConversationUser) => item.id !== currentUser?.id
			);

			console.log({ receiver });

			dispatch(setActiveConversation({ activeConversation, receiver }));
		} catch (error) {
			push(`/conversation`);
			dispatch(setActiveConversation(null));
		}
	}, [conversationId]);

	useEffect(() => {
		setConversationAsActive();
	}, [setConversationAsActive]);
};
