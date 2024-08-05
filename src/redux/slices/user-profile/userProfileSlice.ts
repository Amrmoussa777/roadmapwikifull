import { fetchUserByUsername } from "@/redux/slices/thunks/getUserByUsername";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserProfileStateTypes = {
	personalInfo: null,
	links: [],
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
			const newLinks = action.payload;

			state.links = newLinks;
			if (state.user) {
				state.user.socialMedia = newLinks;
			}
		},
		deleteUserLink: (state, action) => {
			const linkId = action.payload;

			const updatedLinks = state.links.filter(link => link.id !== linkId);

			state.links = updatedLinks;
			if (state.user) {
				state.user.socialMedia = updatedLinks;
			}
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchUserByUsername.pending, state => {
			state.isLoading = true;
			state.user = null;
			state.personalInfo = null;
		});

		builder.addCase(fetchUserByUsername.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;

			const { email, description, fullName, occupation, socialMedia, phone } =
				action.payload;

			state.personalInfo = [
				{ name: "email", value: email },
				{ name: "description", value: description },
				{ name: "fullName", value: fullName },
				{ name: "occupation", value: occupation },
				{ name: "phone", value: phone },
			];

			state.links = socialMedia;
		});

		builder.addCase(fetchUserByUsername.rejected, (state, action) => {
			state.error = "no user found";
			state.user = null;
			state.isLoading = false;
		});
	},
});

export const {
	updateUserData,
	updateUserPersonalInfo,
	addNewUserLink,
	deleteUserLink,
} = userProfileSlice.actions;
export default userProfileSlice.reducer;
