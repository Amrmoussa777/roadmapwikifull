export const setCookies = async (data: Record<string, string | undefined>) => {
	try {
		const response = await fetch("/api/setCookies", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
	} catch (error) {
		console.error("Error setting cookies:", error);
		return false;
	}
};
