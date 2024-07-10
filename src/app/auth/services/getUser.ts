import axios from "axios";

export const getUser = async (accessToken: string | undefined) => {
	try {
		const res = await axios({
			method: "GET",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/me`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		const { data: user } = res;

		return user;
	} catch (error) {
		console.log(error);
	}
};
