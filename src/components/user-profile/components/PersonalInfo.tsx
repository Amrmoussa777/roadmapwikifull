"use client";

import UserProfileEditButton from "@/components/common/button/UserProfileEditButton";
import UserProfileSaveButton from "@/components/common/button/UserProfileSaveButton";
import PersonalInfoInput from "@/components/user-profile/components/PersonalInfoInput";
import { personalInfoInputs } from "@/components/user-profile/data/personalInfoInputs";
import { usePersonalInfo } from "@/components/user-profile/hooks/usePersonalInfo";
import React from "react";

const PersonalInfo = () => {
	const {
		formValues,
		handleCancel,
		isEditEnabled,
		toggleEdit,
		onFormValueChange,
	} = usePersonalInfo();

	return (
		<div id="info" className="bg-white sm:rounded-[12px] p-[18px]">
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					Personal Information
				</h3>

				<UserProfileEditButton
					isEditEnabled={isEditEnabled}
					toggleEdit={toggleEdit}
				/>
			</div>

			<form className="grid grid-cols-2 gap-2">
				{personalInfoInputs.map(item => (
					<PersonalInfoInput
						key={item.label}
						{...item}
						onFormValueChange={onFormValueChange}
						disabled={!isEditEnabled}
						defaultValue={formValues[item.name]}
						customStyles={item.type === "textarea" ? "!col-span-2" : ""}
					/>
				))}
			</form>

			{isEditEnabled ? (
				<UserProfileSaveButton
					toggleEdit={toggleEdit}
					handleCancel={handleCancel}
				/>
			) : null}
		</div>
	);
};

export default PersonalInfo;
