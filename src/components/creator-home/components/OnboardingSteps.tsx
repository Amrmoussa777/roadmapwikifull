"use client";

import Avatar from "@/components/common/avatar/components/Avatar";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import OnboardingStep from "@/components/creator-home/components/OnboardingStep";
import { OnboardingTips } from "@/config/userTips";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const OnboardingSteps = () => {
	const { currentUser } = useContext(CurrentUserContext);
	const {
		fullName,
		image,
		userName,
		occupation,
		tips: notCompletedTips,
	} = currentUser || {};
	const fullTips = OnboardingTips;
	const [tips, setTips] = useState<{ key: string; completed: boolean }[]>([]);

	const testTips = {
		SHARE_ON_SOCIAL_MEDIA: {
			tip: "Share on social media",
			message:
				"Share your created roadmap on social media to reach a wider audience.",
		},
		ENGAGE_WITH_COMMUNITY: {
			tip: "Engage with the community",
			message:
				"Comment on posts and roadmaps to interact with other creators and users.",
		},
		UPDATE_REGULARLY: {
			tip: "Update regularly",
			message:
				"Keep your roadmap and profile updated to reflect your latest progress and achievements.",
		},
		FOLLOW_INTERESTING_CREATORS: {
			tip: "Follow interesting creators",
			message:
				"Follow other creators whose work you find inspiring and learn from them.",
		},
		PARTICIPATE_IN_DISCUSSIONS: {
			tip: "Participate in discussions",
			message: "Join community discussions to stay active and engaged.",
		},
		ASK_FOR_FEEDBACK: {
			tip: "Ask for feedback",
			message:
				"Request feedback from your followers and peers to improve your work.",
		},
		PROVIDE_VALUE: {
			tip: "Provide value",
			message:
				"Share valuable insights and content that can help others in the community.",
		},
		SHOWCASE_EXPERIENCE: {
			tip: "Showcase your experience",
			message:
				"Highlight your major milestones and achievements to demonstrate your experience.",
		},
		MAKE_ROADMAP_RICH: {
			tip: "Provide rich content",
			message:
				"Enhance your roadmaps with attachments and verification steps to enrich your content.",
		},
		USE_VISUALS: {
			tip: "Use visuals",
			message:
				"Enhance your roadmaps with images and videos to make them more engaging.",
		},
		STAY_CONSISTENT: {
			tip: "Stay consistent",
			message:
				"Consistency is key to building a strong presence on the platform.",
		},
	};

	useEffect(() => {
		if (notCompletedTips && !tips.length) {
			const filteredTips = Object.keys(fullTips).map(key => {
				if (Object.keys(testTips).includes(key)) {
					return {
						key,
						completed: false,
					};
				} else {
					return {
						key,
						completed: true,
					};
				}
			});

			setTips(filteredTips.reverse());
		}
	}, [notCompletedTips, tips]);

	return (
		<div className="w-full lg:max-w-[350px] h-[300px] lg:h-fit p-[24px] border border-[#DCDCDC] rounded-[12px]">
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

			{tips.length ? (
				<>
					<HorizontalDivider
						height="h-[1px]"
						bgColor="bg-[#DCDCDC]"
						customStyles="my-[10px] lg:my-[20px]"
					/>

					<ul className="h-[100px] lg:h-[200px] overflow-y-scroll hidden-scrollbar">
						{tips.map(tip => (
							<OnboardingStep
								key={tip.key}
								tipKey={tip.key}
								completed={tip.completed}
							/>
						))}
					</ul>

					<HorizontalDivider
						height="h-[1px]"
						bgColor="bg-[#DCDCDC]"
						customStyles="my-[10px] lg:my-[20px]"
					/>

					<button className="h-[37px] block mx-auto px-[20px] rounded-full bg-primary-ultramarineBlue text-white font-inter font-normal hover:shadow-lg transition duration-200">
						Complete next
					</button>
				</>
			) : null}
		</div>
	);
};

export default OnboardingSteps;
