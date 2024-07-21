import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import useInput from "@/components/common/input/hooks/useInput";
import RoadmapStepDurationSelectItem from "@/components/create-roadmap/roadmap-steps/RoadmapStepDurationSelectItem";
import { RoadmapStepDurationProps } from "@/components/create-roadmap/roadmap-steps/types/index.types";
import { useFetch } from "@/hooks/useFetch";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import useToggle from "@/hooks/useToggle";
import { updateStepDuration } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch } from "@/redux/store";
import { DURATION_ICON } from "@public/icons/roadmapSteps";
import { AnimatePresence, motion } from "framer-motion";
import React, { FormEvent, useState } from "react";

const RoadmapStepDuration = ({
	stepId,
	description,
	title,
	defaultDuration,
}: RoadmapStepDurationProps) => {
	const durationSplit = defaultDuration.split(" ");

	const defaultDurationNumber = durationSplit[0];
	const defaultDurationType = durationSplit[1];

	const { value: duration, changeValue: changeDuration } = useInput(
		defaultDurationNumber
	);
	const [durationType, setDurationType] = useState(defaultDurationType);
	const { currentState: isDurationOpen, toggle: toggleDuration } =
		useToggle(false);
	const ref = useOnClickOutside(toggleDuration);
	const dispatch = useAppDispatch();
	const { loading, fetchData } = useFetch();

	const handleChangeDurationType = (type: string) => {
		setDurationType(type);
	};

	const handleSubmitDuration = async (e: FormEvent) => {
		e.preventDefault();

		const updatedRoadmapStep = {
			title,
			description,
			duration: `${duration} ${durationType}`,
		};

		await fetchData(
			"PATCH",
			`roadmsap/step/${stepId}`,
			updatedRoadmapStep
		).then(() =>
			dispatch(
				updateStepDuration({
					stepId,
					newDuration: `${duration} ${durationType}`,
				})
			)
		);

		toggleDuration();
	};

	return (
		<div className="relative">
			<button
				onClick={toggleDuration}
				type="button"
				className="flex-jc-c gap-1 text-[#383838]"
			>
				<span className="text-primary-ultramarineBlue">{DURATION_ICON}</span>
				<p className="text-[14px] font-normal leading-[16px]">
					{`${duration} ${durationType}` || "Duration"}
				</p>
			</button>

			<AnimatePresence>
				{isDurationOpen ? (
					<motion.form
						onSubmit={handleSubmitDuration}
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.1 }}
						ref={ref}
						className="absolute w-[300px] right-0 lg:right-[-240px] flex flex-col p-4 bg-white shadow-clg border border-primary-ultramarineBlue/20 rounded-xl z-10"
					>
						<div className="flex-jb-c gap-2 [&>button]:rounded-md [&>button]:border-primary-ultramarineBlue/20 [&>button]:border [&>button]:w-full">
							<RoadmapStepDurationSelectItem
								type="day"
								handleChangeDurationType={handleChangeDurationType}
								activeDurationType={durationType}
							/>
							<RoadmapStepDurationSelectItem
								type="week"
								handleChangeDurationType={handleChangeDurationType}
								activeDurationType={durationType}
							/>
							<RoadmapStepDurationSelectItem
								type="month"
								handleChangeDurationType={handleChangeDurationType}
								activeDurationType={durationType}
							/>
						</div>

						<input
							type="number"
							value={duration}
							onChange={changeDuration}
							className="w-full h-[60px] text-xl mt-4 px-4 bg-transparent text-[#181818] font-medium border-2 hover:border-primary-ultramarineBlue/50 focus:border-primary-ultramarineBlue focus:outline-none rounded-md pl-2 transition-all"
						/>

						<HorizontalDivider
							height="h-[1px]"
							bgColor="bg-[#E0E0E0]"
							customStyles="my-4"
						/>

						<div className="flex-jb-c gap-2 [&>button]:w-full">
							<button
								disabled={!duration.length}
								className="text-[#181818] font-medium hover:text-primary-ultramarineBlue transition duration-200 disabled:hover:text-[#181818]"
							>
								{loading ? "Loading..." : "OK"}
							</button>
							<button
								onClick={toggleDuration}
								type="button"
								className="font-medium hover:text-primary-ultramarineBlue transition duration-200"
							>
								CANCEL
							</button>
						</div>
					</motion.form>
				) : null}
			</AnimatePresence>
		</div>
	);
};

export default RoadmapStepDuration;
