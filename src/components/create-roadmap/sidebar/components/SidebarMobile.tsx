import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ROADMAP_LOGO } from "@public/icons/landingPage";
import SidebarLinkItem from "@/components/create-roadmap/sidebar/components/SidebarLinkItem";
import {
	COLOR_ICON,
	EDIT_ICON,
	HELP_ICON,
	SETTINGS_ICON,
	TARIFF_ICON,
} from "@public/icons/sidebar";
import { useAppSelector } from "@/redux/store";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import useDisableScroll from "@/hooks/useDisableScrolling";

const SidebarMobile = ({
	sidebarMobile,
	toggleSidebarMobile,
}: {
	sidebarMobile: boolean;
	toggleSidebarMobile: () => void;
}) => {
	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { id } = roadmap || {};
	const { responsive } = useSizeScreen(640);
	useDisableScroll(sidebarMobile);

	const ref = useOnClickOutside(toggleSidebarMobile);

	return (
		<>
			<AnimatePresence>
				{sidebarMobile && responsive ? (
					<motion.div
						ref={ref}
						initial={{ x: -100 }}
						animate={{ x: 0 }}
						exit={{ x: -100 }}
						transition={{
							ease: "easeInOut",
							duration: 0.6,
						}}
						className={`fixed w-[75px] h-screen bg-white border-r-2 border-grey-primary p-2 flex-col justify-between gap-14 z-40 flex sm:hidden ${
							sidebarMobile ? "flex" : "hidden"
						}`}
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

							<SidebarLinkItem
								href="#"
								icon={HELP_ICON}
								customStyles={"mt-auto"}
							/>
						</ul>
					</motion.div>
				) : null}
			</AnimatePresence>

			<AnimatePresence>
				{sidebarMobile ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 100 }}
						exit={{ opacity: 0 }}
						transition={{
							ease: "easeInOut",
							duration: 0.6,
						}}
						className="sm:hidden fixed w-screen h-screen right-0 top-0 bg-black/60 z-20"
					/>
				) : null}
			</AnimatePresence>
		</>
	);
};

export default SidebarMobile;
