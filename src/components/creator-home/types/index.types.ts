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
	key: string;
	message: string;
	step: string;
};
