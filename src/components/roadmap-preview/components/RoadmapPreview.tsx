import RoadmapDetails from "@/components/roadmap-preview/components/roadmap-details/RoadmapDetails";
import RoadmapHeader from "@/components/roadmap-preview/components/roadmap-header/RoadmapHeader";
import RoadmapPreviewProfile from "@/components/roadmap-preview/components/roadmap-profile/RoadmapPreviewProfile";
import RoadmapPreviewSteps from "@/components/roadmap-preview/components/roadmap-steps/RoadmapPreviewSteps";
import React from "react";

const RoadmapPreview = () => {
	return (
		<div className="relative w-full flex flex-col md:flex-row p-2 bg-grey-primary">
			<RoadmapPreviewProfile />

			<div className="w-full md:w-[calc(100%-258px)] lg:w-[calc(100%-330px)] ml-auto hidden-scrollbar">
				<RoadmapHeader />

				<div className="relative w-full flex flex-col-reverse lg:flex-row justify-center gap-2 py-2">
					<RoadmapPreviewSteps />
					<RoadmapDetails />
				</div>
			</div>
		</div>
	);
};

export default RoadmapPreview;
