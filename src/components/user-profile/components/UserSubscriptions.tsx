"use client";

import CreateRoadmapButton from "@/components/common/button/CreateRoadmapButton";
import NumberStats from "@/components/common/states/NumberStats";
import RoadmapItem from "@/components/roadmaps/components/RoadmapItem";
import UserProfileRoadmapsLoader from "@/components/user-profile/components/loading/UserProfileRoadmapsLoader";
import { useFetch } from "@/hooks/useFetch";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppSelector } from "@/redux/store";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";

const UserSubscriptions = () => {
	const [roadmapList, setRoadmapList] = useState<RoadmapType[]>([]);
	const { currentUser } = useContext(CurrentUserContext);
	const { loading, fetchData } = useFetch();
	const initialized = useRef(false);

	useEffect(() => {
		(async () => {
			if (currentUser && !initialized.current) {
				initialized.current = true;
				const { data } = await fetchData("GET", `roadmap/mysubscriptions`);
				setRoadmapList(data);
			}
		})();
	}, [currentUser]);

	if (loading) return <UserProfileRoadmapsLoader />;

	return (
		<div id="mySubscriptions" className="bg-white sm:rounded-[12px] p-[18px]">
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					My subscriptions
					<span className="w-[25px] h-[24px] ml-2 rounded-full inline-flex justify-center items-center text-[14px] text-[#79828B] bg-black/5">
						4
					</span>
				</h3>

				<Link
					href={`user/userId/roadmap-list`}
					className="font-inter font-medium text-[14px] flex-jc-c [&>svg]:w-[16px] [&>svg]:rotate-90 text-[#606060]"
				>
					View all {ARROW_ICON}
				</Link>
			</div>

			{roadmapList.length ? (
				<ul>
					{roadmapList.map(roadmap => (
						<RoadmapItem key={roadmap.id} {...roadmap} />
					))}
				</ul>
			) : (
				<NumberStats text="No roadmaps yet" />
			)}
		</div>
	);
};

export default UserSubscriptions;
