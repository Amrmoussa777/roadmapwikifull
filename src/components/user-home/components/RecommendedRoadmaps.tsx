import RoadmapItem from "@/components/roadmaps/components/RoadmapItem";
import { useRecommendedRoadmaps } from "@/components/user-home/hooks/useRecommendedRoadmaps";
import UserProfileRoadmapsLoader from "@/components/user-profile/components/loading/UserProfileRoadmapsLoader";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";

const RecommendedRoadmaps = () => {
	const { roadmapList, loading } = useRecommendedRoadmaps();

	if (loading) return <UserProfileRoadmapsLoader />;

	if (!roadmapList.length) return;

	return (
		<div className="mt-8">
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					Recommended roadmaps
				</h3>

				<Link
					href={`user/userId/roadmap-list`}
					className="font-inter font-medium text-[14px] flex-jc-c [&>svg]:w-[16px] [&>svg]:rotate-90 text-[#606060]"
				>
					View all {ARROW_ICON}
				</Link>
			</div>

			<ul>
				{roadmapList.map(roadmap => (
					<RoadmapItem key={roadmap.id} roadmap={roadmap} />
				))}
			</ul>
		</div>
	);
};

export default RecommendedRoadmaps;
