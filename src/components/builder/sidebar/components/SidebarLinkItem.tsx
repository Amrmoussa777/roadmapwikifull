"use client";

import { SidebarLinkItemProps } from "@/components/builder/sidebar/types/index.types";
import PathnameHelper from "@/helpers/pathname.helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarLinkItem = ({
	href,
	icon,
	customStyles,
}: SidebarLinkItemProps) => {
	const pathname = usePathname() ?? "";
	const lastPathname = PathnameHelper.getLastPathname(pathname);
	const hrefLastPathname = PathnameHelper.getLastPathname(href);
	const active = lastPathname === hrefLastPathname;

	return (
		<li
			className={`w-[48px] h-[48px] block rounded-full ${customStyles} hover:bg-primary-ultramarineBlue transition duration-200 ${
				active ? "bg-primary-ultramarineBlue" : ""
			}`}
		>
			<Link
				className={`w-full h-full rounded-full flex-jc-c hover:text-white ${
					active ? "text-white" : "text-primary-dark"
				}`}
				href={href}
			>
				{icon}
			</Link>
		</li>
	);
};

export default SidebarLinkItem;
