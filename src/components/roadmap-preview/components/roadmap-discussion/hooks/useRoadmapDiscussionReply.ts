import { useAppDispatch } from "@/redux/store";
import { FormEvent, RefObject, useEffect } from "react";

export const useRoadmapDiscussionReply = (
	inputRef: RefObject<null | HTMLInputElement>,
	replyPostId: number | null,
	replyType: string | null,
	replyContent: string,
	resetReplyValue: () => void
) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (replyPostId && inputRef.current) {
			inputRef.current.focus();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [replyPostId, replyType]);

	const handleSubmitReply = (e: FormEvent) => {
		e.preventDefault();
		resetReplyValue();
	};

	return { handleSubmitReply };
};
