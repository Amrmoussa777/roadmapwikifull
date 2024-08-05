import { Middleware } from "@reduxjs/toolkit";

export const clearStoreOnNavigation: Middleware =
	storeAPI => next => (action: any) => {
		const result = next(action);
		if (action.type === "router/navigate") {
			storeAPI.dispatch({ type: "RESET_STORE" });
		}
		return result;
	};
