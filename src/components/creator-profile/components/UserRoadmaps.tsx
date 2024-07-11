"use client";

import RoadmapItem from "@/components/creator-profile/components/RoadmapItem";
import UserRoadmapsLoader from "@/components/creator-profile/loading/UserRoadmapsLoader";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppSelector } from "@/redux/store";
import axios from "axios";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";

const UserRoadmaps = () => {
	const { isLoading, user } = useAppSelector(state => state.userProfile);
	const [roadmaps, setRoadmaps] = useState<RoadmapType[]>([]);

	const handleGetCreatorRoadmaps = async () => {
		const accessToken = getCookie("accessToken");

		const res = await axios({
			method: "GET",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap/?page=1&pageSize=10&userId=fd0680ea-f918-45f6-9b38-8ef45a16de62`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		const { data } = res;

		setRoadmaps(data);
	};

	useEffect(() => {
		if (user) {
			handleGetCreatorRoadmaps();
		}
	}, [user]);

	if (isLoading) return <UserRoadmapsLoader />;

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
		</div>
	);
};

export default UserRoadmaps;
