import LogoutButton from "@/components/auth/logout/components/LogoutButton";
import PrivateMobileNavbarButton from "@/components/navbar/components/PrivateMobileNavbarButton";
import PrivateNavbarCurrentUser from "@/components/navbar/components/PrivateNavbarCurrentUser";
import {
	HELP_CENTER_ICON,
	SETTINGS_ICON,
	UPGRADE_PLAN_ICON,
} from "@public/icons/navbar";
import { motion } from "framer-motion";
import React from "react";

const PrivateMobileNavbarButtons = () => {
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

	const ulVariant = {
		opened: {
			transition: {
				delayChildren: 0.3,
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
		<motion.ul variants={ulVariant} className="text-[#383838]">
			<motion.li variants={liVariant} className="mb-4 overflow-hidden">
				<PrivateNavbarCurrentUser />
			</motion.li>
			{/* <motion.li variants={liVariant} className="overflow-hidden">
				<PrivateMobileNavbarButton text="Dark Mode" icon={DARK_MODE_ICON} />
			</motion.li> */}
			<motion.li variants={liVariant}>
				<PrivateMobileNavbarButton
					text="Help Center"
					icon={HELP_CENTER_ICON}
					key={"/help"}
				/>
			</motion.li>
			<motion.li variants={liVariant}>
				<PrivateMobileNavbarButton
					text="Settings"
					icon={SETTINGS_ICON}
					href="/settings"
				/>
			</motion.li>
			<motion.li variants={liVariant}>
				<PrivateMobileNavbarButton
					text="Upgrade Plan"
					icon={UPGRADE_PLAN_ICON}
					href="/plans"
				/>
			</motion.li>

			<motion.li variants={liVariant}>
				<LogoutButton />
			</motion.li>
		</motion.ul>
	);
};

export default PrivateMobileNavbarButtons;
