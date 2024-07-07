import { USER_IG_ICON, X_ICON, YT_ICON } from "@public/icons/userProfile";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	personalInfo: [
		{
			name: "email",
			value: "mohamedelhossinyn1@gmail.com",
		},
		{
			name: "phone",
			value: "00201124784249",
		},
		{
			name: "username",
			value: "mhmdlogan",
		},
		{
			name: "title",
			value: "UI UX Product designer",
		},
		{
			name: "description",
			value:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
	],
	links: [
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
	],
	subscribes: [],
};

const userProfileSlice = createSlice({
	initialState,
	name: "userProfileSlice",
	reducers: {},
});

export const {} = userProfileSlice.actions;
export default userProfileSlice.reducer;
