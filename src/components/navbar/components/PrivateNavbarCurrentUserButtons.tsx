"use client";

import LogoutButton from "@/components/auth/logout/components/LogoutButton";
import Avatar from "@/components/common/avatar/components/Avatar";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import PrivateMobileNavbarButton from "@/components/navbar/components/PrivateMobileNavbarButton";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import {
	DARK_MODE_ICON,
	HELP_CENTER_ICON,
	SETTINGS_ICON,
	SIGN_OUT_ICON,
	UPGRADE_PLAN_ICON,
} from "@public/icons/navbar";
import Link from "next/link";
import React, { useContext } from "react";

const PrivateNavbarCurrentUserButtons = () => {
	const { currentUser } = useContext(CurrentUserContext);
	const { fullName, userName, image } = currentUser || {};
	const firstName = fullName?.split(" ")[0];

	return (
		<ul className="text-[#383838]">
			<Link
				href={`/user/${userName}`}
				className="justify-start items-start text-start md:text-end gap-2 flex"
			>
				<Avatar
					image_url={image}
					name={fullName || ""}
					customStyles="w-[40px] h-[40px] rounded-full !border-none object-cover [&>img]:border-none !bg-primary-ultramarineBlue text-white"
				/>

				<div className="text-start">
					<h3 className="font-medium text-black text-[14px] leading-[1]">
						HI, {firstName}
					</h3>
					<span className="text-[12px] text-[#79828B] leading-[1]">
						{userName}
					</span>
				</div>
			</Link>

			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#D8D8D8]"
				customStyles="my-4"
			/>

			<li className="overflow-hidden">
				<PrivateMobileNavbarButton text="Dark Mode" icon={DARK_MODE_ICON} />
			</li>
			<li>
				<PrivateMobileNavbarButton
					text="Help Center"
					icon={HELP_CENTER_ICON}
					href="/help"
				/>
			</li>
			<li>
				<PrivateMobileNavbarButton
					text="Settings"
					icon={SETTINGS_ICON}
					href="/settings"
				/>
			</li>
			<li>
				<PrivateMobileNavbarButton
					text="Upgrade Plan"
					icon={UPGRADE_PLAN_ICON}
					href="/plans"
				/>
			</li>

			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#D8D8D8]"
				customStyles="my-4"
			/>

			<li>
				<LogoutButton />
			</li>
		</ul>
	);
};

export default PrivateNavbarCurrentUserButtons;
