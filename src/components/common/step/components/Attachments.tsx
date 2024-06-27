import { RoadmapStepAttachmentType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import Image from "next/image";
import React from "react";

const Attachments = ({
	attachments,
}: {
	attachments: RoadmapStepAttachmentType[] | undefined;
}) => {
	return (
		<div className="flex flex-wrap gap-3 py-2">
			{attachments?.map(attachment => (
				<div key={attachment.id} className="w-[72px] h-[72px]">
					<Image
						width={100}
						height={100}
						src={attachment.url}
						alt=""
						className="w-full h-full object-cover rounded-md border border-grey-icon"
					/>
				</div>
			))}
		</div>
	);
};

export default Attachments;
