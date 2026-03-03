"use client";

import React, { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import { ADD_STEP_ICON } from "@public/icons/roadmapSteps";
import { useRoadmapSteps } from "@/components/builder/preview-roadmap/hooks/useRoadmapSteps";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addRoadmapStep } from "@/redux/slices/thunks/create-roadmap/addRoadmapStep";
import { useParams } from "next/navigation";
import RoadmapStepsLoader from "@/components/builder/preview-roadmap/components/RoadmapStepsLoader";
import {
	expandRoadmapStep,
	toggleStepToPreview,
} from "@/redux/slices/create-roadmap/createRoadmapSlice";
import dynamic from "next/dynamic";
const RoadmapStepItem = dynamic(
	() => import("@/components/builder/roadmap-steps/RoadmapStepItem"),
	{ ssr: false }
);

const RoadmapSteps = () => {
	const { roadmap, isLoading, stepIdToPreview } = useAppSelector(
		state => state.createRoadmap
	);
	const { handleReOrderRoadmapSteps } = useRoadmapSteps();
	const dispatch = useAppDispatch();
	const params = useParams<{ roadmapId?: string }>();
	const roadmapId = params?.roadmapId;
	const [isDragging, setIsDragging] = useState(false);

	const handleAddRoadmapStep = async () => {
		if (!roadmapId) return;
		dispatch(
			addRoadmapStep({
				roadmapId,
				duration: "1 day",
			})
		).then(({ payload }) => {
			const { id } = payload;

			if (stepIdToPreview) {
				dispatch(toggleStepToPreview({ type: "expand", stepIdToPreview: id }));
			}
		});
	};

	useEffect(() => {
		if (roadmap && roadmap.steps.length) {
			dispatch(expandRoadmapStep(roadmap.steps[0].id));
		}
	}, [isLoading]);

	if (isLoading) return <RoadmapStepsLoader />;

	if (roadmap)
		return (
			<div className="py-4 px-4 sm:px-6">
				<>
					<Reorder.Group
						className="flex flex-col gap-4"
						axis="y"
						onReorder={newOrder => handleReOrderRoadmapSteps(newOrder)}
						values={roadmap.steps}
					>
						{roadmap.steps.map(step => (
							<RoadmapStepItem
								key={step.id}
								step={step}
								isDragging={isDragging}
								setIsDragging={setIsDragging}
							/>
						))}
					</Reorder.Group>
				</>

				<button
					className="w-fit h-[48px] mx-auto flex gap-2 mt-4 font-normal"
					onClick={handleAddRoadmapStep}
				>
					<div className="w-[48px] h-[48px] flex-jc-c rounded-full text-white bg-primary-ultramarineBlue hover:text-primary-ultramarineBlue hover:bg-white border border-transparent hover:border-primary-ultramarineBlue transition duration-200">
						{ADD_STEP_ICON}
					</div>
				</button>
			</div>
		);
};

export default RoadmapSteps;
