import UserTips from "@/components/creator-home/components/CreatorTips";
import Header from "@/components/creator-home/components/Header";
import OnboardingSteps from "@/components/creator-home/components/OnboardingSteps";
import PopularCreators from "@/components/user-home/components/PopularCreators";
import PopularFields from "@/components/user-home/components/PopularFields";
import RecommendedRoadmaps from "@/components/user-home/components/RecommendedRoadmaps";
import React from "react";

const UserHome = () => {
	return (
		<main className="relative max-w-[1440px] mx-auto p-6 lg:px-8 py-[2rem] bg-white">
			<Header />

			<div className="flex justify-between lg:gap-[20px] xl:gap-[40px] mt-[30px]">
				<div className="min-w-[300px] w-[300px] hidden lg:flex flex-col gap-[90px]">
					<OnboardingSteps />
					<UserTips />
				</div>

				<div className="w-full xl:w-[calc(100%-340px)]">
					<RecommendedRoadmaps />

					<div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-4 mt-[40px]">
						<PopularCreators />
						<PopularFields />
					</div>
				</div>
			</div>
		</main>
	);
};

export default UserHome;
