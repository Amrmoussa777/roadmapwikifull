export type PopularCreatorType = {
	id: string;
	image: string;
	fullName: string;
	occupation: string;
	rate: CreatorRateType;
	tags: PopularCreatorTagsType[];
	subscribers: number;
};

export type CreatorRateType = {
	stars: number;
	reviews: number;
};

export type PopularCreatorTagsType = {
	id: string;
	name: string;
	color: string;
};
