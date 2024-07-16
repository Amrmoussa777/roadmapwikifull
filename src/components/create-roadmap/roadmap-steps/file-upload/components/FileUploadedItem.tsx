import { useRenderPreviewFile } from "@/components/create-roadmap/roadmap-steps/file-upload/hooks/useRenderPreviewFile";
import React from "react";

const FileUploadedItem = ({ file }: { file: File }) => {
	const { renderPreviewFile } = useRenderPreviewFile(file);

	return (
		<li className="relative w-[64px] h-[64px] border-2 border-grey-primary flex-jc-c rounded-md">
			{renderPreviewFile()}
		</li>
	);
};

export default FileUploadedItem;
