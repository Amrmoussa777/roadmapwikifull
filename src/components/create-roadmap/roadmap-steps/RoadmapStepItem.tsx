import React, { useState } from "react";
import useToggle from "@/hooks/useToggle";
import useInput from "@/components/common/input/hooks/useInput";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import { ARROW_ICON, DRAG_ICON } from "@public/icons/roadmapSteps";
import MenuRoadmapStep from "@/components/create-roadmap/roadmap-steps/MenuRoadmapStep";
import RoadmapTags from "@/components/create-roadmap/roadmap-steps/RoadmapTags";
import { RoadmapStepType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import Attachments from "@/components/create-roadmap/roadmap-steps/Attachments";
import dynamic from "next/dynamic";
import StepVerification from "@/components/create-roadmap/roadmap-steps/StepVerification";
const Editor = dynamic(
	() => import("@/components/common/Editor/components/Editor"),
	{ ssr: false }
);
const RoadmapStepItem = ({
	step,
	activeId,
	handleActiveStep,
}: {
	step: RoadmapStepType;
	activeId: string;
	handleActiveStep: (id: string) => void;
}) => {
	const { id, description, title, tags } = step;
	const { value, changeValue } = useInput(title);
	const { currentState: titleNotDisabled, toggle: changeTitle } =
		useToggle(false);
	const [content, setContent] = useState<string>(description);

	return (
		<div
			className={`flex flex-col h-fit gap-2 rounded-[12px] p-4 border border-transparent transition-all duration-300 hover:border-primary-ultramarineBlue ${
				activeId === id
					? "bg-white !border-primary-ultramarineBlue"
					: "bg-[#F6F6F6]"
			}`}
		>
			<div className="flex-jb-c gap-2">
				<div className="w-full flex items-center">
					<button className="cursor-grab">{DRAG_ICON}</button>
					<input
						type="text"
						value={value}
						className={`w-full bg-transparent text-md sm:text-[18px] text-[#181818] border-2 border-transparent enabled:border-primary-ultramarineBlue/30 rounded-md pl-2 ${
							titleNotDisabled
								? "outline-3 outline-primary-ultramarineBlue/60"
								: ""
						}`}
						disabled={!titleNotDisabled}
						onChange={changeValue}
					/>
				</div>

				<div className="flex items-center gap-2">
					<MenuRoadmapStep stepId={id} />

					<button
						onClick={() => handleActiveStep(id)}
						className={`text-[#181818] ${
							activeId === id ? "rotate-0" : "rotate-180"
						} transition-all`}
					>
						{ARROW_ICON}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{activeId === id && (
					<motion.div
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.1 }}
					>
						<div className="flex-jb-c">
							<RoadmapTags stepId={id} defaultTags={tags} />
							{/* <CustomDatePicker stepId={id} /> */}
						</div>

						<Editor value={content} />

						<StepVerification stepId={id} />

						<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0]" />

						<Attachments stepId={id} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default RoadmapStepItem;
