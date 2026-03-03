import { useGenerateCheckboxStylesType } from "@/components/common/selection-inputs/types/index.types";

const useGenerateCheckboxStyles = ({
	checked,
	bgColor,
	customStyles = "",
}: useGenerateCheckboxStylesType) => {
	const styles = `checkbox ${checked ? "checked" : ""} ${
		checked ? bgColor : ""
	} transition duration-200 ${customStyles}`;

	return { styles };
};

export default useGenerateCheckboxStyles;
