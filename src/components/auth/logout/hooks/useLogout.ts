import { clearCookies } from "@/services/clearCookies";
import { useState } from "react";

export const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const logout = async () => {
		setLoading(true);

		await clearCookies();

		setTimeout(() => {
			setLoading(false);
			window.location.replace("/");
		}, 500);
	};

	return {
		logout,
		loading,
	};
};
