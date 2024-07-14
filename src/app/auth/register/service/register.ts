import axios from "axios";
import { toast } from "react-toastify";

export const register = async (formData: Record<string, string>) => {
	const notifyError = (msg: string) => toast.error(msg);
	const notifySuccess = () =>
		toast.success("Congrats, your account has been created successfully.");

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
		notifySuccess();

		return data;
	} catch (error: any) {
		const { message } = error.response.data;
		if (Array.isArray(message)) {
			message.forEach(errorMsg => notifyError(errorMsg));
		} else {
			notifyError(message);
		}

		console.log(error);
	}
};
