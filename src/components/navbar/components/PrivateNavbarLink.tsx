import { PrivateNavbarLinkProps } from "@/components/navbar/types/private-navbar.types";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";

const PrivateNavbarLink = ({
	href,
	icon,
	name,
	activeLink,
}: PrivateNavbarLinkProps) => {
	const isActive = activeLink === href.split("/")[1];

	return (
		<li
			className={`my-[24px] md:py-[7px] lg:py-[10px] px-[10px] lg:px-[14px] ${
				isActive
					? "md:bg-primary-ultramarineBlue/5 xl:bg-transparent rounded-full"
					: ""
			}`}
		>
			<Link
				href={href}
				className={`flex items-center md:flex-jc-c gap-2 text-[#383838] md:text-[#79828B] hover:text-black group`}
			>
				<span
					className={`group-hover:text-[#506CF0] ${
						isActive ? "text-[#506CF0]" : ""
					}`}
				>
					{icon}
				</span>
				<p
					className={`font-normal text-[15.5px] ${
						isActive ? "font-semibold text-black block" : "md:hidden xl:block"
					}`}
				>
					{name}
				</p>

				<span className="block md:hidden ml-auto rotate-90">{ARROW_ICON}</span>
			</Link>
		</li>
	);
};

export default PrivateNavbarLink;
