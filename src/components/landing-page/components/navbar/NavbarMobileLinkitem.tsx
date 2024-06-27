import { NavbarMobileLinkItemType } from "@/components/landing-page/types/navbar.types";
import Link from "next/link";
import React from "react";
import { NAVBAR_MOBILE_LINK_ARROW } from "../../../../../public/icons/landingPage";

const NavbarMobileLinkItem = ({
	name,
	href,
	icon,
}: NavbarMobileLinkItemType) => {
	return (
		<li className="w-full flex-jb-c">
			<Link
				href={href}
				className="w-full flex items-center gap-2 py-[5px] lg:py-[10px] px-8 lg:px-[14px] font-normal text-[#383838] hover:text-[#000000] bg-white"
			>
				<span>{icon}</span>
				<p className="text-[16px]">{name}</p>

				<span className="ml-auto">{NAVBAR_MOBILE_LINK_ARROW}</span>
			</Link>
		</li>
	);
};

export default NavbarMobileLinkItem;
