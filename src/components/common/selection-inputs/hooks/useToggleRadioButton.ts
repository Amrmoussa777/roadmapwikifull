import { CheckboxWithLabelType } from "@/components/common/selection-inputs/types/index.types";
import { useState } from "react";

const useToggleRadioButton = (
	checkboxWithLabelArray: CheckboxWithLabelType[]
) => {
	const [newData, setNewData] = useState(checkboxWithLabelArray);

	const toggle = (labelId: string) => {
		const updated = checkboxWithLabelArray.map(
			(item: CheckboxWithLabelType) => {
				if (item.label.id == labelId) {
					return {
						...item,
						checked: true,
					};
				} else {
					return {
						...item,
						checked: false,
					};
				}
			}
		);

		setNewData(updated);
	};

	return { toggle, newData };
};

export default useToggleRadioButton;
