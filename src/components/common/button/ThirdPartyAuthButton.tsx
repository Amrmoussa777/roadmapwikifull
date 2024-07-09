import { ThirdPartyAuthType } from "@/components/common/button/types/third-party-auth.types";
import React from "react";

const ThirdPartyAuthButton = ({
	thirdPartyProviderIcon,
	thirdPartyProviderName,
	onClick,
}: ThirdPartyAuthType) => {
	return (
		<button className="flex-jc-c gap-4 w-full h-[50px] rounded-[8px] border-[1.6px] border-[#E0E2E9] font-poppins font-semibold text-[14px]">
			<span>{thirdPartyProviderIcon}</span>
			{thirdPartyProviderName}
		</button>
	);
};

export default ThirdPartyAuthButton;
