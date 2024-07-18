import { MutableRefObject, ReactNode } from "react";

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
	icon?: ReactNode;
}
export interface ITarget {
	target: { value: React.SetStateAction<string | number> };
}

export interface AuthInputProps {
	type: string;
	name: string;
	icon: ReactNode;
	placeholder: string;
	customStyles?: string;
	value: string;
	handleChangeValue?: (e: ITarget | string) => void;
	validationError?: string | null;
}
