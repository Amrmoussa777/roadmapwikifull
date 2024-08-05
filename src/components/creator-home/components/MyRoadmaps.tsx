"use client";

import LatestRoadmap from "@/components/creator-home/components/LatestRoadmap";
import { useFetch } from "@/hooks/useFetch";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppSelector } from "@/redux/store";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React, { useEffect, useState } from "react";

const MyRoadmaps = () => {
	const { user } = useAppSelector(state => state.userProfile);
	const [roadmaps, setRoadmaps] = useState<RoadmapType[]>([]);

	const { fetchData, loading } = useFetch();

	useEffect(() => {
		(async () => {
			const { data } = await fetchData(
				"GET",
				`roadmap/?page=1&pageSize=2&userId=${user?.id}`
			);

			setRoadmaps(data);
		})();
	}, [user]);

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

			<ul className="grid grid-col-1 md:grid-cols-2 gap-[20px] lg:gap-[32px]">
				{roadmaps.map(roadmap => (
					<LatestRoadmap key={roadmap.id} {...roadmap} />
				))}
			</ul>
		</section>
	);
};

export default MyRoadmaps;
