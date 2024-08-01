import { DragEvent } from "react";

export type FileUploaderProps = {
	accepts: string;
	selectedFile: File | null;
	setSelectedFile: (file: File) => void;
	toggleUploadModal: () => void;
};

export type useHandleFileChangesArgs = Pick<
	FileUploaderProps,
	"selectedFile" | "setSelectedFile"
>;

export type DragAreaProps = {
	handleDrop: (event: DragEvent<HTMLElement>) => void;
};
