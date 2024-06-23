import React from "react";
import { PARK_ICON } from "../../../../../public/icons/roadmapPreview";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import { RoadmapStepType } from "@/components/roadmap-preview/types/roadmapSteps.types";

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
		title: "Step 1",
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
	return (
		<div className="dotted-bg mt-2 p-6">
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
				/>
			))}
		</div>
	);
};

export default RoadmapPreviewSteps;
