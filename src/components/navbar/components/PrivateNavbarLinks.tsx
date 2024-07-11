"use client";

import PrivateNavbarLink from "@/components/navbar/components/PrivateNavbarLink";
import { PrivateNavbarLinkTypes } from "@/components/navbar/types/private-navbar.types";
import PathnameHelper from "@/helpers/pathname.helper";
import {
	CONVERSATION_ICON,
	HOME_ICON,
	MONETIZATION_ICON,
	ROADMAP_ICON,
} from "@public/icons/landingPage";
import { usePathname } from "next/navigation";
import React from "react";

const navbarLinks: PrivateNavbarLinkTypes[] = [
	{ href: "/", name: "Home", icon: HOME_ICON },
	{ href: "/roadmaps", name: "Roadmaps", icon: ROADMAP_ICON },
	{ href: "/conversation", name: "Conversation", icon: CONVERSATION_ICON },
	{ href: "/monetization", name: "Monetization", icon: MONETIZATION_ICON },
];

const PrivateNavbarLinks = () => {
	const pathname = usePathname();
	const activeLink = PathnameHelper.getLastPathname(pathname);

	return (
		<ul className="w-full xl:mr-8 md:flex">
			{navbarLinks.map(link => (
				<PrivateNavbarLink key={link.href} {...link} activeLink={activeLink} />
			))}
		</ul>
	);
};

export default PrivateNavbarLinks;
