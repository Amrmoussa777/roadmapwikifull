export type IRequestMethods = "GET" | "POST" | "PATCH" | "DELETE";

export type IHandleApiRequestArgs<Data> = {
	method: IRequestMethods;
	endpoint?: string;
	url?: string;
	body?: Data;
	queryParams?: Record<string, string>;
	withCredentials?: boolean;
	headers?: Record<string, string>;
};

export type IErrorMessage = string;

export type IApiResponse<Data> = {
	data: Data | null;
	errors: IErrorMessage[] | null;
	code: number;
	statusText: string;
};
