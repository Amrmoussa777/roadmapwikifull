import HandleApiRequests from "@/helpers/handleApiRequests";
import { setCookies } from "@/services/setCookies";

export const login = async (formData: Record<string, string>) => {
	const data = await HandleApiRequests.handlePublicApiRequest({
		method: "POST",
		endpoint: `auth/signin`,
		body: formData,
	});

	await setCookies(data);

	return { error: null };
};
