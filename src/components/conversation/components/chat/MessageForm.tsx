"use client";

import React from "react";
import { ATTACHMENTS_ICON } from "@public/icons/conversation";
import { DIRECT_MESSAGE } from "@public/icons/roadmapPreview";
import dynamic from "next/dynamic";
import { useMessageForm } from "@/components/conversation/hooks/useMessageForm";

// Dynamically import components
const AudioRecorder = dynamic(
	() =>
		import("@/components/conversation/components/chat/recorder/AudioRecorder"),
	{ ssr: false }
);
const ChatAttachments = dynamic(
	() => import("@/components/conversation/components/chat/ChatAttachments"),
	{ ssr: false }
);
const EmojiForm = dynamic(
	() => import("@/components/conversation/components/chat/EmojiForm"),
	{ ssr: false }
);

const MessageForm = () => {
	const {
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
	} = useMessageForm();

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
