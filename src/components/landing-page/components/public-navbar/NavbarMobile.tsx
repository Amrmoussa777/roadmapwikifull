import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import NavbarButtons from "@/components/landing-page/components/public-navbar/NavbarButtons";
import NavbarMobileLinkItem from "@/components/landing-page/components/public-navbar/NavbarMobileLinkitem";
import { NavbarLinkItemType } from "@/components/landing-page/types/navbar.types";
import React from "react";

const NavbarMobile = ({
	links,
	customStyles = "",
}: {
	links: NavbarLinkItemType[];
	customStyles?: string;
}) => {
	return (
		<ul
			className={`absolute left-0 top-[72px] flex md:hidden flex-col gap-4 w-full py-8 bg-white/80 backdrop-blur-2xl border-b border-black/[0.04] transition-all ${customStyles}`}
		>
			{links.map(link => (
				<NavbarMobileLinkItem key={link.href} {...link} />
			))}

			<HorizontalDivider height="h-[1px]" bgColor="bg-black/[0.06]" />

			<NavbarButtons customStyles="flex flex-col md:hidden w-full px-8 text-center" />
		</ul>
	);
};

export default NavbarMobile;
