import { ITarget } from "@/components/common/input/types";

export type EditorProps = {
	value: string;
	changeValue?: (e: ITarget | string) => void;
	disable?: boolean;
	hideToolbar?: boolean;
};
