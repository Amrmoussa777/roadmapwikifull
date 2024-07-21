"use client";

import { RoadmapStepItemProps } from "@/components/roadmap-preview/types/roadmapSteps.types";
import React from "react";
import { CHECK_ICON, DURATION_ICON } from "@public/icons/roadmapSteps";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { calcAttachmentsCount } from "@/components/roadmap-preview/helpers/calcAttachmentsCount";
import StepAttachmentsCount from "@/components/roadmap-preview/components/roadmap-steps/StepAttachmentsCount";

const RoadmapStepItem = ({
	step,
	isFirstStep,
	lastStep,
	handlePreviewStep,
	showTags,
}: RoadmapStepItemProps) => {
	const { duration, tags, title, attachments } = step;
	const dispatch = useAppDispatch();

	const attachmentsCountList = calcAttachmentsCount(attachments);
	const { roadmap } = useAppSelector(state => state.createRoadmap);

	const { secondaryColor } = roadmap || {};

	return (
		<>
			{!isFirstStep ? <div className="line-dashed h-8 mx-auto" /> : null}

			<div className="relative w-full max-w-[600px] h-[80px] mx-auto px-2 py-3 rounded-sm bg-white border border-[#EBECF2] group">
				<button
					className="w-full h-full flex flex-col justify-between"
					onClick={() => (handlePreviewStep ? handlePreviewStep(step) : null)}
				>
					<div className="w-full flex-jb-c gap-2">
						<div className="flex-jc-c gap-2">
							<span className="block min-w-[20px] min-h-[20px] rounded-sm bg-[#ACB5B7] line-clamp-1" />

							<p className="text-start text-[14px] font-outfit font-normal text-[#181818] line-clamp-1">
								{title}
							</p>
						</div>

						{showTags ? (
							<ul className="flex-jc-c gap-2">
								{tags.slice(0, 3).map(tag => (
									<li
										key={tag.id}
										style={{
											backgroundColor: `${
												secondaryColor + "33" || "#506CF0" + "33"
											}`,
										}}
										className="rounded-full w-fit px-2 text-[12px] font-normal text-[#111111]"
									>
										<p className="line-clamp-1">{tag.name}</p>
									</li>
								))}
							</ul>
						) : null}
					</div>

					<div className="w-full flex-jb-c mt-2">
						<div className="flex-jc-c gap-1 [&>svg]:w-[16px] [&>svg]:text-primary-ultramarineBlue">
							{DURATION_ICON}{" "}
							<span className="text-primary-dark text-[12px] font-normal">
								{duration || "Duration"}
							</span>
						</div>

						<div className="flex-jc-c gap-3">
							<div className="flex items-center gap-1 text-[12px] font-medium font-inter leading-[14.4px] text-[#92929D]">
								<span
									className={`${false ? "text-[#00CF7C]" : "text-[#ACB5B7]"}`}
								>
									{CHECK_ICON}
								</span>{" "}
								Not started
							</div>

							<StepAttachmentsCount
								attachmentsCountList={attachmentsCountList}
							/>
						</div>
					</div>
				</button>

				{/* {lastStep ? (
					<>
						<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0]" />

						<button
							className="w-full text-white py-2 rounded-sm"
							style={{ backgroundColor: "#506cf0" }}
						>
							{true ? "Uncheck assignment" : "Complete assignment"}
						</button>
					</>
				) : null} */}
			</div>
		</>
	);
};

export default RoadmapStepItem;
