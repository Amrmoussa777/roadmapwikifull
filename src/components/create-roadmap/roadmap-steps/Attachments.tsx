import FileUploadedItem from "@/components/create-roadmap/roadmap-steps/file-upload/components/FileUploadedItem";
import FileUploader from "@/components/create-roadmap/roadmap-steps/file-upload/components/FileUploader";
import { useRenderPreviewFile } from "@/components/create-roadmap/roadmap-steps/file-upload/hooks/useRenderPreviewFile";
import { useFetch } from "@/hooks/useFetch";
import { deleteStepAttachment } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { RoadmapStepAttachmentType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppDispatch } from "@/redux/store";
import { CROSS_ATTACHMENT_ICON } from "@public/icons/roadmapSteps";
import { CROSS_ICON } from "@public/icons/userProfile";
import React, { useState } from "react";

const Attachments = ({
	stepId,
	attachments,
}: {
	stepId: string;
	attachments: RoadmapStepAttachmentType[];
}) => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const { renderUploadedFile } = useRenderPreviewFile();
	const dispatch = useAppDispatch();
	const { fetchData } = useFetch();

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

				<ul className="flex flex-wrap items-start gap-4">
					{selectedFiles.map(file => (
						<FileUploadedItem
							key={file.name}
							file={file}
							stepId={stepId}
							removeSelectedFile={removeSelectedFile}
						/>
					))}

					{attachments.map(attachment => (
						<li
							key={attachment.id}
							className="relative w-[64px] h-[64px] group border-2 border-grey-primary flex-jc-c rounded-md"
						>
							{renderUploadedFile(attachment)}

							<button
								onClick={() => handleRemoveUploadedFile(attachment.id)}
								className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition duration-200"
							>
								{CROSS_ATTACHMENT_ICON}
							</button>
						</li>
					))}
				</ul>
			</FileUploader>
		</div>
	);
};

export default Attachments;
