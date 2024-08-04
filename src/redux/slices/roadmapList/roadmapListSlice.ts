import { RoadmapListSliceType } from "@/redux/slices/roadmapList/types/roadmapList.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RoadmapListSliceType = {
	roadmapListView: "list",
	searchType: "roadmaps",
	searchValue: "",
	filterList: {},
	sortType: "latest",
	roadmapList: [],
	loading: false,
	appliedFilterMobile: false,
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

			state.filterList[newFilter.filterKey] = newFilter.value;
		},
		updateRoadmapList: (state, action) => {
			const newRoadmaps = action.payload;

			state.roadmapList = newRoadmaps;
		},
		pushRoadmapList: (state, action) => {
			const newRoadmaps = action.payload;
			state.roadmapList.push(...newRoadmaps);
		},
		clearRoadmapFilter: state => {
			state.filterList = {};
			state.searchType = "roadmaps";
		},
		changeSearchValue: (state, action) => {
			const value = action.payload;

			state.searchValue = value;
		},
		toggleAppliedFilterMobile: (state, action) => {
			state.appliedFilterMobile = action.payload;
		},
	},
});

export default roadmapListSlice.reducer;
export const {
	changeSearchType,
	updatedFilterList,
	updateRoadmapList,
	pushRoadmapList,
	clearRoadmapFilter,
	changeSearchValue,
	toggleAppliedFilterMobile,
} = roadmapListSlice.actions;
