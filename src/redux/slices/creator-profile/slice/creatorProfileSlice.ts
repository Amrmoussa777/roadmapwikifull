import { CreatorProfileStateTypes } from "@/redux/slices/creator-profile/types/index.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CreatorProfileStateTypes = {
	user: null,
	userRoadmaps: [],
};

const creatorProfileSlice = createSlice({
	initialState,
	name: "creatorProfile",
	reducers: {},

	extraReducers(builder) {},
});
