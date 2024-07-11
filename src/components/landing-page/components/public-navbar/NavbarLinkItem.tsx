import { NavbarLinkItemType } from "@/components/landing-page/types/navbar.types";
import Link from "next/link";
import React from "react";

const NavbarLinkItem = ({ name, href }: NavbarLinkItemType) => {
	return (
		<li className="py-[5px] lg:py-[10px] px-[7px] lg:px-[14px]">
			<Link
				href={href}
				className="font-inter font-medium text-[15.5px] text-[#171618]"
			>
				{name}
			</Link>
		</li>
	);
};

export default NavbarLinkItem;
