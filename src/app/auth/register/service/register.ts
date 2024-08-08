import HandleApiRequests from "@/helpers/handleApiRequests";
import { setCookies } from "@/services/setCookies";

export const register = async (formData: Record<string, string>) => {
	try {
		const data = await HandleApiRequests.handleApiRequest({
			method: "POST",
			endpoint: `auth/signup`,
			body: formData,
		});

		await setCookies(data);

		return { error: null };
	} catch (error: any) {
		const { message, error: errorTitle } = error.response.data;

		return { errorTitle, message };
	}
};
