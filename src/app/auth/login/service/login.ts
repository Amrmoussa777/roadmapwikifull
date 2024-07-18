import HandleApiRequests from "@/helpers/handleApiRequests";
import { setCookie } from "cookies-next";

export const login = async (formData: Record<string, string>) => {
	try {
		const data: any = await HandleApiRequests.handlePublicApiRequest({
			method: "POST",
			endpoint: `auth/signin`,
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
