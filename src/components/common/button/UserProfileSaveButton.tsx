import { UserProfileSaveButtonProps } from "@/components/common/button/types/user-profile-save-button.types";
import React from "react";

const UserProfileSaveButton = ({ toggleEdit }: UserProfileSaveButtonProps) => {
	return (
		<div className="flex-jc-c [&>button]:w-full [&>button]:flex-jc-c [&>button]:gap-2 gap-3 [&>button]:py-[6px] [&>button]:px-[12px] [&>button]:rounded-[5px] text-[#383838] text-[14px] font-inter font-semibold mt-4">
			<button onClick={toggleEdit} className="bg-[#F5F5F5]">
				Cancel
			</button>
			<button
				onClick={toggleEdit}
				className="bg-primary-ultramarineBlue text-white"
			>
				Save
			</button>
		</div>
	);
};

export default UserProfileSaveButton;
