import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

export const useUnseenMessage = (conversationId: string) => {
	const { unseenMessages } = useAppSelector(state => state.conversation);
	const [isUnseenMessage, setIsUnseenMessage] = useState(false);

	useEffect(() => {
		if (unseenMessages.includes(conversationId)) {
			setIsUnseenMessage(true);
		} else {
			setIsUnseenMessage(false);
		}
	}, [unseenMessages]);

	return isUnseenMessage;
};
