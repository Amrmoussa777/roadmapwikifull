import { MonetizationSliceState } from "@/redux/slices/monetization/types/index.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MonetizationSliceState = {
	recentActivity: [],
	availableCredit: null,
	statistics: null,
};

const monetizationSlice = createSlice({
	name: "monetizationSlice",
	initialState,
	reducers: {},
});

export const {} = monetizationSlice.actions;
export default monetizationSlice.reducer;
