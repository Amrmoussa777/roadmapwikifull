"use client";

import useHandleFilesChanges from "@/components/create-roadmap/roadmap-steps/file-upload/hooks/useHandleFilesChanges";
import { FileUploaderProps } from "@/components/create-roadmap/roadmap-steps/file-upload/types/index.types";
import { FILE_ICON, IMAGE_ICON, VIDEO_ICON } from "@public/icons/roadmapSteps";
import React, { useRef, useState } from "react";

const FileUploader = ({
	selectedFiles,
	setSelectedFiles,
	children,
}: FileUploaderProps) => {
	const { handleFileChange } = useHandleFilesChanges({
		selectedFiles,
		setSelectedFiles,
	});

	const [accepts, setAccepts] = useState<undefined | string>(undefined);

	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleChangeAccepts = (accepts: string) => {
		setAccepts(accepts);

		if (fileInputRef.current) {
			fileInputRef.current.accept = accepts;
			fileInputRef.current.click();
		}
	};

	return (
		<div className="w-full">
			{children}

			<input
				ref={fileInputRef}
				type="file"
				name="uploadFile"
				accept={accepts}
				id="file-upload"
				onChange={handleFileChange}
				className="hidden"
			/>

			<div className="flex items-center gap-4 mt-4">
				<button
					onClick={() => {
						handleChangeAccepts("image/*");
					}}
				>
					{IMAGE_ICON}
				</button>
				<button
					onClick={() => {
						handleChangeAccepts("video/*");
					}}
				>
					{VIDEO_ICON}
				</button>
				<button
					onClick={() => {
						handleChangeAccepts(
							".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.zip"
						);
					}}
				>
					{FILE_ICON}
				</button>
			</div>
		</div>
	);
};

export default FileUploader;
