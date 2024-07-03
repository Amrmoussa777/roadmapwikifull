import NavbarLinkItem from "@/components/landing-page/components/navbar/NavbarLinkItem";
import { NavbarLinkItemType } from "@/components/landing-page/types/navbar.types";
import React from "react";

const NavbarLinks = ({ links }: { links: NavbarLinkItemType[] }) => {
	return (
		<ul className={`hidden md:flex-jc-c`}>
			{links.map(link => (
				<NavbarLinkItem key={link.href} {...link} />
			))}
		</ul>
	);
};

export default NavbarLinks;
