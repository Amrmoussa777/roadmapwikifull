import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { fetchAnonymousToken } from "@/services/fetchAnonymousToken";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export const fetchNewAccessToken = async (refreshToken: string | undefined) => {
	const res = await axios({
		method: "GET",
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`,
		headers: {
			Authorization: `Bearer ${refreshToken}`,
		},
	});

	const { data } = res;

	return data;
};

export const useRefreshToken = () => {
	const refreshToken = getCookie("refreshToken");
	const accessToken = getCookie("accessToken");
	const accessTokenExpiresAt = getCookie("accessTokenExpiresAt");
	const refreshTokenExpiresAt = getCookie("refreshTokenExpiresAt");
	const { currentUser } = useContext(CurrentUserContext);
	const { push } = useRouter();

	function isTimeExpired(timestamp: number) {
		const currentTime = Math.floor(Date.now() / 1000);
		return currentTime > timestamp;
	}

	useEffect(() => {
		if (!refreshToken) return;

		const isAccessTokenExpired = isTimeExpired(Number(accessTokenExpiresAt));

		if (isAccessTokenExpired) {
			(async () => {
				const data = await fetchNewAccessToken(refreshToken);

				const {
					newAccessToken,
					newRefreshToken,
					newAccessTokenExpiresAt,
					newRefreshTokenExpiresAt,
				} = data;

				setCookie("accessToken", newAccessToken);
				setCookie("refreshToken", newRefreshToken);
				setCookie("accessTokenExpiresAt", newAccessTokenExpiresAt);
				setCookie("refreshTokenExpiresAt", newRefreshTokenExpiresAt);
			})();
		}
	}, [accessTokenExpiresAt, refreshToken]);

	useEffect(() => {
		const isRefreshTokenExpired = isTimeExpired(Number(refreshTokenExpiresAt));

		if (isRefreshTokenExpired) return push("/auth/login");
	}, [refreshToken]);
};
