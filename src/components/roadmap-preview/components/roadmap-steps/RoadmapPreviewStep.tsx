import Editor from "@/components/common/Editor/components/Editor";
import React, { useEffect, useRef } from "react";
import {
	CHECK_ICON,
	CROSS_ICON,
	DURATION_ICON,
	MENU_ICON,
} from "@public/icons/roadmapSteps";
import { RoadmapPreviewStepProps } from "@/components/roadmap-preview/components/roadmap-steps/types/roadmap-preview-step";
import Verification from "@/components/roadmap-preview/components/roadmap-steps/Verification";
import { useAppSelector } from "@/redux/store";
import PreviewAttachments from "@/components/builder/roadmap-steps/PreviewAttachments";

const RoadmapPreviewStep = ({
	previewStepId,
	togglePreviewStepModal,
}: RoadmapPreviewStepProps) => {
	const { roadmap } = useAppSelector(state => state.roadmapPreview);
	const { secondaryColor } = roadmap || {};

	const previewStep = roadmap?.steps.find(step => step.id === previewStepId);

	const { id, title, description, duration, attachments, tags, verifications } =
		previewStep || {};

	const stepRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setTimeout(() => {
			if (previewStep && stepRef.current) {
				stepRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}, 300);
	}, [previewStep]);

	return (
		<div ref={stepRef} className="relative w-full p-4 mb-2 bg-white rounded-md">
			<div className="flex-jb-c">
				<button
					className="flex-jc-c gap-1 [&>svg]:w-[20px] text-primary-dark"
					onClick={togglePreviewStepModal}
				>
					{CROSS_ICON}
					<p className="text-[14px]">Step information</p>
				</button>
				<button className="[&>svg]:w-[24px] text-primary-dark">
					{MENU_ICON}
				</button>
			</div>

			<div className="grid gap-[14px] my-4">
				<ul className="flex flex-wrap gap-2">
					{tags?.map(tag => (
						<li
							key={tag.id}
							style={{
								backgroundColor: `${secondaryColor + "33" || "#506CF0" + "33"}`,
							}}
							className="h-[24px] flex-jc-c rounded-full px-2 text-[12px] font-normal font-inter leading-[16px] bg-grey-primary"
						>
							<p className="text-[#111111]">{tag.name}</p>
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
						<span className={`text-[#ACB5B7]`}>{CHECK_ICON}</span> Not started
					</div>
				</div>
			</div>

			<Editor
				value={description || ""}
				disable
				hideToolbar
				customStyles="[&>div]:!p-0 [&>div]:border"
			/>

			{verifications?.length ? (
				<Verification verificationsList={verifications} />
			) : null}

			{attachments?.length ? (
				<>
					<p className="text-[#5A5A5A] text-[12px]">Attachments</p>
					<PreviewAttachments
						attachments={attachments}
						stepId={id || ""}
						readOnly={true}
					/>
				</>
			) : null}
		</div>
	);
};

export default RoadmapPreviewStep;
