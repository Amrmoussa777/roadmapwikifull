import RoadmapPreviewLoader from "@/components/create-roadmap/preview-roadmap/components/RoadmapPreviewLoader";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import { toggleStepToPreview } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { PARK_ICON } from "@public/icons/roadmapPreview";
import React from "react";

const RoadmapPreview = () => {
	const { roadmap, isLoading } = useAppSelector(state => state.createRoadmap);
	const { flag, steps } = roadmap || {};

	const dispatch = useAppDispatch();

	const handlePreviewStep = (stepId: string) => {
		dispatch(toggleStepToPreview(stepId));
	};

	if (isLoading) return <RoadmapPreviewLoader />;

	return (
		<div className={`w-full h-full dotted-bg p-6 pb-[100px] lg:pb-0`}>
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
					showTags={true}
					handlePreviewStep={handlePreviewStep}
				/>
			))}
		</div>
	);
};

export default RoadmapPreview;
