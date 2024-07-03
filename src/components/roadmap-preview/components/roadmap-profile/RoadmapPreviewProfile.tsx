import React from "react";
import RoadmapPreviewProfileInfo from "@/components/roadmap-preview/components/roadmap-profile/RoadmapPreviewProfileInfo";
import RoadmapPreviewProfileImage from "@/components/roadmap-preview/components/roadmap-profile/RoadmapPreviewProfileImage";

const RoadmapPreviewProfile = () => {
	return (
		<div className="md:fixed w-full md:w-[30%] lg:w-[30%] xl:w-[20%] mb-2 md:mb-0 py-8 px-4 bg-white rounded-md flex-jc-c flex-col gap-4">
			{/* Profile Image */}
			<RoadmapPreviewProfileImage />

			{/* Profile Info */}
			<RoadmapPreviewProfileInfo />
		</div>
	);
};

export default RoadmapPreviewProfile;
