"use client";

import UserProfileEditButton from "@/components/common/button/UserProfileEditButton";
import UserProfileSaveButton from "@/components/common/button/UserProfileSaveButton";
import useInput from "@/components/common/input/hooks/useInput";
import PersonalInfoInput from "@/components/user-profile/components/PersonalInfoInput";
import useToggle from "@/hooks/useToggle";
import {
	DESCRIPTION_ICON,
	EMAIL_ICON,
	JOB_ICON,
	PHONE_ICON,
	USERNAME_ICON,
} from "@public/icons/userProfile";
import React from "react";

const PersonalInfo = () => {
	const {
		value: email,
		changeValue: changeEmail,
		reset: resetEmail,
	} = useInput("mohamedelhossinyn1@gmail.com");
	const {
		value: phone,
		changeValue: changePhone,
		reset: resetPhone,
	} = useInput("00201124784249");
	const {
		value: userName,
		changeValue: changeUserName,
		reset: resetUserName,
	} = useInput("mhmdlogan");
	const {
		value: title,
		changeValue: changeTitle,
		reset: resetTitle,
	} = useInput("UI UX Product designer");
	const {
		value: description,
		changeValue: changeDescription,
		reset: resetDescription,
	} = useInput(
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	);

	const { currentState: isEditEnabled, toggle: toggleEdit } = useToggle(false);

	return (
		<div id="info" className="bg-white rounded-[12px] p-[18px]">
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					Personal Information
				</h3>

				<UserProfileEditButton
					isEditEnabled={isEditEnabled}
					toggleEdit={toggleEdit}
				/>
			</div>

			<ul className="grid grid-cols-2 gap-2">
				<PersonalInfoInput
					icon={EMAIL_ICON}
					label="Email"
					value={email}
					disabled={!isEditEnabled}
					changeValue={changeEmail}
					type="email"
				/>

				<PersonalInfoInput
					icon={PHONE_ICON}
					label="Phone"
					value={phone}
					disabled={!isEditEnabled}
					changeValue={changePhone}
					type="number"
				/>

				<PersonalInfoInput
					icon={USERNAME_ICON}
					label="Username"
					value={userName}
					disabled={!isEditEnabled}
					changeValue={changeUserName}
					type="text"
				/>

				<PersonalInfoInput
					icon={JOB_ICON}
					label="Title"
					value={title}
					disabled={!isEditEnabled}
					changeValue={changeTitle}
					type="text"
				/>

				<PersonalInfoInput
					icon={DESCRIPTION_ICON}
					label="Description"
					value={description}
					disabled={!isEditEnabled}
					changeValue={changeDescription}
					type="textarea"
					customStyles="!col-span-2"
				/>
			</ul>

			{isEditEnabled ? <UserProfileSaveButton toggleEdit={toggleEdit} /> : null}
		</div>
	);
};

export default PersonalInfo;
