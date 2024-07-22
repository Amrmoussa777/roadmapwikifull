import PreviewAttachments from "@/components/create-roadmap/roadmap-steps/PreviewAttachments";
import FileUploadedItem from "@/components/create-roadmap/roadmap-steps/file-upload/components/FileUploadedItem";
import FileUploader from "@/components/create-roadmap/roadmap-steps/file-upload/components/FileUploader";
import { RoadmapStepAttachmentType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import React, { useState } from "react";

const Attachments = ({
	stepId,
	attachments,
}: {
	stepId: string;
	attachments: RoadmapStepAttachmentType[];
}) => {
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

export default Attachments;
