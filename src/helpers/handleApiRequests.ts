import axios from "axios";
import { IHandleApiRequestArgs } from "./types";
import TokensHelper from "@/helpers/tokensHelper";
class HandleApiRequests {
	public static handleApiRequest = async <Data>({
		method,
		headers,
		body,
		endpoint,
	}: IHandleApiRequestArgs<Data>) => {
		const { accessToken } = TokensHelper.getTokens();

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
