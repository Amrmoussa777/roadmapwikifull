import React from "react";
import useToggle from "@/hooks/useToggle";
import { ADD_STEP_ICON } from "@public/icons/roadmapSteps";
import StepVerificationSelect from "@/components/create-roadmap/roadmap-steps/StepVerificationSelect";
import { AnimatePresence, motion } from "framer-motion";

const StepVerification = ({ stepId }: { stepId: string }) => {
	const { currentState: processListOpen, toggle: toggleProcessList } =
		useToggle(false);
	const actions = [{ id: "redirectLink", name: "Redirect Link" }];

	return (
		<div className="my-4">
			<div className="flex-jb-c mt-2">
				<p className="text-[#606060]">Verification Process / Assignment</p>
				<button
					className={`w-[32px] h-[32] flex-jc-c bg-[#F6F6F6] rounded-md text-[#92929D] ${
						processListOpen ? "[&>svg]:rotate-45" : "[&>svg]:rotate-0"
					} [&>svg]:transition-all`}
					onClick={toggleProcessList}
				>
					{ADD_STEP_ICON}
				</button>
			</div>

			<AnimatePresence>
				{processListOpen ? (
					<motion.div
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.1 }}
						className="flex items-center gap-2 lg:gap-4"
					>
						<StepVerificationSelect
							label={{ id: "action", name: "Pick action" }}
							activeOption={<span>{actions[0].name}</span>}
						>
							{actions.map(action => (
								<button type="button" key={action.id}>
									{action.name}
								</button>
							))}
						</StepVerificationSelect>

						<div className="w-2/4">
							<label className="text-[#92929D] font-inter text-[14px]">
								Enter link address
							</label>
							<input
								className="h-[55px] block roadmap-info-select"
								placeholder="https://www.w3.org/Provi.."
							/>
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
};

export default StepVerification;
