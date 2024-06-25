import { MutableRefObject } from "react";

export interface IFormInput {
	type: string;
	placeholder?: string;
	customStyles?: string;
	name: string;
	required?: boolean;
	autoFocus?: boolean;
	handleChangeValue?: (e: ITarget) => void;
	min?: number;
	value?: string;
	label?: string;
	inputRef?: MutableRefObject<null | HTMLInputElement> | undefined;
}
export interface ITarget {
	target: { value: React.SetStateAction<string | number> };
}
