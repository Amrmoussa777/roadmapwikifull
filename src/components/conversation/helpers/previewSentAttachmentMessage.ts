import { ConversationMessageAttachmentsType } from "@/redux/slices/conversation/types/index.types";

export const previewSentAttachmentMessage = (
	attachments: ConversationMessageAttachmentsType[]
): string => {
	const lastAttachment = attachments.slice(-1)[0];

	const attachmentType = lastAttachment?.type || null;

	const previewAttachment = `Sent ${attachmentType.toLowerCase()}`;
	return previewAttachment;
};
