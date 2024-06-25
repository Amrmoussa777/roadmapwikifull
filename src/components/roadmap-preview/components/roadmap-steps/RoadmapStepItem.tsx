import { RoadmapStepItemProps } from "@/components/roadmap-preview/types/roadmapSteps.types";
import React from "react";
import {
	CHECK_ICON,
	DURATION_ICON,
	FILE_ICON,
	IMAGE_ICON,
	VIDEO_ICON,
} from "../../../../../public/icons/roadmapSteps";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import { useAppDispatch } from "@/redux/store";
import { toggleStep } from "@/redux/slices/roadmaps/roadmapPreviewSlice";

const RoadmapStepItem = ({
	step,
	isFirstStep,
	lastStep,
	handlePreviewStep,
}: RoadmapStepItemProps) => {
	const { duration, completed, tags, title, attachments } = step;
	const dispatch = useAppDispatch();

	return (
		<>
			{!isFirstStep ? <div className="line-dashed h-[40px] mx-auto" /> : null}

			<div className="relative w-full max-w-[400px] block mx-auto p-2 rounded-sm bg-white border border-[#EBECF2] group">
				<button
					className="w-full h-full block"
					onClick={() => {
						handlePreviewStep(step);
					}}
				>
					<div className="flex-jb-c gap-2">
						<div className="flex-jc-c gap-2">
							<span className="block w-[20px] h-[20px] rounded-sm bg-[#ACB5B7] line-clamp-1" />

							<p className="text-sm font-medium line-clamp-1">{title}</p>
						</div>

						<ul className="flex-jc-c gap-2">
							{tags.map(tag => (
								<li
									key={tag.id}
									style={{ backgroundColor: tag.color }}
									className="rounded-full px-2 text-xs font-normal bg-grey-primary"
								>
									<p>{tag.name}</p>
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
							<div className="flex items-center gap-1 text-sm">
								<span
									className={`${
										completed ? "text-[#00CF7C]" : "text-[#ACB5B7]"
									}`}
								>
									{CHECK_ICON}
								</span>{" "}
								{completed ? "Completed" : "In progress"}
							</div>

							<div className="flex gap-2 [&>div]:flex-jc-c [&>div]:gap-1 [&>div>svg]:w-[12px] text-grey-secondary text-sm">
								<div>{FILE_ICON} 0</div>
								<div>{VIDEO_ICON} 2</div>
								<div>{IMAGE_ICON} 4</div>
							</div>
						</div>
					</div>
				</button>

				{lastStep ? (
					<>
						<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0]" />

						<button
							className="w-full text-white py-2 rounded-sm"
							style={{ backgroundColor: "#506cf0" }}
							onClick={() => dispatch(toggleStep(step.id))}
						>
							{completed ? "Uncheck assignment" : "Complete assignment"}
						</button>
					</>
				) : null}
			</div>
		</>
	);
};

export default RoadmapStepItem;
