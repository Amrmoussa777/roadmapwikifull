"use client";

import NumberStats from "@/components/common/states/NumberStats";
import RoadmapItem from "@/components/roadmaps/components/RoadmapItem";
import UserProfileRoadmapsLoader from "@/components/user-profile/components/loading/UserProfileRoadmapsLoader";
import { useFetch } from "@/hooks/useFetch";
import useToggle from "@/hooks/useToggle";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppSelector } from "@/redux/store";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";

const UserSubscriptions = ({
	customStyles = "",
	count = 10,
}: {
	customStyles?: string;
	count?: number;
}) => {
	const [roadmapList, setRoadmapList] = useState<RoadmapType[]>([]);
	const { currentUser } = useContext(CurrentUserContext);
	const { loading, fetchData } = useFetch(true);
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
		<div
			id="mySubscriptions"
			className={`bg-white sm:rounded-[12px] mt-[18px] ${customStyles}`}
		>
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					My subscriptions
					<span className="w-[25px] h-[24px] ml-2 rounded-full inline-flex justify-center items-center text-[14px] text-[#79828B] bg-black/5">
						{roadmapList.length}
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
					{roadmapList.slice(0, count).map(roadmap => (
						<RoadmapItem key={roadmap.id} roadmap={roadmap} />
					))}
				</ul>
			) : (
				<NumberStats text="No subscribed roadmaps yet" />
			)}
		</div>
	);
};

export default UserSubscriptions;
