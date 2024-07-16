import useToggle from "@/hooks/useToggle";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";
import { motion } from "framer-motion";

const RoadmapDescriptionStep = ({
	handleNextStep,
	handleBackStep,
}: {
	handleNextStep: () => void;
	handleBackStep: () => void;
}) => {
	const { currentState: isOptionsHidden, toggle: hideOptions } =
		useToggle(false);

	return (
		<motion.div
			className="max-w-[500px] mx-auto h-full flex flex-col justify-evenly"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.8,
				ease: [0, 0.71, 0.2, 1.01],
			}}
		>
			<div>
				<button
					onClick={handleBackStep}
					className="flex-jc-c text-[#79828B] font-inter text-[18px] font-normal"
				>
					<span className="[&>svg]:-rotate-90 [&>svg]:w-[24px] text-[#ADAEB5]">
						{ARROW_ICON}
					</span>{" "}
					Back
				</button>

				<label className="block text-[#171725] text-[36px] font-semibold font-poppins mb-6">
					Roadmap icon and description
				</label>

				<div className="w-full relative mb-8">
					<button
						onClick={hideOptions}
						id="roadmapDuration"
						type="button"
						className="flex-jb-c roadmap-info-select text-[16px] sm:text-[18px]"
					>
						<span
							className={`!text-[#ADAEB5] [&>svg]:transition-all ${
								isOptionsHidden ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
							}`}
						>
							{ARROW_ICON}
						</span>
					</button>

					{isOptionsHidden ? (
						<div className="absolute w-full top-[55px] bg-white mt-1 border border-[#E0E0E0] rounded-xl flex flex-col gap-2 [&>button]:font-normal [&>button]:text-[18px] [&>:first-child]:rounded-t-xl [&>:last-child]:rounded-b-xl [&>button]:p-2 [&>button:hover]:bg-[#E0E0E0]/20">
							<button className="w-full h-[55px] min-h-[55px]">icon</button>
							<button className="w-full h-[55px] min-h-[55px]">icon</button>
						</div>
					) : null}
				</div>

				<textarea
					placeholder="description"
					className="h-[200px] resize-none py-4 create-new-roadmap-input hidden-scrollbar"
				/>
			</div>

			<div className="flex items-center">
				<button
					onClick={handleNextStep}
					className="w-[160px] h-[56px] rounded-[12px] flex-jc-c font-inter text-[18px] font-semibold text-start bg-primary-ultramarineBlue text-white"
				>
					Next
				</button>

				<button
					className="w-[88px] h-[56px] text-[#606060] font-inter semibold text-[18px]"
					onClick={handleNextStep}
				>
					Skip
				</button>
			</div>
		</motion.div>
	);
};

export default RoadmapDescriptionStep;
