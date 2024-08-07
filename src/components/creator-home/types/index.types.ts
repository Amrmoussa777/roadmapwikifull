import { ReactNode } from "react";

export type SummaryItemProps = {
	name: string;
	value: number;
	icon: ReactNode;
};

export type OnboardingStepProps = {
	tipKey: string;
	completed: boolean;
};

export type CreatorTipProps = {
	tip: string;
	message: string;
};
