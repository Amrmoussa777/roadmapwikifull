import React, { useState } from "react";
import PreviewAttachments from "@/components/create-roadmap/roadmap-steps/PreviewAttachments";
import FileUploadedItem from "@/components/create-roadmap/roadmap-steps/file-upload/components/FileUploadedItem";
import FileUploader from "@/components/create-roadmap/roadmap-steps/file-upload/components/FileUploader";
import { RoadmapStepAttachmentType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

interface AttachmentsProps {
	stepId: string;
	attachments: RoadmapStepAttachmentType[];
}

const Attachments = ({ stepId, attachments }: AttachmentsProps) => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const removeSelectedFile = (fileName: string) => {
		const filteredSelectedFiles = selectedFiles.filter(
			file => file.name !== fileName
		);

		setSelectedFiles(filteredSelectedFiles);
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
							stepId={stepId}
							removeSelectedFile={removeSelectedFile}
						/>
					))}

					<PreviewAttachments attachments={attachments} stepId={stepId} />
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
