"use client";

import Image from "next/image";
import React from "react";
import ProfileImage from "@public/pp.jpeg";
import LoadingRoadmapPreviewProfileImage from "@/components/roadmap-preview/components/loading/LoadingRoadmapPreviewProfileImage";
import { useAppSelector } from "@/redux/store";

const RoadmapPreviewProfileImage = () => {
	const { roadmap, isLoading } = useAppSelector(state => state.roadmapPreview);
	const { user } = roadmap || {};

	if (isLoading) return <LoadingRoadmapPreviewProfileImage />;

	return (
		<div className="flex-jc-c">
			<div className="w-[130px] h-[130px] rounded-full border-4 border-[#506CF0]">
				<Image
					src={ProfileImage}
					width={130}
					height={130}
					quality={80}
					priority
					alt="profile-image"
					className="w-full h-full object-cover rounded-full"
				/>
			</div>
		</div>
	);
};

export default RoadmapPreviewProfileImage;
