import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { PrivateNavbarLinkTypes } from "@/components/navbar/types/private-navbar.types";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/store";

const PrivateNavbarLink = ({ href, icon, name }: PrivateNavbarLinkTypes) => {
	const pathname = usePathname() ?? "";
	const { unseenMessages } = useAppSelector(state => state.conversation);

	const isHome = href === "/" && pathname === "/";
	const isActive = isHome || (pathname.includes(href) && href !== "/");

	const liVariant = {
		opened: {
			opacity: 1,
			y: "0%",
			transition: {
				duration: 0.4,

				ease: "easeOut",
			},
		},
		closed: {
			opacity: 0,
			y: "100%",
			transition: {
				duration: 0.25,
				ease: "easeInOut",
			},
		},
	};

	return (
		<motion.li
			className={`relative my-[24px] md:py-[7px] lg:py-[10px] px-[10px] lg:px-[14px] ${
				isActive
					? "md:bg-primary-ultramarineBlue/5 xl:bg-transparent rounded-full"
					: ""
			} ${href === "/create-roadmap" ? "md:hidden" : "block"}`}
		>
			<motion.div variants={liVariant}>
				<Link
					href={href}
					className={`flex items-center md:flex-jc-c gap-2 text-[#383838] md:text-[#79828B] hover:text-black group transition duration-200`}
				>
					<span
						className={`group-hover:text-[#506CF0] transition duration-200 ${
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

					{name === "Conversation" &&
					unseenMessages.length &&
					unseenMessages.length > 0 ? (
						<span className="md:absolute xl:relative -top-2 xl:top-0 -right-1 xl:right-0 w-[20px] h-[20px] flex-jc-c text-[11px] text-white bg-red-500 rounded-full px-2 py-1">
							{unseenMessages.length}
						</span>
					) : null}

					<span className="block md:hidden ml-auto rotate-90">
						{ARROW_ICON}
					</span>
				</Link>
			</motion.div>
		</motion.li>
	);
};

export default PrivateNavbarLink;
