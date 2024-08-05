import { ReactNode } from "react";

export type SummaryItemProps = {
	name: string;
	value: number;
	icon: ReactNode;
};

export type OnboardingStepProps = {
	stepText: string;
	completed: boolean;
};

export type CreatorTipProps = {
	image: string;
	title: string;
	description: string;
};
