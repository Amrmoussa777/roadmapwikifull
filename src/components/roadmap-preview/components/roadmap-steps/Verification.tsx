import React from "react";
import { CHECK_ATTACHMENT_ICON } from "../../../../../public/icons/roadmapPreview";
import { RoadmapStepVerificationType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

const Verification = ({
	verificationsList,
}: {
	verificationsList: RoadmapStepVerificationType[] | undefined;
}) => {
	return (
		<div className="my-4">
			<h3 className="font-inter text-[14px] font-medium text-[#606060]">
				Verification Process / Assignment
			</h3>

			{verificationsList?.map(item => (
				<div
					key={item.id}
					className="h-[60px] border border-[#E0E0E0] px-4 py-2 rounded-[8px] mt-3 flex-jb-c"
				>
					<div>
						<h3 className="text-[#92929D] font-normal text-[12px]">
							{item.title}
						</h3>
						<a
							href={item.link}
							target="_blank"
							className="text-[#506CF0] text-[14px]"
						>
							{item.link}
						</a>
					</div>

					{CHECK_ATTACHMENT_ICON}
				</div>
			))}
		</div>
	);
};

export default Verification;
