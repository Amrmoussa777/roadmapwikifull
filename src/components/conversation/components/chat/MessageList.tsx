"use client";

import ConversationLastMessageData from "@/components/conversation/components/chat/ConversationLastMessageData";
import ConversationMessagesPagination from "@/components/conversation/components/chat/ConversationMessagesPagination";
import { useAppSelector } from "@/redux/store";
import { CHAT_PLACEHOLDER } from "@public/icons/conversation";
import dynamic from "next/dynamic";
import React from "react";
const Message = dynamic(
	() => import("@/components/conversation/components/chat/Message"),
	{ ssr: false }
);

const MessageList = () => {
	const { conversation } = useAppSelector(
		state => state.conversation.activeConversation
	);

	if (!conversation) return;

	return (
		<>
			{conversation.messages.length > 0 ? (
				<div className="relative message-list-container overflow-y-auto hidden-scrollbar">
					{/* Last date */}
					<ConversationLastMessageData />

					{/* Message list */}

					<div className="message-list flex-1 overflow-y-auto hidden-scrollbar flex flex-col-reverse pt-11">
						<ul className="flex flex-col-reverse">
							{conversation.messages.map(message => (
								<Message key={message.id} message={message} />
							))}
						</ul>
						<ConversationMessagesPagination />
					</div>
				</div>
			) : (
				<div className="h-full flex-jc-c flex-col text-[#DCDCDC]">
					<span className="[&>svg]:w-[200px] [&>svg]:h-[200px]">
						{CHAT_PLACEHOLDER}
					</span>
				</div>
			)}
		</>
	);
};

export default MessageList;
