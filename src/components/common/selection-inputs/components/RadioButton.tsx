"use client";

import React from "react";
import useToggleRadioButton from "@/components/common/selection-inputs/hooks/useToggleRadioButton";
import CheckboxWithLabel from "@/components/common/selection-inputs/components/CheckboxWithLabel";
import { RadioButtonType } from "@/components/common/selection-inputs/types/index.types";

const RadioButton = ({
	checkboxWithLabelList,
	customStyles = "",
}: RadioButtonType) => {
	const { newData, toggle } = useToggleRadioButton(checkboxWithLabelList);

	return (
		<div className={`${customStyles}`}>
			{newData.map(item => (
				<CheckboxWithLabel key={item.label.id} {...item} toggle={toggle} />
			))}
		</div>
	);
};

export default RadioButton;
