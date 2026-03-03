import React from "react";

const RoadmapStats = ({
	text,
	customStyles = "",
}: {
	text: string;
	customStyles?: string;
}) => {
	return (
		<h3
			className={`w-full text-center my-8 text-[16px] font-normal text-[#898989] ${customStyles}`}
		>
			{text}
		</h3>
	);
};

export default RoadmapStats;
