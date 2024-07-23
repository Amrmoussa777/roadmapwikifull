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

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		handleNextStep();
	};

	return (
		<motion.form
			onSubmit={handleSubmit}
			className="max-w-[500px] mx-auto h-full flex flex-col justify-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 0.8,
			}}
		>
			<label className="block text-[#171725] text-[36px] font-semibold font-poppins mb-6">
				Enter Roadmap Name
			</label>

			<input
				type="text"
				placeholder="Roadmap name*"
				onChange={changeTitle}
				value={title}
				required={true}
				autoFocus
				className="create-new-roadmap-input"
			/>

			<button
				type="submit"
				className="w-full md:w-[160px] h-[56px] rounded-[12px] mt-8 flex-jc-c font-inter text-[18px] font-semibold text-start bg-primary-ultramarineBlue text-white"
			>
				Next
			</button>
		</motion.form>
	);
};

export default RoadmapNameStep;
