"use client";

import NavbarButtons from "@/components/landing-page/components/navbar/NavbarButtons";
import NavbarLinks from "@/components/landing-page/components/navbar/NavbarLinks";
import RoadmapLogo from "@/components/landing-page/components/navbar/RoadmapLogo";
import React from "react";
import NavbarMobile from "@/components/landing-page/components/navbar/NavbarMobile";
import useToggle from "@/hooks/useToggle";
import MenuButton from "@/components/landing-page/components/navbar/MenuButton";
import { usePathname } from "next/navigation";

const navbarLinks = [
	{ href: "/roadmap", name: "Roadmaps" },
	{ href: "/how-it-works", name: "How it works" },
	{ href: "/our-mission", name: "Our mission" },
];
const Navbar = () => {
	const { currentState: isMenuOpen, toggle: toggleMobileNavbar } =
		useToggle(false);
	const isAuthRoute = usePathname().includes("auth");

	if (isAuthRoute) return;

	return (
		<div className="relative bg-white w-full">
			<nav className="relative max-w-[1440px] h-[64px] flex-jb-c mx-auto p-6 lg:px-8 bg-white z-50">
				<RoadmapLogo />
				<NavbarLinks links={navbarLinks} />
				<NavbarButtons customStyles="hidden md:block" />

				<MenuButton
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={toggleMobileNavbar}
				/>
			</nav>

			<NavbarMobile
				links={navbarLinks}
				customStyles={`transition-all duration-300 ${
					isMenuOpen
						? "!top-[64px] opacity-1 z-20"
						: "!top-[-400px] opacity-0 z-0"
				}`}
			/>
		</div>
	);
};

export default Navbar;
