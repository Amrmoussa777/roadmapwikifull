import UserHeader from "@/components/creator-profile/components/UserHeader";
import PersonalInfo from "@/components/user-profile/components/PersonalInfo";
import UserLinks from "@/components/user-profile/components/UserLinks";
import UserProfilePayments from "@/components/user-profile/components/UserProfilePayments";
import UserProfileRoadmaps from "@/components/user-profile/components/UserProfileRoadmaps";
import UserProfileTabs from "@/components/user-profile/components/UserProfileTabs";
import UserSubscriptions from "@/components/user-profile/components/UserSubscriptions";
import React from "react";

const UserProfile = () => {
	return (
		<div className="relative max-w-[1440px] mx-auto sm:p-4">
			<UserHeader />

			<div className="flex flex-col md:flex-row">
				<UserProfileTabs />

				<div className="w-full md:w-[calc(100%-296px)] mt-8 md:mt-4 md:pl-4 flex flex-col gap-4">
					<PersonalInfo />
					<UserLinks />
					<UserSubscriptions />
					<UserProfileRoadmaps />
					<UserProfilePayments />
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
