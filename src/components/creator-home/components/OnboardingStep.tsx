import { OnboardingStepProps } from "@/components/creator-home/types/index.types";
import { RedirectHandler } from "@/helpers/redirectHelper";
import TextTransformationHelper from "@/helpers/textTransformation";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { ONBOARDING_STEP_CHECK } from "@public/icons/creatorHome";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const OnboardingStep = ({ tipKey, completed }: OnboardingStepProps) => {
	const router = useRouter();
	const redirectHandler = new RedirectHandler();
	const { currentUser } = useContext(CurrentUserContext);

	const handleRedirect = () => {
		if (completed) return;

		redirectHandler.redirect(router, tipKey, {
			userName: currentUser?.userName,
		});
	};

	return (
		<li className="mt-[12px]">
			<button
				onClick={handleRedirect}
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
				<p className="font-inter font-normal text-[#606060] text-[14px] capitalize">
					{TextTransformationHelper.getCapitalizedEnumKey(tipKey)}
				</p>
			</button>
		</li>
	);
};

export default OnboardingStep;
