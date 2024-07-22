"use client";

import React from "react";
import Link from "next/link";
import SidebarLinkItem from "@/components/create-roadmap/sidebar/components/SidebarLinkItem";
import {
	COLOR_ICON,
	EDIT_ICON,
	HELP_ICON,
	SETTINGS_ICON,
	TARIFF_ICON,
} from "@public/icons/sidebar";
import { ROADMAP_LOGO } from "@public/icons/landingPage";
import { useAppSelector } from "@/redux/store";
import SidebarLoader from "@/components/create-roadmap/sidebar/components/SidebarLoader";
import SidebarMobile from "@/components/create-roadmap/sidebar/components/SidebarMobile";

const Sidebar = ({
	sidebarMobile,
	toggleSidebarMobile,
}: {
	sidebarMobile: boolean;
	toggleSidebarMobile: () => void;
}) => {
	const { roadmap, isLoading } = useAppSelector(state => state.createRoadmap);
	const { id } = roadmap || {};

	if (isLoading) return <SidebarLoader />;

	return (
		<>
			<div
				className={`fixed w-[75px] h-screen bg-white border-r-2 border-grey-primary p-2 hidden sm:flex flex-col justify-between gap-14 z-40`}
			>
				<Link href="/" className="w-full h-[48px] flex-jc-c mt-4">
					{ROADMAP_LOGO}
				</Link>
				<ul className="h-full flex flex-col items-center gap-4">
					<SidebarLinkItem
						href={`/create-roadmap/${id}/steps`}
						icon={EDIT_ICON}
					/>
					<SidebarLinkItem
						href={`/create-roadmap/${id}/info`}
						icon={COLOR_ICON}
					/>
					<SidebarLinkItem href="#" icon={TARIFF_ICON} />
					<SidebarLinkItem
						href={`/create-roadmap/${id}/settings`}
						icon={SETTINGS_ICON}
					/>

					<SidebarLinkItem href="#" icon={HELP_ICON} customStyles={"mt-auto"} />
				</ul>
			</div>

			<SidebarMobile
				sidebarMobile={sidebarMobile}
				toggleSidebarMobile={toggleSidebarMobile}
			/>
		</>
	);
};

export default Sidebar;
