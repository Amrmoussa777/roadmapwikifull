import RoadmapHeader from "@/components/roadmap-preview/components/roadmap-header/RoadmapHeader";
import RoadmapPreviewProfile from "@/components/roadmap-preview/components/roadmap-profile/RoadmapPreviewProfile";
import RoadmapPreviewSteps from "@/components/roadmap-preview/components/roadmap-steps/RoadmapPreviewSteps";
import React from "react";

const RoadmapPreview = () => {
	return (
		<div className="flex gap-2 p-2 bg-grey-primary">
			<RoadmapPreviewProfile />

			<div className="w-full">
				<RoadmapHeader />
				<RoadmapPreviewSteps />
			</div>
		</div>
	);
};

export default RoadmapPreview;
