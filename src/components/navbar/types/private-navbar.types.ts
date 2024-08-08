import { ReactNode } from "react";

export type PrivateNavbarLinkTypes = {
	href: string;
	name: string;
	icon: ReactNode;
};

export interface PrivateNavbarLinkProps extends PrivateNavbarLinkTypes {
	activeLink: string;
}

export type PrivateNavbarMenuButtonProps = {
	isMenuOpen: boolean;
	toggle: () => void;
};

export type PrivateNavbarButtonProps = {
	text: string;
	icon: ReactNode;
	customStyles?: string;
	onClick?: () => void;
	href?: string;
};
