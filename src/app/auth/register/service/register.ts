import axios from "axios";

export const register = async (formData: FormData) => {
	"use server";
	try {
		const fullName = formData.get("fullName");
		const email = formData.get("email");
		const password = formData.get("password");

		const res = await axios({
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
			data: {
				fullName,
				email,
				password,
			},
		});

		const { data } = res;
	} catch (error) {
		console.log(error);
	}
};
