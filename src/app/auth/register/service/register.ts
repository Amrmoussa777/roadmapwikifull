import HandleApiRequests from "@/helpers/handleApiRequests";
import { setCookie } from "cookies-next";

export const register = async (formData: Record<string, string>) => {
	try {
		const data = await HandleApiRequests.handleApiRequest({
			method: "POST",
			endpoint: `auth/signup`,
			body: formData,
		});

		const { accessToken, refreshToken } = data;

		setCookie("accessToken", accessToken);
		setCookie("refreshToken", refreshToken);

		return { error: null };
	} catch (error: any) {
		const { message, error: errorTitle } = error.response.data;

		return { errorTitle, message };
	}
};
