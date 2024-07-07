import UserHeader from "@/components/creator-profile/components/UserHeader";
import UserRoadmaps from "@/components/creator-profile/components/UserRoadmaps";
import UserSideDetails from "@/components/creator-profile/components/UserSideDetails";
import React from "react";

const CreatorProfile = () => {
	return (
		<div className="relative max-w-[1440px] mx-auto sm:p-4">
			<UserHeader />

			<div className="flex flex-col md:flex-row">
				<UserSideDetails />
				<UserRoadmaps />
			</div>
		</div>
	);
};

export default CreatorProfile;
