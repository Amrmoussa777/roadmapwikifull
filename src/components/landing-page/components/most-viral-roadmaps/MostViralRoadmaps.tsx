import MostViralRoadmapItem from "@/components/landing-page/components/most-viral-roadmaps/MostViralRoadmapItem";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const MostViralRoadmaps = () => {
	return (
		<section className="bg-[#F8F9FA] px-6 lg:px-[4.5rem] py-[4.5rem]">
			<div className="heading-section [&>*]:!text-[#171618]">
				<h2>Most Viral Roadmaps</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has beenthe industry's standard dummy text ever
					since the 1500s
				</p>
			</div>

			<ul className="max-w-[880px] mx-auto mt-16">
				{Array.from(Array(6)).map((_, index) => (
					<MostViralRoadmapItem key={index} />
				))}
			</ul>

			<button className="flex-jc-c mx-auto mt-12 [&>svg]:rotate-90 text-[#506CF0] font-inter font-medium text-[16px]">
				View More {ARROW_ICON}
			</button>
		</section>
	);
};

export default MostViralRoadmaps;
