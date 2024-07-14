import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { fetchAnonymousToken } from "@/services/fetchAnonymousToken";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
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
	const { accessToken: newAccessToken } = data;

	return newAccessToken;
};

export const useRefreshToken = () => {
	const refreshToken = getCookie("refreshToken");
	const accessToken = getCookie("accessToken");
	const { currentUser } = useContext(CurrentUserContext);

	useEffect(() => {
		(async () => {
			if (!accessToken) {
				const accessToken = await fetchAnonymousToken();

				setCookie("accessToken", accessToken);
			}
		})();
	}, [currentUser, refreshToken]);
};
