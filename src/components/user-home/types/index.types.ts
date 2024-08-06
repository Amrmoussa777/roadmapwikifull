import { UserType } from "@/redux/slices/user-profile/types/userProfileSlice.types";

export interface PopularCreatorType extends UserType {
	averageRating: number;
}

export type CreatorRateType = {
	stars: number;
	reviews: number;
};

export type PopularCreatorTagsType = {
	id: string;
	name: string;
	color: string;
};
