import Editor from "@/components/common/Editor/components/Editor";
import React from "react";
import {
	CROSS_ICON,
	DURATION_ICON,
} from "../../../../../public/icons/roadmapSteps";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import { RoadmapPreviewStepProps } from "@/components/roadmap-preview/components/roadmap-steps/types/roadmap-preview-step";

const RoadmapPreviewStep = ({
	previewStep,
	togglePreviewStepModal,
}: RoadmapPreviewStepProps) => {
	const { title, description, duration, attachments, tags } = previewStep || {};

	return (
		<div className="w-full p-6 bg-white rounded-md">
			<div className="flex-jb-c">
				<h3 className="text-lg">{title}</h3>
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
				{DURATION_ICON} <span className="text-primary-dark">{duration}</span>
			</div>

			<Editor value={description || ""} disable />
		</div>
	);
};

export default RoadmapPreviewStep;
