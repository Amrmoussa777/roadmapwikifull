import { UserType } from "@/redux/slices/user-profile/types/userProfileSlice.types";

export type ConversationSliceState = {
	conversationType: "messages" | "comments";
	conversationList: ConversationTypes[];
	comments: [];
	activeConversation: {
		loading: boolean;
		conversation: ConversationTypes | null;
		receiver: ConversationUser | null;
	};
	formContent: ConversationFormContent;
	searchResultCount: number | null;
	totalItems: number;
	unseenMessages: string[];
};

export type ConversationFormContent =
	| Record<"text" | "files" | "record", string | File[]>
	| any;

export type ConversationUser = {
	id: string;
	email: string;
	role: "USER" | "CREATOR";
	image: string;
	roadmapsSubscribers: number;
	userName: string;
	description: string;
	fullName: string;
	occupation: string;
	cover: string;
	createdAt: string;
	phone: string;
};

export type ConversationMessageAttachmentsType = {
	createdAt: string;
	id: string;
	key: string;
	messageId: string;
	type: "IMAGE" | "VIDEO" | "FILE" | "AUDIO";
	updatedAt: string;
	url: string;
};

export type ConversationMessageTypes = {
	id: string;
	createdAt: string;
	updatedAt: string;
	content: string;
	conversationId: string;
	userId: string;
	attachments: ConversationMessageAttachmentsType[];
};

export type ConversationTypes = {
	id: string;
	createdAt: string;
	updatedAt: string;
	users: ConversationUser[];
	messages: ConversationMessageTypes[];
};
