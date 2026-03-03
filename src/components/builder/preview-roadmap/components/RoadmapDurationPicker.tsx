import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import useInput from "@/components/common/input/hooks/useInput";
import RoadmapStepDurationSelectItem from "@/components/builder/roadmap-steps/RoadmapStepDurationSelectItem";
import { useFetch } from "@/hooks/useFetch";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import useToggle from "@/hooks/useToggle";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch } from "@/redux/store";
import { DURATION_ICON } from "@public/icons/roadmapSteps";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";

const RoadmapDurationPicker = ({
	defaultDuration,
}: {
	defaultDuration: string;
}) => {
	const durationSplit = defaultDuration.split(" ");
	const { roadmapId } = useParams();

	const defaultDurationNumber = durationSplit[0];
	const defaultDurationType = durationSplit[1];

	const { value: duration, changeValue: changeDuration } = useInput(
		defaultDurationNumber
	);
	const [durationType, setDurationType] = useState(defaultDurationType);
	const { currentState: isDurationOpen, toggle: toggleDuration } =
		useToggle(false);

	const dispatch = useAppDispatch();
	const { loading, fetchData } = useFetch();

	const handleChangeDurationType = (type: string) => {
		setDurationType(type);
	};

	const handleSubmitDuration = async (e: FormEvent) => {
		e.preventDefault();

		const updatedRoadmapStep: Record<string, string> = {};

		if (duration && durationType) {
			updatedRoadmapStep.duration = `${duration} ${durationType}`;
		}

		await fetchData("PATCH", `roadmap/${roadmapId}`, updatedRoadmapStep);
		dispatch(updateRoadmapData(updatedRoadmapStep));

		toggleDuration();
	};

	const handleCancelDuration = () => {
		changeDuration(defaultDurationNumber);
		setDurationType(defaultDurationType);
		toggleDuration();
	};

	const buttonRef = useRef<HTMLButtonElement>(null);
	const formRef = useRef<HTMLFormElement>(null);

	useOnClickOutside(handleCancelDuration, [buttonRef, formRef]);

	return (
		<div className="relative col-span-2">
			<div>
				<label className="text-[#666666]">Roadmap Duration*</label>
				<button
					onClick={toggleDuration}
					id="roadmapDuration"
					type="button"
					ref={buttonRef}
					className="flex-jb-c roadmap-info-select text-[16px] sm:text-[18px] capitalize"
				>
					{defaultDuration ? `${duration} ${durationType}` : "Duration"}
					<span
						className={`!text-primary-ultramarineBlue [&>svg]:transition-all`}
					>
						{DURATION_ICON}
					</span>
				</button>
			</div>

			<AnimatePresence>
				{isDurationOpen ? (
					<motion.form
						onSubmit={handleSubmitDuration}
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.1 }}
						ref={formRef}
						className="absolute w-[300px] sm:w-full left-0 top-[90px] flex flex-col p-4 bg-white shadow-clg border border-primary-ultramarineBlue/20 rounded-xl z-10"
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

						<div className="flex-jb-c gap-2 [&>button]:w-full [&>button]:h-[30px]">
							<button
								disabled={!duration.length}
								type="submit"
								className="relative overflow-hidden text-[#181818] font-medium hover:text-primary-ultramarineBlue transition duration-200 disabled:hover:text-[#181818]"
							>
								{loading ? (
									<ButtonDotsLoader customStyles="[&>div]:bg-primary-ultramarineBlue" />
								) : (
									"OK"
								)}
							</button>

							<button
								onClick={handleCancelDuration}
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

export default RoadmapDurationPicker;
