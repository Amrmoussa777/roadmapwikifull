export type FileUploaderProps = {
	selectedFiles: File[];
	setSelectedFiles: (files: File[]) => void;
	stepId: string;
};

export type useHandleFilesChangesArgs = Pick<
	FileUploaderProps,
	"selectedFiles" | "setSelectedFiles"
>;
