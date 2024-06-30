export type NavbarLinkItemType = {
	name: string;
	href: string;
};

export interface MenuButtonType {
	isMenuOpen: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
	customStyles?: string;
}
