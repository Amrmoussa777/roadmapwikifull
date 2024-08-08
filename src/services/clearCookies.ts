export const clearCookies = async () => {
	try {
		const response = await fetch("/api/clearCookies", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
	} catch (error) {
		console.error("Error clearing cookies:", error);
	}
};
