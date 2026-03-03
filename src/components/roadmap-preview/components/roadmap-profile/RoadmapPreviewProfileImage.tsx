"use client";

import React from "react";
import LoadingRoadmapPreviewProfileImage from "@/components/roadmap-preview/components/loading/LoadingRoadmapPreviewProfileImage";
import { useAppSelector } from "@/redux/store";
import Avatar from "@/components/common/avatar/components/Avatar";

const RoadmapPreviewProfileImage = () => {
	const { roadmap, isLoading } = useAppSelector(state => state.roadmapPreview);
	const { user } = roadmap || {};

	if (isLoading) return <LoadingRoadmapPreviewProfileImage />;

	return (
		<div className="flex-jc-c">
			<Avatar
				image_url={user?.image}
				name={user?.fullName || ""}
				customStyles="w-[130px] h-[130px] rounded-full border-4 border-[#506CF0] object-cover text-[3rem] text-white"
			/>
		</div>
	);
};

export default RoadmapPreviewProfileImage;
