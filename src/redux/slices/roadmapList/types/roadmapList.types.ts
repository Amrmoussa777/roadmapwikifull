import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

export type FilterListType = Record<string, string[]>;
export type RoadmapListSliceType = {
	roadmapListView: "list" | "grid";
	searchType: "roadmaps" | "creators";
	searchValue: string | undefined;
	filterList: FilterListType;
	sortType: "latest";
	roadmapList: RoadmapType[];
	loading: boolean;
	appliedFilterMobile: boolean;
};
