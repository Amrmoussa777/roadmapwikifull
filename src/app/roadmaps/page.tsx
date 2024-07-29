import SearchRoadmapForm from "@/app/roadmaps/SearchRoadmapForm";
import Header from "@/components/roadmaps/components/Header";
import React from "react";

const page = () => {
	return (
		<main className="relative max-w-[1440px] mx-auto p-2 md:p-6 lg:px-8 py-[2rem] bg-white">
			<Header />

			<SearchRoadmapForm />
		</main>
	);
};

export default page;
