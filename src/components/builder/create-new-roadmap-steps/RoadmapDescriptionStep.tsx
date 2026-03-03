import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React, { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import useInput from "@/components/common/input/hooks/useInput";
import { updateDraftRoadmap } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { HoverBorderGradient } from "@/components/ui/moving-border";
import { createRoadmap } from "@/components/builder/create-new-roadmap-steps/services/createRoadmap";
import { useRouter } from "next/navigation";
import RoadmapSelectIcon from "@/components/builder/create-new-roadmap-steps/RoadmapSelectIcon";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";

const RoadmapDescriptionStep = ({
	handleBackStep,
}: {
	handleBackStep: () => void;
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const { draftRoadmap } = useAppSelector(state => state.createRoadmap);
	const dispatch = useAppDispatch();
	const { value: description, changeValue: changeDescription } = useInput(
		draftRoadmap.description
	);

	const { push } = useRouter();

	const handleChangeDescription = () => {
		dispatch(updateDraftRoadmap({ ...draftRoadmap, description }));
	};

	useEffect(() => {
		handleChangeDescription();
	}, [description]);

	const handleCreateRoadmap = async () => {
		const newRoadmapData = {
			title: draftRoadmap.title,
			duration: "1 week",
			category: draftRoadmap.iconName,
			description,
		};

		setIsLoading(true);

		const newRoadmap = await createRoadmap(newRoadmapData);

		setIsLoading(false);

		const { id } = newRoadmap;

		if (id) {
			push(`/builder/${id}/steps`);
		}
	};

	const handleSkipCreateRoadmap = async () => {
		const newRoadmapData = {
			title: draftRoadmap.title,
			duration: "1 week",
		};

		setIsLoading(true);

		const newRoadmap = await createRoadmap(newRoadmapData);

		setIsLoading(false);

		const { id } = newRoadmap;

		if (id) {
			push(`/builder/${id}/steps`);
		}
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		handleCreateRoadmap();
	};

	return (
		<motion.form
			onSubmit={handleSubmit}
			className="max-w-[500px] mx-auto h-full flex flex-col justify-evenly"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 0.8,
			}}
		>
			<div>
				<button
					onClick={handleBackStep}
					type="button"
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

				<RoadmapSelectIcon />

				<textarea
					placeholder="Roadmap description*"
					onChange={changeDescription}
					value={description}
					autoFocus
					className="h-[200px] resize-none py-4 create-new-roadmap-input hidden-scrollbar"
				/>
			</div>

			<div className="flex items-center mt-8">
				<HoverBorderGradient
					containerClassName="rounded-[12px]"
					as="button"
					className="w-full md:w-[160px] h-[56px] rounded-[12px] flex-jc-c font-inter text-[18px] font-semibold text-start bg-primary-ultramarineBlue text-white overflow-hidden"
				>
					{isLoading ? (
						<ButtonDotsLoader customStyles="[&>div]:bg-white" />
					) : (
						<span>Create</span>
					)}
				</HoverBorderGradient>

				<button
					className="min-w-[88px] h-[56px] text-[#606060] font-inter semibold text-[18px]"
					type="button"
					onClick={handleSkipCreateRoadmap}
				>
					Skip
				</button>
			</div>
		</motion.form>
	);
};

export default RoadmapDescriptionStep;
