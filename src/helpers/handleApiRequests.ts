import axios, { AxiosRequestConfig } from "axios";
import { IApiResponse, IHandleApiRequestArgs } from "./types";
import { getCookie, setCookie } from "cookies-next";
import { fetchAnonymousToken } from "@/services/fetchAnonymousToken";

class HandleApiRequests {
	public static handleApiRequest = async <Data>({
		method,
		headers,
		body,
		endpoint,
	}: IHandleApiRequestArgs<Data>) => {
		let accessToken = getCookie("accessToken");

		if (!accessToken) {
			const newAccessToken = await fetchAnonymousToken();
			setCookie("accessToken", newAccessToken);
			accessToken = newAccessToken;
		}

		const { data } = await axios({
			method,
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
			data: body,
			headers: {
				Authorization: `Bearer ${accessToken}`,
				...headers,
			},
		});

		return data;
	};

	public static handlePublicApiRequest = async <Data>({
		method,
		headers,
		body,
		endpoint,
	}: IHandleApiRequestArgs<Data>) => {
		const { data } = await axios({
			method,
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
			data: body,
			headers,
		});

		return data;
	};
}

export default HandleApiRequests;
