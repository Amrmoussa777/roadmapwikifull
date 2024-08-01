import { fetchUserByUsername } from "@/redux/slices/thunks/getUserByUsername";
import { USER_IG_ICON, X_ICON, YT_ICON } from "@public/icons/userProfile";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserProfileStateTypes = {
	personalInfo: null,
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
	user: null,
	isLoading: true,
	error: null,
};

const userProfileSlice = createSlice({
	initialState,
	name: "userProfileSlice",
	reducers: {
		updateUserData: (state, action) => {
			const newData: Record<string, string> = action.payload;

			if (state.user) {
				state.user = {
					...state.user,
					...newData,
				};
			}
		},
		updateUserPersonalInfo: (state, action) => {
			const newData: Record<string, string> = action.payload;
			const newDataKeys = Object.keys(newData);

			const updatedPersonalInfo = state.personalInfo?.map(item => {
				if (newDataKeys.includes(Object.values(item)[0])) {
					return { name: item.name, value: newData[item.name] };
				} else {
					return item;
				}
			});

			if (state.personalInfo && updatedPersonalInfo) {
				state.personalInfo = updatedPersonalInfo;
			}
		},
		addNewUserLink: (state, action) => {
			const newLink = action.payload;

			state.links.push(newLink);
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchUserByUsername.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(fetchUserByUsername.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;

			const { email, description, userName, occupation, socialMedia } =
				action.payload;

			state.personalInfo = [
				{ name: "email", value: email },
				{ name: "description", value: description },
				{ name: "userName", value: userName },
				{ name: "occupation", value: occupation },
			];

			state.links = socialMedia;
		});

		builder.addCase(fetchUserByUsername.rejected, (state, action) => {
			state.error = "no user found";
			state.user = null;
		});
	},
});

export const { updateUserData, updateUserPersonalInfo, addNewUserLink } =
	userProfileSlice.actions;
export default userProfileSlice.reducer;
