import UserTips from "@/components/creator-home/components/CreatorTips";
import Header from "@/components/creator-home/components/Header";
import OnboardingSteps from "@/components/creator-home/components/OnboardingSteps";
import PopularCreators from "@/components/user-home/components/PopularCreators";
import PopularFields from "@/components/user-home/components/PopularFields";
import RecommendedRoadmaps from "@/components/user-home/components/RecommendedRoadmaps";
import UserSubscriptions from "@/components/user-profile/components/UserSubscriptions";
import React from "react";

const UserHome = () => {
	return (
		<main className="relative max-w-[1440px] mx-auto p-6 lg:px-8 py-[2rem] bg-white">
			<Header />

			<div className="flex justify-between flex-col xl:flex-row lg:gap-[20px] xl:gap-[40px] mt-[30px]">
				<div className="w-full h-full grid grid-cols-2 xl:grid-cols-1 xl:min-w-[300px] xl:w-[300px] justify-between xl:flex-col gap-[30px] lg:gap-[90px]">
					<OnboardingSteps />
					<UserTips />
				</div>

				<div className="w-full xl:w-[calc(100%-340px)] mt-[30px] lg:mt-0">
					<UserSubscriptions
						count={2}
						customStyles="px-0 [&>ul>li]:!bg-primary-ultramarineBlue/10"
					/>
					<RecommendedRoadmaps />

					<div className="overflow-hidden h-full sm:h-[600px] pt-8 flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-4 mt-[40px]">
						<PopularCreators />
						<PopularFields />
					</div>
				</div>
			</div>
		</main>
	);
};

export default UserHome;
