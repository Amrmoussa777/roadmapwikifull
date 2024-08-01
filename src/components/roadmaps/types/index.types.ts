export type FilterListItem = {
	label: {
		id: string;
		name: string;
	};
	checked: boolean;
};

export type handleChangeFilterItemListArgs = {
	list: FilterListItem[];
	newItem: FilterListItem;
	setNewList: (list: FilterListItem[]) => void;
};

export type FilterItemProps = {
	filterLabel: string;
	filterList: FilterListItem[];
	setNewList: (list: FilterListItem[]) => void;
	row?: boolean;
	circle?: boolean;
	showMore?: () => void;
	defaultListCount?: number;
	lastFilterItem?: boolean;
	multi?: boolean;
};

export type FilterContentProps = {
	responsive: boolean;
	searchTypeList: FilterListItem[];
	setSearchTypeList: (list: FilterListItem[]) => void;
	roadmapCategoryList: FilterListItem[];
	setRoadmapCategoryList: (list: FilterListItem[]) => void;
	showMoreCategories?: () => void;
	roadmapDurationList: FilterListItem[];
	setRoadmapDurationList: (list: FilterListItem[]) => void;
	clearFilter?: () => void;
	toggleMobileFilter?: () => void;
};

export type BottomButtonsProps = {
	toggleMobileFilter: () => void;
	clearFilter: () => void;
};

export type RoadmapsPaginationProps = {
	handleMoreRoadmaps: () => void;
	totalItems: number;
	isLoading: boolean;
};
