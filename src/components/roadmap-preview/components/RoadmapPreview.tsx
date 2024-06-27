"use client";

import RoadmapDetails from "@/components/roadmap-preview/components/roadmap-details/RoadmapDetails";
import RoadmapDiscussion from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussion";
import RoadmapHeader from "@/components/roadmap-preview/components/roadmap-header/RoadmapHeader";
import RoadmapPreviewProfile from "@/components/roadmap-preview/components/roadmap-profile/RoadmapPreviewProfile";
import RoadmapPreviewSteps from "@/components/roadmap-preview/components/roadmap-steps/RoadmapPreviewSteps";
import { useRoadmapPreview } from "@/components/roadmap-preview/components/roadmap-steps/hooks/useRoadmapPreview";
import { useAppSelector } from "@/redux/store";
import React from "react";

const RoadmapPreview = () => {
	useRoadmapPreview();

	const { isLoading, error, roadmap } = useAppSelector(
		state => state.roadmapPreview
	);

	if (error) return <h2>Error</h2>;

	return (
		<main className="relative w-full flex flex-col md:flex-row p-2 bg-grey-primary">
			<RoadmapPreviewProfile />

			<div className="w-full md:w-[calc(70%-12px)] lg:w-[calc(70%-12px)] xl:w-[calc(80%-12px)] ml-auto hidden-scrollbar mb-12">
				{!isLoading ? (
					<>
						<RoadmapHeader />

						<div className="relative w-full flex flex-col-reverse lg:flex-row justify-center gap-2 py-2">
							<div className="w-full">
								<RoadmapPreviewSteps />
								<RoadmapDiscussion />
							</div>
							<RoadmapDetails />
						</div>
					</>
				) : null}
			</div>
		</main>
	);
};

export default RoadmapPreview;
