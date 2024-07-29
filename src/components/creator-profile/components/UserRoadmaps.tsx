"use client";

import RoadmapStats from "@/components/common/states/RoadmapStats";
import RoadmapItem from "@/components/creator-profile/components/RoadmapItem";
import RoadmapsPagination from "@/components/creator-profile/components/RoadmapsPagination";
import { useRoadmaps } from "@/components/creator-profile/hooks/useRoadmaps";
import UserRoadmapsLoader from "@/components/creator-profile/loading/UserRoadmapsLoader";
import React from "react";

const UserRoadmaps = () => {
	const { roadmaps, totalItems, handleShowMoreRoadmaps, loading } =
		useRoadmaps();

	if (!roadmaps.length && !loading)
		return <RoadmapStats text="No roadmaps found!" />;

	if (roadmaps.length)
		return (
			<div className="w-full md:w-[calc(100%-296px)] mt-8 md:mt-4 md:pl-4 px-2 sm:px-0">
				<div className="w-full flex-jb-c px-2 sm:px-0">
					<h3 className="text-[18px] text-[#202020] font-inter font-semibold">
						Roadmaps
						<span className="w-[25px] h-[24px] ml-2 rounded-full inline-flex justify-center items-center text-[14px] text-[#79828B] bg-black/5">
							{roadmaps.length || 0}
						</span>
					</h3>

					{/* Sorting */}
					{/* <div className="flex-jc-c font-poppins font-normal text-[14px]">
				<p className="text-[#9A9A9A] mr-1">Sort by:</p>

				<button className="w-fit flex-jc-c gap-1 font-poppins font-normal text-[14px] text-[#4E5D78] [&>svg]:w-[20px] [&>svg]:rotate-180">
					Recently Added {ARROW_ICON}
				</button>
			</div> */}
				</div>

				<ul className="mt-4">
					{roadmaps.map(roadmap => (
						<RoadmapItem key={roadmap.id} {...roadmap} />
					))}
				</ul>

				<RoadmapsPagination
					handleShowMoreRoadmaps={handleShowMoreRoadmaps}
					totalItems={totalItems}
					isLoading={loading}
				/>
			</div>
		);

	return <UserRoadmapsLoader />;
};

export default UserRoadmaps;
