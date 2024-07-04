import { ReactNode } from "react";

export type UserLinkType = {
	label: string;
	href: string;
	icon: ReactNode;
};

export type UserLinkProps = {
	link: UserLinkType;
	disabled: boolean;
};
