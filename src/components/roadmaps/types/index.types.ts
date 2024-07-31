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
