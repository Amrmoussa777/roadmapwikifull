"use client";

import Avatar from "@/components/common/avatar/components/Avatar";
import { previewSentAttachmentMessage } from "@/components/conversation/helpers/previewSentAttachmentMessage";
import { useUnseenMessage } from "@/components/conversation/hooks/useUnseenMessage";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { ConversationTypes } from "@/redux/slices/conversation/types/index.types";
import { useParams, useRouter } from "next/navigation";
import React, { useContext } from "react";

const SidebarConversationItem = ({
	conversation,
}: {
	conversation: ConversationTypes;
}) => {
	const { conversationId: paramId } = useParams();
	const { push } = useRouter();
	const { id, users, messages } = conversation;
	const { currentUser } = useContext(CurrentUserContext);
	const receiverUser = users.find(user => user.id !== currentUser?.id);
	const { attachments, content } = messages[0];

	const isUnseenMessage = useUnseenMessage(id);

	const handleOpenConversation = () => {
		push(`/conversation/messages/${id}`);
	};

	return (
		<div>
			<button
				onClick={handleOpenConversation}
				className={`w-full h-full flex items-center gap-[8px] py-[8px] px-[20px] font-inter font-semibold border border-transparent hover:bg-primary-ultramarineBlue/10 transition duration-200 ${
					receiverUser && isUnseenMessage
						? "!border-primary-ultramarineBlue/20 bg-primary-ultramarineBlue/15"
						: ""
				} ${paramId === id ? "bg-primary-ultramarineBlue/10" : ""}`}
			>
				<Avatar
					name={receiverUser?.fullName}
					image_url={receiverUser?.image}
					customStyles="min-w-[48px] w-[48px] min-h-[48px] h-[48px] text-primary-ultramarineBlue bg-primary-ultramarineBlue/10 border-white"
				/>

				<div className="text-start">
					<h3 className="line-clamp-1">{receiverUser?.fullName}</h3>

					<p className="line-clamp-1 text-[12px] text-[#79828B] font-medium">
						{messages.length
							? !content && attachments.length
								? previewSentAttachmentMessage(attachments)
								: content
							: ""}
					</p>
				</div>
			</button>
		</div>
	);
};

export default SidebarConversationItem;
