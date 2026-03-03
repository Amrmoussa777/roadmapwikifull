export type RadioButtonType = {
	checkboxWithLabelList: CheckboxWithLabelType[];
	customStyles?: string;
};

export type CheckboxType = {
	customStyles?: string;
	bgColor: string;
	label?: CheckboxLabelType;
	checked: boolean;
	toggle: () => void;
};

export interface CheckboxWithLabelType extends Omit<CheckboxType, "toggle"> {
	label: CheckboxLabelType;
	toggle: (labelId: string) => void;
}

export type CheckboxLabelType = {
	id: string;
	name: string;
};

export type useGenerateCheckboxStylesType = {
	checked?: boolean;
	bgColor: string;
	customStyles?: string;
};
