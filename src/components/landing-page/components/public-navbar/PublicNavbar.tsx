"use client";

import NavbarButtons from "@/components/landing-page/components/public-navbar/NavbarButtons";
import NavbarLinks from "@/components/landing-page/components/public-navbar/NavbarLinks";
import RoadmapLogo from "@/components/landing-page/components/public-navbar/RoadmapLogo";
import React, { useEffect, useState } from "react";
import NavbarMobile from "@/components/landing-page/components/public-navbar/NavbarMobile";
import useToggle from "@/hooks/useToggle";
import MenuButton from "@/components/landing-page/components/public-navbar/MenuButton";
import { usePathname } from "next/navigation";

const navbarLinks = [
	{ href: "/roadmaps", name: "Roadmaps" },
	{ href: "/how-it-works", name: "How it works" },
	{ href: "/our-mission", name: "Our mission" },
];

const PublicNavbar = () => {
	const { currentState: isMenuOpen, toggle: toggleMobileNavbar } =
		useToggle(false);
	const pathname = usePathname() ?? "";
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (pathname.includes("builder")) return;
	if (pathname.includes("auth")) return;

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? "bg-white/70 backdrop-blur-2xl border-b border-black/[0.04] shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
					: "bg-white/40 backdrop-blur-md"
			}`}
		>
			<nav className="relative max-w-[1440px] h-[72px] flex-jb-c mx-auto px-6 lg:px-8">
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
						? "!top-[72px] opacity-1 z-20"
						: "!top-[-400px] opacity-0 z-0"
				}`}
			/>
		</div>
	);
};

export default PublicNavbar;
