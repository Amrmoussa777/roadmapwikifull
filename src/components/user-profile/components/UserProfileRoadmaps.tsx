"use client";

import CreateRoadmapButton from "@/components/common/button/CreateRoadmapButton";
import ShareModal from "@/components/common/modal/components/ShareModal";
import NumberStats from "@/components/common/states/NumberStats";
import RoadmapItem from "@/components/roadmaps/components/RoadmapItem";
import UserProfileRoadmapsLoader from "@/components/user-profile/components/loading/UserProfileRoadmapsLoader";
import { useFetch } from "@/hooks/useFetch";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";

const UserProfileRoadmaps = ({
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
	const [totalMySubscriptionsNumber, setTotalMySubscriptionsNumber] =
		useState(0);

	useEffect(() => {
		(async () => {
			if (currentUser && !initialized.current) {
				initialized.current = true;
				const { data } = await fetchData(
					"GET",
					`roadmap/?userId=${currentUser.id}`
				);
				const { data: totalMyRoadmaps } = await fetchData(
					"GET",
					`roadmap/myroadmaps`
				);

				setTotalMySubscriptionsNumber(totalMyRoadmaps.length);
				setRoadmapList(data);
			}
		})();
	}, [currentUser]);

	if (loading) return <UserProfileRoadmapsLoader />;

	return (
		<div
			id="myRoadmaps"
			className={`bg-white sm:rounded-[12px] p-[18px] ${customStyles}`}
		>
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					My roadmaps
					<span className="w-[25px] h-[24px] ml-2 rounded-full inline-flex justify-center items-center text-[14px] text-[#79828B] bg-black/5">
						{totalMySubscriptionsNumber || 0}
					</span>
				</h3>

				<Link
					href={`user/userId/roadmap-list`}
					className="font-inter font-medium text-[14px] flex-jc-c [&>svg]:w-[16px] [&>svg]:rotate-90 text-[#606060]"
				>
					View all {ARROW_ICON}
				</Link>
			</div>

			{roadmapList.slice(0, count).length ? (
				<>
					<ul>
						{roadmapList.map(roadmap => (
							<RoadmapItem key={roadmap.id} roadmap={roadmap} />
						))}
					</ul>
				</>
			) : (
				<div className="flex-jb-c">
					<NumberStats text="No roadmaps yet" customStyles="!w-fit" />
					<CreateRoadmapButton />
				</div>
			)}
		</div>
	);
};

export default UserProfileRoadmaps;
