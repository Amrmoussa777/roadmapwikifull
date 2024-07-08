"use client";

import React from "react";
import { useAppSelector } from "@/redux/store";
import { useRoadmapPreview } from "@/components/roadmap-preview/components/roadmap-steps/hooks/useRoadmapPreview";
import LoadingRoadmapPreviewProfileInfo from "@/components/roadmap-preview/components/loading/LoadingRoadmapPreviewProfileInfo";
import FollowButton from "@/components/common/profile/FollowButton";
import DirectMessageButton from "@/components/common/profile/DirectMessageButton";
import Link from "next/link";
import { SOCIAL_MEDIA_ICONS } from "@/config/socialMediaIcons";

const RoadmapPreviewProfileInfo = () => {
	useRoadmapPreview();

	const { roadmap, isLoading } = useAppSelector(state => state.roadmapPreview);
	const { user } = roadmap || {};
	const { socialMedia, userName, description, occupation, _count } = user || {};

	if (isLoading) return <LoadingRoadmapPreviewProfileInfo />;

	return (
		<>
			<div className="w-full">
				<div className="flex-jc-c gap-1 flex-wrap">
					<Link
						href={`/user/${user?.userName}`}
						target="_blank"
						className="text-2xl font-semibold line-clamp-1 hover:underline"
					>
						{user?.userName}
					</Link>
					<p className="font-thin text-[#898989] text-[16px]">@{userName}</p>
				</div>

				<p className="text-center font-thin font-outfit text-[16px] text-[#898989]">
					{occupation}
				</p>
			</div>

			<div className="w-full h-[40px] flex-jc-c gap-2">
				<FollowButton />
				<DirectMessageButton />
			</div>

			<p className="text-grey-secondary text-[12px] font-light">
				{description}
			</p>

			<ul className="w-full flex flex-wrap md:flex-col items-center md:items-start [&>li]:flex [&>li]:flex-col [&>li]:md:block gap-4">
				<li>
					<span className="font-poppins text-[12px] font-normal text-grey-secondary">
						Followers
					</span>
					<p className="font-inter font-normal text-[14px]">
						{_count?.followers}
					</p>
				</li>

				<li>
					<span className="font-poppins text-[12px] font-normal text-grey-secondary block">
						Roadmaps subscribers
					</span>
					<p className="font-inter font-normal text-[14px]">
						{user?.roadmapsSubscribers}
					</p>
				</li>
			</ul>

			<div className="w-full">
				<span className="font-poppins text-[12px] font-normal text-grey-secondary block mb-1">
					Experience
				</span>

				{user?.experiences ? (
					<div className="w-full flex gap-2 flex-wrap">
						{user.experiences.map(item => (
							<span
								key={item.id}
								className="h-[30px] flex-jc-c px-4 border border-grey-iconBorder rounded-full text-[12px] font-medium font-inter"
							>
								{item.title}
							</span>
						))}
					</div>
				) : null}
			</div>

			<div className="w-full">
				<span className="font-poppins text-[12px] font-normal text-grey-secondary block mb-1">
					Social Media
				</span>

				{socialMedia?.length ? (
					<div className="w-full flex gap-2 mt-1">
						{socialMedia.map(item => (
							<a
								key={item.id}
								target="_blank"
								href={`https://${item.link}`}
								className="w-[40px] h-[40px]"
							>
								{SOCIAL_MEDIA_ICONS[item.platform]}
							</a>
						))}
					</div>
				) : null}
			</div>
		</>
	);
};

export default RoadmapPreviewProfileInfo;
