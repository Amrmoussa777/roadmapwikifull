"use client";

import UserProfileEditButton from "@/components/common/button/UserProfileEditButton";
import UserProfileSaveButton from "@/components/common/button/UserProfileSaveButton";
import UserLink from "@/components/user-profile/components/UserLink";
import { UserLinkType } from "@/components/user-profile/types/user-profile-links.types";
import useToggle from "@/hooks/useToggle";
import {
	EDIT_ICON,
	USER_IG_ICON,
	X_ICON,
	YT_ICON,
} from "@public/icons/userProfile";
import React from "react";

const UserLinks = () => {
	const { currentState: isEditEnabled, toggle: toggleEdit } = useToggle(false);

	const userLinksList: UserLinkType[] = [
		{
			icon: YT_ICON,
			href: "https://youtube.com/",
			label: "Youtube Channel",
		},
		{
			icon: X_ICON,
			href: "https://twitter.com/",
			label: "X Account",
		},
		{
			icon: USER_IG_ICON,
			href: "https://instagram.com/",
			label: "Instagram Account",
		},
	];

	return (
		<div id="links" className="bg-white rounded-[12px] p-[18px]">
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					Links
				</h3>

				<UserProfileEditButton
					isEditEnabled={isEditEnabled}
					toggleEdit={toggleEdit}
				/>
			</div>

			<ul className="flex flex-col gap-2">
				{userLinksList.map(link => (
					<UserLink key={link.href} link={link} disabled={isEditEnabled} />
				))}
			</ul>

			{isEditEnabled ? <UserProfileSaveButton toggleEdit={toggleEdit} /> : null}
		</div>
	);
};

export default UserLinks;
