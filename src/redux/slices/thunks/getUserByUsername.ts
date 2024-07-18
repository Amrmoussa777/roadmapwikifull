import HandleApiRequests from "@/helpers/handleApiRequests";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserByUsername = createAsyncThunk(
	"userProfileSlice/fetchUserByUsername",
	async (username: string | string[]) => {
		const { data } = await HandleApiRequests.handleApiRequest({
			method: "GET",
			endpoint: `users/username/${username}`,
		});

		return data;
	}
);
