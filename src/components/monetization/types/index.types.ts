import { ReactNode } from "react";

export type SummaryMonetizationItemProps = {
	name: string;
	value: number;
	icon: ReactNode;
};

export type DropButtonProps = {
	text: string;
	children: ReactNode;
};
