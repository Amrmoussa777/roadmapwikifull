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
}
export interface ITarget {
	target: { value: React.SetStateAction<string | number> };
}
