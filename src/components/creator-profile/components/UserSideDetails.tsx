"use client";

import NumberStats from "@/components/common/states/NumberStats";
import UserSideDetailsLoader from "@/components/creator-profile/loading/UserSideDetailsLoader";
import useToggle from "@/hooks/useToggle";
import { useAppSelector } from "@/redux/store";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const UserSideDetails = () => {
	const { currentState: isReadMore, toggle: toggleReadMore } = useToggle(false);
	const { isLoading, user } = useAppSelector(state => state.userProfile);
	const { description, _count, email, experiences, roadmapsSubscribers } =
		user || {};

	if (isLoading) return <UserSideDetailsLoader />;

	return (
		<div className="relative md:sticky w-full md:max-w-[296px] h-fit md:top-4 mt-4 sm:rounded-[12px] p-[18px] bg-white">
			<ul className="flex flex-col gap-4 [&>li>p]:text-[12px] [&>li>p]:text-[#606060] [&>li>span]:font-inter [&>li>span]:text-[14px] [&>li>span]:font-medium [&>li>span]:text-[#383838]">
				<li>
					<p>Description</p>
					<span
						className={`!font-normal leading-[140%] ${
							isReadMore ? "line-clamp-none" : "line-clamp-1 md:line-clamp-2"
						}`}
					>
						{description || (
							<NumberStats
								text="No description"
								customStyles="!text-[14px] text-start"
							/>
						)}
					</span>
					{description ? (
						<button
							onClick={toggleReadMore}
							className={`flex-jc-c gap-1 text-[14px] font-inter font-normal [&>svg]:w-[20px] text-[#506CF0] ${
								isReadMore ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
							} [&>svg]:transition-all`}
						>
							{isReadMore ? "Read less" : "Read more"} {ARROW_ICON}
						</button>
					) : null}
				</li>

				<li>
					<p>Followers</p>
					<span>
						{_count?.followers || (
							<NumberStats
								text="No followers"
								customStyles="!text-[14px] text-start"
							/>
						)}
					</span>
				</li>
				<li>
					<p>Roadmap Subscription</p>
					<span>
						{roadmapsSubscribers || (
							<NumberStats
								text="No Subscription"
								customStyles="!text-[14px] text-start"
							/>
						)}
					</span>
				</li>

				<li>
					<p>Email</p>
					<span>{email}</span>
				</li>
				<li>
					<p>Join date</p>
					<span>10 Feb 2024</span>
				</li>

				{experiences?.length ? (
					<li>
						<p>Experiences</p>
						<div className="w-full flex gap-2 flex-wrap mt-2">
							{experiences.map(item => (
								<span
									key={item.id}
									className="h-[30px] flex-jc-c px-4 border border-grey-iconBorder rounded-full text-[12px] font-medium font-inter"
								>
									{item.title}
								</span>
							))}
						</div>
					</li>
				) : null}
			</ul>
		</div>
	);
};

export default UserSideDetails;
