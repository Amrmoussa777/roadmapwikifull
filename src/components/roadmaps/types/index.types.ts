export type FilterItemProps = {
	filterLabel: string;
	filterList: {
		label: {
			id: string;
			name: string;
		};
	}[];
	row?: boolean;
	circle?: boolean;
};
