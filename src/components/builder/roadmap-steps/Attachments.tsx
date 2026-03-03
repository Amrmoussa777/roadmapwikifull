import React, { useState } from "react";
import PreviewAttachments from "@/components/builder/roadmap-steps/PreviewAttachments";
import FileUploader from "@/components/builder/roadmap-steps/file-upload/components/FileUploader";
import { RoadmapStepAttachmentType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useFetch } from "@/hooks/useFetch";
import { useAppDispatch } from "@/redux/store";
import {
	addStepAttachment,
	deleteStepAttachment,
} from "@/redux/slices/create-roadmap/createRoadmapSlice";
import FileUploadedItem from "@/components/conversation/components/chat/FileUploadedItem";

interface AttachmentsProps {
	stepId: string;
	attachments: RoadmapStepAttachmentType[];
}

const Attachments = ({ stepId, attachments }: AttachmentsProps) => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const { fetchData } = useFetch();
	const dispatch = useAppDispatch();
	const { fetchData: fetchStepAttachment } = useFetch();
	const removeSelectedFile = (fileName: string) => {
		const filteredSelectedFiles = selectedFiles.filter(
			file => file.name !== fileName
		);

		setSelectedFiles(filteredSelectedFiles);
	};

	const handleRemoveUploadedFile = async (attachmentId: string) => {
		await fetchData("DELETE", `roadmap/step/attachment/${attachmentId}`).then(
			() => {
				dispatch(deleteStepAttachment({ stepId, attachmentId }));
			}
		);
	};

	const handleAttachment = async (
		fileKey: string,
		fileType: string,
		file: File
	) => {
		const type = file.type.includes("image")
			? "IMAGE"
			: file.type.includes("video")
			? "VIDEO"
			: "FILE";

		const fileData = {
			roadmapStepId: stepId,
			type,
			key: fileKey,
		};
		fetchStepAttachment("POST", `roadmap/step/attachment`, fileData).then(
			({ data }) => {
				dispatch(
					addStepAttachment({
						stepId,
						newAttachment: { ...data, localFile: file },
					})
				);
				removeSelectedFile(file.name);
			}
		);
	};

	return (
		<div>
			<FileUploader
				selectedFiles={selectedFiles}
				setSelectedFiles={setSelectedFiles}
				removeSelectedFile={removeSelectedFile}
			>
				{selectedFiles.length || attachments.length ? (
					<p className="text-[#92929D]">Attachments</p>
				) : null}

				<ul className="flex flex-wrap items-start gap-2">
					{selectedFiles.map(file => (
						<FileUploadedItem
							key={file.name}
							file={file}
							removeSelectedFile={removeSelectedFile}
							handleAttachment={handleAttachment}
							uploadBucket="step-attachments"
						/>
					))}

					<PreviewAttachments
						attachments={attachments}
						handleRemoveUploadedFile={handleRemoveUploadedFile}
					/>
				</ul>
			</FileUploader>
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

export default React.memo(Attachments, areEqual);
