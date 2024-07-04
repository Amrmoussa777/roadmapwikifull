import { ITarget } from "@/components/common/input/types";
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
	value: string;
	changeValue: (e: ITarget | string) => void;
	disabled: boolean;
	customStyles?: string;
	type: "text" | "number" | "email" | "textarea";
};
