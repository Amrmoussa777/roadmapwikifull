import { useHandleFilesChangesArgs } from "@/components/builder/roadmap-steps/file-upload/types/index.types";
import { ChangeEvent } from "react";

const useHandleFilesChanges = ({
	selectedFiles,
	setSelectedFiles,
}: useHandleFilesChangesArgs) => {
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;

		if (files) {
			const newFiles = [...selectedFiles, ...Array.from(files)];
			setSelectedFiles(newFiles);

			event.target.value = "";
		}
	};

	return {
		selectedFiles,
		handleFileChange,
	};
};

export default useHandleFilesChanges;
