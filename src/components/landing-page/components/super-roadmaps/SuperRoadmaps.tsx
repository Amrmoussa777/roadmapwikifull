import SuperRoadmapsSlider from "@/components/landing-page/components/super-roadmaps/SuperRoadmapsSlider";
import React from "react";

const SuperRoadmaps = () => {
	return (
		<section className="py-[4.5rem] bg-primary-ultramarineBlue rounded-t-[3rem]">
			<div className="section-header">
				<h2>Easily explore most super Roadmaps</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has beenthe industry's standard dummy text ever
					since the 1500s
				</p>
			</div>

			<SuperRoadmapsSlider />
		</section>
	);
};

export default SuperRoadmaps;
