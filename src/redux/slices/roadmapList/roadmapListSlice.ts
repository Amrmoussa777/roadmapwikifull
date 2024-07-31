import { RoadmapListSliceType } from "@/redux/slices/roadmapList/types/roadmapList.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RoadmapListSliceType = {
	roadmapListView: "list",
	searchType: "roadmaps",
	filterList: {},
	sortType: "latest",
	roadmapList: [],
};

const roadmapListSlice = createSlice({
	name: "roadmapList",
	initialState,
	reducers: {
		changeSearchType: (state, action) => {
			const newSearchType = action.payload;

			state.searchType = newSearchType;
		},
		updatedFilterList: (state, action) => {
			const newFilter = action.payload;

			state.filterList[newFilter.filterKey] = newFilter.id;
		},
	},
});

export default roadmapListSlice.reducer;
export const { changeSearchType, updatedFilterList } = roadmapListSlice.actions;
