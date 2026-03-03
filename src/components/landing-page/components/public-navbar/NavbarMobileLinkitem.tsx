import { NavbarLinkItemType } from "@/components/landing-page/types/navbar.types";
import Link from "next/link";
import React from "react";

const NavbarMobileLinkItem = ({ name, href }: NavbarLinkItemType) => {
	return (
		<li className="w-full flex-jb-c">
			<Link
				href={href}
				className="w-full flex items-center gap-2 py-[5px] lg:py-[10px] px-8 lg:px-[14px] font-normal text-[#5A5A5A] hover:text-[#111]"
			>
				<p className="text-[16px]">{name}</p>
			</Link>
		</li>
	);
};

export default NavbarMobileLinkItem;
