import SearchRoadmapForm from "@/app/roadmaps/SearchRoadmapForm";
import Header from "@/components/roadmaps/components/Header";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const page = () => {
	return (
		<main className="relative max-w-[1440px] mx-auto p-2 md:p-6 lg:px-8 py-[2rem] bg-white">
			<Header />

			<SearchRoadmapForm />

			{/* Sorting */}
			<div className="flex-jb-c mt-[32px]">
				<h3 className="font-poppins text-[#9A9A9A] font-normal">
					Result: <span className="font-medium text-[#484848]">40 roadmap</span>
				</h3>
				<div className="flex-jc-c font-poppins font-normal text-[14px]">
					<p className="text-[#9A9A9A] mr-1">Sort by:</p>

					<button className="w-fit flex-jc-c gap-1 font-poppins font-normal text-[14px] text-[#4E5D78] [&>svg]:w-[20px] [&>svg]:rotate-180">
						Recently Added {ARROW_ICON}
					</button>
				</div>
			</div>
		</main>
	);
};

export default page;
