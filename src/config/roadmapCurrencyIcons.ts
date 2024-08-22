import { ReactNode } from "react";

import { ROADMAP_CURRENCY } from "@/enum/roadmapCurrency";
import {
	EURO_CURRENCY_ICON,
	RUB_CURRENCY_ICON,
	USD_CURRENCY_ICON,
} from "@public/icons/plans";

export type RoadmapCurrencyIconType = {
	name: ROADMAP_CURRENCY;
	icon: ReactNode;
};

export const ROADMAP_PLAN_CURRENCY_OBJ_ICONS: Record<string, ReactNode> = {
	[ROADMAP_CURRENCY.EUR]: EURO_CURRENCY_ICON,
	[ROADMAP_CURRENCY.USD]: USD_CURRENCY_ICON,
	[ROADMAP_CURRENCY.RUB]: RUB_CURRENCY_ICON,
};

export const ROADMAP_PLAN_CURRENCY_ICONS: RoadmapCurrencyIconType[] = [
	{ name: ROADMAP_CURRENCY.EUR, icon: EURO_CURRENCY_ICON },
	{ name: ROADMAP_CURRENCY.USD, icon: USD_CURRENCY_ICON },
	{ name: ROADMAP_CURRENCY.RUB, icon: RUB_CURRENCY_ICON },
];
