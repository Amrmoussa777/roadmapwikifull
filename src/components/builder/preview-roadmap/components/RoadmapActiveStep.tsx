import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Attachments from "@/components/builder/roadmap-steps/Attachments";
import StepVerification from "@/components/builder/roadmap-steps/StepVerification";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import RoadmapTags from "@/components/builder/roadmap-steps/RoadmapTags";
import RoadmapStepDuration from "@/components/builder/roadmap-steps/RoadmapStepDuration";
import RoadmapStepDescription from "@/components/builder/roadmap-steps/RoadmapStepDescription";
import { RoadmapStepType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppSelector } from "@/redux/store";

const RoadmapActiveStep = ({
	step,
	value,
}: {
	step: RoadmapStepType;
	value: string;
}) => {
	const { id, description, title, tags, duration, verifications, attachments } =
		step;
	const { activeRoadmapStepId } = useAppSelector(state => state.createRoadmap);

	return (
		<AnimatePresence>
			{activeRoadmapStepId === id && (
				<motion.div
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -10, opacity: 0 }}
					transition={{ duration: 0.1 }}
				>
					<div className="flex-jb-c flex-wrap gap-2">
						<RoadmapTags stepId={id} tags={tags} />

						<RoadmapStepDuration
							stepId={id}
							description={description}
							title={title}
							defaultDuration={duration}
						/>
					</div>

					<RoadmapStepDescription
						defaultDescription={description}
						stepId={id}
						title={value}
						duration={duration}
					/>

					<StepVerification stepId={id} verifications={verifications} />

					<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0]" />

					<Attachments stepId={id} attachments={attachments} />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default RoadmapActiveStep;
