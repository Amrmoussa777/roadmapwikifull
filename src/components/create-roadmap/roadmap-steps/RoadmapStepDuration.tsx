import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import useInput from "@/components/common/input/hooks/useInput";
import RoadmapStepDurationSelectItem from "@/components/create-roadmap/roadmap-steps/RoadmapStepDurationSelectItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import useToggle from "@/hooks/useToggle";
import { DURATION_ICON } from "@public/icons/roadmapSteps";
import React, { use, useState } from "react";

const RoadmapStepDuration = () => {
	const { value: duration, changeValue: changeDuration } = useInput("");
	const [durationType, setDurationType] = useState("day");
	const { currentState: isDurationOpen, toggle: toggleDuration } =
		useToggle(false);
	const ref = useOnClickOutside(toggleDuration);

	const handleChangeDurationType = (type: string) => {
		setDurationType(type);
	};

	return (
		<div className="relative">
			<button
				onClick={toggleDuration}
				className="flex-jc-c gap-1 text-[#383838]"
			>
				<span className="text-primary-ultramarineBlue">{DURATION_ICON}</span>
				<p className="text-[14px] font-normal leading-[16px]">Duration</p>
			</button>

			{isDurationOpen ? (
				<div
					ref={ref}
					className="absolute w-[300px] flex flex-col p-4 bg-white shadow-clg border border-primary-ultramarineBlue/20 rounded-xl z-10"
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
						className="w-full h-[60px] text-xl mt-4 px-4 bg-transparent text-[#181818] border-2 hover:border-primary-ultramarineBlue/50 focus:border-primary-ultramarineBlue focus:outline-none rounded-md pl-2 transition-all"
					/>

					<HorizontalDivider
						height="h-[1px]"
						bgColor="bg-[#E0E0E0]"
						customStyles="my-4"
					/>

					<div className="flex-jb-c gap-2 [&>button]:w-full">
						<button
							disabled={!duration.length}
							className="text-[#181818] hover:text-primary-ultramarineBlue transition duration-200 disabled:hover:text-[#181818]"
						>
							OK
						</button>
						<button
							onClick={toggleDuration}
							className="hover:text-primary-ultramarineBlue transition duration-200"
						>
							CANCEL
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default RoadmapStepDuration;
