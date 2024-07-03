"use client";

import React, { lazy } from "react";
import { PARK_ICON } from "@public/icons/roadmapPreview";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import { useRoadmapPreviewSteps } from "@/components/roadmap-preview/components/roadmap-steps/hooks/useRoadmapPreviewSteps";
import { useAppSelector } from "@/redux/store";
import LoadingRoadmapPreviewSteps from "@/components/roadmap-preview/components/loading/LoadingRoadmapPreviewSteps";
const RoadmapPreviewStep = lazy(
	() =>
		import(
			"@/components/roadmap-preview/components/roadmap-steps/RoadmapPreviewStep"
		)
);

const RoadmapPreviewSteps = () => {
	const {
		previewStep,
		isPreviewStepModalHidden,
		togglePreviewStepModal,
		handlePreviewStep,
	} = useRoadmapPreviewSteps();

	const { roadmap, isLoading } = useAppSelector(state => state.roadmapPreview);
	const { steps, flag } = roadmap || {};

	if (isLoading) return <LoadingRoadmapPreviewSteps />;

	if (!isPreviewStepModalHidden) {
		return (
			<div className="w-full dotted-bg p-6">
				<div className="flex-jc-c">
					<h3 className="h-[40px] flex items-center gap-2 text-white bg-primary-ultramarineBlue rounded-full font-medium py-2 px-4">
						<span>{PARK_ICON}</span>
						{flag} 🚀
					</h3>
				</div>

				<div className="line-dashed h-8 mx-auto" />

				{steps?.map((step, index) => (
					<RoadmapStepItem
						key={step.id}
						step={step}
						lastStep={index + 1 === steps.length}
						isFirstStep={index === 0}
						handlePreviewStep={handlePreviewStep}
						showTags={true}
					/>
				))}
			</div>
		);
	}

	return (
		<RoadmapPreviewStep
			previewStep={previewStep}
			togglePreviewStepModal={togglePreviewStepModal}
		/>
	);
};

export default RoadmapPreviewSteps;
