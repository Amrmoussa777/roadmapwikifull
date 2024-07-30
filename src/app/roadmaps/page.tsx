import SearchRoadmapForm from "@/components/roadmaps/components/SearchRoadmapForm";
import Header from "@/components/roadmaps/components/Header";
import React from "react";
import RoadmapsFilter from "@/components/roadmaps/components/RoadmapsFilter";
import RoadmapList from "@/components/roadmaps/components/RoadmapList";

const page = () => {
	return (
		<main className="relative max-w-[1440px] mx-auto p-6 lg:px-8 sm:py-[2rem] bg-white">
			<Header />

			<SearchRoadmapForm />

			<div className="flex mt-[32px]">
				<RoadmapsFilter />

				<RoadmapList />
			</div>
		</main>
	);
};

export default page;
