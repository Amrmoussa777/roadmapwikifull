"use client";

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
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import Link from "next/link";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useFetch } from "@/hooks/useFetch";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";

const RoadmapItem = ({
	roadmap,
	handleShareRoadmap,
}: {
	roadmap: RoadmapType;
	handleShareRoadmap: (roadmapId: string) => void;
}) => {
	const {
		id,
		title,
		icon,
		price,
		user,
		isSubscribed: initialIsSubscribed,
		duration,
		_count,
		tags,
		status,
	} = roadmap;

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

	const { push } = useRouter();

	const { id: userId, fullName, userName, image } = user;
	const { steps } = _count;

	return (
		<li className="bg-white rounded-[12px] py-[12px] md:py-[20px] px-[12px] md:px-[24px] mt-4 border border-[#D8D8D8]">
			<div className="flex justify-between items-start gap-2">
				<div className="flex flex-col sm:flex-row gap-2">
					<Avatar
						image_url={image}
						name={fullName || ""}
						customStyles="min-w-[40px] min-h-[40px] w-[40px] h-[40px] rounded-full object-cover !bg-primary-ultramarineBlue text-white"
					/>

					<div className="flex flex-col">
						<Link
							href={`/roadmap/${id}`}
							className="w-fit text-[18px] text-[#202020] font-inter font-semibold hover:text-primary-ultramarineBlue transition duration-200"
						>
							{title}
						</Link>

						<div className="hidden sm:flex flex-wrap justify-between items-center gap-2 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-[#79828B] [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-[#ACB5B7]">
							<span className="hover:text-[#202020] transition duration-200">
								<Link href={`/user/${userName}`}>{fullName}</Link>
							</span>
							<span>
								{DURATION_ICON} {duration}
							</span>
							<span>
								{STEPS_ICON} {steps} Steps
							</span>
							<span>{USERS_ICON} 32 Subscribe</span>
						</div>

						{tags.length ? (
							<div className="flex gap-2 mt-4">
								{tags.map(tag => (
									<p
										key={tag.id}
										className="font-inter font-normal text-[12px] bg-[#F6F6F6] text-[#202020] rounded-full px-2"
									>
										{tag.name}
									</p>
								))}
							</div>
						) : null}
					</div>
				</div>

				<div className="ml-auto md:ml-0 flex-jc-c gap-2 text-[#898989] [&>button]:duration-200 [&>button]:transition [&>button:hover]:text-black [&>button]:w-[24px] [&>button]:h-[24px] [&>button>svg]:w-[24px] [&>button>svg]:h-[24px]">
					<button onClick={() => handleShareRoadmap(id)}>{SHARE_ICON}</button>
					<button>{BOOKMARK_ICON}</button>
					<button>{MENU_ICON}</button>
				</div>
			</div>

			<div className="sm:hidden flex flex-wrap justify-start items-center gap-2 mt-4 md:gap-3 text-[12px] md:text-[14px] [&>span]:text-[#79828B] [&>span]:flex-jc-c [&>span]:gap-1 [&>span>svg]:text-[#ACB5B7]">
				<Link
					href={`/roadmap/${id}`}
					className="text-[#79828B] hover:text-[#202020] transition duration-200"
				>
					{fullName}
				</Link>

				<span>
					{DURATION_ICON} {duration}
				</span>
				<span>
					{STEPS_ICON} {steps} Steps
				</span>
				<span>{USERS_ICON} 32 Subscribe</span>
			</div>

			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#D8D8D8]"
				customStyles="my-4"
			/>

			<div className="flex items-center gap-4 justify-between">
				{!isSubscribed ? (
					<h3 className="font-inter font-semibold text-[14px] sm:text-[17px] text-[#979797]">
						{price?.amount || "Free"} {price?.currency}
					</h3>
				) : null}

				<div className="flex-jc-c [&>button]:w-full ml-auto [&>button]:flex-jc-c [&>button]:gap-2 gap-3 [&>button]:py-[6px] [&>button]:px-[6px] [&>button]:sm:px-[12px] [&>button]:rounded-[5px] text-[#383838] text-[12px] sm:text-[14px] font-inter font-semibold">
					<button
						onClick={() => push(`/roadmap/${id}`)}
						className="bg-[#F5F5F5] border border-transparent hover:shadow-csm hover:border-[#ACB5B7] hover:bg-white hover:text-primary-ultramarineBlue transition duration-200"
					>
						{PLAY_ICON} Preview
					</button>

					{userId === currentUser?.id && (
						<button
							onClick={() => push(`/builder/${id}/steps`)}
							className="bg-[#F5F5F5] border border-transparent hover:shadow-csm hover:border-[#ACB5B7] hover:bg-white hover:text-primary-ultramarineBlue transition duration-200"
						>
							{status === "PUBLISHED" ? "Edit" : "Publish"}
						</button>
					)}

					{userId !== currentUser?.id && !isSubscribed ? (
						<button
							onClick={handleSubscribeRoadmap}
							disabled={isSubscribed}
							className="relative min-w-[90px] overflow-hidden bg-primary-ultramarineBlue text-white border border-transparent disabled:hover:bg-primary-ultramarineBlue disabled:hover:text-white disabled:hover:border disabled:hover:border-transparent hover:border-primary-ultramarineBlue hover:bg-white hover:text-primary-ultramarineBlue transition duration-200"
						>
							{loading ? <ButtonDotsLoader /> : "Subscribe"}
						</button>
					) : null}
				</div>
			</div>
		</li>
	);
};

export default RoadmapItem;
