import HandleApiRequests from "@/helpers/handleApiRequests";
import { IRequestMethods } from "@/helpers/types";
import { useToast } from "@/hooks/useToast";
import { useState } from "react";

export const useFetch = <B = any>(loadingDefault: boolean = false) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(loadingDefault);
	const [error, setError] = useState(null);

	const { errorToast } = useToast();

	const fetchData = async (
		method: IRequestMethods,
		endpoint: string,
		body?: B
	) => {
		setLoading(true);
		setError(null);

		try {
			const data = await HandleApiRequests.handleApiRequest({
				method,
				endpoint,
				body,
			});

			setData(data);
			setLoading(false);
			return { data, error: null };
		} catch (error: any) {
			setLoading(false);

			const rawMessage = error?.message ?? "An error occurred";
			const messages = Array.isArray(rawMessage) ? rawMessage : [rawMessage];
			const joined = messages.join(" - ");

			setError(joined as any);
			errorToast(joined);
			throw { data: null, error: messages };
		}
	};

	return { data, error, loading, fetchData };
};
