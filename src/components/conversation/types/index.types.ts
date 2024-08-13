import { ConversationMessageTypes } from "@/redux/slices/conversation/types/index.types";
import { RefObject } from "react";

export type MessageProps = {
	message: ConversationMessageTypes;
};

export interface LocalAttachmentTypes {
	id: string;
	key: string;
	type: "IMAGE" | "VIDEO" | "FILE" | "AUDIO";
	localFile?: File;
	url: string;
}

export interface AttachmentsProps {
	inputRef: RefObject<HTMLInputElement>;
	attachments: LocalAttachmentTypes[];
	setAttachments: (attachments: LocalAttachmentTypes[]) => void;
}

export type AudioRecorderProps = {
	handleSendRecord: (audioFile: Blob) => void;
	handleToggleRecording: (status: boolean) => void;
	isRecording: boolean;
};
