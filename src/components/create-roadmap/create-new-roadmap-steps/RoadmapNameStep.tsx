import React from "react";
import { motion } from "framer-motion";

const RoadmapNameStep = ({
	handleNextStep,
}: {
	handleNextStep: () => void;
}) => {
	return (
		<motion.div
			className="max-w-[500px] mx-auto h-full"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.8,
				ease: [0, 0.71, 0.2, 1.01],
			}}
		>
			<div>
				<label className="block text-[#171725] text-[36px] font-semibold font-poppins mb-6">
					Enter Roadmap Name
				</label>

				<input
					type="text"
					placeholder="Roadmap name*"
					className="create-new-roadmap-input"
				/>
			</div>

			<button
				onClick={handleNextStep}
				className="w-full md:w-[160px] h-[56px] rounded-[12px] flex-jc-c mt-36 font-inter text-[18px] font-semibold text-start bg-primary-ultramarineBlue text-white"
			>
				Next
			</button>
		</motion.div>
	);
};

export default RoadmapNameStep;
