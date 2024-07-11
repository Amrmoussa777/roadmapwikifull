import MenuButton from "@/components/landing-page/components/public-navbar/MenuButton";
import { PrivateNavbarMenuButtonProps } from "@/components/navbar/types/private-navbar.types";
import React from "react";

const PrivateNavbarMenuButton = ({
	isMenuOpen,
	toggle,
}: PrivateNavbarMenuButtonProps) => {
	return <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={toggle} />;
};

export default PrivateNavbarMenuButton;
