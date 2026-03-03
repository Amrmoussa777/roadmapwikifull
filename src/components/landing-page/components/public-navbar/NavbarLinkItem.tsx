import { NavbarLinkItemType } from "@/components/landing-page/types/navbar.types";
import Link from "next/link";
import React from "react";

const NavbarLinkItem = ({ name, href }: NavbarLinkItemType) => {
	return (
		<li className="py-[5px] lg:py-[10px] px-[7px] lg:px-[14px]">
			<Link
				href={href}
				className="font-inter font-medium text-[15px] text-[#5A5A5A] hover:text-[#111] transition-colors duration-200"
			>
				{name}
			</Link>
		</li>
	);
};

export default NavbarLinkItem;
