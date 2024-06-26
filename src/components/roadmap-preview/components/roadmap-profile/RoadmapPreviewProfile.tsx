import Image from "next/image";
import React from "react";
import ProfileImage from "../../../../../public/pp.jpeg";
import RoadmapPreviewProfileInfo from "@/components/roadmap-preview/components/roadmap-profile/RoadmapPreviewProfileInfo";

const RoadmapPreviewProfile = () => {
	return (
		<div className="md:fixed w-full md:w-[250px] lg:w-[330px] py-8 px-4 bg-white rounded-md flex-jc-c flex-col gap-4">
			{/* Profile Image */}
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

			{/* Profile Info */}
			<RoadmapPreviewProfileInfo />
		</div>
	);
};

export default RoadmapPreviewProfile;
