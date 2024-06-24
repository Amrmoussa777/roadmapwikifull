import { VerticalDividerType } from "@/components/common/divider/types/index.types";
import React from "react";

const VerticalDivider = ({
	width,
	bgColor,
	customStyles,
}: VerticalDividerType) => {
	return (
		<div className={`min-h-full ${width} ${bgColor} ${customStyles} mx-4`} />
	);
};

export default VerticalDivider;
