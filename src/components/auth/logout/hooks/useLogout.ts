import { deleteCookie } from "cookies-next";
import { useState } from "react";

export const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const logout = () => {
		setLoading(true);

		deleteCookie("accessToken");
		deleteCookie("refreshToken");
		deleteCookie("accessTokenExpiresAt");
		deleteCookie("refreshTokenExpiresAt");

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
