import { ReactNode } from "react";

export type SummaryItemProps = {
	label: string;
	info: string;
	icon: ReactNode;
};

export type OnboardingStepProps = {
	stepText: string;
	completed: boolean;
};
