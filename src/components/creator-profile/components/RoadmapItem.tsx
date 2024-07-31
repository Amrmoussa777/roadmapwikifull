"use client";

import { DEVOPS_ICON } from "@public/icons/creator";
import {
	SHARE_ICON,
	STEPS_ICON,
	USERS_ICON,
} from "@public/icons/roadmapPreview";
import {
	BOOKMARK_ICON,
	DURATION_ICON,
	MENU_ICON,
} from "@public/icons/roadmapSteps";
import React, { useContext, useEffect, useState } from "react";
import { PLAY_ICON } from "@public/icons/landingPage";
import { useRouter } from "next/navigation";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import Avatar from "@/components/common/avatar/components/Avatar";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useFetch } from "@/hooks/useFetch";

const RoadmapItem = ({
	id,
	title,
	icon,
	user,
	isSubscribed: initialIsSubscribed,
	duration,
	_count,
}: RoadmapType) => {
	const { push } = useRouter();

	const { id: userId, fullName, userName, image } = user;
	const { steps } = _count;

	const [isSubscribed, setIsSubscribed] = useState(initialIsSubscribed);
	const { currentUser } = useContext(CurrentUserContext);
	const { fetchData, loading } = useFetch();

	const handleSubscribeRoadmap = async () => {
		if (!currentUser) return push("/auth/login");

		if (!isSubscribed) {
			await fetchData("POST", `roadmap/${id}/subscribe`);

			setIsSubscribed(prev => !prev);
		}
	};

	useEffect(() => {
		setIsSubscribed(initialIsSubscribed);
	}, [initialIsSubscribed]);

	return (
		<li className="bg-white rounded-[12px] p-[12px] md:p-[24px] mt-4">
			<div className="flex justify-between items-start gap-2">
				<div className="flex gap-2">
					<div className="w-[40px] h-[40px] flex-jc-c my-auto rounded-[8px] bg-primary-ultramarineBlue text-white">
						{DEVOPS_ICON}
					</div>

					<div className="flex flex-col gap-2">
						<h3 className="text-[18px] text-[#202020] font-inter font-semibold">
							{title}
						</h3>

						<div className="hidden sm:flex flex-wrap justify-between items-center gap-2 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-[#79828B] [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-[#ACB5B7]">
							<span className="min-w-[70px]">
								{DURATION_ICON} {duration}
							</span>
							<span className="min-w-[70px]">
								{STEPS_ICON} {steps} Steps
							</span>
							<span className="min-w-[70px]">{USERS_ICON} 32 Subscribe</span>
						</div>
					</div>
				</div>

				<div className="ml-auto md:ml-0 flex-jc-c gap-2 text-[#898989] [&>button]:duration-200 [&>button]:transition [&>button:hover]:text-black [&>button]:w-[24px] [&>button]:h-[24px] [&>button>svg]:w-[24px] [&>button>svg]:h-[24px]">
					<button>{SHARE_ICON}</button>
					<button>{BOOKMARK_ICON}</button>
					<button>{MENU_ICON}</button>
				</div>
			</div>

			<div className="sm:hidden flex flex-wrap justify-start items-center gap-2 mt-4 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-[#79828B] [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-[#ACB5B7]">
				<span className="min-w-[70px]">
					{DURATION_ICON} {duration} Weeks
				</span>
				<span className="min-w-[70px]">
					{STEPS_ICON} {steps} Steps
				</span>
				<span className="min-w-[70px]">{USERS_ICON} 32 Subscribe</span>
			</div>

			<div className="flex flex-col sm:flex-row gap-4 justify-between">
				<div className="mt-4 flex items-center gap-2">
					<Avatar
						image_url={image}
						name={fullName || ""}
						customStyles="w-[32px] h-[32px] rounded-full object-cover !bg-primary-ultramarineBlue text-white"
					/>

					<div className="flex justify-center flex-col">
						<h3 className="flex items-center gap-1 text-[14px] text-[#202020]">
							{fullName}
						</h3>
						<span className="text-[12px] text-[#79828B]">{userName}</span>
					</div>
				</div>

				<div className="flex-jc-c [&>button]:w-full [&>button]:flex-jc-c [&>button]:gap-2 gap-3 [&>button]:py-[6px] [&>button]:px-[12px] [&>button]:rounded-[5px] text-[#383838] text-[14px] font-inter font-semibold">
					<button
						onClick={() => push(`/roadmap/${id}`)}
						className="bg-[#F5F5F5] border border-transparent hover:shadow-csm hover:border-[#ACB5B7] hover:bg-white hover:text-primary-ultramarineBlue transition duration-200"
					>
						{PLAY_ICON} Preview
					</button>

					{userId !== currentUser?.id ? (
						<button
							onClick={handleSubscribeRoadmap}
							disabled={isSubscribed}
							className="bg-primary-ultramarineBlue text-white border border-transparent disabled:hover:bg-primary-ultramarineBlue disabled:hover:text-white disabled:hover:border disabled:hover:border-transparent hover:border-primary-ultramarineBlue hover:bg-white hover:text-primary-ultramarineBlue transition duration-200"
						>
							{loading
								? "Loading..."
								: isSubscribed
								? "Subscribed"
								: "Subscribe"}
						</button>
					) : null}
				</div>
			</div>
		</li>
	);
};

export default RoadmapItem;
