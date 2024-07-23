import { PrivateNavbarLinkProps } from "@/components/navbar/types/private-navbar.types";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const PrivateNavbarLink = ({
	href,
	icon,
	name,
	activeLink,
}: PrivateNavbarLinkProps) => {
	const isActive = activeLink === href.split("/")[1];
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
			className={`my-[24px] md:py-[7px] lg:py-[10px] px-[10px] lg:px-[14px] overflow-hidden ${
				isActive
					? "md:bg-primary-ultramarineBlue/5 xl:bg-transparent rounded-full"
					: ""
			}`}
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

					<span className="block md:hidden ml-auto rotate-90">
						{ARROW_ICON}
					</span>
				</Link>
			</motion.div>
		</motion.li>
	);
};

export default PrivateNavbarLink;
