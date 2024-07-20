import HandleApiRequests from "@/helpers/handleApiRequests";
import { IRequestMethods } from "@/helpers/types";
import { useToast } from "@/hooks/useToast";
import { useState } from "react";

export const useFetch = <B = any>() => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
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
			const { data } = await HandleApiRequests.handleApiRequest({
				method,
				endpoint,
				body,
			});

			setData(data);
			setLoading(false);
			return { data, error: null };
		} catch (error: any) {
			setLoading(false);

			const message = error?.response?.data?.message || "An error occurred";

			setError(message);
			errorToast(message);
			throw { data: null, error: message };
		}
	};

	return { data, error, loading, fetchData };
};
