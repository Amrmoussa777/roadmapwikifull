import React, { FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updateDraftRoadmap } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import useInput from "@/components/common/input/hooks/useInput";

const RoadmapNameStep = ({
	handleNextStep,
}: {
	handleNextStep: () => void;
}) => {
	const { draftRoadmap } = useAppSelector(state => state.createRoadmap);
	const dispatch = useAppDispatch();

	const { value: title, changeValue: changeTitle } = useInput(
		draftRoadmap.title
	);

	const handleChangeTitle = () => {
		dispatch(updateDraftRoadmap({ ...draftRoadmap, title }));
	};

	useEffect(() => {
		handleChangeTitle();
	}, [title]);

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
					onChange={changeTitle}
					value={title}
					required
					className="create-new-roadmap-input"
				/>
			</div>

			<button
				type="submit"
				onClick={handleNextStep}
				className="w-full md:w-[160px] h-[56px] rounded-[12px] flex-jc-c mt-36 font-inter text-[18px] font-semibold text-start bg-primary-ultramarineBlue text-white"
			>
				Next
			</button>
		</motion.div>
	);
};

export default RoadmapNameStep;
