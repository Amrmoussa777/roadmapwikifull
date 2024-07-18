import axios, { AxiosRequestConfig } from "axios";
import { IApiResponse, IHandleApiRequestArgs } from "./types";
import { getCookie } from "cookies-next";

class HandleApiRequests {
	public static handleApiRequest = async <Data>({
		method,
		headers,
		body,
		endpoint,
	}: IHandleApiRequestArgs<Data>) => {
		const accessToken = getCookie("accessToken");
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
