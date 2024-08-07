"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import RoadmapCover from "@public/roadmapCover.png";
import SubscribeButton from "@/components/common/button/SubscribeButton";
import { SHARE_ICON } from "@public/icons/roadmapPreview";
import { useAppSelector } from "@/redux/store";
import LoadingRoadmapHeader from "@/components/roadmap-preview/components/loading/LoadingRoadmapHeader";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";

const RoadmapHeader = () => {
	const { roadmap, isLoading } = useAppSelector(state => state.roadmapPreview);
	const {
		id,
		title,
		price,
		isSubscribed: initialIsSubscribed,
		userId,
	} = roadmap || {};
	const [isSubscribed, setIsSubscribed] = useState(initialIsSubscribed);
	const { currentUser } = useContext(CurrentUserContext);
	const { push } = useRouter();
	const { fetchData } = useFetch();

	const handleSubscribeRoadmap = async () => {
		if (!currentUser) return push("/auth/login");

		if (!isSubscribed) {
			await fetchData("POST", `roadmap/${id}/subscribe`);

			setIsSubscribed(prev => !prev);
		}
	};

	useEffect(() => {
		setIsSubscribed(initialIsSubscribed);
	}, [initialIsSubscribed]);

	if (isLoading) return <LoadingRoadmapHeader />;

	return (
		<div className="h-[150px]">
			<Image
				src={RoadmapCover}
				width={400}
				height={200}
				quality={100}
				alt="roadmap-cover"
				className="w-full h-2/4 object-cover rounded-t-md"
			/>

			<div className="w-full h-2/4 bg-white rounded-b-md flex-jb-c px-2 md:px-4 lg:px-6">
				<h2 className="text-[16px] md:text-lg lg:text-3xl font-semibold text-primary-dark">
					{title}
				</h2>

				<div className="flex-jc-c gap-2">
					{currentUser?.id !== userId ? (
						<SubscribeButton
							price={price}
							onClick={handleSubscribeRoadmap}
							isSubscribed={isSubscribed}
						/>
					) : null}

					<button className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] flex-jc-c border border-grey-iconBorder rounded-full text-[#898989] hover:-translate-y-[2px] transform transition duration-200">
						{SHARE_ICON}
					</button>
				</div>
			</div>
		</div>
	);
};

export default RoadmapHeader;
