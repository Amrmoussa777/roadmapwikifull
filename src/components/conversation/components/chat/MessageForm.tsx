"use client";

import React, { FormEvent, useRef, useState } from "react";
import useInput from "@/components/common/input/hooks/useInput";
import ChatAttachments from "@/components/conversation/components/chat/ChatAttachments";
import AudioRecorder from "@/components/conversation/components/chat/recorder/AudioRecorder";
import { LocalAttachmentTypes } from "@/components/conversation/types/index.types";
import { ITarget } from "@/hooks/types/index.types";
import { useFetch } from "@/hooks/useFetch";
import {
	pushMessage,
	updateFormChatContent,
} from "@/redux/slices/conversation/conversationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ATTACHMENTS_ICON } from "@public/icons/conversation";
import { DIRECT_MESSAGE } from "@public/icons/roadmapPreview";
import EmojiForm from "@/components/conversation/components/chat/EmojiForm";
import getBlobDuration from 'get-blob-duration'
import fixWebmDuration from "fix-webm-duration";



const MessageForm = () => {
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
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleSubmitMessage = async (e: FormEvent) => {
		e.preventDefault();

		const attachmentsData =
			attachments.length > 0
				? attachments.map(({ key, type }) => ({ key, type }))
				: null;

		const messageContent = {
			content: textForm,
			attachments: attachmentsData ? attachmentsData : null,
		};

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
			`media/upload`,
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

	return (
		<form onSubmit={handleSubmitMessage} className="mt-auto">
			<div className="flex-jb-c gap-2">
				{isRecording ? (
					<div className="w-full h-[52px] flex-ic-c px-4 bg-white rounded-[8px] border border-[#E5EAFF]">
						<p className="text-[18px] text-[#979797] cursor-alias">
							Recording...
						</p>
					</div>
				) : (
					<div className="w-full h-[52px] flex-jc-c px-4 bg-white rounded-[8px] border border-[#E5EAFF] focus-within:border-primary-ultramarineBlue hover:border-primary-ultramarineBlue transition duration-200">
						<EmojiForm
							textInputRef={textInputRef}
							handleChangeEmoji={handleChangeEmoji}
						/>

						<input
							ref={textInputRef}
							type="text"
							placeholder="Enter your message"
							value={textForm}
							onChange={handleChangeText}
							id="formText"
							className="w-full h-full outline-none bg-transparent text-[14px] placeholder:text-[14px] placeholder:font-poppins placeholder:font-normal placeholder:text-[#979797] text-[#202020]"
						/>

						<div className="flex-jc-c gap-2 [&>button]:w-[36px] [&>button]:h-[36px] [&>button]:min-w-[36px] [&>button]:min-h-[36px] text-[#79828B]">
							<button onClick={handleUploadFiles} type="button">
								{ATTACHMENTS_ICON}
							</button>
						</div>
					</div>
				)}

				<div className="flex-ic-c gap-2">
					{(formContent && Object.values(formContent).length) ||
					attachments.length ? (
						<button
							type="submit"
							className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] [&>svg]:w-[30px] [&>svg]:h-[30px] flex-jc-c bg-[#F8F9FD] text-primary-ultramarineBlue border border-primary-ultramarineBlue/15 rounded-[8px] hover:bg-primary-ultramarineBlue hover:text-white duration-200 transition"
						>
							{DIRECT_MESSAGE}
						</button>
					) : null}

					<AudioRecorder
						handleSendRecord={handleSendRecord}
						handleToggleRecording={handleToggleRecording}
						isRecording={isRecording}
					/>
				</div>
			</div>

			<ChatAttachments
				inputRef={fileInputRef}
				attachments={attachments}
				setAttachments={setAttachments}
			/>
		</form>
	);
};

export default MessageForm;
