import { DragEvent } from "react";

export type FileUploaderProps = {
	accepts: string;
	selectedFile: File | null;
	setSelectedFile: (file: File | null) => void;
	toggleUploadModal: () => void;
	handleSaveCover: (key: string) => void;
	uploadBucket?: "avatars" | "covers" | "step-attachments" | "message-attachments";
	ratio: string;
	imageHeight?: number;
};

export type useHandleFileChangesArgs = Pick<
	FileUploaderProps,
	"selectedFile" | "setSelectedFile"
>;

export type DragAreaProps = {
	handleDrop: (event: DragEvent<HTMLElement>) => void;
};
