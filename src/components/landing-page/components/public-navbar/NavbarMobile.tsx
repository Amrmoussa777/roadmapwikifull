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
			className={`glass-surface absolute left-0 top-[72px] flex md:hidden w-full flex-col gap-4 border-b border-white/70 bg-white/60 py-8 shadow-[0_16px_40px_rgba(80,108,240,0.08)] backdrop-blur-2xl transition-all ${customStyles}`}
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
