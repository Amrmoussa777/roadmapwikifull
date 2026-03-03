"use client";

import React, { lazy } from "react";
import { PARK_ICON } from "@public/icons/roadmapPreview";
import { useRoadmapPreviewSteps } from "@/components/roadmap-preview/components/roadmap-steps/hooks/useRoadmapPreviewSteps";
import { useAppSelector } from "@/redux/store";
import LoadingRoadmapPreviewSteps from "@/components/roadmap-preview/components/loading/LoadingRoadmapPreviewSteps";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
const RoadmapStepItem = dynamic(
	() =>
		import(
			"@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem"
		),
	{ ssr: false }
);
const RoadmapPreviewStep = dynamic(
	() =>
		import(
			"@/components/roadmap-preview/components/roadmap-steps/RoadmapPreviewStep"
		),
	{ ssr: false }
);

const RoadmapPreviewSteps = () => {
	const {
		previewStepId,
		isPreviewStepModalVisible,
		togglePreviewStepModal,
		handlePreviewStep,
	} = useRoadmapPreviewSteps();

	const { roadmap, isLoading } = useAppSelector(state => state.roadmapPreview);
	const { steps, flag } = roadmap || {};

	const defaultState = {
		opacity: 0,
		scale: 0.8,
	};

	if (isLoading) return <LoadingRoadmapPreviewSteps />;

	return (
		<>
			<AnimatePresence>
				{isPreviewStepModalVisible ? (
					<motion.div
						initial={defaultState}
						exit={defaultState}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						transition={{
							duration: 0.1,
						}}
						className="relative w-full p-4 mb-2 bg-white rounded-md"
					>
						<RoadmapPreviewStep
							previewStepId={previewStepId}
							togglePreviewStepModal={togglePreviewStepModal}
						/>
					</motion.div>
				) : null}
			</AnimatePresence>

			<AnimatePresence>
				{!isPreviewStepModalVisible ? (
					<div className={`w-full dotted-bg p-6`}>
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
				) : null}
			</AnimatePresence>
		</>
	);
};

export default RoadmapPreviewSteps;
