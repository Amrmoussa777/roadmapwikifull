import React, { useContext, useEffect, useRef } from "react";
import useInput from "@/components/common/input/hooks/useInput";
import { DURATION_ICON } from "../../../../public/icons/roadmapSteps";
import { CalculateHelper } from "@/helpers/calcs.helper";
import { RoadmapContext } from "@/context/RoadmapContext";

const CustomDatePicker = ({ stepId }: { stepId: string }) => {
	const { value: date, changeValue } = useInput("");
	const dateInputRef = useRef<HTMLInputElement>(null);
	const daysDiff = CalculateHelper.getDaysDifference(date);
	const { updateRoadmapStepsData, activeRoadmap } = useContext(RoadmapContext);
	const roadmapMainColor = activeRoadmap?.styles.mainColor;

	const handleButtonClick = () => {
		if (dateInputRef.current) {
			(
				dateInputRef.current as HTMLInputElement & { showPicker?: () => void }
			).showPicker?.();
		}
	};

	useEffect(() => {
		updateRoadmapStepsData(stepId, daysDiff, "daysDuration");
	}, [date]);

	return (
		<div>
			<input
				type="date"
				value={date}
				onChange={changeValue}
				ref={dateInputRef}
				className="hidden"
			/>
			<button
				onClick={handleButtonClick}
				style={{ color: roadmapMainColor }}
				className="flex-jc-c gap-1"
			>
				{DURATION_ICON}{" "}
				<span className="text-primary-dark">
					{daysDiff
						? `${daysDiff > 0 ? daysDiff - 1 : 0}-${
								daysDiff > 0 ? daysDiff : 0
						  } days`
						: "Duration"}
				</span>
			</button>
		</div>
	);
};

export default CustomDatePicker;
