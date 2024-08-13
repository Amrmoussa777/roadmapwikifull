"use client";

import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import NumberStats from "@/components/common/states/NumberStats";
import Message from "@/components/conversation/components/chat/Message";
import { useAppSelector } from "@/redux/store";
import { CHAT_PLACEHOLDER } from "@public/icons/conversation";
import moment from "moment";
import React from "react";

const MessageList = () => {
	const { conversation } = useAppSelector(
		state => state.conversation.activeConversation
	);

	if (!conversation) return;

	return (
		<>
			{conversation.messages.length > 0 ? (
				<div className="message-list-container overflow-y-auto hidden-scrollbar mb-4">
					{/* Last date */}
					<div className="last-date-container flex-jc-c font-inter [&>p]:text-[11px] text-[#979797] py-4">
						<p>
							{
								moment(conversation.messages[0].createdAt)
									.calendar()
									.split("at")[0]
							}
						</p>

						<VerticalDivider
							width="w-[1px]"
							bgColor="bg-[#979797]"
							customStyles="mx-[8px] h-[12px]"
						/>
						<p>{moment(conversation.messages[0].createdAt).format("LT")}</p>
					</div>

					{/* Message list */}

					<div className="message-list flex-1 overflow-y-auto hidden-scrollbar flex flex-col-reverse">
						<ul className="flex flex-col-reverse">
							{conversation.messages.map(message => (
								<Message key={message.id} message={message} />
							))}
						</ul>
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
