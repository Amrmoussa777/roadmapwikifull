import { MessageProps } from "@/components/conversation/types/index.types";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import moment from "moment";
import dynamic from "next/dynamic";
import React, { useContext } from "react";
const PreviewAttachments = dynamic(
	() => import("@/components/builder/roadmap-steps/PreviewAttachments"),
	{ ssr: false }
);
const MessageRecord = dynamic(
	() => import("@/components/conversation/components/chat/MessageRecord"),
	{ ssr: false }
);

const Message = ({ message }: MessageProps) => {
	const { currentUser } = useContext(CurrentUserContext);
	const { content, userId, createdAt, attachments } = message;

	const isRecord =
		attachments.length === 1 && !content && attachments[0].type === "AUDIO";

	return (
		<li
			className={`w-fit max-w-[350px] font-inter ${
				currentUser?.id === userId ? "ml-auto" : "mr-auto"
			}`}
		>
			<div
				className={`w-full py-[16px] px-[24px] rounded-[16px] ${
					isRecord ? "!p-0" : ""
				} ${
					currentUser?.id === userId
						? "bg-primary-ultramarineBlue text-white rounded-br-none"
						: "bg-primary-ultramarineBlue/15 rounded-bl-none"
				}`}
			>
				<p className="text-[12px]">{content}</p>

				{attachments.length ? (
					isRecord ? (
						<MessageRecord message={message} />
					) : (
						<div className="flex flex-wrap mt-2">
							<PreviewAttachments attachments={attachments} readOnly={true} />
						</div>
					)
				) : null}
			</div>

			<p
				className={`text-[#979797] text-[13px] px-[8px] py-[4px] ${
					currentUser?.id === userId ? "text-end" : "text-start"
				}`}
			>
				{moment(createdAt).format("LT")}
			</p>
		</li>
	);
};

export default Message;
