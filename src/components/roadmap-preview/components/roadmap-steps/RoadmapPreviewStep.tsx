import Editor from "@/components/common/Editor/components/Editor";
import React from "react";
import {
	CROSS_ICON,
	DURATION_ICON,
	MENU_ICON,
} from "../../../../../public/icons/roadmapSteps";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import { RoadmapPreviewStepProps } from "@/components/roadmap-preview/components/roadmap-steps/types/roadmap-preview-step";
import Attachments from "@/components/common/step/components/Attachments";

const RoadmapPreviewStep = ({
	previewStep,
	togglePreviewStepModal,
}: RoadmapPreviewStepProps) => {
	const { title, description, duration, attachments, tags, verifications } =
		previewStep || {};

	return (
		<div className="w-full p-4 mb-2 bg-white rounded-md">
			<div className="flex-jb-c">
				<div className="flex-jc-c gap-2">
					<button
						className="[&>svg]:w-[24px] text-primary-dark"
						onClick={togglePreviewStepModal}
					>
						{CROSS_ICON}
					</button>
					<p>Step information</p>
				</div>
				<button className="[&>svg]:w-[24px] text-primary-dark">
					{MENU_ICON}
				</button>
			</div>

			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#E0E0E0]"
				customStyles="mb-2"
			/>

			<div className="grid gap-4 my-4">
				<ul className="flex flex-wrap gap-2">
					{tags?.map(tag => (
						<li
							key={tag.id}
							style={{ backgroundColor: tag.color }}
							className="rounded-full px-2 text-xs font-normal bg-grey-primary"
						>
							<p>{tag.name}</p>
						</li>
					))}
				</ul>

				<h3 className="text-lg">{title}</h3>

				<div className="flex flex-js-c gap-1 [&>svg]:text-primary-ultramarineBlue [&>svg]:my-auto">
					{DURATION_ICON} <span className="text-primary-dark">{duration}</span>
				</div>
			</div>

			<Editor value={description || ""} disable hideToolbar />

			<h3 className="my-4">Verification Process / Assignment</h3>

			<p>Attachments</p>
			<Attachments attachments={attachments} />
		</div>
	);
};

export default RoadmapPreviewStep;
