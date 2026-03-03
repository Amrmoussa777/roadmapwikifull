import axios from "axios";

export const fetchAnonymousToken = async () => {
	const res = await axios({
		method: "GET",
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/anonymous`,
	});

	const { data } = res;

	const accessToken = data;

	return accessToken;
};
