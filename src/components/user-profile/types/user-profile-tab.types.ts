import { ReactNode } from "react";

export type UserProfileTabType = {
	name: string;
	id: string;
	icon: ReactNode;
};

export type UserProfileTabProps = {
	tab: UserProfileTabType;
	handleChangeHash: (id: string) => void;
	currentId: string;
};

export type PersonalInfoInputProps = {
	icon: ReactNode;
	label: string;
	disabled: boolean;
	customStyles?: string;
	type: string;
	name: string;
	defaultValue: string;
	onFormValueChange: ({ value, key }: Record<string, string>) => void;
};
