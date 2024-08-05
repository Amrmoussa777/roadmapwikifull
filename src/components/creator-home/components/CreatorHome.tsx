import CreatorTips from "@/components/creator-home/components/CreatorTips";
import GeneralStatistics from "@/components/creator-home/components/GeneralStatistics";
import Header from "@/components/creator-home/components/Header";
import MyRoadmaps from "@/components/creator-home/components/MyRoadmaps";
import OnboardingSteps from "@/components/creator-home/components/OnboardingSteps";
import Summary from "@/components/creator-home/components/Summary";
import React from "react";

const CreatorHome = () => {
	return (
		<main className="relative max-w-[1440px] mx-auto p-6 lg:px-8 py-[2rem] bg-white">
			<Header />

			<div className="flex justify-between lg:gap-[20px] xl:gap-[40px] mt-[30px]">
				<div className="min-w-[300px] w-[300px] hidden xl:flex flex-col gap-[90px]">
					<OnboardingSteps />
					<CreatorTips />
				</div>

				<div className="w-full xl:w-[calc(100%-340px)]">
					<Summary />
					<MyRoadmaps />
					<GeneralStatistics />
				</div>
			</div>
		</main>
	);
};

export default CreatorHome;
