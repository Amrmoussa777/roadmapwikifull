import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

export type RoadmapListSliceType = {
	roadmapListView: "list" | "grid";
	searchType: "roadmaps" | "creators";
	filterList: Record<string, string> | Record<string, number[]>;
	sortType: "latest";
	roadmapList: RoadmapType[];
};
