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
};

export type FilterContentProps = {
	responsive: boolean;
	searchTypeList: any[];
	setSearchTypeList: (list: any[]) => void;
	roadmapTypeList: any[];
	setRoadmapTypeList: (list: any[]) => void;
};

export type BottomButtonsProps = {
	toggleMobileFilter: () => void;
};
