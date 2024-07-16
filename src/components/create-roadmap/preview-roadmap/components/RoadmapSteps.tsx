"use client";

import React, { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import { ADD_STEP_ICON } from "@public/icons/roadmapSteps";
import { useRoadmapSteps } from "@/components/create-roadmap/preview-roadmap/hooks/useRoadmapSteps";
import RoadmapStepItem from "@/components/create-roadmap/roadmap-steps/RoadmapStepItem";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addRoadmapStep } from "@/redux/slices/thunks/create-roadmap/addRoadmapStep";
import { useParams } from "next/navigation";
import RoadmapStepsLoader from "@/components/create-roadmap/preview-roadmap/components/RoadmapStepsLoader";

const RoadmapSteps = () => {
	const { items, setItems } = useRoadmapSteps();
	const { roadmap, isLoading } = useAppSelector(state => state.createRoadmap);
	const [activeId, setActiveId] = useState("");
	const dispatch = useAppDispatch();
	const { roadmapId } = useParams();

	const handleActiveStep = (id: string) => {
		if (activeId === id) {
			setActiveId("");
		} else {
			setActiveId(id);
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
		);
	};

	useEffect(() => {
		if (roadmap && roadmap.steps.length) {
			setActiveId(roadmap.steps[0].id);
		}
	}, [roadmap]);

	if (isLoading) return <RoadmapStepsLoader />;

	return (
		<div className="py-4 px-4 sm:px-6">
			<Reorder.Group
				axis="y"
				values={items}
				onReorder={setItems}
				className="flex flex-col gap-4"
			>
				{items.map(step => (
					<Reorder.Item key={step.id} value={step} layout="position">
						<RoadmapStepItem
							key={step.id}
							step={step}
							activeId={activeId}
							handleActiveStep={handleActiveStep}
						/>
					</Reorder.Item>
				))}
			</Reorder.Group>

			<button
				className="w-fit h-[48px] flex gap-2 mt-4 font-normal"
				onClick={handleAddRoadmapStep}
			>
				<div className="w-[48px] h-[48px] flex-jc-c rounded-full text-white bg-primary-ultramarineBlue">
					{ADD_STEP_ICON}
				</div>
				<span className="leading-[48px] text-lg text-primary-ultramarineBlue">
					Add new step
				</span>
			</button>
		</div>
	);
};

export default RoadmapSteps;
