"use client";

import RoadmapItem from "@/components/roadmaps/components/RoadmapItem";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";
import useRoadmapList from "@/components/roadmaps/hooks/useRoadmapList";
import RoadmapsPagination from "@/components/roadmaps/components/RoadmapsPagination";
import UserProfileRoadmapsLoader from "@/components/user-profile/components/loading/UserProfileRoadmapsLoader";
import NumberStats from "@/components/common/states/NumberStats";

const RoadmapList = () => {
	const { roadmapList, totalItems, loading, handleMoreRoadmaps } =
		useRoadmapList();

	if (loading && !roadmapList.length)
		return (
			<div className="w-full">
				<UserProfileRoadmapsLoader />
				<UserProfileRoadmapsLoader />
				<UserProfileRoadmapsLoader />
				<UserProfileRoadmapsLoader />
			</div>
		);

	return (
		<div className="w-full pb-[90px] sm:pb-[76px]">
			<div className="w-full flex justify-between items-center sm:items-start mb-[25px]">
				<h3 className="flex-jc-c gap-1 font-poppins text-[14px] sm:text-[16px] text-[#9A9A9A] font-normal">
					<p className="hidden sm:block">Result:</p>{" "}
					<span className="font-medium text-[#484848]">
						{roadmapList.length} roadmap
					</span>
				</h3>
				<div className="font-poppins font-normal text-[14px] sm:text-[16px]">
					<div className="flex-jc-c">
						<p className="text-[#9A9A9A] mr-1">Sort by:</p>
						<button className="w-fit flex-jc-c gap-1 font-poppins font-normal text-[14px] text-[#4E5D78] [&>svg]:w-[20px] [&>svg]:rotate-180">
							Recently Added {ARROW_ICON}
						</button>
					</div>
				</div>
			</div>

			{roadmapList.length ? (
				<ul>
					{roadmapList.map(roadmap => (
						<RoadmapItem key={roadmap.id} roadmap={roadmap} />
					))}
				</ul>
			) : (
				<NumberStats
					text="No result found; try again"
					customStyles="!text-[14px] text-center font-inter"
				/>
			)}

			<RoadmapsPagination
				handleShowMoreRoadmaps={handleMoreRoadmaps}
				totalItems={totalItems}
				isLoading={loading}
			/>
		</div>
	);
};

export default RoadmapList;
