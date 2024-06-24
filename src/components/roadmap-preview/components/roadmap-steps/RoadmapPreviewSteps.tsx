"use client";

import React from "react";
import { PARK_ICON } from "../../../../../public/icons/roadmapPreview";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import { RoadmapStepType } from "@/components/roadmap-preview/types/roadmapSteps.types";
import Editor from "@/components/common/Editor/components/Editor";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import {
	CROSS_ICON,
	DURATION_ICON,
} from "../../../../../public/icons/roadmapSteps";
import { useRoadmapPreviewSteps } from "@/components/roadmap-preview/components/roadmap-steps/hooks/useRoadmapPreviewSteps";

const roadmapSteps: RoadmapStepType[] = [
	{
		id: "1",
		title: "Step 1",
		tags: [{ id: "tag_1", title: "step 1 tag", color: "#22c55e" }],
		duration: "1-2 days",
		completed: true,
		attachments: {
			images: 12,
			videos: 4,
			files: 1,
		},
	},
	{
		id: "2",
		title: "Step 2",
		tags: [
			{ id: "tag_1", title: "step 2 tag", color: "#ef4444" },
			{ id: "tag_2", title: "step 2 tag", color: "#22c55e" },
		],
		duration: "1-2 days",
		completed: false,
		attachments: {
			images: 2,
			videos: 1,
			files: 0,
		},
	},
	{
		id: "3",
		title: "Step 3",
		tags: [
			{ id: "tag_1", title: "step 2 tag", color: "#ef4444" },
			{ id: "tag_2", title: "step 2 tag", color: "#22c55e" },
		],
		duration: "1-2 days",
		completed: false,
		attachments: {
			images: 2,
			videos: 1,
			files: 0,
		},
	},
	{
		id: "4",
		title: "Step 4",
		tags: [
			{ id: "tag_1", title: "step 2 tag", color: "#ef4444" },
			{ id: "tag_2", title: "step 2 tag", color: "#22c55e" },
		],
		duration: "1-2 days",
		completed: false,
		attachments: {
			images: 2,
			videos: 1,
			files: 0,
		},
	},
	{
		id: "5",
		title: "Step 5",
		tags: [
			{ id: "tag_1", title: "step 2 tag", color: "#ef4444" },
			{ id: "tag_2", title: "step 2 tag", color: "#22c55e" },
		],
		duration: "1-2 days",
		completed: false,
		attachments: {
			images: 2,
			videos: 1,
			files: 0,
		},
	},
	{
		id: "6",
		title: "Step 6",
		tags: [
			{ id: "tag_1", title: "step 2 tag", color: "#ef4444" },
			{ id: "tag_2", title: "step 2 tag", color: "#22c55e" },
		],
		duration: "1-2 days",
		completed: false,
		attachments: {
			images: 2,
			videos: 1,
			files: 0,
		},
	},
	{
		id: "7",
		title: "Step 7",
		tags: [
			{ id: "tag_1", title: "step 2 tag", color: "#ef4444" },
			{ id: "tag_2", title: "step 2 tag", color: "#22c55e" },
		],
		duration: "1-2 days",
		completed: false,
		attachments: {
			images: 2,
			videos: 1,
			files: 0,
		},
	},
	{
		id: "8",
		title: "Step 8",
		tags: [
			{ id: "tag_1", title: "step 2 tag", color: "#ef4444" },
			{ id: "tag_2", title: "step 2 tag", color: "#22c55e" },
		],
		duration: "1-2 days",
		completed: false,
		attachments: {
			images: 2,
			videos: 1,
			files: 0,
		},
	},
	{
		id: "9",
		title: "Step 9",
		tags: [
			{ id: "tag_1", title: "step 2 tag", color: "#ef4444" },
			{ id: "tag_2", title: "step 2 tag", color: "#22c55e" },
		],
		duration: "1-2 days",
		completed: false,
		attachments: {
			images: 2,
			videos: 1,
			files: 0,
		},
	},
];

const RoadmapPreviewSteps = () => {
	const {
		previewStep,
		isPreviewStepModalHidden,
		togglePreviewStepModal,
		editorContent,
		changeEditorContent,
		handlePreviewStep,
	} = useRoadmapPreviewSteps();

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

				{roadmapSteps.map((step, index) => (
					<RoadmapStepItem
						key={step.id}
						step={step}
						lastStep={index + 1 === roadmapSteps.length}
						isFirstStep={index === 0}
						handlePreviewStep={handlePreviewStep}
					/>
				))}
			</div>
		);
	}

	return (
		<div className="w-full p-6 bg-white rounded-md">
			<div className="flex-jb-c">
				<h3 className="text-lg">Step 1</h3>
				<button
					className="[&>svg]:w-[24px] text-primary-dark"
					onClick={togglePreviewStepModal}
				>
					{CROSS_ICON}
				</button>
			</div>

			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#E0E0E0]"
				customStyles="mb-2"
			/>

			<div className="flex flex-js-c gap-1 [&>svg]:text-primary-ultramarineBlue">
				{DURATION_ICON} <span className="text-primary-dark">1-2 days</span>
			</div>

			<Editor value={editorContent} changeValue={changeEditorContent} />
		</div>
	);
};

export default RoadmapPreviewSteps;
