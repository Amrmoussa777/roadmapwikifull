import axios from "axios";

export const register = async (formData: Record<string, string>) => {
	try {
		const { fullName, email, password } = formData;

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

		return data;
	} catch (error: any) {
		const { message } = error.response.data;
		if (Array.isArray(message)) {
			// message.forEach(errorMsg => notifyError(errorMsg));
		} else {
		}

		console.log(error);
	}
};
