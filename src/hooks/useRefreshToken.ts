import TokensHelper from "@/helpers/tokensHelper";
import { setCookies } from "@/services/setCookies";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

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
	const { push } = useRouter();

	const refreshAccessToken = useCallback(async () => {
		const { refreshToken } = TokensHelper.getTokens();

		const data = await fetchNewAccessToken(refreshToken);
		await setCookies(data);
	}, [push]);

	useEffect(() => {
		const checkTokenExpiration = async () => {
			const { accessTokenExpiresAt, refreshTokenExpiresAt, refreshToken } =
				TokensHelper.getTokens();

			if (!refreshToken) return;

			const currentTime = Math.floor(Date.now() / 1000);

			if (currentTime > Number(refreshTokenExpiresAt)) {
				push("/auth/login");
			} else if (currentTime > Number(accessTokenExpiresAt)) {
				refreshAccessToken();
			}
		};

		checkTokenExpiration();
		const intervalId = setInterval(checkTokenExpiration, 60000);

		return () => clearInterval(intervalId);
	}, [refreshAccessToken, push]);

	return refreshAccessToken;
};
