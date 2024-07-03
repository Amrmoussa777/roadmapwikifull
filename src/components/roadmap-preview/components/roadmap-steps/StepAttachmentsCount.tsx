import React from "react";
import { FILE_ICON, IMAGE_ICON, VIDEO_ICON } from "@public/icons/roadmapSteps";

const StepAttachmentsCount = ({
	attachmentsCountList,
}: {
	attachmentsCountList: { type: string; count: number }[];
}) => {
	if (!attachmentsCountList.length) return null;

	return (
		<div className="flex gap-3 [&>div]:flex-jc-c [&>div]:gap-1 [&>div>svg]:w-[12px] text-[12px] font-inter font-medium text-grey-secondary leading-[14.4px]">
			{attachmentsCountList.map(attachment => {
				switch (attachment.type) {
					case "FILE":
						return (
							<div key={attachment.type}>
								{FILE_ICON} {attachment.count}
							</div>
						);
						break;
					case "VIDEO":
						return (
							<div key={attachment.type}>
								{VIDEO_ICON} {attachment.count}
							</div>
						);
						break;
					default:
						return (
							<div key={attachment.type}>
								{IMAGE_ICON} {attachment.count}
							</div>
						);
				}
			})}
		</div>
	);
};

export default StepAttachmentsCount;
