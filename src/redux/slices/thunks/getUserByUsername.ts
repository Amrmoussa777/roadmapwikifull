import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserByUsername = createAsyncThunk(
	"userProfileSlice/fetchUserByUsername",
	async (username: string) => {
		const res = await axios({
			method: "GET",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/username/${username}`,
			headers: {
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZDg3ZWRhOC1mZjRkLTQwNTEtOTkyZC1mYjA2OTQxNjA2ZmMiLCJpYXQiOjE3MTk3Mzk0MDEsImV4cCI6MTczMDEwNzQwMX0.QSdhAu6bYazqfQj7iU6AqgHNZtI2wzHgkg7fQ2Fb4fk`,
			},
		});
		const { data } = res;

		return data;
	}
);
