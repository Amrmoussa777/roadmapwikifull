import { useHandleFileChangesArgs } from "@/components/user-profile/components/file-upload/types/index.types";
import { ChangeEvent, DragEvent } from "react";

const useHandleFilesChanges = ({
	selectedFile,
	setSelectedFile,
}: useHandleFileChangesArgs) => {
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files?.[0];

		if (files) {
			const newFile = files;

			setSelectedFile(newFile);
		}
	};

	const handleDrop = (event: DragEvent<HTMLElement>) => {
		event.preventDefault();
		const droppedFile = event.dataTransfer.files[0];

		setSelectedFile(droppedFile);
	};

	return {
		selectedFile,
		handleFileChange,
		handleDrop,
	};
};

export default useHandleFilesChanges;
