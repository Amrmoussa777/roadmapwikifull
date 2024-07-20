import useToggle from "@/hooks/useToggle";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import useInput from "@/components/common/input/hooks/useInput";
import { updateDraftRoadmap } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { HoverBorderGradient } from "@/components/ui/moving-border";
import { createRoadmap } from "@/components/create-roadmap/create-new-roadmap-steps/services/createRoadmap";
import { useRouter } from "next/navigation";

const RoadmapDescriptionStep = ({
	handleNextStep,
	handleBackStep,
}: {
	handleNextStep: () => void;
	handleBackStep: () => void;
}) => {
	const { currentState: isOptionsHidden, toggle: hideOptions } =
		useToggle(false);
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
		const newRoadmapData = { ...draftRoadmap, duration: "1 week" };
		setIsLoading(true);
		const newRoadmap = await createRoadmap(newRoadmapData);
		setIsLoading(false);

		console.log(newRoadmap);
		const { id } = newRoadmap;

		if (id) {
			push(`/create-roadmap/${id}/steps`);
		}
	};

	return (
		<motion.div
			className="max-w-[500px] mx-auto h-full flex flex-col justify-evenly"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 1,
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
					onChange={changeDescription}
					value={description}
					required
					className="h-[200px] resize-none py-4 create-new-roadmap-input hidden-scrollbar"
				/>
			</div>

			<div className="flex items-center mt-8">
				<HoverBorderGradient
					onClick={handleCreateRoadmap}
					containerClassName="rounded-[12px]"
					as="button"
					className="w-full md:w-[160px] h-[56px] rounded-[12px] flex-jc-c font-inter text-[18px] font-semibold text-start bg-primary-ultramarineBlue text-white"
				>
					<span>{isLoading ? "Loading..." : "Create"}</span>
				</HoverBorderGradient>
				<button
					className="min-w-[88px] h-[56px] text-[#606060] font-inter semibold text-[18px]"
					onClick={handleNextStep}
				>
					Skip
				</button>
			</div>
		</motion.div>
	);
};

export default RoadmapDescriptionStep;
