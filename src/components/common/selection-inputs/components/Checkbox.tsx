"use client";

import React from "react";
import useGenerateCheckboxStyles from "@/components/common/selection-inputs/hooks/useGenerateCheckboxStyles";
import { CheckboxType } from "@/components/common/selection-inputs/types/index.types";
import useToggle from "@/hooks/useToggle";
import { CHECK_BOX_ICON } from "@public/icons/roadmaps";

const Checkbox = ({
	customStyles = "",
	bgColor,
	checked,
	toggle,
}: CheckboxType) => {
	const { styles } = useGenerateCheckboxStyles({
		checked,
		customStyles,
		bgColor,
	});

	return (
		<button onClick={toggle} className={styles}>
			{checked ? CHECK_BOX_ICON : null}
		</button>
	);
};

export default Checkbox;
