import { CurrentUserType } from "@/providers/types/index.types";
import axios from "axios";

export const getUser = async (
	accessToken: string | undefined,
	refreshToken: string | undefined
) => {
	if (!refreshToken) return null;

	try {
		const res = await axios({
			method: "GET",
			url: `https://api.roadmapwiki.com/users/me`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		const { data: user } = res;

		return user as CurrentUserType;
	} catch (error) {
		console.log(error);
	}
};
