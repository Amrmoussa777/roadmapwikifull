import { ROADMAP_ICONS } from "@/config/roadmapIcons";

export const categoriesList = [
	...ROADMAP_ICONS.map(icon => ({
		label: { id: icon.name, name: icon.name.replace(/_/g, " ") },
		checked: false,
	})),
];

export const searchTypeListData = [
	{ label: { id: "roadmaps", name: "Roadmaps" }, checked: true },
	{ label: { id: "creators", name: "Creators" }, checked: false },
];

export const roadmapDurationListData = [
	{ label: { id: "days", name: "Days" }, checked: false },
	{ label: { id: "weeks", name: "Weeks" }, checked: false },
	{ label: { id: "months", name: "Months" }, checked: false },
];
