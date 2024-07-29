import { OnboardingStepProps } from "@/components/creator-home/types/index.types";
import { ONBOARDING_STEP_CHECK } from "@public/icons/creatorHome";
import React from "react";

const OnboardingStep = ({ stepText, completed }: OnboardingStepProps) => {
	return (
		<li className="mt-[12px]">
			<button
				className={`w-full h-[36px] flex items-center gap-3 px-[8px] rounded-full border border-transparent ${
					completed ? "bg-[#F5F5F5]" : "bg-white !border-[#DCDCDC]"
				} group`}
			>
				<span
					className={`min-w-[24px] w-[24px] min-h-[24px] h-[24px] flex-jc-c rounded-full transition duration-200 [&>svg]:transition [&>svg]:duration-200 ${
						completed
							? "text-white bg-primary-ultramarineBlue"
							: "bg-[#F3F3F3] group-hover:bg-primary-ultramarineBlue text-white border border-[#DADADA] [&>svg]:opacity-0 group-hover:[&>svg]:opacity-100 group-hover:border-transparent"
					}`}
				>
					{ONBOARDING_STEP_CHECK}
				</span>
				<p className="font-inter font-normal text-[#606060] text-[14px]">
					{stepText}
				</p>
			</button>
		</li>
	);
};

export default OnboardingStep;
