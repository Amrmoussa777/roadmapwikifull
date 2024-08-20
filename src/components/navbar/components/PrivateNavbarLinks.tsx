"use client";

import PrivateNavbarLink from "@/components/navbar/components/PrivateNavbarLink";
import { PrivateNavbarLinkTypes } from "@/components/navbar/types/private-navbar.types";
import { motion } from "framer-motion";
import {
	CONVERSATION_ICON,
	HOME_ICON,
	MONETIZATION_ICON,
	ROADMAP_ICON,
} from "@public/icons/landingPage";
import React from "react";

const navbarLinks: PrivateNavbarLinkTypes[] = [
	{ href: "/", name: "Home", icon: HOME_ICON },
	{ href: "/roadmaps", name: "Roadmaps", icon: ROADMAP_ICON },
	{ href: "/conversation", name: "Conversation", icon: CONVERSATION_ICON },
	{ href: "/monetization", name: "Monetization", icon: MONETIZATION_ICON },
];

const PrivateNavbarLinks = () => {
	const ulVariant = {
		opened: {
			transition: {
				delayChildren: 0.4,
				staggerChildren: 0.18,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.06,
				staggerDirection: -1,
			},
		},
	};

	return (
		<motion.ul className="w-full xl:mr-8 md:flex" variants={ulVariant}>
			{navbarLinks.map(link => (
				<PrivateNavbarLink key={link.href} {...link} />
			))}
		</motion.ul>
	);
};

export default PrivateNavbarLinks;
