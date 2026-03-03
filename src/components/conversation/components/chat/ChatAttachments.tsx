"use client";

import React, { useState } from "react";
import PreviewAttachments from "@/components/builder/roadmap-steps/PreviewAttachments";
import FileUploadedItem from "@/components/conversation/components/chat/FileUploadedItem";
import useHandleFilesChanges from "@/components/builder/roadmap-steps/file-upload/hooks/useHandleFilesChanges";
import { AttachmentsProps } from "@/components/conversation/types/index.types";
import { v4 as uuidv4 } from "uuid";

const ChatAttachments = ({
	inputRef,
	attachments,
	setAttachments,
}: AttachmentsProps) => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const { handleFileChange } = useHandleFilesChanges({
		selectedFiles,
		setSelectedFiles,
	});

	const removeSelectedFile = (fileName: string) => {
		const filteredSelectedFiles = selectedFiles.filter(
			file => file.name !== fileName
		);

		setSelectedFiles(filteredSelectedFiles);
	};

	const handleAttachment = async (
		fileKey: string,
		fileType: "IMAGE" | "VIDEO" | "FILE" | "AUDIO",
		file: File
	) => {
		setAttachments([
			{
				id: uuidv4(),
				key: fileKey,
				type: fileType,
				localFile: file,
				url: URL.createObjectURL(file),
			},
			...attachments,
		]);
		removeSelectedFile(file.name);
	};

	const handleRemoveUploadedFile = async (attachmentId: string) => {
		const filteredAttachments = attachments.filter(
			attachment => attachment.id !== attachmentId
		);

		setAttachments(filteredAttachments);
	};

	return (
		<div>
			<input
				type="file"
				name="uploadFile"
				accept="*/*"
				id="file-upload"
				onChange={handleFileChange}
				ref={inputRef}
				className="hidden"
			/>

			{selectedFiles.length || attachments.length ? (
				<ul className="flex flex-wrap items-start gap-2 mt-2">
					{selectedFiles.map(file => (
						<FileUploadedItem
							key={file.name}
							file={file}
							removeSelectedFile={removeSelectedFile}
							handleAttachment={handleAttachment}
						/>
					))}

					<PreviewAttachments
						attachments={attachments}
						handleRemoveUploadedFile={handleRemoveUploadedFile}
					/>
				</ul>
			) : null}
		</div>
	);
};

const areEqual = (prevProps: AttachmentsProps, nextProps: AttachmentsProps) => {
	if (prevProps.attachments.length !== nextProps.attachments.length) {
		return false;
	}
	for (let i = 0; i < prevProps.attachments.length; i++) {
		if (prevProps.attachments[i].id !== nextProps.attachments[i].id) {
			return false;
		}
	}
	return true;
};

export default React.memo(ChatAttachments, areEqual);
