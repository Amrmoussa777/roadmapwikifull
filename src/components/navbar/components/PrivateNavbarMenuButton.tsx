import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import MenuButton from "@/components/landing-page/components/public-navbar/MenuButton";
import PrivateNavbarButtons from "@/components/navbar/components/PrivateNavbarButtons";
import { PrivateNavbarMenuButtonProps } from "@/components/navbar/types/private-navbar.types";
import React from "react";

const PrivateNavbarMenuButton = ({
	isMenuOpen,
	toggle,
}: PrivateNavbarMenuButtonProps) => {
	return (
		<div className="flex-jc-c absolute right-4 z-50">
			<div className="flex-jc-c md:hidden">
				<PrivateNavbarButtons />
				<VerticalDivider
					width="min-w-[1px]"
					bgColor="bg-[#D8D8D8]"
					customStyles="h-[20px] my-auto rounded-full mx-2"
				/>
			</div>
			<MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={toggle} />
		</div>
	);
};

export default PrivateNavbarMenuButton;
