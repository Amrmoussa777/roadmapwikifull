import HandleApiRequests from "@/helpers/handleApiRequests";

export const register = async (formData: Record<string, string>) => {
	try {
		await HandleApiRequests.handleApiRequest({
			method: "POST",
			endpoint: `auth/signup`,
			body: formData,
		});

		return { error: null };
	} catch (error: any) {
		const { message, error: errorTitle } = error.response.data;

		return { errorTitle, message };
	}
};
