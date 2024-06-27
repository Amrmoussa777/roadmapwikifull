import { ReactNode } from "react";

export type NavbarLinkItemType = {
	name: string;
	href: string;
};

export type NavbarMobileLinkItemType = {
	name: string;
	href: string;
	icon?: ReactNode;
};
