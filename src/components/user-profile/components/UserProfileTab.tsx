import { UserProfileTabProps } from "@/components/user-profile/types/user-profile-tab.types";
import React from "react";

const UserProfileTab = ({
	tab,
	handleChangeHash,
	currentId,
}: UserProfileTabProps) => {
	const { id, name, icon } = tab;

	return (
		<li className="h-[44px]">
			<button
				onClick={() => handleChangeHash(id)}
				className={`flex items-center gap-2 w-full px-[12px] h-full group text-[#606060] [&>svg]:w-[25px] [&>svg]:h-[25px] ${
					id === currentId
						? "bg-[#F5F5F5] [&>svg]:text-primary-ultramarineBlue"
						: "hover:bg-[#F5F5F5] [&>svg]:hover:text-primary-ultramarineBlue"
				}`}
			>
				{icon}
				<h2
					className={`font-inter font-medium text-[16px] group-hover:text-[#040504] ${
						id === currentId ? "text-[#040504]" : "text-[#606060]"
					}`}
				>
					{name}
				</h2>
			</button>
		</li>
	);
};

export default UserProfileTab;
