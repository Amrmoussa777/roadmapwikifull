import { RoadmapStepType } from "@/components/roadmap-preview/types/roadmapSteps.types";
import React from "react";
import {
	CHECK_ICON,
	DURATION_ICON,
	FILE_ICON,
	IMAGE_ICON,
	VIDEO_ICON,
} from "../../../../../public/icons/roadmapSteps";

const RoadmapStepItem = ({
	step,
	isFirstStep,
	lastStep,
}: {
	step: RoadmapStepType;
	isFirstStep: boolean;
	lastStep: boolean;
}) => {
	const { duration, completed, tags, title, attachments } = step;

	return (
		<>
			{!isFirstStep ? <div className="line-dashed h-[40px] mx-auto" /> : null}

			<div className="relative max-w-[380px] mx-auto p-2 rounded-sm bg-white border border-[#EBECF2] group">
				<div className="flex-jb-c gap-2">
					<div>
						<span className="w-[20px] h-[20px] rounded-sm bg-[#ACB5B7]" />
						{title}
					</div>

					<ul className="flex-jc-c gap-2">
						{tags.map(tag => (
							<li
								key={tag.id}
								style={{ backgroundColor: tag.color }}
								className="rounded-full text-white px-2 text-sm font-normal"
							>
								<p>{tag.title}</p>
							</li>
						))}
					</ul>
				</div>

				<div className="flex-jb-c mt-2">
					<div className="flex-jc-c gap-1 [&>svg]:text-primary-ultramarineBlue">
						{DURATION_ICON}{" "}
						<span className="text-primary-dark">{duration}</span>
					</div>

					<div className="flex-jc-c gap-3">
						<div className="flex items-center gap-1">
							<span
								className={`${completed ? "text-[#00CF7C]" : "text-[#ACB5B7]"}`}
							>
								{CHECK_ICON}
							</span>{" "}
							{completed ? "Completed" : "Not started"}
						</div>

						<div className="flex gap-2 [&>div]:flex-jc-c [&>div]:gap-1 [&>div>svg]:w-[12px] text-grey-secondary">
							<div>
								{FILE_ICON} {attachments.files}
							</div>
							<div>
								{VIDEO_ICON} {attachments.videos}
							</div>
							<div>
								{IMAGE_ICON} {attachments.images}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RoadmapStepItem;
