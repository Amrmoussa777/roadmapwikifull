import FileUploader from "@/components/create-roadmap/roadmap-steps/file-upload/components/FileUploader";
import React, { useState } from "react";

const Attachments = ({ stepId }: { stepId: string }) => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

	return (
		<div>
			<FileUploader
				selectedFiles={selectedFiles}
				setSelectedFiles={setSelectedFiles}
				stepId={stepId}
			/>
		</div>
	);
};

export default Attachments;
