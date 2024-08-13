import React, { useEffect, useCallback, useRef, useState } from "react";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import throttle from "lodash/throttle";
import { useFetch } from "@/hooks/useFetch";
import { usePaginationPageNumber } from "@/components/roadmaps/hooks/usePaginationPageNumber";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { pushMoreMessages } from "@/redux/slices/conversation/conversationSlice";

const ConversationMessagesPagaination = () => {
	const { fetchData, loading } = useFetch(true);
	const [totalItems, setTotalItems] = useState(0);
	const { handleMore, pageNumber, resetPageNumber } = usePaginationPageNumber();
	const { conversation } = useAppSelector(
		state => state.conversation.activeConversation
	);
	const dispatch = useAppDispatch();

	const handleShowMoreMessages = async () => {
		if (conversation) {
			const { data: newMessages } = await fetchData(
				"GET",
				`conversations/${conversation.id}/messages?page=${pageNumber}&pageSize=10`
			);
			setTotalItems(newMessages.length);
			dispatch(pushMoreMessages(newMessages));
		}
	};

	const divRef = useRef<HTMLDivElement>(null);

	const handleScroll = useCallback(
		throttle(() => {
			console.log("Hello");
			if (loading || !divRef.current) return;

			const rect = divRef.current.getBoundingClientRect();

			if (rect.top <= window.innerHeight && rect.bottom >= 0) {
				handleMore();
				handleShowMoreMessages();
			}
		}, 300),
		[]
	);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<div
			ref={divRef}
			className={`text-center transition-all ${totalItems < 5 ? "hidden" : ""}`}
		>
			{loading && (
				<div className="relative overflow-hidden w-[148px] h-[40px] flex-jc-c gap-2 mx-auto my-4 px-[12px] font-inter font-normal text-[14px] rounded-full bg-primary-ultramarineBlue text-white">
					<ButtonDotsLoader />
				</div>
			)}
		</div>
	);
};

export default ConversationMessagesPagaination;
