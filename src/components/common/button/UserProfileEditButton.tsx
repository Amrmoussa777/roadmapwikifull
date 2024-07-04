import { UserProfileEditButtonProps } from "@/components/common/button/types/user-profile-edit-button.types";
import { EDIT_ICON } from "@public/icons/userProfile";
import React from "react";

const UserProfileEditButton = ({
	isEditEnabled,
	toggleEdit,
}: UserProfileEditButtonProps) => {
	return (
		<button
			onClick={toggleEdit}
			className={`w-[40px] h-[40px] flex-jc-c text-[#202020] ${
				isEditEnabled ? "opacity-0" : "opacity-100"
			} transition-all`}
		>
			{EDIT_ICON}
		</button>
	);
};

export default UserProfileEditButton;
