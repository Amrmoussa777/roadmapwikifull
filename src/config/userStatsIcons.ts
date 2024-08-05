import { USER_STATS } from "@/enum/UserStats";
import {
	POSTS_ICON,
	PREVIEWS_ICON,
	SUBSCRIBES_ICON,
} from "@public/icons/creatorHome";
import { ROADMAP_ICON } from "@public/icons/landingPage";
import { USERS_ICON } from "@public/icons/roadmapPreview";
import { ReactNode } from "react";

export type UserStatIconType = {
	name: USER_STATS;
	icon: ReactNode;
};

export const USER_STATS_ICONS: Record<string, ReactNode> = {
	[USER_STATS.followers]: USERS_ICON,
	[USER_STATS.posts]: POSTS_ICON,
	[USER_STATS.roadmapPreview]: PREVIEWS_ICON,
	[USER_STATS.roadmaps]: ROADMAP_ICON,
	[USER_STATS.subscribers]: SUBSCRIBES_ICON,
};
