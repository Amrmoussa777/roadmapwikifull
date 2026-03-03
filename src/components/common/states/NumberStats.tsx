import React from "react";

const NumberStats = ({
	text,
	customStyles = "",
}: {
	text: string;
	customStyles?: string;
}) => {
	return (
		<h3
			className={`w-full text-center text-[16px] font-normal text-[#898989] ${customStyles}`}
		>
			{text}
		</h3>
	);
};

export default NumberStats;
