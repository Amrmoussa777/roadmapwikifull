"use client";

import React from "react";
import useGenerateCheckboxStyles from "@/components/common/selection-inputs/hooks/useGenerateCheckboxStyles";
import { CheckboxWithLabelType } from "@/components/common/selection-inputs/types/index.types";
import { CHECK_BOX_ICON } from "@public/icons/roadmaps";

const CheckboxWithLabel = ({
	label = {
		id: "",
		name: "",
	},
	customStyles = "",
	bgColor,
	checked,
	toggle,
}: CheckboxWithLabelType) => {
	const { styles } = useGenerateCheckboxStyles({
		customStyles,
		bgColor,
		checked,
	});

	return (
		<div className="flex items-center mt-[16px]">
			<button
				id={label.id}
				onClick={() => toggle && toggle(label.id)}
				className={styles}
			>
				{checked ? CHECK_BOX_ICON : null}
			</button>

			{
				<label
					htmlFor={label.id}
					className={`pl-2 cursor-pointer font-poppins text-[14px] ${
						checked ? "text-primary-ultramarineBlue" : "text-[#484848]"
					}`}
				>
					{label.name}
				</label>
			}
		</div>
	);
};

export default CheckboxWithLabel;
