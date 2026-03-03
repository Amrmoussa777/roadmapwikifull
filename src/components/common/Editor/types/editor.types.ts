export type EditorProps = {
	value: string;
	changeValue?: (value: string) => void;
	disable?: boolean;
	hideToolbar?: boolean;
	customStyles?: string;
	onBlur?: () => void;
};
