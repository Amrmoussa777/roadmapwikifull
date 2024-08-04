import { ReactNode } from "react";

export type FileUploaderProps = {
	selectedFiles: File[];
	setSelectedFiles: (files: File[]) => void;
	removeSelectedFile: (fileName: string) => void;
	children: ReactNode;
};

export type useHandleFilesChangesArgs = Pick<
	FileUploaderProps,
	"selectedFiles" | "setSelectedFiles"
>;
