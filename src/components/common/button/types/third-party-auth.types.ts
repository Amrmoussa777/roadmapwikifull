import { ReactNode } from "react";

export type ThirdPartyAuthType = {
	thirdPartyProviderIcon: ReactNode;
	thirdPartyProviderName: string;
	onClick: Function;
};
