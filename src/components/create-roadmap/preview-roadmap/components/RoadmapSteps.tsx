"use client";

import React, { useEffect, useRef } from "react";
import { Reorder } from "framer-motion";
import { ADD_STEP_ICON } from "@public/icons/roadmapSteps";
import { useRoadmapSteps } from "@/components/create-roadmap/preview-roadmap/hooks/useRoadmapSteps";
import RoadmapStepItem from "@/components/create-roadmap/roadmap-steps/RoadmapStepItem";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addRoadmapStep } from "@/redux/slices/thunks/create-roadmap/addRoadmapStep";
import { useParams } from "next/navigation";
import RoadmapStepsLoader from "@/components/create-roadmap/preview-roadmap/components/RoadmapStepsLoader";
import { expandRoadmapStep } from "@/redux/slices/create-roadmap/createRoadmapSlice";

const RoadmapSteps = () => {
	const { items, setItems } = useRoadmapSteps();
	const { roadmap, isLoading } = useAppSelector(state => state.createRoadmap);
	const dispatch = useAppDispatch();
	const { roadmapId } = useParams();
	const addStepButtonRef = useRef<HTMLButtonElement>(null);
	const lastStepRef = useRef<HTMLDivElement>(null);

	const scrollToLastStep = () => {
		if (lastStepRef.current) {
			lastStepRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleAddRoadmapStep = () => {
		dispatch(
			addRoadmapStep({
				roadmapId,
				title: "Step default title",
				description: "Step default description",
				duration: "1 day",
			})
		).then(() => scrollToLastStep());
	};

	useEffect(() => {
		if (roadmap && roadmap.steps.length) {
			dispatch(expandRoadmapStep(roadmap.steps[0].id));
		}
	}, [isLoading]);

	if (isLoading) return <RoadmapStepsLoader />;

	return (
		<div className="py-4 px-4 sm:px-6">
			<Reorder.Group
				axis="y"
				values={items}
				onReorder={setItems}
				className="flex flex-col gap-4"
			>
				{items.map((step, index) => (
					<Reorder.Item key={step.id} value={step} layout="position">
						<RoadmapStepItem key={step.id} step={step} />
						{index === items.length - 1 && <div ref={lastStepRef}></div>}
					</Reorder.Item>
				))}
			</Reorder.Group>

			<button
				ref={addStepButtonRef}
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
