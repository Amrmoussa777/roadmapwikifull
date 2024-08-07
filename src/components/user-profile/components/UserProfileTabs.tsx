"use client";

import UserProfileTab from "@/components/user-profile/components/UserProfileTab";
import React, { useState } from "react";
import {
	LINK_ICON,
	PAYMENTS_ICON,
	SUBSCRIBES_ICON,
	USER_ICON,
} from "@public/icons/userProfile";
import { useRouter } from "next/navigation";
import { UserProfileTabType } from "@/components/user-profile/types/user-profile-tab.types";

const UserProfileTabs = () => {
	const [currentId, setCurrentId] = useState<string>("info");

	const tabs: UserProfileTabType[] = [
		{ id: "info", name: "Personal Info", icon: USER_ICON },
		{ id: "links", name: "Links", icon: LINK_ICON },
		{ id: "experiences", name: "Experiences", icon: LINK_ICON },
		{ id: "mySubscriptions", name: "My subscriptions", icon: SUBSCRIBES_ICON },
		{ id: "myRoadmaps", name: "My roadmaps", icon: SUBSCRIBES_ICON },
		{ id: "payments", name: "Payments info", icon: PAYMENTS_ICON },
	];
	const { push } = useRouter();

	const handleChangeHash = (id: string) => {
		push(`#${id}`);
		setCurrentId(id);
	};

	return (
		<div className="relative md:sticky w-full md:max-w-[296px] h-fit md:top-4 mt-4 sm:rounded-[12px] p-[18px] bg-white">
			<ul className="flex flex-col gap-2">
				{tabs.map(tab => (
					<UserProfileTab
						key={tab.id}
						tab={tab}
						handleChangeHash={handleChangeHash}
						currentId={currentId}
					/>
				))}
			</ul>
		</div>
	);
};

export default UserProfileTabs;
