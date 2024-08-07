"use client";

import Avatar from "@/components/common/avatar/components/Avatar";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import OnboardingStep from "@/components/creator-home/components/OnboardingStep";
import { OnboardingSteps as OnboardingStepsData } from "@/config/userTips";
import { RedirectHandler } from "@/helpers/redirectHelper";
import TextTransformationHelper from "@/helpers/textTransformation";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const OnboardingSteps = () => {
	const { currentUser } = useContext(CurrentUserContext);
	const {
		fullName,
		image,
		userName,
		occupation,
		onboardingSteps: notCompletedSteps,
	} = currentUser || {};
	const fullSteps = OnboardingStepsData;
	const [steps, setSteps] = useState<Record<string, string[]> | null>(null);
	const router = useRouter();
	const redirectHandler = new RedirectHandler();

	const handleRedirect = () => {
		redirectHandler.redirect(router, steps?.notCompleted[0] || "", {
			userName: currentUser?.userName,
		});
	};

	useEffect(() => {
		if (notCompletedSteps && !steps) {
			const notCompletedStepsKeys = Object.values(notCompletedSteps).map(
				item => item.key
			);

			const updatedSteps: Record<string, string[]> = {
				notCompleted: [],
				completed: [],
			};

			Object.keys(fullSteps).map(key => {
				if (notCompletedStepsKeys.includes(key)) {
					updatedSteps.notCompleted.push(key);
				} else {
					updatedSteps.completed.push(key);
				}
			});

			setSteps(updatedSteps);
		}
	}, [notCompletedSteps, steps]);

	return (
		<div className="w-full xl:max-w-[350px] h-[416px] lg:h-fit p-[24px] border border-[#DCDCDC] rounded-[12px]">
			<Link href={`/user/${userName}`} className="flex justify-start gap-4">
				<Avatar
					name={fullName || ""}
					image_url={image}
					customStyles="w-[48px] h-[48px] min-w-[48px] min-h-[48px] text-white"
				/>
				<div className="font-inter font-medium">
					<h4 className="text-[18px] text-[#202020]">{fullName}</h4>
					<p className="text-[12px] text-[#898989] mt-[6px]">{occupation}</p>
				</div>
			</Link>

			{steps ? (
				<>
					<HorizontalDivider
						height="h-[1px]"
						bgColor="bg-[#DCDCDC]"
						customStyles="my-[10px] lg:my-[20px]"
					/>

					<ul className="h-[250px] overflow-y-scroll hidden-scrollbar">
						{steps.notCompleted.map(key => (
							<OnboardingStep key={key} tipKey={key} completed={false} />
						))}
						{steps.completed.map(key => (
							<OnboardingStep key={key} tipKey={key} completed />
						))}
					</ul>

					<HorizontalDivider
						height="h-[1px]"
						bgColor="bg-[#DCDCDC]"
						customStyles="my-[10px] lg:my-[20px]"
					/>

					<button
						onClick={handleRedirect}
						className="h-[37px] mt-2 block mx-auto px-[20px] rounded-full bg-primary-ultramarineBlue text-white font-inter font-normal hover:shadow-lg transition duration-200 capitalize"
					>
						{TextTransformationHelper.getCapitalizedEnumKey(
							steps.notCompleted[0]
						)}
					</button>
				</>
			) : null}
		</div>
	);
};

export default OnboardingSteps;
