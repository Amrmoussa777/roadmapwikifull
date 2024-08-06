"use client";

import Avatar from "@/components/common/avatar/components/Avatar";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import OnboardingStep from "@/components/creator-home/components/OnboardingStep";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import Link from "next/link";
import React, { useContext } from "react";

const OnboardingSteps = () => {
	const { currentUser } = useContext(CurrentUserContext);
	const { fullName, image, userName, occupation, tips } = currentUser || {};

	return (
		<div className="w-full max-w-[350px] h-fit p-[24px] border border-[#DCDCDC] rounded-[12px]">
			<Link href={`/user/${userName}`} className="flex justify-start gap-4">
				<Avatar
					name={fullName || ""}
					image_url={image}
					customStyles="w-[48px] h-[48px] min-w-[48px] min-h-[48px] text-white"
				/>
				<div className="font-inter font-medium">
					<h4 className="text-[18px] text-[#202020]">{userName}</h4>
					<p className="text-[12px] text-[#898989] mt-[6px]">{occupation}</p>
				</div>
			</Link>

			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#DCDCDC]"
				customStyles="my-[20px]"
			/>

			<ul>
				<OnboardingStep stepText="Complete profile" completed={true} />
				<OnboardingStep stepText="Create first roadmap" completed={true} />
				<OnboardingStep stepText="Share to community" completed={false} />
			</ul>

			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#DCDCDC]"
				customStyles="my-[20px]"
			/>

			<button className="h-[37px] block mx-auto px-[20px] rounded-full bg-primary-ultramarineBlue text-white font-inter font-normal hover:shadow-lg transition duration-200">
				Example text
			</button>
		</div>
	);
};

export default OnboardingSteps;
