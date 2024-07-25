import { ReactNode } from "react";
import { ROADMAP_ICONS_ENUM } from "../enum/roadmapIconsEnum";

import {
	HealthyIcon,
	InvestingIcon,
	LanguageLearningIcon,
	LawIcon,
	MarketingIcon,
	PhotographyIcon,
	RelationshipsIcon,
	SelfImprovementIcon,
	TravellingIcon,
	VideoMakingIcon,
	WritingIcon,
	ArtIcon,
	CodingIcon,
	ContentCreationIcon,
	CookingIcon,
	DIYProjectIcon,
	ECommerceTradingIcon,
	EducationalIcon,
	FamilyParentingIcon,
	FashionIcon,
	FinanceIcon,
	GardeningIcon,
	GraphicDesignIcon,
} from "@public/icons/roadmapIcons";

export type RoadmapIconType = {
	name: ROADMAP_ICONS_ENUM;
	icon: ReactNode;
};

export const ROADMAP_ICONS: RoadmapIconType[] = [
	{ name: ROADMAP_ICONS_ENUM.HEALTHY, icon: HealthyIcon },
	{ name: ROADMAP_ICONS_ENUM.INVESTING, icon: InvestingIcon },
	{ name: ROADMAP_ICONS_ENUM.LANGUAGE_LEARNING, icon: LanguageLearningIcon },
	{ name: ROADMAP_ICONS_ENUM.LAW, icon: LawIcon },
	{ name: ROADMAP_ICONS_ENUM.MARKETING, icon: MarketingIcon },
	{ name: ROADMAP_ICONS_ENUM.PHOTOGRAPHY, icon: PhotographyIcon },
	{ name: ROADMAP_ICONS_ENUM.RELATIONSHIPS, icon: RelationshipsIcon },
	{ name: ROADMAP_ICONS_ENUM.SELF_IMPROVEMENT, icon: SelfImprovementIcon },
	{ name: ROADMAP_ICONS_ENUM.TRAVELLING, icon: TravellingIcon },
	{ name: ROADMAP_ICONS_ENUM.VIDEO_MAKING, icon: VideoMakingIcon },
	{ name: ROADMAP_ICONS_ENUM.WRITING, icon: WritingIcon },
	{ name: ROADMAP_ICONS_ENUM.ART, icon: ArtIcon },
	{ name: ROADMAP_ICONS_ENUM.CODING, icon: CodingIcon },
	{ name: ROADMAP_ICONS_ENUM.CONTENT_CREATION, icon: ContentCreationIcon },
	{ name: ROADMAP_ICONS_ENUM.COOKING, icon: CookingIcon },
	{ name: ROADMAP_ICONS_ENUM.DIY_PROJECT, icon: DIYProjectIcon },
	{ name: ROADMAP_ICONS_ENUM.E_COMMERCE_TRADING, icon: ECommerceTradingIcon },
	{ name: ROADMAP_ICONS_ENUM.EDUCATIONAL, icon: EducationalIcon },
	{ name: ROADMAP_ICONS_ENUM.FAMILY_PARENTING, icon: FamilyParentingIcon },
	{ name: ROADMAP_ICONS_ENUM.FASHION, icon: FashionIcon },
	{ name: ROADMAP_ICONS_ENUM.FINANCE, icon: FinanceIcon },
	{ name: ROADMAP_ICONS_ENUM.GARDENING, icon: GardeningIcon },
	{ name: ROADMAP_ICONS_ENUM.GRAPHIC_DESIGN, icon: GraphicDesignIcon },
];
