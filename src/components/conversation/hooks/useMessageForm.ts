import { FormEvent, useRef, useState } from "react";
import useInput from "@/components/common/input/hooks/useInput";
import { LocalAttachmentTypes } from "@/components/conversation/types/index.types";
import { ITarget } from "@/hooks/types/index.types";
import { useFetch } from "@/hooks/useFetch";
import {
	pushMessage,
	updateFormChatContent,
} from "@/redux/slices/conversation/conversationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import getBlobDuration from "get-blob-duration";
import fixWebmDuration from "fix-webm-duration";

export const useMessageForm = () => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const textInputRef = useRef<HTMLInputElement>(null);
	const [attachments, setAttachments] = useState<LocalAttachmentTypes[]>([]);
	const { value: textForm, changeValue: changeTextForm, reset } = useInput("");
	const dispatch = useAppDispatch();
	const { formContent, activeConversation } = useAppSelector(
		state => state.conversation
	);
	const { fetchData: fetchCreateMessage } = useFetch();
	const { fetchData: fetchUploadFile } = useFetch();
	const [isRecording, setIsRecording] = useState(false);

	const handleChangeText = (e: ITarget | string) => {
		const newValue = typeof e !== "string" ? e.target.value.toString() : e;
		changeTextForm(e);
		dispatch(updateFormChatContent({ key: "textForm", value: newValue }));
	};

	const handleUploadFiles = () => {
		fileInputRef.current?.click();
	};

	const handleSubmitMessage = async (e: FormEvent) => {
		e.preventDefault();

		const attachmentsData = attachments.length
			? attachments.map(({ key, type }) => ({ key, type }))
			: null;
		const messageContent = { content: textForm, attachments: attachmentsData };

		if (messageContent.content || messageContent.attachments?.length) {
			const { data: newMessage } = await fetchCreateMessage(
				"POST",
				`conversations/${activeConversation.conversation?.id}/messages`,
				messageContent
			);

			dispatch(pushMessage(newMessage));
			dispatch(updateFormChatContent({ key: "text", value: "" }));
			setAttachments([]);
			reset();
		}
	};

	const handleSendRecord = async (audioFile: Blob) => {
		const duration = await getBlobDuration(audioFile);
		const newAudioFile = await fixWebmDuration(audioFile, duration * 1000);

		const formData = new FormData();
		formData.append("file", newAudioFile);
		const { data: key } = await fetchUploadFile(
			"POST",
			"media/upload?bucket=message-attachments",
			formData
		);

		const newRecord = { key, type: "AUDIO" };
		const { data: newMessage } = await fetchCreateMessage(
			"POST",
			`conversations/${activeConversation.conversation?.id}/messages`,
			{ attachments: [newRecord] }
		);

		dispatch(pushMessage(newMessage));
	};

	const handleToggleRecording = (status: boolean) => {
		setIsRecording(status);
	};

	const handleChangeEmoji = (emoji: string) => {
		const newValue = textForm + emoji;
		changeTextForm(newValue);
		dispatch(updateFormChatContent({ key: "textForm", value: newValue }));
	};

	return {
		fileInputRef,
		textInputRef,
		attachments,
		formContent,
		textForm,
		isRecording,
		setAttachments,
		handleChangeText,
		handleUploadFiles,
		handleSubmitMessage,
		handleSendRecord,
		handleToggleRecording,
		handleChangeEmoji,
	};
};
