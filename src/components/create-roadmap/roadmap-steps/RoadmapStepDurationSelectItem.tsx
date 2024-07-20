import React from "react";

const RoadmapStepDurationSelectItem = ({
	type,
	handleChangeDurationType,
	activeDurationType,
}: {
	type: string;
	handleChangeDurationType: (type: string) => void;
	activeDurationType: string;
}) => {
	return (
		<button
			type="button"
			className={`uppercase hover:text-white hover:bg-primary-ultramarineBlue transition duration-200 ${
				activeDurationType === type
					? "text-white bg-primary-ultramarineBlue"
					: ""
			}`}
			onClick={() => handleChangeDurationType(type)}
		>
			{type}
		</button>
	);
};

export default RoadmapStepDurationSelectItem;
