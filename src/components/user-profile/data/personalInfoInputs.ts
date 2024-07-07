import {
	DESCRIPTION_ICON,
	EMAIL_ICON,
	JOB_ICON,
	PHONE_ICON,
	USERNAME_ICON,
} from "@public/icons/userProfile";

export const personalInfoInputs = [
	{
		type: "email",
		label: "Email",
		icon: EMAIL_ICON,
		name: "email",
	},
	{
		type: "number",
		label: "Phone",
		icon: PHONE_ICON,
		name: "phone",
	},
	{
		type: "text",
		label: "Username",
		icon: USERNAME_ICON,
		name: "userName",
	},
	{
		type: "text",
		label: "Title",
		icon: JOB_ICON,
		name: "occupation",
	},
	{
		type: "textarea",
		label: "Description",
		icon: DESCRIPTION_ICON,
		name: "description",
	},
];
