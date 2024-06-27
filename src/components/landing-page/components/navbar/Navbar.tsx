"use client";

import NavbarButtons from "@/components/landing-page/components/navbar/NavbarButtons";
import NavbarLinks from "@/components/landing-page/components/navbar/NavbarLinks";
import RoadmapLogo from "@/components/landing-page/components/navbar/RoadmapLogo";
import React from "react";
import {
	HOME_ICON,
	ROADMAP_ICON,
} from "../../../../../public/icons/landingPage";
import NavbarMobile from "@/components/landing-page/components/navbar/NavbarMobile";
import useToggle from "@/hooks/useToggle";
import MenuButton from "@/components/landing-page/components/navbar/MenuButton";

const navbarLinks = [
	{ href: "/roadmap", name: "Roadmaps" },
	{ href: "/how-it-works", name: "How it works" },
	{ href: "/our-mission", name: "Our mission" },
];

const navbarMobileLinks = [
	{ href: "/", name: "Home", icon: HOME_ICON },
	{ href: "/roadmap", name: "Roadmaps", icon: ROADMAP_ICON },
];

const Navbar = () => {
	const { currentState: isMobile, toggle: toggleMobileNavbar } =
		useToggle(false);

	return (
		<nav className="relative max-w-[1440px] h-[64px] flex-jb-c mx-auto p-6 lg:px-8 bg-white">
			<RoadmapLogo />
			<NavbarLinks links={navbarLinks} />
			<NavbarButtons />

			<MenuButton isMenuOpen={isMobile} setIsMenuOpen={toggleMobileNavbar} />

			{isMobile ? <NavbarMobile links={navbarMobileLinks} /> : null}
		</nav>
	);
};

export default Navbar;
