import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import PrivateMobileNavbarButtons from "@/components/navbar/components/PrivateMobileNavbarButtons";
import PrivateNavbarLinks from "@/components/navbar/components/PrivateNavbarLinks";
import React from "react";
import { motion } from "framer-motion";

const PrivateMobileNavbar = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
	const mobileMenuVariant = {
		opened: {
			y: "0%",
			transition: {
				delay: 0.15,
				duration: 0.4,
				ease: [0.74, 0, 0.19, 1.02],
			},
		},
		closed: {
			y: "-1000px",
			transition: {
				delay: 0.35,
				duration: 0.3,
				ease: [0.74, 0, 0.19, 1.02],
			},
		},
	};

	const navbarContainer = {
		opened: {
			display: "block",
			transition: {
				duration: 0.6,
			},
		},
		closed: {
			display: "none",
			transition: {
				duration: 0.6,
			},
		},
	};

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
		<motion.div
			initial="closed"
			animate={isMenuOpen ? "opened" : "closed"}
			variants={navbarContainer}
			className="relative px-6 z-40"
		>
			<motion.div
				variants={mobileMenuVariant}
				className={`fixed w-full h-[calc(100vh-74px)] flex flex-col justify-between top-[74px] left-0 bg-white z-40`}
			>
				<PrivateNavbarLinks />

				<motion.div variants={ulVariant} className="px-4 mb-12">
					<motion.div variants={liVariant}>
						<HorizontalDivider
							height="h-[1px]"
							bgColor="bg-[#F0F0F0]"
							customStyles="my-8"
						/>
					</motion.div>
					<motion.div variants={liVariant} className="mb-6">
						<PrivateMobileNavbarButtons />
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default PrivateMobileNavbar;
