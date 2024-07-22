"use client";

import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import RoadmapLogo from "@/components/landing-page/components/public-navbar/RoadmapLogo";
import PrivateMobileNavbar from "@/components/navbar/components/PrivateMobileNavbar";
import PrivateNavbarButtons from "@/components/navbar/components/PrivateNavbarButtons";
import PrivateNavbarCurrentUser from "@/components/navbar/components/PrivateNavbarCurrentUser";
import PrivateNavbarLinks from "@/components/navbar/components/PrivateNavbarLinks";
import PrivateNavbarMenuButton from "@/components/navbar/components/PrivateNavbarMenuButton";
import useDisableScroll from "@/hooks/useDisableScrolling";
import { useMobileScreen } from "@/hooks/useMobileScreen";
import useToggle from "@/hooks/useToggle";
import { usePathname } from "next/navigation";
import React from "react";

const PrivateNavbar = () => {
	const { currentState: isMenuOpen, toggle } = useToggle(false);
	useDisableScroll(isMenuOpen);

	const { isMobile } = useMobileScreen();

	const pathname = usePathname();

	if (pathname.includes("create-roadmap")) return;

	return (
		<div className="bg-white w-full border-b border-[#E0E0E0]">
			<nav className="relative max-w-[1440px] h-[74px] flex-jb-c mx-auto p-2 md:p-6 lg:px-8 bg-white z-50">
				<RoadmapLogo />
				<PrivateNavbarMenuButton isMenuOpen={isMenuOpen} toggle={toggle} />

				{!isMobile ? (
					<div className="hidden ml-auto md:flex">
						<PrivateNavbarLinks />

						<VerticalDivider
							width="min-w-[1px]"
							bgColor="bg-[#D8D8D8]"
							customStyles="h-[20px] my-auto rounded-full hidden md:block xl:hidden"
						/>
						<PrivateNavbarButtons />
						<PrivateNavbarCurrentUser />
						<PrivateNavbarMenuButton isMenuOpen={isMenuOpen} toggle={toggle} />
					</div>
				) : (
					<PrivateMobileNavbar isMenuOpen={isMenuOpen} />
				)}
			</nav>
		</div>
	);
};

export default PrivateNavbar;
