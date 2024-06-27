import NavbarMobileLinkItem from "@/components/landing-page/components/navbar/NavbarMobileLinkitem";
import { NavbarMobileLinkItemType } from "@/components/landing-page/types/navbar.types";
import React from "react";

const NavbarMobile = ({ links }: { links: NavbarMobileLinkItemType[] }) => {
	return (
		<ul className="absolute left-0 top-[64px] flex md:hidden flex-col gap-[22px] w-full z-50 bg-white">
			{links.map(link => (
				<NavbarMobileLinkItem key={link.href} {...link} />
			))}
		</ul>
	);
};

export default NavbarMobile;
