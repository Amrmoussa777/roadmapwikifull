import { UserProfileSaveButtonProps } from "@/components/common/button/types/user-profile-save-button.types";
import React from "react";

const UserProfileSaveButton = ({
	handleCancel,
	handleSave,
}: UserProfileSaveButtonProps) => {
	return (
		<div className="flex justify-end [&>button]:flex-jc-c [&>button]:gap-2 gap-3 [&>button]:py-[6px] [&>button]:px-[12px] [&>button]:rounded-[5px] text-[#383838] text-[14px] font-inter font-semibold mt-4">
			{handleSave ? (
				<button
					onClick={handleSave}
					type="button"
					className="w-[100px] bg-primary-ultramarineBlue text-white hover:bg-white hover:text-primary-ultramarineBlue border border-transparent hover:border-primary-ultramarineBlue hover:shadow-md transition duration-200"
				>
					Save
				</button>
			) : null}

			<button
				onClick={handleCancel}
				type="button"
				className="w-[100px] bg-[#F5F5F5] hover:shadow-md transition duration-200 border hover:border-primary-ultramarineBlue"
			>
				Cancel
			</button>
		</div>
	);
};

export default UserProfileSaveButton;
