import PrivateMobileNavbarButton from "@/components/navbar/components/PrivateMobileNavbarButton";
import {
	DARK_MODE_ICON,
	HELP_CENTER_ICON,
	SETTINGS_ICON,
	SIGN_OUT_ICON,
	UPGRADE_PLAN_ICON,
} from "@public/icons/navbar";
import React from "react";

const PrivateMobileNavbarButtons = () => {
	return (
		<div className="text-[#383838] mt-4">
			<PrivateMobileNavbarButton text="Help Center" icon={HELP_CENTER_ICON} />
			<PrivateMobileNavbarButton text="Dark Mode" icon={DARK_MODE_ICON} />
			<PrivateMobileNavbarButton text="Settings" icon={SETTINGS_ICON} />
			<PrivateMobileNavbarButton text="Upgrade Plan" icon={UPGRADE_PLAN_ICON} />

			<PrivateMobileNavbarButton
				text="Sign Out"
				icon={SIGN_OUT_ICON}
				customStyles="mt-4"
			/>
		</div>
	);
};

export default PrivateMobileNavbarButtons;
