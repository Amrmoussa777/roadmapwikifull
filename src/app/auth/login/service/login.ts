import axios from "axios";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";

export const login = async (formData: Record<string, string>) => {
	const notifyError = (msg: string) => toast.error(msg);
	const notifySuccess = () => toast.success("Logged in successfully.");

	try {
		const { email, password } = formData;
		const res = await axios({
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`,
			data: {
				email,
				password,
			},
		});

		const { data } = res;
		const { accessToken, refreshToken } = data;

		setCookie("accessToken", accessToken);
		setCookie("refreshToken", refreshToken);
		notifySuccess();

		return { error: null };
	} catch (error: any) {
		// Ensure error.response and error.response.data are defined
		if (error.response && error.response.data) {
			const { message } = error.response.data;

			if (Array.isArray(message)) {
				message.forEach(errorMsg => notifyError(errorMsg));
			} else {
				notifyError(message);
			}
		} else {
			// Fallback for unexpected errors
			notifyError("An unexpected error occurred.");
		}

		return error;
	}
};
