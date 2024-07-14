import MenuButton from "@/components/landing-page/components/public-navbar/MenuButton";
import { PrivateNavbarMenuButtonProps } from "@/components/navbar/types/private-navbar.types";
import React from "react";

const PrivateNavbarMenuButton = ({
	isMenuOpen,
	toggle,
}: PrivateNavbarMenuButtonProps) => {
	return (
		<div className="absolute right-2 z-50">
			<MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={toggle} />
		</div>
	);
};

export default PrivateNavbarMenuButton;
