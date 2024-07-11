"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import RoadmapCover from "@public/roadmapCover.png";
import SubscribeButton from "@/components/common/button/SubscribeButton";
import { SHARE_ICON } from "@public/icons/roadmapPreview";
import { useAppSelector } from "@/redux/store";
import LoadingRoadmapHeader from "@/components/roadmap-preview/components/loading/LoadingRoadmapHeader";
import { getCookie } from "cookies-next";
import axios from "axios";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useRouter } from "next/navigation";

const RoadmapHeader = () => {
	const { roadmap, isLoading } = useAppSelector(state => state.roadmapPreview);
	const { id, title, price, isSubscribed: initialIsSubscribed } = roadmap || {};
	const [isSubscribed, setIsSubscribed] = useState(initialIsSubscribed);
	const { currentUser } = useContext(CurrentUserContext);
	const { push } = useRouter();

	const handleSubscribeRoadmap = async () => {
		if (!currentUser) return push("/auth/login");

		const accessToken = getCookie("accessToken");

		if (!isSubscribed) {
			await axios({
				method: "POST",
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap/${id}/subscribe`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

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
					<SubscribeButton
						price={price?.amount}
						onClick={handleSubscribeRoadmap}
						isSubscribed={isSubscribed}
					/>
					<button className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] flex-jc-c border border-grey-iconBorder rounded-full text-[#898989]">
						{SHARE_ICON}
					</button>
				</div>
			</div>
		</div>
	);
};

export default RoadmapHeader;
