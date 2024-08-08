import axios from "axios";

const getCookies = async () => {
	const response = await axios("/api/getCookies", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const { data } = response;

	return data;
};

export { getCookies };
