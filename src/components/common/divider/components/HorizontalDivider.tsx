import { HorizontalDividerType } from "@/components/common/divider/types/index.types";
import React from "react";

const HorizontalDivider = ({
	height,
	bgColor,
	customStyles,
}: HorizontalDividerType) => {
	return <div className={`w-full ${height} ${bgColor} ${customStyles} my-2`} />;
};

export default HorizontalDivider;
