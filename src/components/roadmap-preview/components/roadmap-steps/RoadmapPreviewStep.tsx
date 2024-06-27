import Editor from "@/components/common/Editor/components/Editor";
import React from "react";
import {
	CHECK_ICON,
	CROSS_ICON,
	DURATION_ICON,
	MENU_ICON,
} from "../../../../../public/icons/roadmapSteps";
import { RoadmapPreviewStepProps } from "@/components/roadmap-preview/components/roadmap-steps/types/roadmap-preview-step";
import Attachments from "@/components/common/step/components/Attachments";
import Verification from "@/components/roadmap-preview/components/roadmap-steps/Verification";

const RoadmapPreviewStep = ({
	previewStep,
	togglePreviewStepModal,
}: RoadmapPreviewStepProps) => {
	const {
		id,
		title,
		description,
		duration,
		attachments,
		tags,
		verifications,
		completed,
	} = previewStep || {};

	return (
		<div className="relative w-full p-4 mb-2 bg-white rounded-md">
			<div className="flex-jb-c">
				<div className="flex-jc-c gap-1">
					<button
						className="[&>svg]:w-[20px] text-primary-dark"
						onClick={togglePreviewStepModal}
					>
						{CROSS_ICON}
					</button>
					<p className="text-[14px]">Step information</p>
				</div>
				<button className="[&>svg]:w-[24px] text-primary-dark">
					{MENU_ICON}
				</button>
			</div>

			<div className="grid gap-[14px] my-4">
				<ul className="flex flex-wrap gap-2">
					{tags?.map(tag => (
						<li
							key={tag.id}
							style={{ backgroundColor: tag.color }}
							className="h-[24px] flex-jc-c rounded-full px-2 text-[12px] font-normal font-inter leading-[16px] bg-grey-primary"
						>
							<p className="text-white">{tag.name}</p>
						</li>
					))}
				</ul>

				<h3 className="text-lg font-normal">{title}</h3>

				<div className="flex flex-js-c gap-3 [&>div>svg]:text-primary-ultramarineBlue [&>div>svg]:w-[16px] [&>svg]:my-auto">
					<div className="w-fit flex-jc-c gap-1">
						{DURATION_ICON}{" "}
						<span className="text-[#92929D] text-[14px] font-normal">
							{duration}
						</span>
					</div>

					<div className="flex items-center gap-1 text-[12px] font-medium font-inter leading-[14.4px] text-[#92929D]">
						<span
							className={`${completed ? "text-[#00CF7C]" : "text-[#ACB5B7]"}`}
						>
							{CHECK_ICON}
						</span>{" "}
						{completed ? "Completed" : "In progress"}
					</div>
				</div>
			</div>

			<Editor
				value={description || ""}
				disable
				hideToolbar
				customStyles="[&>div]:!p-0 [&>div]:border"
			/>

			<Verification verificationsList={verifications} />

			<p className="text-[#5A5A5A] text-[12px]">Attachments</p>
			<Attachments attachments={attachments} />
		</div>
	);
};

export default RoadmapPreviewStep;
