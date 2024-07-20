export const reduxAsyncWrapper = (asyncFn: any) => {
	return async (arg: any, thunkAPI: any) => {
		try {
			return await asyncFn(arg, thunkAPI);
		} catch (error: any) {
			const message =
				error.response?.data?.message || error.message || "An error occurred";
			return thunkAPI.rejectWithValue(message);
		}
	};
};
