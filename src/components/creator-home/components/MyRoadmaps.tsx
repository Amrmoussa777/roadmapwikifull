"use client";

import NumberStats from "@/components/common/states/NumberStats";
import LatestRoadmap from "@/components/creator-home/components/LatestRoadmap";
import MyRoadmapsLoader from "@/components/creator-home/components/MyRoadmapsLoader";
import { useFetch } from "@/hooks/useFetch";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React, { useContext, useEffect, useState } from "react";

const MyRoadmaps = () => {
	const [roadmaps, setRoadmaps] = useState<RoadmapType[]>([]);
	const { currentUser, currentUserLoading } = useContext(CurrentUserContext);

	const { fetchData, loading } = useFetch();

	useEffect(() => {
		if (currentUser) {
			(async () => {
				
				const { data } = await fetchData("GET", `roadmap/myroadmaps`);
				
				setRoadmaps(data);
			})();
		}
	}, [currentUser]);

	if (currentUserLoading || loading) return <MyRoadmapsLoader />;

	return (
		<section className="mt-[40px]">
			<div className="flex-jb-c">
				<h3 className="font-inter font-semibold text-[20px] text-[#1E293B]">
					My Roadmaps
				</h3>
				<button className="flex-jc-c font-inter font-medium text-[14px] text-[#606060] hover:opacity-80 group transition duration-200">
					View more{" "}
					<span className="rotate-90 [&>svg]:w-[17px] group-hover:translate-x-[2px] transition duration-200">
						{ARROW_ICON}
					</span>
				</button>
			</div>

			{roadmaps.length ? (
				<ul className="grid grid-col-1 md:grid-cols-2 gap-[20px] lg:gap-[32px]">
					{roadmaps.slice(0, 2).map(roadmap => (
						<LatestRoadmap key={roadmap.id} {...roadmap} />
					))}
				</ul>
			) : (
				<NumberStats text="No roadmaps yet" />
			)}
		</section>
	);
};

export default MyRoadmaps;
