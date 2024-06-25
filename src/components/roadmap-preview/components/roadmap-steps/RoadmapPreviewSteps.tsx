"use client";

import React from "react";
import { PARK_ICON } from "../../../../../public/icons/roadmapPreview";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import Editor from "@/components/common/Editor/components/Editor";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import {
	CROSS_ICON,
	DURATION_ICON,
} from "../../../../../public/icons/roadmapSteps";
import { useRoadmapPreviewSteps } from "@/components/roadmap-preview/components/roadmap-steps/hooks/useRoadmapPreviewSteps";
import { useAppSelector } from "@/redux/store";
import RoadmapPreviewStep from "@/components/roadmap-preview/components/roadmap-steps/RoadmapPreviewStep";

const RoadmapPreviewSteps = () => {
	const {
		previewStep,
		isPreviewStepModalHidden,
		togglePreviewStepModal,
		handlePreviewStep,
	} = useRoadmapPreviewSteps();

	const { roadmap } = useAppSelector(state => state.roadmapPreview);
	const { steps } = roadmap || {};

	if (!isPreviewStepModalHidden) {
		return (
			<div className="w-full dotted-bg p-6">
				<div className="flex-jc-c">
					<h3 className="flex items-center gap-2 text-white bg-primary-ultramarineBlue rounded-full font-medium py-2 px-4">
						<span>{PARK_ICON}</span>
						FrontEnd 🚀
					</h3>
				</div>

				<div className="line-dashed h-[40px] mx-auto" />

				{steps?.map((step, index) => (
					<RoadmapStepItem
						key={step.id}
						step={step}
						lastStep={index + 1 === steps.length}
						isFirstStep={index === 0}
						handlePreviewStep={handlePreviewStep}
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
